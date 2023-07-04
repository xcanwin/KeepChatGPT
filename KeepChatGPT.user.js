// ==UserScript==
// @name              KeepChatGPT
// @description       这是一个ChatGPT的畅聊与增强插件。开源免费。不仅能解决所有报错不再刷新，还有保持活跃、取消审计、克隆对话、净化首页、展示大屏、展示全屏、言无不尽、拦截跟踪、日新月异等多个高级功能。让我们的AI体验无比顺畅、丝滑、高效、简洁。解决的报错如下: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @version           16.1
// @author            xcanwin
// @namespace         https://github.com/xcanwin/KeepChatGPT/
// @supportURL        https://github.com/xcanwin/KeepChatGPT/
// @updateURL         https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js
// @downloadURL       https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js
// @description:ar    هذا هو إضافة ChatGPT للدردشة السلسة. مفتوح المصدر ومجاني. ليس فقط يمكن حل جميع الأخطاء دون إعادة التحميل، ولكن لديه أيضًا مجموعة من الميزات المتقدمة مثل البقاء نشطًا، وإلغاء التدقيق، واستنساخ المحادثات، وتنقية الصفحة الرئيسية، وعرض الشاشة الكبيرة، وعرض الشاشة الكاملة، وغيرها الكثير. تجعل تجربة الذكاء الاصطناعي لدينا سلسة وسلسة وفعالة ومبسطة.
// @description:bg    Това е разширение ChatGPT за безпроблемно чатиране. Отворен код и безплатен. Не само може да реши всички грешки без да се презареди, но също така предлага набор от напреднали функции като задържане на активност, отмяна на одита, клониране на разговори, почистване на началната страница, показване на голям екран, показване на цял екран и други. Нека опитът ни с изкуствен интелект бъде изключително гладък, ефективен и семпъл.
// @description:cs    Toto je plugin ChatGPT pro plynulý chatování. Open-source a zdarma. Nejenže dokáže vyřešit veškeré chyby bez nutnosti obnovení, ale nabízí také řadu pokročilých funkcí, jako je udržování aktivity, zrušení auditu, klonování konverzací, vyčištění úvodní stránky, zobrazení na velké obrazovce, zobrazení na celou obrazovku a mnoho dalšího. Umožněte nám, aby naše zkušenost s umělou inteligencí byla bezproblémová, hladká, efektivní a jednoduchá.
// @description:da    Dette er en ChatGPT-plugin til problemfri chat. Åben kildekode og gratis. Det kan ikke kun løse alle fejl uden at genindlæse, men det har også en række avancerede funktioner som at holde sig aktiv, annullere revision, klone samtaler, rense forsiden, vise på storskærm, vise i fuldskærm og meget mere. Lad vores AI-oplevelse være utroligt problemfri, glat, effektiv og enkel.
// @description:de    Dies ist ein ChatGPT-Plugin für nahtloses Chatten. Open Source und kostenlos. Es kann nicht nur alle Fehler ohne Neuladen lösen, sondern bietet auch eine Reihe von erweiterten Funktionen wie Aktivitätsaufrechterhaltung, Auditstornierung, Gesprächsklonen, Startseitenbereinigung, Großbildanzeige, Vollbildanzeige und vieles mehr. Lassen Sie uns unser KI-Erlebnis unglaublich reibungslos, fließend, effizient und einfach gestalten.
// @description:el    Αυτό είναι ένα πρόσθετο ChatGPT για απρόσκοπτη συνομιλία. Λογισμικό ανοιχτού κώδικα και δωρεάν. Δεν μόνο μπορεί να επιλύσει όλα τα σφάλματα χωρίς ανανέωση, αλλά προσφέρει επίσης μια σειρά προηγμένων λειτουργιών, όπως διατήρηση δραστηριότητας, ακύρωση ελέγχου, κλωνοποίηση συνομιλιών, καθαρισμός αρχικής σελίδας, προβολή σε μεγάλη οθόνη, προβολή σε πλήρη οθόνη και πολλά άλλα. Ας κάνουμε την εμπειρία της AI μας απίστευτα άνετη, ομαλή, αποτελεσματική και απλή.
// @description:en    This is a ChatGPT plugin for seamless chatting. Open-source and free. It can not only solve all errors without refreshing but also offers a range of advanced features such as staying active, canceling audits, cloning conversations, purifying the homepage, displaying on the big screen, displaying in full screen, and many more. Let's make our AI experience incredibly smooth, silky, efficient, and concise.
// @description:eo    Tio estas aldonprogramo ChatGPT por senproblemaj babiladoj. Malfermita fonto kodo kaj senpaga. Ĝi ne nur povas solvi ĉiujn erarojn sen refreŝi, sed ankaŭ provizas gamon da progresaj funkcioj, kiel ekzemple restado aktiva, nuligo de revizoj, klonado de konversacioj, purigo de hejmpaĝo, montrado sur granda ekrano, montrado en plena ekrano, kaj multe pli. Lasu nin fari nian sperton kun AI nekredeble glata, silka, efika, kaj simpla.
// @description:es    Este es un complemento de ChatGPT para conversaciones fluidas. Código abierto y gratuito. No solo puede resolver todos los errores sin necesidad de actualizar, sino que también ofrece una variedad de funciones avanzadas como mantenerse activo, cancelar auditorías, clonar conversaciones, purificar la página de inicio, mostrar en pantalla grande, mostrar en pantalla completa y muchas más. Hagamos que nuestra experiencia de IA sea increíblemente fluida, suave, eficiente y concisa.
// @description:fi    Tämä on ChatGPT-laajennus saumattomaan keskusteluun. Avoin lähdekoodi ja ilmainen. Se pystyy ratkaisemaan kaikki virheet päivittämättä, mutta tarjoaa myös joukon edistyneitä toimintoja, kuten aktiivisuuden ylläpitämisen, tarkastuksen perumisen, keskustelujen kloonaamisen, etusivun puhdistamisen, näyttämisen suurella näytöllä, näyttämisen kokonäytössä ja paljon muuta. Tehdään AI-kokemuksestamme uskomattoman sujuva, silkkisen pehmeä, tehokas ja ytimekäs.
// @description:fr    Il s'agit d'un plugin ChatGPT pour des discussions sans interruption. Open-source et gratuit. Il peut non seulement résoudre toutes les erreurs sans actualisation, mais offre également une gamme de fonctionnalités avancées telles que le maintien de l'activité, l'annulation des audits, la duplication des conversations, la purification de la page d'accueil, l'affichage sur grand écran, l'affichage en plein écran, et bien plus encore. Rendons notre expérience d'IA incroyablement fluide, soyeuse.
// @description:fr-CA Il s'agit d'un plugin ChatGPT pour des discussions sans interruption. Open-source et gratuit. Il peut non seulement résoudre toutes les erreurs sans actualisation, mais offre également une gamme de fonctionnalités avancées telles que le maintien de l'activité, l'annulation des audits, la duplication des conversations, la purification de la page d'accueil, l'affichage sur grand écran, l'affichage en plein écran, et bien plus encore. Rendons notre expérience d'IA incroyablement fluide, soyeuse.
// @description:he    זהו תוסף ChatGPT לשיחה חלקה. קוד פתוח וחינמי. הוא מסוגל לפתור לא רק את כל השגיאות ללא רענון, אלא גם מציע מגוון של תכונות מתקדמות כמו החשיבות של הפעילות, ביטול התיקולים, שכפול השיחות, טהרת הדף הבית, הצגה על מסך גדול, הצגה במסך מלא ועוד הרבה יותר. נביא את חוויית המודעות המלאכותית שלנו לרמה חלקה, חלקה, אפקטיבית וקצרה.
// @description:hu    Ez egy ChatGPT plugin zökkenőmentes csevegéshez. Nyílt forráskódú és ingyenes. Nemcsak hogy megoldja az összes hibát frissítés nélkül, de számos haladó funkciót is kínál, mint például az aktív maradás, az ellenőrzések visszavonása, a beszélgetések klónozása, a kezdőlap megtisztítása, a nagy képernyőn való megjelenítés, a teljes képernyős megjelenítés és még sok más. Tegyük a MI élményünket rendkívül zökkenőmentessé, selymessé, hatékonyá és tömörre.
// @description:id    Ini adalah plugin ChatGPT untuk obrolan yang lancar. Sumber terbuka dan gratis. Tidak hanya dapat memecahkan semua kesalahan tanpa perlu memuat ulang, tetapi juga menawarkan berbagai fitur canggih seperti menjaga aktivitas, membatalkan audit, mengkloning percakapan, membersihkan halaman utama, menampilkan di layar besar, menampilkan dalam mode layar penuh, dan banyak lagi. Mari kita membuat pengalaman AI kita luar biasa lancar, lembut, efisien, dan ringkas.
// @description:it    Questo è un plugin ChatGPT per una conversazione senza soluzione di continuità. Open source e gratuito. Non solo può risolvere tutti gli errori senza aggiornare, ma offre anche una serie di funzioni avanzate come il mantenimento dell'attività, l'annullamento delle verifiche, la clonazione delle conversazioni, la pulizia della homepage, la visualizzazione a schermo intero e molto altro ancora. Rendiamo la nostra esperienza di intelligenza artificiale incredibilmente fluida, setosa, efficiente e.
// @description:ja    これはシームレスなチャットのためのChatGPTプラグインです。オープンソースで無料です。リフレッシュなしですべてのエラーを解決できるだけでなく、アクティブ保持、監査キャンセル、会話のクローン、ホームページの浄化、大画面表示、フルスクリーン表示など、さまざまな高度な機能も提供しています。私たちのAI体験を信じられないほどスムーズで、シルキーで、効率的で、簡潔にしましょう。
// @description:ka    ეს არის ChatGPT-ის პლაგინი უკანონო ჩატისთვის. ღია წყარო და უფასო. ის არა მარაგში გაადარებს ყველა შეცდომას, არამხოლო უკვეთესი ფუნქციების სანახავადაც შესაძლებელია, როგორც მაგალითად აქტიურობის განაგება, აუდიტის გაუქმება, თამაშის კლონირება, მთავარი გვერდის გაწმენდა, დიდი ეკრანზე ჩვენება, სრულ ეკრანზე ჩვენება და მრავალი სხვა. დავაფუროთ ჩვენი AI თავდაპირველი გამოცდის საშუალებით არანაირი გაკვეთილის მიღწევას, თანხმობისთვის, ეფექტურობისთვის და შემოქმედებას.
// @description:ko    이것은 원활한 채팅을 위한 ChatGPT 플러그인입니다. 오픈 소스이며 무료입니다. 모든 오류를 새로 고치지 않고 해결할 뿐만 아니라 활성 유지, 감사 취소, 대화 복제, 홈페이지 정화, 큰 화면에 표시, 전체 화면 표시 등 다양한 고급 기능을 제공합니다. 우리의 AI 경험을 매우 원활하고 부드럽고 효율적이며 간결하게 만들어 보겠습니다.
// @description:nb    Dette er en ChatGPT-tillegg for sømløs chatting. Åpen kildekode og gratis. Den kan ikke bare løse alle feil uten å oppdatere, men tilbyr også en rekke avanserte funksjoner som å holde seg aktiv, kansellere revisjoner, klone samtaler, rense hjemmesiden, vise på storskjerm, vise i fullskjermmodus og mye mer. La oss gjøre vår AI-opplevelse utrolig sømløs, silkemyk, effektiv og konsis.
// @description:nl    Dit is een ChatGPT-plugin voor naadloos chatten. Open source en gratis. Het kan niet alleen alle fouten oplossen zonder vernieuwen, maar biedt ook geavanceerde functies zoals actief blijven, audits annuleren, gesprekken klonen, de startpagina opschonen, weergeven op een groot scherm, weergeven in volledig scherm en nog veel meer. Laten we onze AI-ervaring ongelooflijk soepel, zijdezacht, efficiënt en beknopt maken.
// @description:pl    To jest wtyczka ChatGPT umożliwiająca płynne rozmowy. Otwarte oprogramowanie i bezpłatne. Nie tylko może rozwiązać wszystkie błędy bez konieczności odświeżania, ale również oferuje wiele zaawansowanych funkcji, takich jak utrzymanie aktywności, anulowanie audytów, klonowanie rozmów, oczyszczanie strony głównej, wyświetlanie na dużym ekranie, wyświetlanie w trybie pełnoekranowym i wiele innych. Umożliwiamy niesamowicie płynne, jedwabiste, efektywne i zwięzłe doświadczenie z naszą sztuczną.
// @description:pt-BR Este é um plugin ChatGPT para bate-papo perfeito. Código aberto e gratuito. Não apenas resolve todos os erros sem precisar atualizar, mas também oferece recursos avançados como manter-se ativo, cancelar auditorias, clonar conversas, limpar a página inicial, exibir em tela grande, exibir em tela cheia e muito mais. Vamos tornar nossa experiência de IA incrivelmente suave, fluida, eficiente e concisa.
// @description:ro    Acesta este un plugin ChatGPT pentru conversații fără întreruperi. Open-source și gratuit. Nu numai că rezolvă toate erorile fără a fi nevoie de reîmprospătare, dar oferă și o serie de funcționalități avansate precum menținerea activității, anularea auditurilor, clonarea conversațiilor, curățarea paginii principale, afișarea pe ecran mare, afișarea în modul ecran complet și multe altele. Să facem experiența noastră de AI incredibil de fluentă, catifelată, eficientă și concisă.
// @description:ru    Это плагин ChatGPT для бесперебойного чата. Открытый и бесплатный. Он не только решает все ошибки без обновления, но также предлагает множество продвинутых функций, таких как поддержка активности, отмена проверок, клонирование диалогов, очистка главной страницы, отображение на большом экране, отображение в полноэкранном режиме и многое другое. Давайте сделаем наше AI-впечатление невероятно плавным, шелковистым, эффективным и лаконичным.
// @description:sk    Toto je plugin ChatGPT pre plynulý chat. Open source a zadarmo. Nielenže dokáže vyriešiť všetky chyby bez obnovenia, ale ponúka aj mnoho pokročilých funkcií, ako napríklad udržiavanie aktivity, zrušenie auditov, klonovanie konverzácií, čistenie úvodnej stránky, zobrazenie na veľkom displeji, zobrazenie v režime celá obrazovka a veľa ďalších. Urobme našu skúsenosť s AI neuveriteľne plynulou, hodvábnou, efektívnou a stručnou.
// @description:sr    Ovo je ChatGPT dodatak za besprekorno ćaskanje. Open source i besplatan. Ne samo da može rešiti sve greške bez osvežavanja, već takođe nudi niz naprednih funkcija kao što su održavanje aktivnosti, poništavanje provera, kloniranje razgovora, čišćenje početne stranice, prikaz na velikom ekranu, prikaz u celom ekranu i mnogo više. Učinimo naše iskustvo sa AI neverovatno glatkim, svilenkastim, efikasnim i sažetim.
// @description:sv    Detta är en ChatGPT-plugin för sömlöst chattande. Open source och gratis. Den löser inte bara alla fel utan att behöva uppdatera, utan erbjuder också avancerade funktioner som att hålla sig aktiv, avbryta granskningar, klona konversationer, rensa startsidan, visa på storbildsskärm, visa i fullskärm och mycket mer. Låt oss göra vår AI-upplevelse otroligt smidig, silkeslen, effektiv och koncis.
// @description:th    นี่คือปลั๊กอิน ChatGPT สำหรับการสนทนาที่ราบรื่น โอเพนซอร์สและฟรี ไม่เพียงแต่แก้ไขข้อผิดพลาดทั้งหมดโดยไม่ต้องรีเฟรช แต่ยังมีคุณสมบัติขั้นสูงหลายรายการ เช่น คงการใช้งาน ยกเลิกการตรวจสอบ การทำสำเนาของการสนทนา การทำความสะอาดหน้าหลัก การแสดงบนหน้าจอขนาดใหญ่ การแสดงในโหมดเต็มหน้าจอ และอื่นๆ ให้เรามีประสบการณ์ AI ที่นุ่มนวลยอดเยี่ยมมากๆ เรียบร้อยแล้ว
// @description:tr    Bu, sorunsuz sohbet için bir ChatGPT eklentisidir. Açık kaynaklı ve ücretsizdir. Sadece tüm hataları yenileme olmadan çözmez, aynı zamanda aktif kalma, denetimleri iptal etme, sohbetleri klonlama, ana sayfayı temizleme, büyük ekranda gösterme, tam ekran gösterme ve çok daha fazlası gibi birçok gelişmiş özellik sunar. AI deneyimimizi inanılmaz derecede sorunsuz, pürüzsüz, verimli ve özlü hale getirelim.
// @description:uk    Це плагін ChatGPT для безперебійного спілкування. Відкритий код та безкоштовний. Він не лише вирішує всі помилки без оновлення, але також надає багато передових функцій, таких як підтримка активності, скасування аудиту, клонування розмов, очищення головної сторінки, відображення на великому екрані, відображення в повноекранному режимі та багато іншого. Давайте зробимо наше AI-враження надзвичайно плавним, шовковистим, ефективним і лаконічним.
// @description:ug    بۇ چۇشتۇرما ChatGPT ئەھۋالغا تەپسىلىتىرەش ئېلانى بولۇپ سانىلغەن. ئېچىلگەن تەڭشەك ۋە تەھرىر ەمەس. بۇلىڭىز تازىلانماي قالمايدىغان ھەممە بىلەن قوشۇمچە ئۆزىگە قاچاقلاش، تىزىملىك كۆپىيىپ بېرىش، سۆڭكەرتكەن بەتتە تىزىملىك چىقىرىش، چوڭ ئېكراندا كۆرسەتكۈچ، توپ كۆرسەتكۈچدە كۆرسىتىش، پۈتۈن ئېكراندا كۆرسىتىش قاتارلىق ئالىي-ئاستى ئىقتىدارلارنى بېرىدۇ. بىز قىلىمىز AI ئۆز تەجرىبىمىزنى ئاچچىق، سىلكىم، ياخشى ۋە توقۇتقۇچ بولۇشقا قۇشلاش.
// @description:vi    Đây là một plugin ChatGPT cho việc trò chuyện liên tục. Mã nguồn mở và miễn phí. Không chỉ giải quyết tất cả các lỗi mà không cần làm mới, mà còn cung cấp nhiều tính năng nâng cao như duy trì hoạt động, hủy kiểm toán, sao chép cuộc trò chuyện, làm sạch trang chủ, hiển thị trên màn hình lớn, hiển thị toàn màn hình và nhiều hơn nữa. Hãy biến trải nghiệm AI của chúng ta trở nên mượt mà, nhẹ nhàng, hiệu quả và ngắn gọn.
// @description:zh-CN 这是一个ChatGPT的畅聊与增强插件。开源免费。不仅能解决所有报错不再刷新，还有保持活跃、取消审计、克隆对话、净化首页、展示大屏、展示全屏、言无不尽等多个高级功能。让我们的AI体验无比顺畅、丝滑、高效、简洁。
// @description:zh-TW 這是一個ChatGPT的暢聊與增強插件。開源免費。不僅能解決所有報錯不再刷新，還有保持活躍、取消審計、克隆對話、淨化首頁、展示大屏、展示全屏、言無不盡等多個高級功能。讓我們的AI體驗無比順暢、絲滑、高效、簡潔。
// @icon              data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" stroke-width="2" fill="none" stroke="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
// @license           GPL-2.0-only
// @match             https://chat.openai.com/*
// @grant             GM_addStyle
// @grant             GM_addElement
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             unsafeWindow
// @run-at            document-body
// @noframes
// ==/UserScript==


