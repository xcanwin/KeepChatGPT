// ==UserScript==
// @name              KeepChatGPT
// @description       ChatGPT畅聊插件。解决所有报错，让我们的AI体验无比顺畅、丝滑、高效。持续更新的增强功能，如取消审计等。解决的报错如下: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @version           11.1
// @author            xcanwin
// @namespace         https://github.com/xcanwin/KeepChatGPT/
// @supportURL        https://github.com/xcanwin/KeepChatGPT/
// @updateURL         https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js
// @downloadURL       https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js
// @description:ar    برنامج ChatGPT للمحادثة الحرة. يحل جميع مشاكل التقارير ويجعل تجربة AI الخاصة بنا سلسة وسلسة وفعالة للغاية. يتم تحديث الميزات بشكل مستمر ، مثل إلغاء المراجعات وما إلى ذلك. يحل مشاكل التقارير التالية: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:bg    ChatGPT плъгин за безпроблемно чатване. Решава всички грешки, които имаме с AI, и ги прави изключително гладки и ефективни. Постоянно актуализирани подобрени функции, като прекратяване на прегледите и т.н. Решава следните грешки: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:cs    ChatGPT plugin pro bezproblémové chatování. Řeší všechny chyby, které máme s AI, a dělá je extrémně hladké a efektivní. Neustále aktualizované vylepšené funkce, jako je zrušení auditů atd. Řeší následující chyby: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:da    ChatGPT-plugin til problemfri chat. Løser alle fejl, vi har med AI, og gør dem ekstremt glatte og effektive. Konstant opdaterede forbedrede funktioner, såsom aflysning af revisioner osv. Løser følgende fejl: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:de    ChatGPT-Plugin für reibungslose Gespräche. Löst alle Fehler, die wir mit KI haben, und macht sie extrem glatt und effektiv. Kontinuierlich aktualisierte verbesserte Funktionen wie Aufhebung von Überprüfungen usw. Löst folgende Fehler: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:el    Πρόσθετο ChatGPT για άψογη συνομιλία. Λύνει όλα τα σφάλματα που έχουμε με την AI και τα καθιστά απίστευτα ομαλά και αποτελεσματικά. Διαρκώς ενημερωμένες βελτιωμένες λειτουργίες, όπως ακύρωση ελέγχων κ.λπ. Λύνει τα παρακάτω σφάλματα: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:en    ChatGPT plugin for seamless chatting. Solves all the errors we have with AI and makes them extremely smooth and efficient. Continuously updated enhanced features such as cancellation of reviews, etc. Solves the following errors: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:eo    ChatGPT babilu pli fluante, glate kaj efike. Ĝi solvas ĉiujn erarojn, kaj enhavas novajn funkciojn kiel malkontrolado de la kontentaro. Jen kelkaj el la solvitaj eraroj: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:es    El complemento ChatGPT para conversaciones sin problemas, fluidas y eficientes. Soluciona todos los errores y ofrece nuevas funciones como la cancelación de auditoría. Algunos de los errores que soluciona son: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:fi    ChatGPT:n sujuva ja tehokas keskusteluliitännäinen. Se ratkaisee kaikki virheet ja sisältää uusia ominaisuuksia kuten tarkistuksen poisto. Joitakin ratkaistuja virheitä ovat: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:fr    Le plugin ChatGPT pour des conversations fluides et efficaces. Résout toutes les erreurs et inclut de nouvelles fonctionnalités telles que la désactivation de l'audit. Voici quelques-unes des erreurs résolues : (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:fr-CA Le plugin ChatGPT pour des conversations fluides et efficaces. Résout toutes les erreurs et inclut de nouvelles fonctionnalités telles que la désactivation de l'audit. Voici quelques-unes des erreurs résolues : (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:he    תוסף ChatGPT לשיחות חלקות ויעילות. פותר את כל השגיאות וכולל תכונות חדשות כמו ביטול אודיט. כמה מהשגיאות שפתר: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:hu    A ChatGPT plugin sima és hatékony beszélgetésekhez. Megoldja az összes hibát és új funkciókat tartalmaz, mint például az auditálás kikapcsolása. Íme néhány megoldott hiba: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:id    Plugin ChatGPT untuk percakapan yang lancar dan efisien. Menyelesaikan semua kesalahan dan menyertakan fitur baru seperti pembatalan audit. Berikut beberapa kesalahan yang diselesaikan: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:it    Il plugin ChatGPT per conversazioni fluide ed efficienti. Risolve tutti gli errori e include nuove funzionalità come la disattivazione dell'audit. Ecco alcuni degli errori risolti: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:ja    スムーズで効率的な会話のためのChatGPTプラグイン。すべてのエラーを解決し、監査のキャンセルなどの新しい機能を含みます。解決されるいくつかのエラーは次のとおりです: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:ka    ChatGPT ჩატის პლაგინი. შეცვლის ყველა შეცდომას, გახსნის ჩვენს AI-ს ენახაზე შემდეგი მარტივი, სურვილებითი და ეფექტური ამაღლებულები. განმარტების განვითარება, მაგალითად, ანულება აუდიტის. შეცდომების შემცირება შემდეგია: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:ko    ChatGPT 채팅 플러그인입니다. 모든 오류를 해결하여 우리의 AI 경험을 매우 원활하고 매끄럽고 효율적으로 만듭니다. 강화 기능은 지속적으로 업데이트되며 감사 검토 등이 포함됩니다. 해결되는 오류는 다음과 같습니다: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:nb    ChatGPT-chatpluggen. Løser alle feil, noe som gjør AI-opplevelsen vår utrolig glatt, sømløs og effektiv. Kontinuerlig oppdaterte forbedringsfunksjoner som inkluderer å avbryte revisjon. Feil som løses inkluderer: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:nl    ChatGPT-chatplugin. Lost alle fouten op, waardoor onze AI-ervaring ongelooflijk soepel, naadloos en efficiënt wordt. Voortdurend bijgewerkte verbeteringsfuncties, waaronder het annuleren van audit. Problemen die worden opgelost zijn onder meer: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:pl Wtyczka ChatGPT do płynnej i efektywnej rozmowy. Rozwiązuje wszystkie problemy z błędami, a funkcje takie jak anulowanie audytu są stale aktualizowane: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:pt-BR O plug-in ChatGPT para conversas suaves e eficientes. Resolve todos os erros, e recursos como cancelar auditoria são continuamente atualizados: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:ro Plugin-ul ChatGPT pentru conversații fluente și eficiente. Rezolvă toate erorile, iar funcții precum anularea auditului sunt actualizate în mod constant: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:ru    Плагин для чатов ChatGPT. Решает все проблемы, обеспечивая невероятно гладкое, плавное и эффективное взаимодействие с нашим ИИ. Непрерывно улучшающиеся функции, такие как отключение аудита. Решенные ошибки: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:sk    Chatovací plugin ChatGPT. Rieši všetky chyby a umožňuje nám s našou AI získať neuveriteľne plynulú, hladkú a efektívnu skúsenosť. Neustále vylepšované funkcie, ako napríklad zrušenie auditu. Vyriešené chyby sú nasledujúce: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:sr    Plugin za razgovor ChatGPT. Rešava sve greške, omogućavajući nam neverovatno glatko, efikasno i besprekidno iskustvo sa našom AI. Neprestano unapređene funkcije, kao što je isključenje revizije. Rešeni problemi su sledeći: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:sv    Chattplugin ChatGPT. Löser alla fel och ger oss en otroligt smidig, jämn och effektiv AI-upplevelse. Funktioner som kontinuerligt förbättras, till exempel avaktivering av revision. De lösta felen är följande: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:th    ปลั๊กอินการสนทนา ChatGPT แก้ไขข้อผิดพลาดทั้งหมด ทำให้ประสบการณ์กับ AI ของเราเป็นอย่างลื่นไหล มีประสิทธิภาพและไม่มีการขัดจังหวะ ฟังก์ชั่นที่ปรับปรุงอยู่เสมอ เช่นการปิดการตรวจสอบ ข้อผิดพลาดที่แก้ไขได้คือ: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:tr    ChatGPT Sohbet Eklentisi. Tüm hataları çözer, AI deneyimimizi inanılmaz derecede sorunsuz, pürüzsüz, verimli hale getirir. İptal denetimi gibi sürekli güncellenen artırılmış özellikler. Aşağıdaki hataları çözer: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:uk Плагін ChatGPT для плавного та ефективного спілкування. Вирішує всі проблеми з помилками, а функції, такі як скасування аудиту, постійно оновлюються: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:ug ChatGPT پلاگىنى سەركەسىنلىك ۋە ئەۋەتىلمىش پاراڭلىق ئالاقىدار. ھەممە ئىشلەتكۈچ خاتالىقىنى حەل قىلىدۇ، ئۈنۈمدار قاتارلىق مەشغۇلاتلار ئورۇنلاشتۇرۇپ بولىدۇ: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:vi    ChatGPT Plugin trò chuyện. Giải quyết tất cả các lỗi, mang lại trải nghiệm AI của chúng tôi một cách cực: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:zh-CN ChatGPT畅聊插件。解决所有报错，让我们的AI体验无比顺畅、丝滑、高效。持续更新的增强功能，如取消审计等。解决的报错如下: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @description:zh-TW ChatGPT暢聊插件。解決所有報錯，讓我們的AI體驗無比順暢、絲滑、高效。持續更新的增強功能，如取消審計等。解決的報錯如下: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @icon              data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" stroke-width="2" fill="none" stroke="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
// @license           GPL-2.0-only
// @match             https://chat.openai.com/*
// @grant             GM_addStyle
// @grant             GM_addElement
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             unsafeWindow
// @run-at            document-idle
// @noframes
// ==/UserScript==


