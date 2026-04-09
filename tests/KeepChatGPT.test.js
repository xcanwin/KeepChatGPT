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

// ─── 正则测试 ─────────────────────────────────────────────

describe('trackingBlockRegex', () => {
  test('测试辅助函数已暴露', () => {
    expect(typeof isTrackingRequest).toBe('function');
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

  test('归档或隐藏时删除 everChanging 缓存', () => {
    expect(typeof shouldDeleteEverChangingRecord).toBe('function');
    expect(shouldDeleteEverChangingRecord({ is_visible: false })).toBe(true);
    expect(shouldDeleteEverChangingRecord({ is_archived: true })).toBe(true);
    expect(shouldDeleteEverChangingRecord({ is_hidden: true })).toBe(true);
    expect(shouldDeleteEverChangingRecord({ is_visible: true })).toBe(false);
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
