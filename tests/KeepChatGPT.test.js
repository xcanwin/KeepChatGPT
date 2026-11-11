const fs = require('fs');
const path = require('path');

// 读取脚本源码，去掉 ==UserScript== 头部后执行
const scriptPath = path.resolve(__dirname, '../KeepChatGPT.user.js');
const scriptSource = fs.readFileSync(scriptPath, 'utf8');

// 提取 UserScript 头部之后的代码
const codeStart = scriptSource.indexOf('// ==/UserScript==');
const executableCode = scriptSource.slice(codeStart + '// ==/UserScript=='.length);

// 在 IIFE 执行前，向 global 注入探针，让内部函数可以被测试
// 脚本内部 var global = {} 会被挂到这里
let scriptGlobals = {};
global.__kcg_test_probe__ = scriptGlobals;

// 执行脚本（会触发 IIFE）
// 用 try/catch 捕获 DOM 依赖导致的错误，不影响单元测试
try {
  // eslint-disable-next-line no-new-func
  new Function('__kcg_test_probe__', executableCode)(scriptGlobals);
} catch (e) {
  // IIFE 中依赖 DOM/网络的部分会抛错，忽略，只测纯函数
}

const isTrackingRequest = scriptGlobals.__test__?.isTrackingRequest;
const extractConversationPreview = scriptGlobals.__test__?.extractConversationPreview;
const buildConversationRecordFromPayload = scriptGlobals.__test__?.buildConversationRecordFromPayload;
const shouldDeleteEverChangingRecord = scriptGlobals.__test__?.shouldDeleteEverChangingRecord;
const parseJsonSafely = scriptGlobals.__test__?.parseJsonSafely;
const sanitizeDataSecText = scriptGlobals.__test__?.sanitizeDataSecText;
const extractConversationIdFromUrl = scriptGlobals.__test__?.extractConversationIdFromUrl;
const isConversationListUrl = scriptGlobals.__test__?.isConversationListUrl;
const isConversationDetailUrl = scriptGlobals.__test__?.isConversationDetailUrl;
const isConversationSendUrl = scriptGlobals.__test__?.isConversationSendUrl;
const patchConversationSendBody = scriptGlobals.__test__?.patchConversationSendBody;
const selectors = scriptGlobals.__test__?.selectors;

// ─── 正则测试 ─────────────────────────────────────────────

describe('trackingBlockRegex', () => {
  test('测试辅助函数已暴露', () => {
    expect(typeof isTrackingRequest).toBe('function');
  });

  test('兼容传入 URL 对象（fetch(new URL(...)) 场景）', () => {
    expect(isTrackingRequest(new URL('https://ab.chatgpt.com/v1/initialize?k=1'))).toBe(true);
    expect(isTrackingRequest(new URL('https://chatgpt.com/ces/statsc/flush'))).toBe(true);
    expect(isTrackingRequest(new URL('https://chatgpt.com/backend-api/conversation'))).toBe(false);
  });

  test('拦截 sentry.io 请求', () => {
    expect(isTrackingRequest('https://browser-intake-datadoghq.com/api/v2/rum')).toBe(true);
    expect(isTrackingRequest('https://sentry.io/api/1234/')).toBe(true);
  });

  test('拦截 intercom 请求', () => {
    expect(isTrackingRequest('https://api.intercom.io/messenger/')).toBe(true);
    expect(isTrackingRequest('https://widget.intercomcdn.com/foo.js')).toBe(true);
  });

  test('拦截 statsig 请求', () => {
    expect(isTrackingRequest('https://statsigapi.net/v1/initialize')).toBe(true);
    expect(isTrackingRequest('https://statsigapi.net/rgstr')).toBe(true);
  });

  test('拦截 GA 与 CES 埋点请求', () => {
    expect(isTrackingRequest('https://www.google-analytics.com/g/collect?v=2')).toBe(true);
    expect(isTrackingRequest('https://chatgpt.com/ces/v1/t')).toBe(true);
    expect(isTrackingRequest('https://chatgpt.com/ces/v1/p')).toBe(true);
    expect(isTrackingRequest('/ces/v1/telemetry/intake?ddforward=1')).toBe(true);
    expect(isTrackingRequest('/ces/statsc/flush')).toBe(true);
    expect(isTrackingRequest('/backend-api/beacons/home?conversation_id=123')).toBe(true);
    expect(isTrackingRequest('https://ab.chatgpt.com/v1/initialize?k=client-x&st=javascript-client-react')).toBe(true);
    expect(isTrackingRequest('https://chatgpt.com/ces/v1/rgstr?k=client-x&gz=1')).toBe(true);
  });

  test('不拦截正常请求', () => {
    expect(isTrackingRequest('https://chat.openai.com/api/auth/session')).toBe(false);
    expect(isTrackingRequest('https://chatgpt.com/backend-api/conversation')).toBe(false);
    expect(isTrackingRequest('https://chatgpt.com/backend-api/sentinel/heartbeat')).toBe(false);
    expect(isTrackingRequest('https://cdn.jsdelivr.net/foo.js')).toBe(false);
  });
});

