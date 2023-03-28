// ==UserScript==
// @name         KeepChatGPT
// @description  ChatGPT网络异常拜拜员. Chatgpt no longer network error. 
// @version      2.0
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
    var loadifr = function() {
        if(!window.ifrid){
            var ifr = document.createElement('iframe');
            ifr.id = "ifrid";
            ifr.style.display = 'none';
            ifr.src = window.ifrurl;
            ifr.style.width = document.querySelector("nav a").offsetWidth + 'px';
            ifr.style.height = '75px';
            ifr.onload = function() {
                try {
                    console.log(`KeepChatGPT: ${JSON.parse(ifr.contentDocument.body.innerText)['expires']}`);
                    ifr.contentWindow.document.body.style.background = '#555';
                } catch (e) {
                }
            };
            document.querySelector("nav").appendChild(ifr);
        } else{
            window.ifrid.src = window.ifrurl;
        }
    }

    var loadhead = function() {
        if(!window.ndivid){
            loadifr();
            var ndiv = document.createElement("div");
            ndiv.id = "ndivid";
            ndiv.setAttribute("class", document.querySelector("nav a").className);
            ndiv.innerHTML = `<svg width="16" height="16"></svg>KeepChatGPT`;
            ndiv.onclick = kcg;
            var nav = document.querySelector('nav');
            nav.insertBefore(ndiv, nav.childNodes[1]);
            var newstyle = document.createElement('style');
            newstyle.innerHTML = `#ndivid{animation:color-animation 6s ease-in-out infinite;color:black;}@keyframes color-animation{0%{background-color:#F0B27A;}50%{background-color:#FDE184;}100%{background-color:#F0B27A;}}`;
            document.body.appendChild(newstyle);
        }
    }

    var kcg = function() {
        window.ifrid ? ifrid.style.display == "none" ? ifrid.style.display = "" : ifrid.style.display = "none" : 0;
    }

    setInterval(function() {
        if (document.querySelector("nav a")) {
            loadhead();
        }
    }, 300);

    setInterval(function() {
        if (document.querySelector("nav a")) {
            loadifr();
        }
    }, 1000 * 30);

})();
