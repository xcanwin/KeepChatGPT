// Mock Tampermonkey GM_* APIs
const store = {};

global.GM_getValue = jest.fn((key, defaultVal) => store[key] ?? defaultVal);
global.GM_setValue = jest.fn((key, value) => { store[key] = value; });
global.GM_addStyle = jest.fn();
global.GM_addElement = jest.fn();
global.GM_xmlhttpRequest = jest.fn();
global.GM_cookie = { list: jest.fn(), set: jest.fn(), delete: jest.fn() };
global.GM_info = {
  script: {
    version: '33.6',
    namespace: 'https://github.com/xcanwin/KeepChatGPT/',
  },
};
global.unsafeWindow = global.window;

// Mock navigator.languages
Object.defineProperty(global.navigator, 'languages', {
  value: ['zh-CN', 'zh'],
  configurable: true,
});