describe('everChanging helpers', () => {
  test('提取会话预览时兼容富结构 content', () => {
    expect(typeof extractConversationPreview).toBe('function');
    const preview = extractConversationPreview({
      content: {
        parts: [
          { text: '第一段' },
          '第二段',
          { content: { parts: ['第三段'] } },
        ],
      },
    });
    expect(preview).toBe('第一段 第二段 第三段');
  });

  test('会话详情缺少 conversation_id 时使用 URL 兜底构建记录', () => {
    expect(typeof buildConversationRecordFromPayload).toBe('function');
    const record = buildConversationRecordFromPayload({
      title: '医生能力评估方法',
      update_time: 1741500000,
      current_node: 'node-1',
      mapping: {
        'node-1': {
          message: {
            create_time: 1741500000,
            content: { parts: ['最后一条回复'] },
            metadata: { model_slug: 'gpt-4o' },
          },
        },
      },
    }, '69be62a8-6788-8399-a133-c63bd049f1dc');
    expect(record).toMatchObject({
      id: '69be62a8-6788-8399-a133-c63bd049f1dc',
      title: '医生能力评估方法',
      last: '最后一条回复',
      model: 'gpt-4o',
    });
    expect(record.update_time instanceof Date).toBe(true);
  });

  test('会话详情改为 messages 数组时，取 current_node 对应消息构建记录', () => {
    const record = buildConversationRecordFromPayload({
      conversation_id: '11111111-2222-3333-4444-555555555555',
      title: '示例会话标题',
      update_time: 1794345824.223914,
      current_node: 'm-4',
      messages: [
        {
          id: 'm-1',
          author: { role: 'system' },
          create_time: 1794344026,
          content: { parts: [''] },
          metadata: { is_visually_hidden_from_conversation: true },
        },
        {
          id: 'm-2',
          author: { role: 'user' },
          create_time: 1794344027,
          content: { parts: ['你是哪个版本的大模型'] },
          metadata: {},
        },
        {
          id: 'm-4',
          author: { role: 'assistant' },
          create_time: 1794344028,
          content: { parts: ['我是 **GPT-6**'] },
          metadata: { model_slug: 'gpt-6', default_model_slug: 'auto' },
        },
      ],
    });
    expect(record).toMatchObject({
      id: '11111111-2222-3333-4444-555555555555',
      title: '示例会话标题',
      last: '我是 **GPT-6**',
      model: 'gpt-6',
    });
  });

  test('messages 数组缺少 current_node 时，回退到最后一条可见消息', () => {
    const record = buildConversationRecordFromPayload({
      conversation_id: '11111111-2222-3333-4444-555555555555',
      title: 't',
      update_time: 1794345824,
      messages: [
        { id: 'a', author: { role: 'assistant' }, content: { parts: ['旧回复'] }, metadata: {} },
        { id: 'b', author: { role: 'system' }, content: { parts: [''] }, metadata: { is_visually_hidden_from_conversation: true } },
      ],
    });
    expect(record.last).toBe('旧回复');
  });

  test('归档或隐藏时删除 everChanging 缓存', () => {
    expect(typeof shouldDeleteEverChangingRecord).toBe('function');
    expect(shouldDeleteEverChangingRecord({ is_visible: false })).toBe(true);
    expect(shouldDeleteEverChangingRecord({ is_archived: true })).toBe(true);
    expect(shouldDeleteEverChangingRecord({ is_hidden: true })).toBe(true);
    expect(shouldDeleteEverChangingRecord({ is_visible: true })).toBe(false);
  });

  test('解析异常响应体时返回兜底对象', () => {
    expect(typeof parseJsonSafely).toBe('function');
    expect(parseJsonSafely('{"items":[{"id":"ok"}]}', { items: [] })).toEqual({
      items: [{ id: 'ok' }],
    });
    expect(parseJsonSafely('<html>not json</html>', { items: [] })).toEqual({
      items: [],
    });
  });
});

