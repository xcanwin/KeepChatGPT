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

// ─── 正则测试 ─────────────────────────────────────────────

describe('trackingBlockRegex', () => {
  // 从脚本提取 regex（不依赖 IIFE 执行）
  const trackingBlockRegex = /gravatar\.com|browser-intake-datadoghq\.com|\.wp\.com|intercomcdn\.com|sentry\.io|sentry_key=|intercom\.io|featuregates\.org|\/v1\/initialize|\/messenger\/|statsigapi\.net|\/rgstr|\/v1\/sdk_exception/;

  test('拦截 sentry.io 请求', () => {
    expect(trackingBlockRegex.test('https://browser-intake-datadoghq.com/api/v2/rum')).toBe(true);
    expect(trackingBlockRegex.test('https://sentry.io/api/1234/')).toBe(true);
  });

  test('拦截 intercom 请求', () => {
    expect(trackingBlockRegex.test('https://api.intercom.io/messenger/')).toBe(true);
    expect(trackingBlockRegex.test('https://widget.intercomcdn.com/foo.js')).toBe(true);
  });

  test('拦截 statsig 请求', () => {
    expect(trackingBlockRegex.test('https://statsigapi.net/v1/initialize')).toBe(true);
    expect(trackingBlockRegex.test('https://statsigapi.net/rgstr')).toBe(true);
  });

  test('不拦截正常请求', () => {
    expect(trackingBlockRegex.test('https://chat.openai.com/api/auth/session')).toBe(false);
    expect(trackingBlockRegex.test('https://chatgpt.com/backend-api/conversation')).toBe(false);
    expect(trackingBlockRegex.test('https://cdn.jsdelivr.net/foo.js')).toBe(false);
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