(function() {
    'use strict';

    const $ = (Selector, el) => (el || document).querySelector(Selector);
    const $$ = (Selector, el) => (el || document).querySelectorAll(Selector);

    const getLang = function() {
        let lang = `
{
    "index": {"暗色主题": "dm", "显示调试": "sd", "取消审计": "cm", "取消动画": "ca", "关于": "ab", "建议间隔30秒": "si", "调整间隔": "mi", "检查更新": "cu", "当前版本": "cv", "发现最新版": "dl", "已是最新版": "lv", "克隆对话": "cc", "净化首页": "ch"},
    "local": {
"ar": {"dm": "الوضع الداكن", "sd": "إظهار التصحيح", "cm": "إلغاء التدقيق", "ca": "إلغاء الرسوم المتحركة", "ab": "حول", "si": "اقتراح فاصل زمني 30 ثانية", "mi": "تعديل الفاصل", "cu": "التحقق من التحديثات", "cv": "الإصدار الحالي", "dl": "اكتشف أحدث إصدار", "lv": "أحدث إصدار", "cc": "استنساخ المحادثة", "ch": "تنقية الصفحة الرئيسية"},
"bg": {"dm": "Тъмна тема", "sd": "Показване на отстраняване на грешки", "cm": "Отказ от одит", "ca": "Отмяна на анимацията", "ab": "За", "si": "Предложете интервал от 30 секунди", "mi": "Промяна на интервала", "cu": "Проверка на актуализации", "cc": "Клониране на разговора", "ch": "Почистване на началната страница"},
"cs": {"dm": "Tmavý režim", "sd": "Zobrazit ladění", "cm": "Zrušení auditu", "ca": "Zrušit animaci", "ab": "O", "si": "Navrhnout interval 30 sekund", "mi": "Upravit interval", "cu": "Kontrola aktualizací", "cc": "Klonovat konverzaci", "ch": "Očistit domovskou stránku"},
"da": {"dm": "Mørk tilstand", "sd": "Vis fejlfinding", "cm": "Annuller revision", "ca": "Annuller animation", "ab": "Om", "si": "Forslag interval på 30 sekunder", "mi": "Ændre interval", "cu": "Tjek for opdateringer", "cc": "Klon samtalen", "ch": "Rensning af startsiden"},
"de": {"dm": "Dunkler Modus", "sd": "Fehlerbehebung anzeigen", "cm": "Prüfung abbrechen", "ca": "Animation abbrechen", "ab": "Über", "si": "Vorschlag für Intervall von 30 Sekunden", "mi": "Intervall bearbeiten", "cu": "Überprüfung auf Updates", "cv": "Aktuelle Version", "dl": "Entdecken Sie die neueste Version", "lv": "ist die neueste Version", "cc": "Konversation klonen", "ch": "Bereinigung der Startseite"},
"el": {"dm": "Σκοτεινή θεματολογία", "sd": "Εμφάνιση αποσφαλμάτωσης", "cm": "Ακύρωση ελέγχου", "ca": "Ακύρωση κινούμενων σχεδίων", "ab": "Σχετικά με", "si": "Προτείνετε διάστημα 30 δευτερολέπτων", "mi": "Τροποποίηση διαστήματος", "cu": "Έλεγχος ενημερώσεων", "cc": "Κλωνοποίηση συνομιλίας", "ch": "Καθαρισμός αρχικής σελίδας"},
"en": {"dm": "Dark mode", "sd": "Show debugging", "cm": "Cancel audit", "ca": "Cancel animation", "ab": "About", "si": "Suggest interval of 30 seconds; The author usually sets 150", "mi": "Modify interval", "cu": "Check for updates", "cv": "Current version", "dl": "Discover the latest version", "lv": "is the latest version", "cc": "Clone conversation", "ch": "Clean up the homepage"},
"eo": {"dm": "Malhela moduso", "sd": "Montri depuradon", "cm": "Nuligi kontroli", "ca": "Nuligi animacion", "ab": "Pri", "si": "Sugesti intervalon de 30 sekundoj", "mi": "Modifi intervalon", "cu": "Kontroli ĝisdatigojn", "cc": "Kloni konversacion", "ch": "Purigi la hejmpaĝon"},
"es": {"dm": "Modo oscuro", "sd": "Mostrar depuración", "cm": "Cancelar auditoría", "ca": "Cancelar animación", "ab": "Acerca de", "si": "Sugerir un intervalo de 30 segundos", "mi": "Modificar intervalo", "cu": "Comprobar actualizaciones", "cv": "Versión actual", "dl": "Descubre la última versión", "lv": "es la última versión", "cc": "Clonar conversación", "ch": "Limpiar la página de inicio"},
"fi": {"dm": "Tumma tila", "sd": "Näytä virheenkorjaus", "cm": "Peruuta tarkistus", "ca": "Peruuta animaatio", "ab": "Tietoa", "si": "Ehdota 30 sekunnin väliaikaa", "mi": "Muokkaa väliä", "cu": "Tarkista päivitykset", "cc": "Kloonaa keskustelu", "ch": "Puhdista aloitussivu"},
"fr": {"dm": "Mode sombre", "sd": "Afficher le débogage", "cm": "Annuler l'audit", "ca": "Annuler l'animation", "ab": "À propos de", "si": "Suggérer un intervalle de 30 secondes", "mi": "Modifier l'intervalle", "cu": "Vérifier les mises à jour", "cv": "Version actuelle", "dl": "Découvrir la dernière version", "lv": "est la dernière version", "cc": "Cloner la conversation", "ch": "Nettoyer la page d'accueil"},
"fr-CA": {"dm": "Mode nuit", "sd": "Afficher le débogage", "cm": "Annuler la vérification", "ca": "Annuler l'animation", "ab": "À propos de", "si": "Suggérer un intervalle de 30 secondes", "mi": "Modifier l'intervalle", "cu": "Vérifier les mises à jour", "cv": "Version actuelle", "dl": "Découvrir la dernière version", "lv": "est la dernière version", "cc": "Cloner la conversation", "ch": "Nettoyer la page d'accueil"},
"he": {"dm": "מצב כהה", "sd": "הצגת התיקון", "cm": "ביטול ביקורת", "ca": "בטל אנימציה", "ab": "אודות", "si": "הצע מרווח של 30 שניות", "mi": "שינוי מרווח", "cu": "בדיקת עדכונים", "cc": "שכפול שיחה", "ch": "ניקוי דף הבית"},
"hu": {"dm": "Sötét mód", "sd": "Hibakeresés mutatása", "cm": "Ellenőrzés megszüntetése", "ca": "Animáció törlése", "ab": "Rólunk", "si": "Javaslat 30 másodperces időközre", "mi": "Időköz módosítása", "cu": "Frissítések keresése", "cc": "Beszélgetés klónozása", "ch": "Honlap tisztítása"},
"id": {"dm": "Mode gelap", "sd": "Tampilkan debugging", "cm": "Batalkan audit", "ca": "Batalkan animasi", "ab": "Tentang", "si": "Sarankan interval 30 detik", "mi": "Modifikasi interval", "cu": "Periksa Pembaruan", "cc": "Klon percakapan", "ch": "Bersihkan halaman utama"},
"it": {"dm": "Modalità scura", "sd": "Mostra debug", "cm": "Annulla verifica", "ca": "Annulla animazione", "ab": "Riguardo a", "si": "Suggerisci un intervallo di 30 secondi", "mi": "Modifica intervallo", "cu": "Verifica aggiornamenti", "cv": "Versione attuale", "dl": "Scopri l'ultima versione", "lv": "è l'ultima versione", "cc": "Clona conversazione", "ch": "Pulisci la homepage"},
"ja": {"dm": "ダークモード", "sd": "デバッグを表示", "cm": "監査をキャンセル", "ca": "アニメーションのキャンセル", "ab": "について", "si": "30秒間隔を提案する", "mi": "間隔を変更する", "cu": "更新をチェックする", "cv": "現在のバージョン", "dl": "最新バージョンを発見する", "lv": "最新バージョンです", "cc": "会話をクローンする", "ch": "ホームページのクリーンアップ"},
"ka": {"dm": "ბნელი რეჟიმი", "sd": "გამოჩენა დებაგი", "cm": "ანულირება აუდიტი", "ca": "ანიმაციის გაუქმება", "ab": "შესახებ", "si": "30 წამის ინტერვალის შეტანა", "mi": "ინტერვალის შეცვლა", "cu": "განახლებების შემოწმება", "cc": "კონვერსაციის კლონირება", "ch": "მთავარი გვერდის გაწმენდა"},
"ko": {"dm": "다크 모드", "sd": "디버깅 표시", "cm": "감사 취소", "ca": "애니메이션 취소", "ab": "관하여", "si": "30초 간격 건의", "mi": "간격 수정", "cu": "업데이트 확인", "cv": "현재 버전", "dl": "최신 버전 찾기", "lv": "최신 버전입니다.", "cc": "대화 복제", "ch": "홈페이지 정리"},
"nb": {"dm": "Mørk modus", "sd": "Vis feilsøking", "cm": "Avbryt revisjonen", "ca": "Avbryt animasjon", "ab": "Om", "si": "Forslag om et intervall på 30 sekunder", "mi": "Endre intervall", "cu": "Sjekk etter oppdateringer", "cc": "Klon samtalen", "ch": "Rydd opp på startsiden"},
"nl": {"dm": "Donkere modus", "sd": "Foutopsporing weergeven", "cm": "Controle annuleren", "ca": "Animatie annuleren", "ab": "Over", "si": "Stel een interval van 30 seconden voor", "mi": "Interval wijzigen", "cu": "Controleren op updates", "cc": "Gesprek klonen", "ch": "Maak de homepage schoon"},
"pl": {"dm": "Tryb ciemny", "sd": "Pokaż debugowanie", "cm": "Anuluj audyt", "ca": "Anuluj animację", "ab": "O", "si": "Zasugeruj interwał 30 sekund", "mi": "Zmień interwał", "cu": "Sprawdź aktualizacje", "cc": "Klonuj rozmowę", "ch": "Wyczyść stronę główną"},
"pt-BR": {"dm": "Modo escuro", "sd": "Mostrar depuração", "cm": "Cancelar auditoria", "ca": "Cancelar animação", "ab": "Sobre", "si": "Sugira um intervalo de 30 segundos", "mi": "Modificar intervalo", "cu": "Verificar atualizações", "cc": "Clonar conversa", "ch": "Limpar a página inicial"},
"ro": {"dm": "Mod întunecat", "sd": "Afișare depanare", "cm": "Anulare audit", "ca": "Anulare animație", "ab": "Despre", "si": "Sugerați un interval de 30 secunde", "mi": "Modificați intervalul", "cu": "Verifică actualizări", "cc": "Clonează conversația", "ch": "Curățarea paginii de pornire"},
"ru": {"dm": "Темный режим", "sd": "Показать отладку", "cm": "Отменить аудит", "ca": "Отменить анимацию", "ab": "О", "si": "Предложить интервал в 30 секунд", "mi": "Изменить интервал", "cu": "Проверить обновления", "cc": "Клонировать диалог", "ch": "Очистить главную страницу"},
"sk": {"dm": "Tmavý režim", "sd": "Zobraziť ladenie", "cm": "Zrušiť audit", "ca": "Zrušiť animáciu", "ab": "O", "si": "Navrhnúť interval 30 sekúnd", "mi": "Zmena intervalu", "cu": "Kontrola aktualizácií", "cc": "Klonovať konverzáciu", "ch": "Čistenie úvodnej stránky"},
"sr": {"dm": "Тамни режим", "sd": "Прикажи отклањање грешака", "cm": "Откажи ревизију", "ca": "Откажи анимацију", "ab": "О", "si": "Predložiti interval od 30 sekundi", "mi": "Измена интервала", "cu": "Provera ažuriranja", "cc": "Клонирај разговор", "ch": "Чишћење почетне странице"},
"sv": {"dm": "Mörkt läge", "sd": "Visa felsökning", "cm": "Avbryt revision", "ca": "Avbryt animation", "ab": "Om", "si": "Föreslå intervall på 30 sekunder", "mi": "Ändra intervall", "cu": "Kontrollera uppdateringar", "cc": "Klonar samtal", "ch": "Rensa upp på startsidan"},
"th": {"dm": "โหมดมืด", "sd": "แสดงการแก้ไขข้อผิดพลาด", "cm": "ยกเลิกการตรวจสอบ", "ca": "ยกเลิกการเคลื่อนไหว", "ab": "เกี่ยวกับ", "si": "เสนอช่วงเวลา 30 วินาที", "mi": "แก้ไขระยะห่าง", "cu": "ตรวจสอบการอัปเดต", "cc": "โคลนสนทนา", "ch": "ทำความสะอาดโฮมเพจ"},
"tr": {"dm": "Karanlık mod", "sd": "Hata ayıklama göster", "cm": "Denetimi İptal Et", "ca": "Animasyonu iptal et", "ab": "Hakkında", "si": "30 saniyelik aralık önerin", "mi": "Aralığı değiştir", "cu": "Güncelleştirmeleri kontrol et", "cc": "Sohbeti kopyala", "ch": "Ana sayfayı temizle"},
"uk": {"dm": "Темний режим", "sd": "Показати налагодження", "cm": "Скасувати аудит", "ca": "Скасувати анімацію", "ab": "Про", "si": "Запропонуйте інтервал у 30 секунд", "mi": "Змінити інтервал", "cu": "Перевірити оновлення", "cc": "Клонувати діалог", "ch": "Очистити домашню сторінку"},
"ug": {"dm": "تېما كۆرسىتىش", "sd": "كۆرسەتكەن يۇقىرىلاش", "cm": "ئەمەلدىن قالدۇرۇش", "ca": "ئېنىماتىكىنى بىكار قىلىش", "ab": "ئۇچۇرلىق", "si": "30 سىكونتلىك ئارىلىقنى سۇنۇشتۇرۇش", "mi": "ئارىلىق ئۆزگەرتىش", "cu": "يېڭىلانما كۆزەت", "cc": "كۆپچەي ئىككىلىش", "ch": "ئۆز ئۇيۇشما بەتتىن تازىلاش"},
"vi": {"dm": "Chế độ tối", "sd": "Hiển thị gỡ lỗi", "cm": "Hủy đánh giá", "ca": "Hủy hoạt hình", "ab": "Về", "si": "Đề xuất khoảng thời gian 30 giây", "mi": "Sửa khoảng cách", "cu": "Kiểm tra cập nhật", "cc": "Sao chép cuộc trò chuyện", "ch": "Dọn dẹp trang chủ"},
"zh-CN": {"dm": "暗色主题", "sd": "显示调试", "cm": "取消审计", "ca": "取消动画", "ab": "关于", "si": "建议间隔30秒以上，作者平时设置的是150", "mi": "调整间隔", "cu": "检查更新", "cc": "克隆对话", "ch": "净化首页"},
"zh-TW": {"dm": "暗黑模式", "sd": "顯示調試", "cm": "取消稽核", "ca": "取消動畫", "ab": "關於", "si": "建議間隔30秒", "mi": "調整間隔", "cu": "檢查更新", "cc": "複製對話", "ch": "淨化首頁"}
    }
}
`;
        lang = JSON.parse(lang);
        for(let k in lang.local){
            if (k.length > 2 && !(k.slice(0, 2) in lang.local)) {
                lang.local[k.slice(0, 2)] = lang.local[k];
            }
        }
        const nls = navigator.languages;
        let language = "zh-CN";
        for (let j = 0; j < nls.length; j++) {
            let nl = nls[j];
            if (nl in lang.local) {
                language = nl;
                break;
            } else if (nl.length > 2 && nl.slice(0, 2) in lang.local) {
                language = nl.slice(0, 2);
                break;
            }
        }
        //language = "en"; //debug
        return [lang.index, lang.local[language]];
    };

    const [langIndex, langLocal] = getLang();

    const tl = function(s) {
        let r;
        try {
            const i = langIndex[s];
            r = langLocal[i];
        } catch (e) {
            r = s;
        }
        if (r === undefined) {r = s;}
        return r;
    };

    const sv = function(key, value = "") {
        GM_setValue(key, value);
    };

    const gv = function(key, value = "") {
        return GM_getValue(key, value);
    };

    const formatDate = function(d) {
        return (new Date(d)).toLocaleString();
    };

    const formatJson = function(d) {
        try {
            const j = JSON.parse(d);
            return `<pre>${JSON.stringify(j, null, 2)}</pre>`;
        } catch (e) {
            return d;
        }
    };

    const setIfr = function(u = "") {
        if ($("#xcanwin") === null) {
            const nIfr = document.createElement('iframe');
            nIfr.id = "xcanwin";
            nIfr.style = `height: 0px; width: 100%;`;
            if (u) {
                nIfr.src = u;
            }
            nIfr.onload = function() {
                const nIfrText = $("#xcanwin").contentWindow.document.documentElement.innerText;
                try {
                    $("#xcanwin").contentWindow.document.documentElement.style = `background: #FCF3CF; height: 360px; width: 1080px; overflow; auto;`;
                    if (nIfrText.indexOf(`"expires":"`) > -1) {
                        console.log(`KeepChatGPT: IFRAME: Expire date: ${formatDate(JSON.parse(nIfrText).expires)}`);
                        $("#xcanwin").contentWindow.document.documentElement.innerHTML = formatJson(nIfrText);
                    } else if (nIfrText.match(/Please stand by|while we are checking your browser|Please turn JavaScript on|Please enable Cookies|reload the page/)) {
                        console.log(`KeepChatGPT: IFRAME: BypassCF`);
                    }
                } catch (e) {
                    console.log(`KeepChatGPT: IFRAME: ERROR: ${e},\nERROR RESPONSE:\n${nIfrText}`);
                }
            };
            $("main").lastElementChild.appendChild(nIfr);
        } else{
            if (u) {
                $("#xcanwin").src = u;
            }
        }
    };

    const keepChat = function() {
        fetch(u).then((response) => {
            response.text().then((data) => {
                try {
                    const contentType = response.headers.get('Content-Type');
                    if (contentType.indexOf("application/json") > -1 && response.status !== 403 && data.indexOf(`"expires":"`) > -1) {
                        console.log(`KeepChatGPT: FETCH: Expire date: ${formatDate(JSON.parse(data).expires)}`);
                        $("#xcanwin").contentWindow.document.documentElement.innerHTML = formatJson(data);
                    } else {
                        setIfr(u);
                    }
                } catch (e) {
                    console.log(`KeepChatGPT: FETCH: ERROR: ${e},\nERROR RESPONSE:\n${data}`);
                    setIfr(u);
                }
            })
        });
    }

    const ncheckbox = function() {
        const nsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        nsvg.setAttribute("viewBox", "0 0 100 30");
        nsvg.classList.add("checkbutton");
        nsvg.innerHTML = `<g fill="none" fill-rule="evenodd"><path fill="#E3E3E3" d="M0 15C0 6.716 6.716 0 15 0h14c8.284 0 15 6.716 15 15s-6.716 15-15 15H15C6.716 30 0 23.284 0 15z"/><circle fill="#FFF" cx="15" cy="15" r="13"/></g>`;
        return nsvg.cloneNode(true);
    };

    const ndialog = function(title = 'KeepChatGPT', content = '', buttonvalue = 'OK', buttonfun = function(t) {return t;}, inputtype = 'br', inputvalue = '') {
        const ndivalert = document.createElement('div');
        ndivalert.setAttribute("class", "kdialog relative z-50");
        ndivalert.innerHTML = `
<div class="fixed inset-0 bg-gray-500/90"></div>
<div class="fixed inset-0 overflow-y-auto z-50">
  <div class="flex items-end justify-center min-h-full p-4 sm:items-center sm:p-0 text-center">
    <div class="bg-white dark:bg-gray-900 rounded-lg sm:max-w-lg sm:p-6 text-left">
      <div class="flex items-center justify-between">
        <div>
          <div class="flex items-center justify-between">
            <h3 class="dark:text-gray-200 text-gray-900 text-lg">${title}</h3>
            <p class="kdialogclose" style="cursor: pointer;">X</p>
          </div>
          <p class="dark:text-gray-100 mt-2 text-gray-500 text-sm" style="margin-bottom: 10px;">${content}</p>
          <div class="md:py-3 md:pl-4 border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
            <${inputtype} class="kdialoginput resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent" style="max-height: 200px; height: 24px; outline: none;" placeholder=""></${inputtype}>
          </div>
        </div>
      </div>
      <div class="flex sm:flex-row-reverse sm:mt-4"><button class="btn btn-neutral kdialogbtn">${buttonvalue}</button>
      </div>
    </div>
  </div>
</div>
        `;
        if (inputtype !== 'br') {
            $(".kdialoginput", ndivalert).value = inputvalue;
        } else {
            $(".kdialoginput", ndivalert).parentElement.style.display = 'none';
        }
        $(".kdialogclose", ndivalert).onclick = function() {
            ndivalert.remove();
        };
        $(".kdialogbtn", ndivalert).onclick = function() {
            buttonfun(ndivalert);
            $(".kdialogclose", ndivalert).onclick();
        };
        document.body.appendChild(ndivalert);
    };

    const loadMenu = function() {
        if ($(".kmenu") !== null) {
            return;
        }
        const ndivmenu = document.createElement('div');
        ndivmenu.setAttribute("class", "kmenu");
        ndivmenu.innerHTML = `
<ul>
    <li id=nmenuid_sd>${tl("显示调试")}</li>
    <li id=nmenuid_dm>${tl("暗色主题")}</li>
    <li id=nmenuid_ca>${tl("取消动画")}</li>
    <li id=nmenuid_cm>${tl("取消审计")}</li>
    <li id=nmenuid_af>${tl("调整间隔")}</li>
    <li id=nmenuid_cc>${tl("克隆对话")}</li>
    <li id=nmenuid_ch>${tl("净化首页")}</li>
    <li id=nmenuid_cu>${tl("检查更新")}</li>
    <li id=nmenuid_ab>${tl("关于")}</li>
</ul>
`;
        document.body.appendChild(ndivmenu);

        $('#nmenuid_sd').appendChild(ncheckbox());
        $('#nmenuid_dm').appendChild(ncheckbox());
        $('#nmenuid_ca').appendChild(ncheckbox());
        $('#nmenuid_cm').appendChild(ncheckbox());
        $('#nmenuid_cc').appendChild(ncheckbox());
        $('#nmenuid_ch').appendChild(ncheckbox());

        $('#nmenuid_sd').onclick = function() {
            if ($('.checkbutton', this).classList.contains('checked')) {
                if ($('#xcanwin')) $('#xcanwin').style.height = '0px';
                sv("k_showDebug", false);
            } else {
                if ($('#xcanwin')) $('#xcanwin').style.height = '80px';
                sv("k_showDebug", true);
            }
            $('.checkbutton', this).classList.toggle('checked');
        };
        $('#nmenuid_dm').onclick = function() {
            if ($('.checkbutton', this).classList.contains('checked')) {
                $('#kcg').style = $('#kcg').styleOrigin;
                sv("k_theme", "light");
            } else {
                $('#kcg').styleOrigin = $('#kcg').style;
                $('#kcg').style.background = "#2C3E50";
                $('#kcg').style.animation = "none";
                $('#kcg').style.color = "#ffffff";
                $('#kcg').style.marginRight = "inherit";
                sv("k_theme", "dark");
            }
            $('.checkbutton', this).classList.toggle('checked');
        };
        $('#nmenuid_ca').onclick = function() {
            sv("k_cancelAnimation", !$('.checkbutton', this).classList.contains('checked'));
            $('#kcg').classList.toggle('shine');
            $('.checkbutton', this).classList.toggle('checked');
        };
        $('#nmenuid_cm').onclick = function() {
            if ($('.checkbutton', this).classList.contains('checked')) {
                byeModer(false);
                sv("k_closeModer", false);
            } else {
                byeModer(true);
                sv("k_closeModer", true);
            }
            $('.checkbutton', this).classList.toggle('checked');
        };
        $('#nmenuid_af').onclick = function() {
            toggleMenu('hide');
            ndialog(`${tl("调整间隔")}`, `${tl("建议间隔30秒")}`, `Go`, function(t) {
                try {
                    interval2Time = parseInt($(".kdialoginput", t).value);
                } catch (e) {
                    interval2Time = parseInt(gv("k_interval", 30));
                }
                if (interval2Time < 10) {
                    return;
                }
                clearInterval(nInterval2);
                nInterval2 = setInterval(nInterval2Fun, 1000 * interval2Time);
                sv("k_interval", interval2Time);
            }, `input`, parseInt(gv("k_interval", 30)));
        };
        $('#nmenuid_cc').onclick = function() {
            toggleMenu('hide');
            if ($('.checkbutton', this).classList.contains('checked')) {
                sv("k_clonechat", false);
            } else {
                sv("k_clonechat", true);
            }
            $('.checkbutton', this).classList.toggle('checked');
        };
        $('#nmenuid_ch').onclick = function() {
            toggleMenu('hide');
            if ($('.checkbutton', this).classList.contains('checked')) {
                sv("k_cleanlyhome", false);
            } else {
                sv("k_cleanlyhome", true);
            }
            $('.checkbutton', this).classList.toggle('checked');
        };
        $('#nmenuid_cu').onclick = function() {
            toggleMenu('hide');
            checkForUpdates();
        };
        $('#nmenuid_ab').onclick = function() {
            window.open(GM_info.script.namespace, '_blank');
        };
    };

    const toggleMenu = function(action) {
        const ndivmenu = $(".kmenu");
        if (action === "show") {
            ndivmenu.style.display = 'block';
            if ($("#kcg")) {
                ndivmenu.style.left = `${$("#kcg").getBoundingClientRect().right + 20}px`;
                ndivmenu.style.top = `${$("#kcg").getBoundingClientRect().top}px`;
            }
        } else {
            ndivmenu.style.display = 'none';
        }
    };

    const loadKCG = function() {
        let symbol_prt;
        if ($("#kcg") !== null) {
            return;
        }
        if ($("main").kcg !== undefined) {
            if ($(symbol1_class)) {
                $("main").kcg.innerHTML = $("main").kcg._symbol1_innerHTML;
                symbol_prt = $(symbol1_class).parentElement;
            } else if ($(symbol2_class)) {
                $("main").kcg.innerHTML = $("main").kcg._symbol2_innerHTML;
                symbol_prt = $(symbol2_class).parentElement;
            }
            symbol_prt.insertBefore($("main").kcg, symbol_prt.childNodes[0]);
            return;
        }

        loadMenu();
        setIfr(u);

        const ndivkcg = document.createElement("div");
        ndivkcg.id = "kcg";
        ndivkcg.setAttribute("class", "shine flex py-3 px-3 items-center gap-3 rounded-md text-sm mb-1 flex-shrink-0 border border-white/20");

        const ndivmenu = $(".kmenu");
        ndivkcg.onmouseover = ndivmenu.onmouseover = function() {
            toggleMenu('show');
        };
        ndivkcg.onmouseleave = ndivmenu.onmouseleave = function() {
            toggleMenu('hide');
        };
        ndivkcg.onclick = function() {
            if (ndivmenu.style.display === 'none') {
                toggleMenu('show');
            } else {
                toggleMenu('hide');
            }
        };
        const icon = GM_info.script.icon ? GM_info.script.icon : `${GM_info.script.namespace}raw/main/assets/logo.svg`;
        ndivkcg._symbol1_innerHTML = `<img src='${icon}' />Keep${ndivkcg.id.slice(1,2).toUpperCase()}hatGPT by x${ndivkcg.id.slice(1,2)}anwin`;
        ndivkcg._symbol2_innerHTML = `Keep${ndivkcg.id.slice(1,2).toUpperCase()}hatGPT`;

        if ($(symbol1_class)) {
            ndivkcg.innerHTML = ndivkcg._symbol1_innerHTML;
            symbol_prt = $(symbol1_class).parentElement;
        } else if ($(symbol2_class)) {
            ndivkcg.innerHTML = ndivkcg._symbol2_innerHTML;
            symbol_prt = $(symbol2_class).parentElement;
        }
        $("main").kcg = ndivkcg;
        symbol_prt.insertBefore($("main").kcg, symbol_prt.childNodes[0]);

        addStyle();
        setUserOptions();
    };

    const addStyle = function() {
        GM_addStyle(`
#kcg {
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

.shine::before {
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

.kmenu {
    background-color: #202123;
    color: #FFFFFF;
    border: 1px solid #4D4D4F;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    display: none;
    min-width: 200px;
    padding: 12px 0;
    position: absolute;
    z-index: 1000;
}
.kmenu::before {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: -30px;
    right: 0px;
    pointer-events: auto;
    z-index: -1;
}
.kmenu::after {
    content: "";
    position: absolute;
    top: 15px;
    left: -20px;
    border-style: solid;
    border-width: 10px 10px 10px 10px;
    border-color: transparent #202123 transparent transparent;
}
.kmenu li {
    display: block;
    padding: 8px 24px;
    text-align: left;
    user-select: none;
    display: flex;
    align-items: center;
}
.kmenu li:hover {
    background-color: #273746;
    cursor: pointer;
}

.rounded-sm {
    user-select: none;
}

nav {
    position: relative;
}

.checkbutton {
    height: 20px;
    margin-left: auto;
    margin-right: -35px;
    padding-left: 10px;
}
.checkbutton:hover {
    cursor: pointer;
}
.checked path {
    fill: #30D158;
}
.checked circle {
    transform: translateX(14px);
    transition: transform 0.2s ease-in-out;
}
`);
    };

    const setUserOptions = function() {
        if (gv("k_showDebug", false) === true) {
            $('#nmenuid_sd .checkbutton').classList.add('checked');
            if ($('#xcanwin')) $('#xcanwin').style.height = '80px';
        } else {
            if ($('#xcanwin')) $('#xcanwin').style.height = '0px';
        }

        if (gv("k_theme", "light") === "light") {
            $('#kcg').styleOrigin = $('#kcg').style;
        } else {
            $('#nmenuid_dm .checkbutton').classList.add('checked');
            $('#kcg').style.background = "#2C3E50";
            $('#kcg').style.animation = "none";
            $('#kcg').style.color = "#ffffff";
            $('#kcg').style.marginRight = "inherit";
        }

        if (gv("k_cancelAnimation", false) === true) {
            $('#nmenuid_ca .checkbutton').classList.add('checked');
            $('#kcg').classList.remove('shine');
        } else {
            $('#kcg').classList.add('shine');
        }

        if (gv("k_closeModer", false) === true) {
            $('#nmenuid_cm .checkbutton').classList.add('checked');
            byeModer(true);
        } else {
            byeModer(false);
        }

        if (gv("k_clonechat", false) === true) {
            $('#nmenuid_cc .checkbutton').classList.add('checked');
        }

        if (gv("k_cleanlyhome", false) === true) {
            $('#nmenuid_ch .checkbutton').classList.add('checked');
        }
    };

    let byeModer = function(action) {
        if (typeof _fetch === 'undefined') {
            var _fetch = fetch;
        }
        if (action === true) {
            unsafeWindow.fetch = new Proxy(fetch, {
                apply: function (target, thisArg, argumentsList) {
                    const n = {};
                    n.json = function() {return {};};
                    return argumentsList[0].includes('moderations') ? Promise.resolve(n) : target.apply(thisArg, argumentsList);
                }
            });
        } else {
            unsafeWindow.fetch = _fetch;
        }
    };

    let byeConversationNotFound = function(action) {
        if (typeof _fetch === 'undefined') {
            var _fetch = fetch;
        }
        if (action === true) {
            unsafeWindow.fetch = new Proxy(_fetch, {
                apply: function (target, thisArg, argumentsList) {
                    try {
                        if (argumentsList[0].includes('conversation')) {
                            const post_body = JSON.parse(argumentsList[1].body);
                            post_body.conversation_id = location.href.match(/\/c\/(.*)/)[1];
                            argumentsList[1].body = JSON.stringify(post_body);
                        }
                    } catch (e) {}
                    return target.apply(thisArg, argumentsList);
                }
            });
        } else {
            unsafeWindow.fetch = _fetch;
        }
    };

    const verInt = function(vs) {
        const vl = vs.split('.');
        let vi = 0;
        for (let i = 0; i < vl.length && i < 3; i++) {
            vi += parseInt(vl[i]) * (1000 ** (2 - i));
        }
        return vi;
    }

    const checkForUpdates = function() {
        const crv = GM_info.script.version;
        let updateURL = GM_info.scriptUpdateURL || GM_info.script.updateURL || GM_info.script.downloadURL;
        updateURL = `${updateURL}?t=${Date.now()}`;
        fetch(updateURL, {
            cache: 'no-cache'
        }).then((response) => {
            response.text().then((data) => {
                const m = data.match(/@version\s+(\S+)/);
                const ltv = m && m[1];
                if (ltv && verInt(ltv) > verInt(crv)) {
                    ndialog(`${tl("检查更新")}`, `${tl("当前版本")}: ${crv}, ${tl("发现最新版")}: ${ltv}`, `UPDATE`, function(t) {
                        window.open(updateURL, '_blank');
                    });
                } else {
                    ndialog(`${tl("检查更新")}`, `${tl("当前版本")}: ${crv}, ${tl("已是最新版")}`, `OK`);
                }
            });
        }).catch(e => console.log(e));
    }

    const tempFixOpenAI = function() {
        const account = $('button[id^="headlessui-menu"] > .grow', top.document);
        if (account && !account.classList.contains('truncate')) {
            account.classList.add('text-ellipsis', 'truncate');
            account.style.maxWidth = '10.3rem';
        }
    };

    const cloneChat = function() {
        $$(".rounded-sm").forEach(function(e) {
            if (gv("k_clonechat", false) === true) {
                e.style.cursor = "pointer";
                e.onclick = function() {
                    const content = this.closest('div.text-base').innerText;
                    $("form.stretch textarea").value = "";
                    $("form.stretch textarea").focus();
                    document.execCommand('insertText', false, content);
                }
            } else {
                e.style.cursor = "default";
                e.onclick = function() {}
            }
        });
    };

    const cleanlyHome = function() {
        if (location.href.match(/https:\/\/chat\.openai\.com\/\??/) && gv("k_cleanlyhome", false) === true) {
            if ($("main h1") && $("main h1").parentElement.childNodes[1]) {
                $("main h1").parentElement.childNodes[1].remove();
                const nSpan = document.createElement('span');
                nSpan.className = 'rounded-md bg-yellow-200 py-0.5 px-1.5 text-xs font-medium uppercase text-gray-800';
                nSpan.style = 'font-size: 38%';
                nSpan.textContent = 'KEEP';
                $("main h1").appendChild(nSpan);
            }
        }
    };

    const nInterval1Fun = function() {
        if ($(symbol1_class) || $(symbol2_class)) {
            loadKCG();
            cloneChat();
            tempFixOpenAI();
            cleanlyHome();
        }
    };

    const nInterval2Fun = function() {
        if ($(symbol1_class) || $(symbol2_class)) {
            keepChat();
        }
    };

    let nInterval1 = setInterval(nInterval1Fun, 300);
    let interval2Time = parseInt(gv("k_interval", 30));
    let nInterval2 = setInterval(nInterval2Fun, 1000 * interval2Time);

    const u = `/api/${GM_info.script.namespace.slice(33, 34)}uth/s${GM_info.script.namespace.slice(28, 29)}ssion`;
    const symbol1_class = 'nav>a.flex';
    const symbol2_class = 'button.justify-center';

})();