// ─── 接口 URL 识别测试 ─────────────────────────────────────

describe('conversation API URL helpers', () => {
  const id = '11111111-2222-3333-4444-555555555555';

  test('提取会话 ID 兼容 conversation 与 conversations 两种详情路径', () => {
    expect(typeof extractConversationIdFromUrl).toBe('function');
    expect(extractConversationIdFromUrl(`https://chatgpt.com/backend-api/conversation/${id}`)).toBe(id);
    expect(extractConversationIdFromUrl(`/backend-api/conversations/${id}?num_turns=10&include_has_versions=true`)).toBe(id);
    expect(extractConversationIdFromUrl('/backend-api/conversations?offset=0&limit=20')).toBe('');
    expect(extractConversationIdFromUrl('/backend-api/f/conversation')).toBe('');
    expect(extractConversationIdFromUrl(`/backend-api/conversation/id/${id}`)).toBe(id);
  });

  test('识别会话列表、会话详情与发送请求', () => {
    expect(typeof isConversationListUrl).toBe('function');
    expect(isConversationListUrl('/backend-api/conversations?order=updated&limit=20&offset=0')).toBe(true);
    expect(isConversationListUrl(`/backend-api/conversations/${id}?num_turns=10`)).toBe(false);

    expect(typeof isConversationDetailUrl).toBe('function');
    expect(isConversationDetailUrl(`/backend-api/conversation/${id}`)).toBe(true);
    expect(isConversationDetailUrl(`/backend-api/conversations/${id}?num_turns=10&include_has_versions=true`)).toBe(true);
    expect(isConversationDetailUrl('/backend-api/conversations?offset=0')).toBe(false);
    expect(isConversationDetailUrl(`/backend-api/conversation/${id}/stream_status`)).toBe(false);
    expect(isConversationDetailUrl(`/backend-api/conversation/id/${id}`)).toBe(true);

    expect(typeof isConversationSendUrl).toBe('function');
    expect(isConversationSendUrl('/backend-api/conversation')).toBe(true);
    expect(isConversationSendUrl('https://chatgpt.com/backend-api/f/conversation')).toBe(true);
    expect(isConversationSendUrl('/backend-api/f/conversation/prepare')).toBe(false);
    expect(isConversationSendUrl('/backend-api/conversations?offset=0')).toBe(false);
  });

  test('取消审计仅在请求体已有 supports_modapi 字段时改写', () => {
    expect(typeof patchConversationSendBody).toBe('function');
    expect(JSON.parse(patchConversationSendBody('{"action":"next","supports_modapi":true}'))).toEqual({
      action: 'next',
      supports_modapi: false,
    });
    const untouched = '{"action":"next","model":"auto"}';
    expect(patchConversationSendBody(untouched)).toBe(untouched);
    expect(patchConversationSendBody('not json')).toBe('not json');
  });
});

