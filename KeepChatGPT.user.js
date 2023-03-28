// ==UserScript==
// @name         KeepChatGPT
// @description  ChatGPT维持会话
// @version      1.0
// @author       xcanwin
// @namespace    https://github.com/xcanwin/KeepChatGPT/
// @supportURL   https://github.com/xcanwin/KeepChatGPT/
// @license      GPL-2.0-only
// @match        *://chat.openai.com/chat*
// @grant        none
// @run-at       document-idie
// ==/UserScript==

(function() {
    'use strict';

    window.ifrurl = "/api/auth/session";
    setInterval(function() {
        fetch(window.ifrurl);
    }, 1000 * 30);

})();