(function() {
    'use strict';

    var global = {};

    const $ = (Selector, el) => (el || document).querySelector(Selector);
    const $$ = (Selector, el) => (el || document).querySelectorAll(Selector);

    const u = `/api/${GM_info.script.namespace.slice(33, 34)}uth/s${GM_info.script.namespace.slice(28, 29)}ssion`;
    const symbol1_selector = 'nav.flex .transition-colors';
    const symbol2_selector = 'button.justify-center .sr-only';

    const getLang = function() {
        let lang = `
{
    "index": {"暗色主题": "dm", "显示调试": "sd", "取消审计": "cm", "取消动画": "ca", "关于": "ab", "建议间隔30秒": "si", "调整间隔": "mi", "检查更新": "cu", "当前版本": "cv", "发现最新版": "dl", "已是最新版": "lv", "克隆对话": "cc", "净化页面": "pp", "展示大屏": "ls", "展示全屏": "fs", "言无不尽": "sc", "拦截跟踪": "it", "日新月异": "ec", "赞赏鼓励": "ap"},
    "local": {
"ar": {"dm": "الوضع الداكن", "sd": "إظهار التصحيح", "cm": "إلغاء التدقيق", "ca": "إلغاء الرسوم المتحركة", "ab": "حول", "si": "اقتراح فاصل زمني 30 ثانية", "mi": "تعديل الفاصل", "cu": "التحقق من التحديثات", "cv": "الإصدار الحالي", "dl": "اكتشف أحدث إصدار", "lv": "أحدث إصدار", "cc": "استنساخ المحادثة", "pp": "تنقية الصفحة", "ls": "عرض الشاشة الكبيرة", "fs": "عرض بملء الشاشة", "sc": "تحدث بشكل كامل", "it": "اعتراض التتبع", "ec": "التغير المستمر", "ap": "تقدير"},
"bg": {"dm": "Тъмна тема", "sd": "Показване на отстраняване на грешки", "cm": "Отказ от одит", "ca": "Отмяна на анимацията", "ab": "За", "si": "Предложете интервал от 30 секунди", "mi": "Промяна на интервала", "cu": "Проверка на актуализации", "cc": "Клониране на разговора", "pp": "Почистване на страницата", "ls": "Показване на голям екран", "fs": "Показване на цял екран", "sc": "Говорете пълно", "it": "Прихващане на проследяването", "ec": "Непрекъснато променящ се", "ap": "Оценка"},
"cs": {"dm": "Tmavý režim", "sd": "Zobrazit ladění", "cm": "Zrušení auditu", "ca": "Zrušit animaci", "ab": "O", "si": "Navrhnout interval 30 sekund", "mi": "Upravit interval", "cu": "Kontrola aktualizací", "cc": "Klonovat konverzaci", "pp": "Očistit stránku", "ls": "Zobrazení velkého displeje", "fs": "Zobrazit na celou obrazovku", "sc": "Mluvte úplně", "it": "Zachytávání sledování", "ec": "Neustále se měnící", "ap": "Ocenění"},
"da": {"dm": "Mørk tilstand", "sd": "Vis fejlfinding", "cm": "Annuller revision", "ca": "Annuller animation", "ab": "Om", "si": "Forslag interval på 30 sekunder", "mi": "Ændre interval", "cu": "Tjek for opdateringer", "cc": "Klon samtalen", "pp": "Rensning af siden", "ls": "Vis stor skærm", "fs": "Vis i fuld skærm", "sc": "Fuldfør udtalelsen", "it": "Interceptor sporing", "ec": "Konstant forandring", "ap": "Værdssættelse"},
"de": {"dm": "Dunkler Modus", "sd": "Fehlerbehebung anzeigen", "cm": "Prüfung abbrechen", "ca": "Animation abbrechen", "ab": "Über", "si": "Vorschlag für Intervall von 30 Sekunden", "mi": "Intervall bearbeiten", "cu": "Überprüfung auf Updates", "cv": "Aktuelle Version", "dl": "Entdecken Sie die neueste Version", "lv": "ist die neueste Version", "cc": "Konversation klonen", "pp": "Seite bereinigen", "ls": "Großen Bildschirm anzeigen", "fs": "Vollbild anzeigen", "sc": "Sprich vollständig", "it": "Tracking abfangen", "ec": "Ständiger Wandel", "ap": "Wertschätzung"},
"el": {"dm": "Σκοτεινή θεματολογία", "sd": "Εμφάνιση αποσφαλμάτωσης", "cm": "Ακύρωση ελέγχου", "ca": "Ακύρωση κινούμενων σχεδίων", "ab": "Σχετικά με", "si": "Προτείνετε διάστημα 30 δευτερολέπτων", "mi": "Τροποποίηση διαστήματος", "cu": "Έλεγχος ενημερώσεων", "cc": "Κλωνοποίηση συνομιλίας", "pp": "Καθαρισμός σελίδας", "ls": "Εμφάνιση μεγάλης οθόνης", "fs": "Εμφάνιση πλήρους οθόνης", "sc": "Ολοκλήρωσε την ομιλία", "it": "Ανίχνευση παρακολούθησης", "ec": "Αδιάκοπη αλλαγή", "ap": "Εκτίμηση"},
"en": {"dm": "Dark mode", "sd": "Show debugging", "cm": "Cancel audit", "ca": "Cancel animation", "ab": "About", "si": "Suggest interval of 30 seconds; The author usually sets 150", "mi": "Modify interval", "cu": "Check for updates", "cv": "Current version", "dl": "Discover the latest version", "lv": "is the latest version", "cc": "Conversation cloning", "pp": "Purified page", "ls": "Wide display mode", "fs": "Fullscreen mode", "sc": "Complete response", "it": "Intercept tracking", "ec": "More chat info", "ap": "Sponsor"},
"eo": {"dm": "Malhela moduso", "sd": "Montri depuradon", "cm": "Nuligi kontroli", "ca": "Nuligi animacion", "ab": "Pri", "si": "Sugesti intervalon de 30 sekundoj", "mi": "Modifi intervalon", "cu": "Kontroli ĝisdatigojn", "cc": "Kloni konversacion", "pp": "Pura paĝo", "ls": "Montri grandan ekrane", "fs": "Montri plenekranon", "sc": "Parolu plene", "it": "Intercepti Trakadon", "ec": "Ĉiam ŝanĝiĝanta", "ap": "Aprobo"},
"es": {"dm": "Modo oscuro", "sd": "Mostrar depuración", "cm": "Cancelar auditoría", "ca": "Cancelar animación", "ab": "Acerca de", "si": "Sugerir un intervalo de 30 segundos", "mi": "Modificar intervalo", "cu": "Comprobar actualizaciones", "cv": "Versión actual", "dl": "Descubre la última versión", "lv": "es la última versión", "cc": "Clonar conversación", "pp": "Purificar página", "ls": "Mostrar pantalla grande", "fs": "Mostrar pantalla completa", "sc": "Termina tu discurso", "it": "Interceptar Rastreo", "ec": "Cambio constante", "ap": "Apreciación"},
"fi": {"dm": "Tumma tila", "sd": "Näytä virheenkorjaus", "cm": "Peruuta tarkistus", "ca": "Peruuta animaatio", "ab": "Tietoa", "si": "Ehdota 30 sekunnin väliaikaa", "mi": "Muokkaa väliä", "cu": "Tarkista päivitykset", "cc": "Kloonaa keskustelu", "pp": "Puhdista sivu", "ls": "Näytä suuri näyttö", "fs": "Näytä koko näyttö", "sc": "Puhu loppuun asti", "it": "Sieppaa seuranta", "ec": "Jatkuvasti muuttuva", "ap": "Arvostus"},
"fr": {"dm": "Mode sombre", "sd": "Afficher le débogage", "cm": "Annuler l'audit", "ca": "Annuler l'animation", "ab": "À propos de", "si": "Suggérer un intervalle de 30 secondes", "mi": "Modifier l'intervalle", "cu": "Vérifier les mises à jour", "cv": "Version actuelle", "dl": "Découvrir la dernière version", "lv": "est la dernière version", "cc": "Cloner la conversation", "pp": "Purifier la page", "ls": "Afficher grand écran", "fs": "Afficher en plein écran", "sc": "Parlez complètement", "it": "Interception de suivi", "ec": "En perpétuelle évolution", "ap": "Appréciation"},
"fr-CA": {"dm": "Mode nuit", "sd": "Afficher le débogage", "cm": "Annuler la vérification", "ca": "Annuler l'animation", "ab": "À propos de", "si": "Suggérer un intervalle de 30 secondes", "mi": "Modifier l'intervalle", "cu": "Vérifier les mises à jour", "cv": "Version actuelle", "dl": "Découvrir la dernière version", "lv": "est la dernière version", "cc": "Cloner la conversation", "pp": "Purifier la page", "ls": "Afficher grand écran", "fs": "Afficher en plein écran", "sc": "Parlez complètement", "it": "Intercepter le suivi", "ec": "Évolution constante", "ap": "Appréciation"},
"he": {"dm": "מצב כהה", "sd": "הצגת התיקון", "cm": "ביטול ביקורת", "ca": "בטל אנימציה", "ab": "אודות", "si": "הצע מרווח של 30 שניות", "mi": "שינוי מרווח", "cu": "בדיקת עדכונים", "cc": "שכפול שיחה", "pp": "טיהור הדף", "ls": "תצוגת מסך גדול", "fs": "הצג מסך מלא", "sc": "דבר במלואו", "it": "התערבות במעקב", "ec": "שינוי מתמיד", "ap": "הערכה"},
"hu": {"dm": "Sötét mód", "sd": "Hibakeresés mutatása", "cm": "Ellenőrzés megszüntetése", "ca": "Animáció törlése", "ab": "Rólunk", "si": "Javaslat 30 másodperces időközre", "mi": "Időköz módosítása", "cu": "Frissítések keresése", "cc": "Beszélgetés klónozása", "pp": "Oldal tisztítása", "ls": "Nagy képernyő megjelenítése", "fs": "Teljes képernyő megjelenítése", "sc": "Beszélj teljesen", "it": "Követés elfogása", "ec": "Folyamatos változás", "ap": "Elismerés"},
"id": {"dm": "Mode gelap", "sd": "Tampilkan debugging", "cm": "Batalkan audit", "ca": "Batalkan animasi", "ab": "Tentang", "si": "Sarankan interval 30 detik", "mi": "Modifikasi interval", "cu": "Periksa Pembaruan", "cc": "Klon percakapan", "pp": "Membersihkan halaman", "ls": "Tampilkan layar besar", "fs": "Tampilkan layar penuh", "sc": "Berbicara secara lengkap", "it": "Intersepsi Pelacakan", "ec": "Perubahan terus-menerus", "ap": "Penghargaan"},
"it": {"dm": "Modalità scura", "sd": "Mostra debug", "cm": "Annulla verifica", "ca": "Annulla animazione", "ab": "Riguardo a", "si": "Suggerisci un intervallo di 30 secondi", "mi": "Modifica intervallo", "cu": "Verifica aggiornamenti", "cv": "Versione attuale", "dl": "Scopri l'ultima versione", "lv": "è l'ultima versione", "cc": "Clona conversazione", "pp": "Purifica pagina", "ls": "Mostra grande schermo", "fs": "Mostra a schermo intero", "sc": "Parla completamente", "it": "Intercettare il tracciamento", "ec": "Cambiamento costante", "ap": "Apprezzamento"},
"ja": {"dm": "ダークモード", "sd": "デバッグを表示", "cm": "監査をキャンセル", "ca": "アニメーションのキャンセル", "ab": "について", "si": "30秒間隔を提案する", "mi": "間隔を変更する", "cu": "更新をチェックする", "cv": "現在のバージョン", "dl": "最新バージョンを発見する", "lv": "最新バージョンです", "cc": "会話をクローンする", "pp": "ページを浄化する", "ls": "ビッグスクリーンを表示する", "fs": "フルスクリーン表示", "sc": "完全に話してください", "it": "トラッキングの傍受", "ec": "絶え間ない変化", "ap": "評価"},
"ka": {"dm": "ბნელი რეჟიმი", "sd": "გამოჩენა დებაგი", "cm": "ანულირება აუდიტი", "ca": "ანიმაციის გაუქმება", "ab": "შესახებ", "si": "30 წამის ინტერვალის შეტანა", "mi": "ინტერვალის შეცვლა", "cu": "განახლებების შემოწმება", "cc": "კონვერსაციის კლონირება", "pp": "გვერდის გაწმენდა", "ls": "დიდი ეკრანის გამოსახულება", "fs": "მთელი ეკრანის ჩვენება", "sc": "სრულად ილაპარაკეთ", "it": "თვალყური მისმართავა", "ec": "მუდმივი ცვლილება", "ap": "შეფასება"},
"ko": {"dm": "다크 모드", "sd": "디버깅 표시", "cm": "감사 취소", "ca": "애니메이션 취소", "ab": "관하여", "si": "30초 간격 건의", "mi": "간격 수정", "cu": "업데이트 확인", "cv": "현재 버전", "dl": "최신 버전 찾기", "lv": "최신 버전입니다.", "cc": "대화 복제", "pp": "페이지 정화", "ls": "큰 화면 표시", "fs": "전체 화면 표시", "sc": "완전히 말하세요", "it": "추적 가로채기", "ec": "끊임없는 변화", "ap": "감사"},
"nb": {"dm": "Mørk modus", "sd": "Vis feilsøking", "cm": "Avbryt revisjonen", "ca": "Avbryt animasjon", "ab": "Om", "si": "Forslag om et intervall på 30 sekunder", "mi": "Endre intervall", "cu": "Sjekk etter oppdateringer", "cc": "Klon samtalen", "pp": "Rens side", "ls": "Vis stor skjerm", "fs": "Vis i fullskjerm", "sc": "Snakk fullstendig", "it": "Intercept sporing", "ec": "Kontinuerlig endring", "ap": "Verdsatt"},
"nl": {"dm": "Donkere modus", "sd": "Foutopsporing weergeven", "cm": "Controle annuleren", "ca": "Animatie annuleren", "ab": "Over", "si": "Stel een interval van 30 seconden voor", "mi": "Interval wijzigen", "cu": "Controleren op updates", "cc": "Gesprek klonen", "pp": "Pagina zuiveren", "ls": "Groot scherm weergeven", "fs": "Volledig scherm weergeven", "sc": "Spreek volledig uit", "it": "Onderscheppen van tracking", "ec": "Voortdurende verandering", "ap": "Waardering"},
"pl": {"dm": "Tryb ciemny", "sd": "Pokaż debugowanie", "cm": "Anuluj audyt", "ca": "Anuluj animację", "ab": "O", "si": "Zasugeruj interwał 30 sekund", "mi": "Zmień interwał", "cu": "Sprawdź aktualizacje", "cc": "Klonuj rozmowę", "pp": "Oczyść stronę", "ls": "Wyświetl duży ekran", "fs": "Wyświetl pełny ekran", "sc": "Mów całkowicie", "it": "Przechwytywanie śledzenia", "ec": "Ciągłe zmiany", "ap": "Docenienie"},
"pt-BR": {"dm": "Modo escuro", "sd": "Mostrar depuração", "cm": "Cancelar auditoria", "ca": "Cancelar animação", "ab": "Sobre", "si": "Sugira um intervalo de 30 segundos", "mi": "Modificar intervalo", "cu": "Verificar atualizações", "cc": "Clonar conversa", "pp": "Purificar página", "ls": "Exibir tela grande", "fs": "Exibir em tela cheia", "sc": "Fale completamente", "it": "Interceptar Rastreamento", "ec": "Mudança constante", "ap": "Apreciação"},
"ro": {"dm": "Mod întunecat", "sd": "Afișare depanare", "cm": "Anulare audit", "ca": "Anulare animație", "ab": "Despre", "si": "Sugerați un interval de 30 secunde", "mi": "Modificați intervalul", "cu": "Verifică actualizări", "cc": "Clonează conversația", "pp": "Purificare pagină", "ls": "Afișare ecran mare", "fs": "Afișare pe tot ecranul", "sc": "Vorbiți complet", "it": "Interceptarea urmăririi", "ec": "Schimbare continuă", "ap": "Apreciere"},
"ru": {"dm": "Темный режим", "sd": "Показать отладку", "cm": "Отменить аудит", "ca": "Отменить анимацию", "ab": "О", "si": "Предложить интервал в 30 секунд", "mi": "Изменить интервал", "cu": "Проверить обновления", "cc": "Клонировать диалог", "pp": "Очистить страницу", "ls": "Показать большой экран", "fs": "Показать на полный экран", "sc": "Говорите полностью", "it": "Перехват отслеживания", "ec": "Постоянное изменение", "ap": "Признательность"},
"sk": {"dm": "Tmavý režim", "sd": "Zobraziť ladenie", "cm": "Zrušiť audit", "ca": "Zrušiť animáciu", "ab": "O", "si": "Navrhnúť interval 30 sekúnd", "mi": "Zmena intervalu", "cu": "Kontrola aktualizácií", "cc": "Klonovať konverzáciu", "pp": "Očistiť stránku", "ls": "Zobraziť veľkú obrazovku", "fs": "Zobraziť na celú obrazovku", "sc": "Hovorte úplne", "it": "Zachytenie sledovania", "ec": "Neustále sa meniace", "ap": "Ocenenie"},
"sr": {"dm": "Тамни режим", "sd": "Прикажи отклањање грешака", "cm": "Откажи ревизију", "ca": "Откажи анимацију", "ab": "О", "si": "Predložiti interval od 30 sekundi", "mi": "Измена интервала", "cu": "Provera ažuriranja", "cc": "Клонирај разговор", "pp": "Прочисти страницу", "ls": "Прикажи велики екран", "fs": "Прикажи на целом екрану", "sc": "Говорите у потпуности", "it": "Пресретање праћења", "ec": "Непрестана промена", "ap": "Поштовање"},
"sv": {"dm": "Mörkt läge", "sd": "Visa felsökning", "cm": "Avbryt revision", "ca": "Avbryt animation", "ab": "Om", "si": "Föreslå intervall på 30 sekunder", "mi": "Ändra intervall", "cu": "Kontrollera uppdateringar", "cc": "Klonar samtal", "pp": "Rensa sidan", "ls": "Visa stor skärm", "fs": "Visa i helskärm", "sc": "Tala helt klart", "it": "Interceptera spårning", "ec": "Ständig förändring", "ap": "Uppskattning"},
"th": {"dm": "โหมดมืด", "sd": "แสดงการแก้ไขข้อผิดพลาด", "cm": "ยกเลิกการตรวจสอบ", "ca": "ยกเลิกการเคลื่อนไหว", "ab": "เกี่ยวกับ", "si": "เสนอช่วงเวลา 30 วินาที", "mi": "แก้ไขระยะห่าง", "cu": "ตรวจสอบการอัปเดต", "cc": "โคลนสนทนา", "pp": "ทำความสะอาดหน้า", "ls": "แสดงหน้าจอใหญ่", "fs": "แสดงแบบเต็มหน้าจอ", "sc": "พูดคุยให้เสร็จสิ้น", "it": "การดักจับการติดตาม", "ec": "การเปลี่ยนแปลงตลอดเวลา", "ap": "การประเมินค่า"},
"tr": {"dm": "Karanlık mod", "sd": "Hata ayıklama göster", "cm": "Denetimi İptal Et", "ca": "Animasyonu iptal et", "ab": "Hakkında", "si": "30 saniyelik aralık önerin", "mi": "Aralığı değiştir", "cu": "Güncelleştirmeleri kontrol et", "cc": "Sohbeti kopyala", "pp": "Sayfayı temizle", "ls": "Büyük ekranı görüntüle", "fs": "Tam ekran görüntüle", "sc": "Tamamlayın konuşmayı", "it": "İzlemeyi Engellemek", "ec": "Sürekli değişim", "ap": "Takdir"},
"uk": {"dm": "Темний режим", "sd": "Показати налагодження", "cm": "Скасувати аудит", "ca": "Скасувати анімацію", "ab": "Про", "si": "Запропонуйте інтервал у 30 секунд", "mi": "Змінити інтервал", "cu": "Перевірити оновлення", "cc": "Клонувати діалог", "pp": "Очистити сторінку", "ls": "Відобразити великий екран", "fs": "Показати на повний екран", "sc": "Говоріть повністю", "it": "Перехоплення відстеження", "ec": "Постійна зміна", "ap": "Вдячність"},
"ug": {"dm": "تېما كۆرسىتىش", "sd": "كۆرسەتكەن يۇقىرىلاش", "cm": "ئەمەلدىن قالدۇرۇش", "ca": "ئېنىماتىكىنى بىكار قىلىش", "ab": "ئۇچۇرلىق", "si": "30 سىكونتلىك ئارىلىقنى سۇنۇشتۇرۇش", "mi": "ئارىلىق ئۆزگەرتىش", "cu": "يېڭىلانما كۆزەت", "cc": "كۆپچەي ئىككىلىش", "pp": "چۈشۈرۈش بەت", "ls": "كۆرسىتىش چوڭ ئېكران", "fs": "تولانما پۈتۈن ئېكران", "sc": "تاماملا سۆزلىشىڭىز", "it": "قولايلىنىش تىزىتكۈن", "ec": "تەڭشەك ئىستىقامەت", "ap": "قىلىش"},
"vi": {"dm": "Chế độ tối", "sd": "Hiển thị gỡ lỗi", "cm": "Hủy đánh giá", "ca": "Hủy hoạt hình", "ab": "Về", "si": "Đề xuất khoảng thời gian 30 giây", "mi": "Sửa khoảng cách", "cu": "Kiểm tra cập nhật", "cc": "Sao chép cuộc trò chuyện", "pp": "Làm sạch trang", "ls": "Hiển thị màn hình lớn", "fs": "Hiển thị toàn màn hình", "sc": "Nói đầy đủ", "it": "Chặn Theo Dõi", "ec": "Luôn thay đổi", "ap": "Đánh giá"},
"zh-CN": {"dm": "暗色主题", "sd": "显示调试", "cm": "取消审计", "ca": "取消动画", "ab": "关于", "si": "建议间隔30秒以上，作者平时设置的是150", "mi": "调整间隔", "cu": "检查更新", "cc": "克隆对话", "pp": "净化页面", "ls": "展示大屏", "fs": "展示全屏", "sc": "言无不尽", "it": "拦截跟踪", "ec": "日新月异", "ap": "赞赏鼓励"},
"zh-TW": {"dm": "暗黑模式", "sd": "顯示調試", "cm": "取消稽核", "ca": "取消動畫", "ab": "關於", "si": "建議間隔30秒", "mi": "調整間隔", "cu": "檢查更新", "cc": "複製對話", "pp": "淨化頁面", "ls": "顯示大螢幕", "fs": "顯示全螢幕", "sc": "言無不盡", "it": "拦截追踪", "ec": "日新月異", "ap": "讚賞鼓勵"}
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
        //language = "en"; //Debug English
        return [lang.index, lang.local[language], language];
    };

    const [langIndex, langLocal, language] = getLang();

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

    class IndexedDB {
        constructor(dbName, storeName) {
            this.dbName = dbName;
            this.storeName = storeName;
        }

        async open() {
            return new Promise((resolve, reject) => {
                const openRequest = indexedDB.open(this.dbName, 1);

                openRequest.onupgradeneeded = function(e) {
                    const db = e.target.result;
                    console.log(db.objectStoreNames, this.storeName);
                    if (!db.objectStoreNames.contains(this.storeName)) {
                        const objectStore = db.createObjectStore(this.storeName, {keyPath: 'id'});
                        objectStore.createIndex('name', 'name', {unique: false});
                    }
                }.bind(this);

                openRequest.onsuccess = function(e) {
                    const db = e.target.result;
                    resolve(db);
                };

                openRequest.onerror = function(e) {
                    reject('Error opening db');
                };
            });
        }

        async operate(operation, item) {
            const db = await this.open();
            return new Promise((resolve, reject) => {
                const tx = db.transaction(this.storeName, 'readwrite');
                const store = tx.objectStore(this.storeName);
                let request;

                switch(operation) {
                    case 'add':
                        request = store.add(item);
                        break;
                    case 'put':
                        request = store.put(item);
                        break;
                    case 'delete':
                        request = store.delete(item.id);
                        break;
                    default:
                        db.close();
                        reject('Invalid operation');
                        return;
                }

                request.onsuccess = function() {
                    resolve(request.result);
                };

                request.onerror = function() {
                    reject('Error', request.error);
                };

                tx.oncomplete = function() {
                    db.close();
                };
            });
        }

        async operate_get(id) {
            const db = await this.open();
            return new Promise((resolve, reject) => {
                const tx = db.transaction(this.storeName, 'readonly');
                const store = tx.objectStore(this.storeName);
                const request = store.get(id);

                request.onsuccess = function() {
                    resolve(request.result);
                };

                request.onerror = function() {
                    reject('Error', request.error);
                };

                tx.oncomplete = function() {
                    db.close();
                };
            });
        }

        async store() {
            const db = await this.open();
            const tx = db.transaction(this.storeName, 'readonly');
            const store = tx.objectStore(this.storeName);
            return store;
        }

        async get(id) {
            return await this.operate_get(id);
        }

        async add(item) {
            return await this.operate('add', item);
        }

        async put(item) {
            return await this.operate('put', item);
        }

        async delete(item) {
            return await this.operate('delete', item);
        }
    };

    const formatDate = function(d) {
        return (new Date(d)).toLocaleString();
    };

    const formatDate2 = function(dt) {
        const [Y, M, D, h, m, s] = [dt.getFullYear(), dt.getMonth() + 1, dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds()].map(el => el.toString().padStart(2, '0'));
        const dtTmp = dt.toLocaleDateString();
        const currentDate = new Date();
        const currentDateTmp = currentDate.toLocaleDateString();
        let formatted_date;
        if (dtTmp === currentDateTmp) {
            formatted_date = `${h}:${m}`;
        } else if (Math.floor(Math.abs((new Date(dtTmp)) - (new Date(currentDateTmp))) / (24 * 60 * 60 * 1000)) < 7) {
            const weekday = language.slice(0, 2) === "zh" ? ['周日', '周一', '周二', '周三', '周四', '周五', '周六'] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            formatted_date = weekday[dt.getDay()];
        } else {
            formatted_date = `${M}/${D}`;
        }
        return formatted_date;
    }

    const formatJson = function(d) {
        try {
            const j = JSON.parse(d);
            return `<pre>${JSON.stringify(j, null, 2)}</pre>`;
        } catch (e) {
            return d;
        }
    };

    const htmlEncode = function(text) {
        var tempElement = document.createElement("div");
        var textNode = document.createTextNode(text);
        tempElement.appendChild(textNode);
        return tempElement.innerHTML;
    }

    const setIfr = function(u = "") {
        if ($("#xcanwin") === null) {
            const nIfr = document.createElement('iframe');
            nIfr.id = "xcanwin";
            nIfr.style = `height: 80px; width: 100%; display: none;`;
            if (gv("k_showDebug", false) === true) {
                nIfr.style.display = '';
            } else {
                nIfr.style.display = 'none';
            }
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
<div class="fixed inset-0 overflow-y-auto z-50" style="display: flex; justify-content: center; align-items: center;">
  <div class="flex items-end justify-center min-h-full p-4 sm:items-center sm:p-0 text-center">
    <div class="kdialogwin bg-white dark:bg-gray-900 rounded-lg sm:max-w-lg sm:p-6 text-left">
      <div class="flex items-center justify-between">
        <div style="min-width: 15rem">
          <div class="flex items-center justify-between">
            <h3 class="dark:text-gray-200 text-gray-900 text-lg">${title}</h3>
            <p class="kdialogclose" style="cursor: pointer; font-weight: bold; color: #aaa;">X</p>
          </div>
          <p class="dark:text-gray-100 mt-2 text-gray-500 text-sm" style="margin-bottom: 0.6rem;">${content}</p>
          <div class="md:py-3 md:pl-4 border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
            <${inputtype} class="kdialoginput resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent" style="max-height: 12.5rem; height: 1.5rem; outline: none;" placeholder=""></${inputtype}>
          </div>
        </div>
      </div>
      <div class="flex sm:flex-row-reverse sm:mt-4"><button class="btn btn-neutral kdialogbtn">${buttonvalue}</button>
      </div>
    </div>
  </div>
</div>
        `;
        if (inputtype === 'br') {
            $(".kdialoginput", ndivalert).parentElement.style.display = 'none';
        } else if (inputtype === 'img') {
            $(".kdialoginput", ndivalert).src = inputvalue;
            $(".kdialoginput", ndivalert).style = `max-height: 19rem; height: unset; display: block; margin: 0 auto;`;
            $(".kdialogwin", ndivalert).style = `max-width: 37.5rem;`;
        }else {
            $(".kdialoginput", ndivalert).value = inputvalue;
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
    <li id=nmenuid_af>${tl("调整间隔")}</li>
    <li id=nmenuid_cm>${tl("取消审计")}</li>
    <li id=nmenuid_cc>${tl("克隆对话")}</li>
    <li id=nmenuid_sc>${tl("言无不尽")}</li>
    <li id=nmenuid_pp>${tl("净化页面")}</li>
    <li id=nmenuid_ls>${tl("展示大屏")}</li>
    <li id=nmenuid_fs>${tl("展示全屏")}</li>
    <li id=nmenuid_it>${tl("拦截跟踪")}</li>
    <li id=nmenuid_ec>${tl("日新月异")}</li>
    <li id=nmenuid_dm>${tl("暗色主题")}</li>
    <li id=nmenuid_ca>${tl("取消动画")}</li>
    <li id=nmenuid_sd>${tl("显示调试")}</li>
    <li id=nmenuid_cu>${tl("检查更新")}</li>
    <li id=nmenuid_ap>${tl("赞赏鼓励")}</li>
    <li id=nmenuid_ab>${tl("关于")}</li>
</ul>
`;
        document.body.appendChild(ndivmenu);

        $('#nmenuid_sd').appendChild(ncheckbox());
        $('#nmenuid_dm').appendChild(ncheckbox());
        $('#nmenuid_ca').appendChild(ncheckbox());
        $('#nmenuid_cm').appendChild(ncheckbox());
        $('#nmenuid_cc').appendChild(ncheckbox());
        $('#nmenuid_pp').appendChild(ncheckbox());
        $('#nmenuid_ls').appendChild(ncheckbox());
        $('#nmenuid_fs').appendChild(ncheckbox());
        $('#nmenuid_sc').appendChild(ncheckbox());
        $('#nmenuid_it').appendChild(ncheckbox());
        $('#nmenuid_ec').appendChild(ncheckbox());

        $('#nmenuid_sd').onclick = function() {
            if ($('.checkbutton', this).classList.contains('checked')) {
                $('#xcanwin').style.display = 'none';
                sv("k_showDebug", false);
            } else {
                $('#xcanwin').style.display = '';
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
                sv("k_closeModer", false);
            } else {
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
            if ($('.checkbutton', this).classList.contains('checked')) {
                sv("k_clonechat", false);
                cloneChat(false);
            } else {
                sv("k_clonechat", true);
                cloneChat(true);
            }
            $('.checkbutton', this).classList.toggle('checked');
        };

        $('#nmenuid_pp').onclick = function() {
            if ($('.checkbutton', this).classList.contains('checked')) {
                sv("k_cleanlyhome", false);
            } else {
                sv("k_cleanlyhome", true);
            }
            $('.checkbutton', this).classList.toggle('checked');
        };

        $('#nmenuid_ls').onclick = function() {
            if ($('.checkbutton', this).classList.contains('checked')) {
                sv("k_largescreen", false);
            } else {
                sv("k_largescreen", true);
            }
            $("#__next>.overflow-hidden.w-full>div.overflow-hidden").classList.toggle('largescreen');
            $('.checkbutton', this).classList.toggle('checked');
        };

        $('#nmenuid_fs').onclick = function() {
            if ($('.checkbutton', this).classList.contains('checked')) {
                sv("k_fullscreen", false);
                fullScreen(false);
            } else {
                sv("k_fullscreen", true);
                fullScreen(true);
            }
            $('.checkbutton', this).classList.toggle('checked');
        };

        $('#nmenuid_sc').onclick = function() {
            if ($('.checkbutton', this).classList.contains('checked')) {
                sv("k_speakcompletely", false);
            } else {
                sv("k_speakcompletely", true);
            }
            $('.checkbutton', this).classList.toggle('checked');
        };

        $('#nmenuid_it').onclick = function() {
            if ($('.checkbutton', this).classList.contains('checked')) {
                sv("k_intercepttracking", false);
                interceptTracking(false);
            } else {
                sv("k_intercepttracking", true);
                interceptTracking(true);
            }
            $('.checkbutton', this).classList.toggle('checked');
        };

        $('#nmenuid_ec').onclick = function() {
            if ($('.checkbutton', this).classList.contains('checked')) {
                sv("k_everchanging", false);
                location.reload();
            } else {
                sv("k_everchanging", true);
            }
            $('.checkbutton', this).classList.toggle('checked');
        };

        $('#nmenuid_cu').onclick = function() {
            toggleMenu('hide');
            checkForUpdates();
        };

        $('#nmenuid_ap').onclick = function() {
            ndialog(`${tl("赞赏鼓励")}`, `· 本项目没有研发经费，但是功能研发、升级、BUG修复都会消耗很多个人时间、精力，并且有不少技术研究成本。<br>
<br>· 如果你体验完本项目以后眉开眼笑，觉得好用！NB！神器！好顺畅！感觉很棒！NICE！
<br>· 如果你觉得本项目打开了你进入AI世界的高速通道
<br>· 如果你希望作者的小猫吃到更好的猫粮、猫罐头
<br>· 如果本项目对你有帮助
<br>· 如果本项目提高了你工作效率
<br>· 如果你希望本项目持续维护、升级更多的功能
<br>· 如果你希望鼓励、激励作者投入更多的时间精力提升项目，欢迎各位支持和鼓励本项目`, `更多鼓励方式`, function(t) {
                window.open(`${GM_info.script.namespace}#赞赏`, '_blank');
            }, `img`, `https://github.com/xcanwin/KeepChatGPT/raw/main/assets/appreciate_wechat.png`);
        };

        $('#nmenuid_ab').onclick = function() {
            window.open(GM_info.script.namespace, '_blank');
        };
    };

    const setUserOptions = function() {
        if (gv("k_showDebug", false) === true) {
            $('#nmenuid_sd .checkbutton').classList.add('checked');
            $('#xcanwin').style.display = '';
        } else {
            $('#xcanwin').style.display = 'none';
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
        }

        if (gv("k_clonechat", false) === true) {
            $('#nmenuid_cc .checkbutton').classList.add('checked');
            cloneChat(true);
        }

        if (gv("k_cleanlyhome", false) === true) {
            $('#nmenuid_pp .checkbutton').classList.add('checked');
        }

        if (gv("k_largescreen", false) === true) {
            $('#nmenuid_ls .checkbutton').classList.add('checked');
            $("#__next>.overflow-hidden.w-full>div.overflow-hidden").classList.toggle('largescreen');
        }

        if (gv("k_fullscreen", false) === true) {
            $('#nmenuid_fs .checkbutton').classList.add('checked');
            fullScreen(true);
        }

        if (gv("k_speakcompletely", false) === true) {
            $('#nmenuid_sc .checkbutton').classList.add('checked');
        }

        if (gv("k_intercepttracking", false) === true) {
            $('#nmenuid_it .checkbutton').classList.add('checked');
            interceptTracking(true);
        }

        if (gv("k_everchanging", false) === true) {
            $('#nmenuid_ec .checkbutton').classList.add('checked');
        }
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
        var kcg_html;
        if (kcg_html !== undefined) {
            if ($(symbol1_selector)) {
                kcg_html.innerHTML = kcg_html._symbol1_innerHTML;
                symbol_prt = findParent($(symbol1_selector), "nav.flex", 3);
            } else if ($(symbol2_selector)) {
                kcg_html.innerHTML = kcg_html._symbol2_innerHTML;
                symbol_prt = findParent($(symbol2_selector), ".sticky", 2);
            }
            symbol_prt.insertBefore(kcg_html, symbol_prt.childNodes[0]);
            return;
        }

        loadMenu();
        setIfr(u);

        const ndivkcg = document.createElement("div");
        ndivkcg.id = "kcg";
        ndivkcg.setAttribute("class", "kgold shine flex py-3 px-3 items-center gap-3 rounded-md text-sm mb-1 flex-shrink-0 border border-white/20");

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

        if ($(symbol1_selector)) {
            ndivkcg.innerHTML = ndivkcg._symbol1_innerHTML;
            symbol_prt = findParent($(symbol1_selector), "nav.flex", 3);
        } else if ($(symbol2_selector)) {
            ndivkcg.innerHTML = ndivkcg._symbol2_innerHTML;
            symbol_prt = findParent($(symbol2_selector), ".sticky", 2);
        }
        kcg_html = ndivkcg;
        symbol_prt.insertBefore(kcg_html, symbol_prt.childNodes[0]);

        addStyle();
        setUserOptions();
    };

    const addStyle = function() {
        GM_addStyle(`
.kgold {
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
    border: 0.06rem solid #4D4D4F;
    border-radius: 0.625rem;
    box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.15);
    display: none;
    min-width: 12.5rem;
    padding: 0.75rem 0;
    position: absolute;
    z-index: 1000;
}
.kmenu::before {
    content: "";
    position: absolute;
    top: 0rem;
    bottom: 0rem;
    left: -6rem;
    right: 0rem;
    pointer-events: auto;
    z-index: -1;
}
.kmenu::after {
    content: "";
    position: absolute;
    top: 1rem;
    left: -1.25rem;
    border-style: solid;
    border-width: 0.625rem 0.625rem 0.625rem 0.625rem;
    border-color: transparent #202123 transparent transparent;
}
.kmenu li {
    display: block;
    padding: 0.5rem 1.5rem;
    text-align: left;
    user-select: none;
    display: flex;
    align-items: center;
}
.kmenu li:hover {
    background-color: #273746;
    cursor: pointer;
}

main div.items-end>div:first-child {
    user-select: none;
    max-width: 30px;
    cursor: pointer;
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

.largescreen .md\\:max-w-2xl, .largescreen .lg\\:max-w-xl, .largescreen .xl\\:max-w-3xl {
    max-width: unset;
}
.largescreen .lg\\:px-0 {
    padding-left: 25px;
    padding-right: 50px;
}
@media (min-width:1024px) {
    .largescreen form.stretch {
        max-width: 85%;
    }
}
.largescreen div.items-end>div.text-xs {
    top: -20px;
    left: -5px;
    margin-left: unset;
    -webkit-transform: unset;
    transform: unset;
    position: absolute;
}

.fullscreen {
    max-width: 0px;
}
.btn-neutral {
    cursor: pointer;
}

#new-chat-button + div, #expand-sidebar-bottom-button, #nav-toggle-button, #user-menu ~ div {
    display: none !important;
    max-height: 0 !important;
}

.navdate {
    font-size: 0.75rem;
    padding-right: 0.5rem;
}
nav.flex div.overflow-y-auto a.hover\\:pr-4 {
    padding-right: unset;
}
nav.flex div.overflow-y-auto {
    scrollbar-width: thin;
}
.gptm {
    position: absolute;
    top: 1.15rem;
    left: 0.95rem;
    font-size: 0.7rem;
    font-weight: bold;
    color: white;
}
nav.flex li::after {
    content: "";
    display: block;
    height: 1px;
    background: linear-gradient(to right, transparent, #5e5e5e, transparent);
}

#nmenuid_ap {
    color: #00bf78;
}
`);
    };

    const hookFetch = function() {
        unsafeWindow.fetch = new Proxy(fetch, {
            apply: function (target, thisArg, argumentsList) {
                const fetchReqUrl = argumentsList[0];
                let fetchRsp;
                try {
                    if (gv("k_closeModer", false) && fetchReqUrl.match('/backend-api/moderations(\\?|$)')) {
                        fetchRsp = Promise.resolve({
                            json: () => {return {}}
                        });
                        return fetchRsp;
                    } else if (gv("k_closeModer", false) && fetchReqUrl.match('/backend-api/conversation(\\?|$)')) {
                        const post_body = JSON.parse(argumentsList[1].body);
                        post_body.supports_modapi = false;
                        argumentsList[1].body = JSON.stringify(post_body);
                    } else if (gv("k_intercepttracking", false) && fetchReqUrl.match('sentry\.io|sentry_key=|widget\.intercom\.io|featuregates\.org|/v1/initialize|api-iam\.intercom\.io|/messenger/|nexus-websocket-a\.intercom\.io|statsigapi\.net|/rgstr|/v1/sdk_exception')) {
                        fetchRsp = Promise.resolve({
                        });
                        return fetchRsp;
                    }
                } catch (e) {}
                fetchRsp = target.apply(thisArg, argumentsList);
                fetchRsp.then(response => {
                    let clonedResponse = response.clone();
                    clonedResponse.text().then(async fetchRspBody => {
                        const fetchRspHeaders = clonedResponse.headers;
                        if (fetchReqUrl.match('/api/auth/session(\\?|$)') && !global.st_ec) {
                            const email = JSON.parse(fetchRspBody).user.email;
                            global.st_ec = new IndexedDB(`KeepChatGPT_${email}`, 'conversations');
                            cacheEC();
                        } else if (gv("k_everchanging", false) === true && fetchReqUrl.match('/backend-api/conversations\\?.*offset=')) {
                            const b = JSON.parse(fetchRspBody).items;
                            b.forEach(async el => {
                                const update_time = new Date(el.update_time);
                                const ec_tmp = await global.st_ec.get(el.id) || {};
                                await global.st_ec.put({id: el.id, title: el.title, update_time: update_time, last: ec_tmp.last, model: ec_tmp.model});
                            });
                            setTimeout(function() {
                                cacheEC();
                                attachDate();
                            }, 300);
                        }
                    });
                    return clonedResponse;
                }).catch(error => {});
                return fetchRsp;
            }
        });
        navigator.sendBeacon = function(url, data) {};
    };

    const everChanging = function() {
        if (gv("k_everchanging", false) === true) {
            if (!global.everChangingOnce) {
                global.everChangingOnce = 1;
                GM_addStyle(`nav.flex div.overflow-y-auto h3 {display: none;}`);
            }
            attachDate();
        }
    };

    const attachDate = async function() {
        if (!global.kec_object) return;
        $$('nav.flex li a.group').forEach(el => {
            const keyrf = Object.keys(el).find(key => key.startsWith("__reactFiber"));
            const a_id = el[keyrf].return.return.memoizedProps.id;
            const kec_obj_el = global.kec_object[a_id];
            const title = kec_obj_el && kec_obj_el.title || "";
            const update_time = kec_obj_el && kec_obj_el.update_time || "";
            const last = kec_obj_el && kec_obj_el.last || "";
            const model = kec_obj_el && kec_obj_el.model || "";

            if (!title || !update_time) return;
            if (!$('.navtitle', el) || !$('.navdate', el) || !$('.navlast', el)) {
                const cdiv_old = $(`.overflow-hidden`, el);
                cdiv_old.style.display = "none";
                const cdiv_new = document.createElement("div");
                cdiv_new.className = `flex-1 text-ellipsis overflow-hidden break-all relative`;
                cdiv_new.innerHTML = `
<div style="max-height: unset; max-width: 70%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; position: absolute;" class="navtitle">
    ${title}
</div>
<div style="right: 0;position: absolute;color: grey;font-size: 0.71rem;" class="navdate">
    ${formatDate2(update_time)}
</div>
<br>
<div style="max-height: unset; max-width: 95%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: gray; font-size: 0.75rem;" class="navlast">
    ${htmlEncode(last)}
</div>
`;
                el.insertBefore(cdiv_new, el.childNodes[1]);
            } else if ($('.navtitle', el).innerHTML !== title || $('.navdate', el).innerHTML !== formatDate2(update_time) || $('.navlast', el).innerHTML !== last) {
                $('.navtitle', el).innerHTML = title;
                $('.navdate', el).innerHTML = formatDate2(update_time);
                $('.navlast', el).innerHTML = htmlEncode(last);
            }
            if (model.match('gpt-4') && !$('.gptm', el)) {
                $('svg:first-child', el).setAttribute("stroke", `#FF4CFF`);
                $('svg:first-child', el).setAttribute("fill", `#FF4CFF`);
                const ndiv = document.createElement("div");
                ndiv.classList.add("gptm");
                const gptab = {"gpt-4": "", "gpt-4-plugins": "p", "gpt-4-browsing": "w", "gpt-4-mobile": "m"};
                ndiv.innerHTML = gptab[model] || "";
                el.insertBefore(ndiv, $('svg:first-child', el).nextSibling);
            }
        });

        const sidebar_chat = $("nav.flex div.overflow-y-auto");
        if (sidebar_chat) {
            if (sidebar_chat.scrollHeight > sidebar_chat.clientHeight) {
                sidebar_chat.classList.add("-mr-2");
            } else {
                sidebar_chat.classList.remove("-mr-2");
            }
        }

        const crt_con_a = $('nav.flex li a.group.bg-gray-800');
        let crt_con_id = "";
        if (crt_con_a) {
            const crt_con_a_keyrf = Object.keys(crt_con_a).find(key => key.startsWith("__reactFiber"));
            crt_con_id = crt_con_a[crt_con_a_keyrf].return.return.memoizedProps.id;
        }
        const m = location.href.match('/c/(.*?)(\\?|$)');
        const crt_con_id2 = m && m[1];
        let crt_con_last = "";
        let crt_con_model = "";
        const crt_con_speak = $$("main .group");
        const crt_con_speak_last = crt_con_speak && crt_con_speak[crt_con_speak.length - 1];
        if (crt_con_id && crt_con_id2 && crt_con_id === crt_con_id2 && crt_con_speak_last) {
            crt_con_last = $("div.text-base .markdown", crt_con_speak_last).innerText.trim().replace(/[\r\n]/g, ``).substr(0, 100);
            const crt_con_a_keyrf2 = Object.keys(crt_con_speak_last).find(key => key.startsWith("__reactFiber"));
            crt_con_model = crt_con_speak_last[crt_con_a_keyrf2].return.return.memoizedProps.currentModelId;
        }
        if (crt_con_id && global.kec_object[crt_con_id] && ((crt_con_last && global.kec_object[crt_con_id].last !== crt_con_last) || (crt_con_model && global.kec_object[crt_con_id].model !== crt_con_model))) {
            global.kec_object[crt_con_id].last = crt_con_last;
            global.kec_object[crt_con_id].model = crt_con_model;
            const crt_st_ec = await global.st_ec.get(crt_con_id);
            await global.st_ec.put({id: crt_con_id, title: crt_st_ec.title, update_time: crt_st_ec.update_time, last: crt_con_last, model: crt_con_model});
            $('.navlast', crt_con_a).innerHTML = htmlEncode(crt_con_last);
        }
    };

    const cacheEC = async function() {
        if (!global.kec_object) global.kec_object = {};
        let store = await global.st_ec.store();
        let request = store.openCursor();
        request.onsuccess = function(e) {
            let cursor = e.target.result;
            if (cursor) {
                const id = cursor.value.id || "";
                const title = cursor.value.title || "";
                const update_time = cursor.value.update_time || "";
                const last = cursor.value.last || "";
                const model = cursor.value.model || "";
                if (!global.kec_object[id]) {
                    global.kec_object[id] = {};
                }
                global.kec_object[id].title = title;
                global.kec_object[id].update_time = update_time;
                global.kec_object[id].last = last;
                global.kec_object[id].model = model;
                cursor.continue();
            }
        };
    };

    const verInt = function(vs) {
        const vl = vs.split('.');
        let vi = 0;
        for (let i = 0; i < vl.length && i < 3; i++) {
            vi += parseInt(vl[i]) * (1000 ** (2 - i));
        }
        return vi;
    };

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
    };

    const cloneChat = function(action) {
        if (action === true) {
            window.addEventListener('click', cloneChat.listen_Click);
        } else {
            window.removeEventListener('click', cloneChat.listen_Click);
        }
    };

    cloneChat.listen_Click = function(event) {
        const avatarSelector = "main div.items-end>div:first-child";
        let avatarDiv;
        if (event.target.matches(avatarSelector)) {
            avatarDiv = event.target;
        } else {
            avatarDiv = findParent(event.target, avatarSelector);
        }
        if (avatarDiv) {
            if ($('text', avatarDiv) && $('text', avatarDiv).innerHTML === "ChatGPT") {
                $('text', avatarDiv).remove();
            }
            const content = findParent(avatarDiv, "div.text-base", 2).childNodes[1].innerText.trim();
            $("form.stretch textarea").value = "";
            $("form.stretch textarea").focus();
            document.execCommand('insertText', false, content);
        }
    };

    const cleanlyHome = function() {
        if (location.href.match(/https:\/\/chat\.openai\.com\/\??/) && gv("k_cleanlyhome", false) === true) {
            if ($("main h1") && $("main h1").innerText.match(/^ChatGPT(\nPLUS)?$/)) {
                $("main h1").classList.add('text-gray-200');
                const nSpan = document.createElement('span');
                nSpan.className = 'bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase';
                nSpan.textContent = `KEEP`;
                $("main h1").appendChild(nSpan);
            }
            if ($("main h2") && $("main h2").innerText === "Examples") {
                $("main h2").parentElement.parentElement.remove();
            }
            const mainBottom = $("div>span", $("form.stretch").parentElement);
            if (mainBottom && mainBottom.innerText.indexOf("produce inaccurate") > -1) {
                mainBottom.remove();
            }
            const utp_svg = $(`nav.flex path[d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"]`);
            if (utp_svg && findParent(utp_svg, `a`, 4)) {
                findParent(utp_svg, `a`, 4).remove();
            }
        }
    };

    const fullScreen = function(action) {
        if (action === true) {
            if ($("#kfull") === null || $('#kfull').style.display === "none") {
                const ndivkfull = document.createElement("div");
                ndivkfull.id = "kfull";
                ndivkfull.setAttribute("class", "btn relative btn-neutral border-0 md:border");
                ndivkfull.innerHTML = `KEEP`;
                ndivkfull.onclick = function() {
                    sv("k_fullscreen", false);
                    fullScreen(false);
                    $('#nmenuid_fs .checkbutton').classList.toggle('checked');
                };
                const symbol3_selector = `form.stretch .justify-center`;
                let nInterval3 = setInterval(() => {
                    if ($(symbol3_selector) && $(symbol2_selector) === null) {
                        if ($("#kfull") === null) {
                            $(symbol3_selector).insertBefore(ndivkfull, $(symbol3_selector).childNodes[0]);
                        } else if ($('#kfull') && $('#kfull').style.display === "none") {
                            $('#kfull').style.display = '';
                        }
                        $("#__next>.overflow-hidden.w-full>div.overflow-x-hidden").classList.add('fullscreen');
                        clearInterval(nInterval3);
                    }
                }, 300);
            }
        } else {
            if ($('#kfull') && $('#kfull').style.display === "") {
                $('#kfull').style.display = 'none';
            }
            if ($("#__next>.overflow-hidden.w-full>div.overflow-x-hidden")) {
                $("#__next>.overflow-hidden.w-full>div.overflow-x-hidden").classList.remove('fullscreen');
            }
        }
    };

    const speakCompletely = function() {
        if (gv("k_speakcompletely", false) === true) {
            const continue_svg_selector = `form.stretch .justify-center polygon[points="11 19 2 12 11 5 11 19"]`;
            if ($(continue_svg_selector)) {
                findParent($(continue_svg_selector), `button`).click();
            }
        }
    };

    const interceptTracking = function(action) {
        if (action === true) {
            window.addEventListener('beforescriptexecute', interceptTracking.listen_beforescriptexecute);
        } else {
            window.removeEventListener('beforescriptexecute', interceptTracking.listen_beforescriptexecute);
        }
    };

    interceptTracking.listen_beforescriptexecute = function(event) {
        const scriptElement = event.target;
        if (scriptElement.src.match('widget\.intercom\.io')) {
            event.preventDefault();
            scriptElement.textContent = ``;
            scriptElement.remove();
        }
    };

    const findParent = function(el, parentSelector, level = 5) {
        if (el === null) {
            return null;
        }
        let parent = el.parentNode;
        let count = 1;
        while (parent && count <= level) {
            if (parent && parent.constructor !== HTMLDocument && parent.matches(parentSelector)) {
                return parent;
            }
            parent = parent.parentNode;
            count++;
        }
        return null;
    };

    $("body").onresize = function() {
        if ($('#nmenuid_fs .checkbutton')) {
            if (gv("k_fullscreen", false) === true) {
                $('#nmenuid_fs .checkbutton').classList.add('checked');
                fullScreen(true);
            } else if (gv("k_fullscreen", false) === false) {
                $('#nmenuid_fs .checkbutton').classList.remove('checked');
                fullScreen(false);
            }
        }
    };

    const nInterval1Fun = function() {
        if ($(symbol1_selector) || $(symbol2_selector)) {
            loadKCG();
            setIfr();
            cleanlyHome();
            speakCompletely();
            everChanging();
        }
    };

    const nInterval2Fun = function() {
        if ($(symbol1_selector) || $(symbol2_selector)) {
            keepChat();
        }
    };

    hookFetch();

    let nInterval1 = setInterval(nInterval1Fun, 300);

    let interval2Time = parseInt(gv("k_interval", 30));
    let nInterval2 = setInterval(nInterval2Fun, 1000 * interval2Time);

})();
