// ==UserScript==
// @name              KeepChatGPT-Dev
// @description       Dev loader - 绕过 CSP，每次加载最新本地脚本
// @version           1.1
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

(function() {
    'use strict';

    // 暴露 GM API，供本地脚本直接访问。
    unsafeWindow.unsafeWindow      = unsafeWindow;
    unsafeWindow.GM_addStyle       = GM_addStyle;
    unsafeWindow.GM_addElement     = GM_addElement;
    unsafeWindow.GM_setValue       = GM_setValue;
    unsafeWindow.GM_getValue       = GM_getValue;
    unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;
    unsafeWindow.GM_cookie         = GM_cookie;
    unsafeWindow.GM_info           = GM_info;

    // 注入本地最新脚本，并用时间戳绕过缓存。
    GM_addElement('script', {
        src: 'http://localhost:8888/KeepChatGPT.user.js?t=' + Date.now(),
        type: 'text/javascript',
    });
})();
