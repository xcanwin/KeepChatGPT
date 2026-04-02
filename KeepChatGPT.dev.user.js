// ==UserScript==
// @name              KeepChatGPT-Dev
// @description       Dev loader - 绕过 CSP，每次加载最新本地脚本
// @version           1.0
// @author            xcanwin
// @namespace         https://github.com/xcanwin/KeepChatGPT/
// @match             *://chat.openai.com/
// @match             *://chat.openai.com/*
// @match             *://chatgpt.com/
// @match             *://chatgpt.com/*
// @connect           localhost
// @grant             GM_addStyle
// @grant             GM_addElement
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_xmlhttpRequest
// @grant             GM_cookie
// @grant             GM_info
// @grant             unsafeWindow
// @run-at            document-body
// @noframes
// ==/UserScript==

// 原理：
//   eval() 被 chatgpt.com 的 CSP 阻止（缺少 'unsafe-eval'）
//   GM_addElement 由 Tampermonkey 以特权方式插入 DOM，绕过 script-src 限制
//
// 步骤：
//   1. 将 GM_* API 挂载到 unsafeWindow（页面全局），使动态加载的脚本可以访问
//   2. 用 GM_addElement 注入带时间戳 src 的 script 标签，每次获取最新代码

(function () {
    // Step 1: 暴露 GM API 到页面上下文
    // Tampermonkey 负责跨 compartment 的安全包装
    // unsafeWindow 在 Tampermonkey 沙箱里 = 真实 window，
    // 在页面上下文中不存在，需手动暴露（unsafeWindow.unsafeWindow = window）
    unsafeWindow.unsafeWindow     = unsafeWindow;
    unsafeWindow.GM_addStyle      = GM_addStyle;
    unsafeWindow.GM_addElement    = GM_addElement;
    unsafeWindow.GM_setValue      = GM_setValue;
    unsafeWindow.GM_getValue      = GM_getValue;
    unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;
    unsafeWindow.GM_cookie        = GM_cookie;
    unsafeWindow.GM_info          = GM_info;

    // Step 2: 通过 GM_addElement 注入外部脚本，绕过 CSP script-src 限制
    // ?t= 时间戳确保每次加载最新代码，不受浏览器缓存影响
    GM_addElement('script', {
        src: 'http://localhost:8888/KeepChatGPT.user.js?t=' + Date.now(),
        type: 'text/javascript',
    });
})();
