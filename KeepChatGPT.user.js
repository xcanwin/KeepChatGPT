// ==UserScript==
// @name             KeepChatGPT
// @description      让我们在使用ChatGPT过程中更高效、更顺畅，完美解决ChatGPT网络错误，不再频繁地刷新网页，足足省去10个多余的步骤。解决了这几类报错: （1）NetworkError when attempting to fetch resource. （2）Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @version          2.6
// @author           xcanwin
// @description:en   Let's make our use of ChatGPT more efficient and smoother, by perfecting the solution to ChatGPT network errors. This saves us from frequently refreshing the webpage and eliminates over 10 unnecessary steps. The following errors have been resolved: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @namespace        https://github.com/xcanwin/KeepChatGPT/
// @supportURL       https://github.com/xcanwin/KeepChatGPT/
// @updateURL        https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js
// @downloadURL      https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js
// @icon             data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" stroke-width="2" fill="none" stroke="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
// @license          GPL-2.0-only
// @match            *://chat.openai.com/chat*
// @grant            none
// @run-at           document-idie
// ==/UserScript==


(function() {
    'use strict';

    var loadifr = function() {
        var u = `/api/${GM_info.script.author.slice(2,3)}uth/s${GM_info.script.name.slice(1, 2)}ssion`;
        if(!window.xcanwin){
            var ifr = document.createElement('iframe');
            ifr.id = "xcanwin";
            ifr.style.display = 'none';
            ifr.src = u;
            ifr.style.width = document.querySelector("nav a").offsetWidth + 'px';
            ifr.style.height = '75px';
            ifr.onload = function() {
                try {
                    console.log(`KeepChatGPT: ${JSON.parse(ifr.contentDocument.body.innerText)['expires']}`);
                    ifr.contentWindow.document.body.style.background = '#555';
                    var cf_checkbox = document.querySelector(".ctp-checkbox-label");
                    if (cf_checkbox) {
                        cf_checkbox.click();
                    }
                } catch (e) {
                }
            };
            document.querySelector("nav").appendChild(ifr);
        } else{
            window.xcanwin.src = u;
        }
    }

    var loadhead = function() {
        if(!window.ndivid){
            loadifr();
            var ndiv = document.createElement("div");
            ndiv.id = "ndivid";
            ndiv.setAttribute("class", document.querySelector("nav a").className);
            ndiv.innerHTML = `<img src='${GM_info.script.icon}' />KeepChatGPT by xcanwin`;
            ndiv.onclick = kcg;
            var nav = document.querySelector('nav');
            nav.insertBefore(ndiv, nav.childNodes[0]);
            var newstyle = document.createElement('style');
            newstyle.innerHTML = `
#ndivid {
    color: #555;
    background: linear-gradient(to top right, #F0B27A, #FDE184, #F0B27A);
    animation: gradient 6s ease-in-out infinite;
    position: relative;
    overflow: hidden;
    font-weight: bold;
    user-select: none;
}
@keyframes gradient {
    0%{background-color:#F0B27A;}
    50%{background-color:#FDE184;}
    100%{background-color:#F0B27A;}
}

#ndivid::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        to bottom right,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0)
    );
    transform: rotate(-45deg);
    animation: shine 2.8s linear infinite;
}
@keyframes shine {
    from {
        transform: translateX(-50%) translateY(-50%) rotate(-45deg);
    }
    to {
        transform: translateX(150%) translateY(150%) rotate(-45deg);
    }
}
`;
            document.body.appendChild(newstyle);
        }
    }

    var kcg = function() {
        window.xcanwin ? xcanwin.style.display == "none" ? xcanwin.style.display = "" : xcanwin.style.display = "none" : 0;
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