// ─── 页面选择器夹具测试（结构取自 chatgpt.com 新版前端）──────────

describe('页面选择器', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="app-shell-sidebar">
        <nav data-app-navigation-rail="true" class="group/sidebar-rail pointer-events-none relative flex h-full w-13"></nav>
        <div data-sidebar-navigation-root="true">
          <div class="contents">
            <div class="toolbar"></div>
            <nav role="navigation" aria-label="聊天记录" class="Navigation-bibgtK"></nav>
          </div>
        </div>
      </div>
      <main>
        <div data-turn-key="t1">
          <div data-chatgpt-search-unit-key="fallback-turn-0:0:user">
            <div data-user-message-bubble="true"><div class="whitespace-pre-wrap">你好</div></div>
          </div>
          <div data-chatgpt-search-unit-key="fallback-turn-0:1:assistant">
            <div data-chatgpt-selection-message-id="m1"><div data-markdown-text-style="assistant-message">你好！</div></div>
          </div>
        </div>
        <form data-chatgpt-composer="" data-composer-placement="thread">
          <div class="ProseMirror" contenteditable="true" role="textbox"></div>
        </form>
      </main>`;
  });

  test('测试选择器已暴露', () => {
    expect(selectors).toBeDefined();
  });

  test('侧边栏选择器命中主导航而不是折叠态 rail', () => {
    const nav = document.querySelector(selectors.sidebar);
    expect(nav).not.toBeNull();
    expect(nav.getAttribute('aria-label')).toBe('聊天记录');
    expect(nav.hasAttribute('data-app-navigation-rail')).toBe(false);
  });

  test('输入框选择器命中 ProseMirror 编辑器', () => {
    const editor = document.querySelector(selectors.prompt);
    expect(editor).not.toBeNull();
    expect(editor.classList.contains('ProseMirror')).toBe(true);
  });

  test('用户与助手消息选择器各命中一条', () => {
    expect(document.querySelectorAll(selectors.userMessage)).toHaveLength(1);
    expect(document.querySelectorAll(selectors.assistantMessage)).toHaveLength(1);
    expect(document.querySelector(selectors.userMessage).textContent).toContain('你好');
  });
});

// ─── 数据安全默认规则测试 ──────────────────────────────────

describe('datasec_blocklist_default', () => {
  const defaultRules = "18888888888\nhttps://securiy-domain.com\n([\\w-]+(\\.[\\w-]+)*)@163\\.com\nmy-secret-username\n";
  const rules = defaultRules.trim().split('\n').map(r => new RegExp(r));

  test('匹配手机号', () => {
    expect(rules[0].test('18888888888')).toBe(true);
    expect(rules[0].test('13812345678')).toBe(false);
  });

  test('匹配163邮箱', () => {
    expect(rules[2].test('user@163.com')).toBe(true);
    expect(rules[2].test('user@gmail.com')).toBe(false);
  });

  test('匹配敏感用户名', () => {
    expect(rules[3].test('my-secret-username')).toBe(true);
    expect(rules[3].test('other-username')).toBe(false);
  });

  test('按规则清理敏感文本并返回命中项', () => {
    expect(typeof sanitizeDataSecText).toBe('function');
    const result = sanitizeDataSecText(
      '手机号 18888888888 邮箱 user@163.com 保留',
      defaultRules,
    );
    expect(result.text).toBe('手机号  邮箱  保留');
    expect(result.matches).toEqual(['18888888888', 'user@163.com']);
  });
});

// ─── GM mock 测试 ──────────────────────────────────────────

describe('GM_setValue / GM_getValue mock', () => {
  test('存取值正常工作', () => {
    GM_setValue('k_test', 'hello');
    expect(GM_getValue('k_test', '')).toBe('hello');
  });

  test('不存在的 key 返回默认值', () => {
    expect(GM_getValue('k_nonexistent', 'default')).toBe('default');
  });
});
