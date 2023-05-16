// ==UserScript==
// @name              KeepChatGPT
// @description       这是一个ChatGPT的畅聊与增强插件。开源免费。不仅能解决所有报错不再刷新，还有保持活跃、取消审计、克隆对话、净化首页、展示大屏、展示全屏等多个高级功能。让我们的AI体验无比顺畅、丝滑、高效、简洁。解决的报错如下: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) Conversation not found. (4) This content may violate our content policy.
// @version           12.11
// @author            xcanwin
// @namespace         https://github.com/xcanwin/KeepChatGPT/
// @supportURL        https://github.com/xcanwin/KeepChatGPT/
// @updateURL         https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js
// @downloadURL       https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js
// @description:ar    إضافة ChatGPT للدردشة المتسقة وتعزيزها. مفتوحة المصدر ومجانية. ليس فقط يمكنها حل جميع الأخطاء وعدم التحديث، ولكنها تحتوي أيضًا على ميزات متقدمة متعددة مثل البقاء نشطًا، وإلغاء التدقيق، واستنساخ الحوارات، وتنقية الصفحة الرئيسية، وعرض الشاشة الكبيرة، وعرض الشاشة الكاملة، وغيرها الكثير. لنجعل تجربة الذكاء الاصطناعي لدينا سلسة وناعمة وفعالة وموجزة.
// @description:bg    Разширение ChatGPT за безпроблемно разговори. С отворен код и безплатно. Не само решава всички грешки и предотвратява опресняване, но също така има множество напреднали функции, като поддържане на активност, отмяна на одита, клониране на диалози, почистване на началната страница, показване на голям екран, показване на цял екран и много други. Нека направим изживяването с изкуствен интелект безупречно, гладко, ефективно и компактно.
// @description:cs    ChatGPT plugin pro plynulé chatování a rozšíření. Open source a zdarma. Nejenže řeší všechny chyby a zabraňuje obnovování, ale také obsahuje mnoho pokročilých funkcí, jako udržování aktivity, zrušení auditu, klonování rozhovorů, čištění úvodní stránky, zobrazení velké obrazovky, zobrazení celé obrazovky a mnoho dalšího. Umožněme našemu zážitku s AI být nesmírně plynulý, jemný, efektivní a stručný.
// @description:da    ChatGPT-plugin til problemfri chat. Åben kildekode og gratis. Ikke kun løser alle fejl og undgår opdatering, men har også mange avancerede funktioner som at holde sig aktiv, annullere revision, klone samtaler, rense hjemmesiden, vise stor skærm, vise fuld skærm og meget mere. Lad os gøre vores AI-oplevelse utrolig glidende, silkeblød, effektiv og enkel.
// @description:de    ChatGPT-Plugin für nahtlose Chats und Erweiterungen. Open Source und kostenlos. Es löst nicht nur alle Fehler und vermeidet Aktualisierungen, sondern bietet auch viele fortgeschrittene Funktionen wie Aktivität beibehalten, Überprüfung abbrechen, Konversationen klonen, Startseite bereinigen, Großbild anzeigen, Vollbild anzeigen und vieles mehr. Lassen Sie uns unsere KI-Erfahrung unglaublich reibungslos, geschmeidig, effizient und übersichtlich machen.
// @description:el    Πρόσθετο ChatGPT για απρόσκοπτη συνομιλία. Ανοιχτού κώδικα και δωρεάν. Δεν απλώς λύνει όλα τα σφάλματα και αποφεύγει την ανανέωση, αλλά διαθέτει επίσης πολλές προηγμένες λειτουργίες όπως διατήρηση δραστηριότητας, ακύρωση ελέγχου, κλωνοποίηση συνομιλιών, καθαρισμός αρχικής σελίδας, εμφάνιση μεγάλης οθόνης, εμφάνιση πλήρους οθόνης και πολλά άλλα. Ας κάνουμε την εμπειρία μας με την ΤΑ απίστευτα ομαλή, μεταξένια, αποδοτική και σύντομη.
// @description:en    ChatGPT plugin for seamless chatting and enhancement. Open-source and free. It not only solves all errors and avoids refreshing but also offers numerous advanced features like maintaining activity, disabling auditing, cloning conversations, purifying the homepage, displaying large screens, showing fullscreen, and many more. Let's make our AI experience incredibly smooth, silky, efficient, and concise.
// @description:eo    Kromprogramo ChatGPT por senproblemaj babiletoj kaj plibonigo. Malferma fontkodo kaj senpaga. Ĝi ne nur solvas ĉiujn erarojn kaj evitas refreŝigon, sed ankaŭ havas multajn altelirajn funkciojn kiel konservado de aktiveco, nuligo de revizio, klonado de konversacioj, purigado de hejmpaĝo, montrado de grandaj ekranoj, montrado de tuta ekrano, kaj multe pli. Faru nian spertonkun AI nekredeble glata, malseka, efika kaj konciza.
// @description:es    Complemento de ChatGPT para conversaciones y mejoras fluidas. Código abierto y gratuito. No solo resuelve todos los errores y evita la actualización, sino que también ofrece numerosas funciones avanzadas como mantenerse activo, cancelar auditoría, clonar conversaciones, purificar la página de inicio, mostrar pantalla grande, mostrar pantalla completa y muchas más. Hagamos que nuestra experiencia de IA sea increíblemente fluida, suave, eficiente y concisa.
// @description:fi    ChatGPT-laajennus saumattomaan keskusteluun ja tehostamiseen. Avoin lähdekoodi ja ilmainen. Se ratkaisee ei vain kaikki virheet ja estää päivityksiä, vaan sisältää myös lukuisia edistyneitä ominaisuuksia, kuten aktiivisuuden ylläpitäminen, tarkastuksen peruuttaminen, keskustelujen kloonaus, etusivun puhdistaminen, suuren näytön näyttäminen, kokoruudun näyttäminen ja paljon muuta. Tehdään tekoälykokemuksestamme uskomattoman sujuva, silkkisen pehmeä, tehokas ja tiivis.
// @description:fr    Plugin ChatGPT pour des conversations fluides et des améliorations. Open source et gratuit. Il résout non seulement toutes les erreurs et évite les rafraîchissements, mais propose également de nombreuses fonctionnalités avancées telles que le maintien de l'activité, l'annulation de l'audit, le clonage des conversations, la purification de la page d'accueil, l'affichage en grand écran, l'affichage en plein écran, et bien plus encore. Rendons notre expérience d'IA incroyablement fluide, douce.
// @description:fr-CA Plugin ChatGPT pour des conversations fluides et des améliorations. Open source et gratuit. Il résout non seulement toutes les erreurs et évite les rafraîchissements, mais propose également de nombreuses fonctionnalités avancées telles que le maintien de l'activité, l'annulation de l'audit, le clonage des conversations, la purification de la page d'accueil, l'affichage en grand écran, l'affichage en plein écran, et bien plus encore. Rendons notre expérience d'IA incroyablement fluide, douce.
// @description:he    תוסף ChatGPT לשיחה חלקה ושדרוג. קוד פתוח וחינמי. התוסף לא רק פותר את כל השגיאות וממנע רענון, אלא מציע גם מגוון יכולות מתקדמות כגון שמירה על פעילות, ביטול ביקורת, שכפול שיחות, טיהור דף הבית, הצגת מסך גדול, הצגת מסך מלא ועוד. נעשה את חוויית הלמידת מכונה שלנו חלקה, רכה, יעילה וקצרה מאוד.
// @description:hu    ChatGPT bővítmény zökkenőmentes beszélgetéshez és fejlesztéshez. Nyílt forráskódú és ingyenes. Nemcsak megoldja az összes hibát és elkerüli a frissítést, hanem számos fejlett funkciót is kínál, mint például az aktivitás fenntartása, az ellenőrzés megszüntetése, a beszélgetések klónozása, a kezdőlap tisztítása, a nagy képernyő megjelenítése, a teljes képernyős nézet és még sok más. Tegyük rendkívül simává, selymessé, hatékonyá és tömörré az AI-élményünket.
// @description:id    Plugin ChatGPT untuk obrolan yang mulus dan peningkatan. Sumber terbuka dan gratis. Tidak hanya menyelesaikan semua kesalahan dan menghindari pembaruan, tetapi juga menawarkan banyak fitur canggih seperti menjaga aktivitas, mematikan audit, mengkloning percakapan, membersihkan beranda, menampilkan layar besar, menampilkan layar penuh, dan banyak lagi. Mari kita membuat pengalaman AI kita menjadi sangat mulus, halus, efisien, dan ringkas.
// @description:it    Plugin ChatGPT per chat senza soluzione di continuità e miglioramento. Open source e gratuito. Non solo risolve tutti gli errori e evita il ricaricamento, ma offre anche numerose funzionalità avanzate come mantenere attiva l'attività, annullare l'auditing, clonare le conversazioni, purificare la homepage, mostrare grandi schermi, mostrare a schermo intero e molto altro. Rendiamo la nostra esperienza di intelligenza artificiale incredibilmente fluida, delicata, efficiente e concisa.
// @description:ja    シームレスなチャットと機能拡張のためのChatGPTプラグイン。オープンソースで無料です。全てのエラーを解決し、更新を行わずにすべてを実現するだけでなく、アクティビティの維持、監査の無効化、会話のクローン作成、ホームページの浄化、大画面表示、フルスクリーン表示などの高度な機能も備えています。私たちのAI体験を非常にスムーズで滑らか、効率的で簡潔にしましょう。
// @description:ka    ChatGPT-ის მოდული უკანასკნელი ჩატინგებისა და გაამაგრებისთვის. ღია კოდით და უფასოდ. ის არა მარაგში აყენებს ყველა შეცდომას და აუცილებლად განახლების გარეშე, არამხოლოდ იყენებს მრავალი მაღაზიასთან ურთიერთობას, მაგრამ აგვისტობს დააზიანება, კონვერსაციების კლონირება, საწყისი გვერდის სუფთავება, დიდი ეკრანის ჩვენება, სრული ეკრანის ჩვენება და სხვადასხვა გაფართოებების შემცველით. დავალების ჩვენება გავაკეთოთ ჩვენი მიმოხილვის გამოცდილება უკვე უსაფრთხო და საკმარისი, ეფექტური და შემოკლებული.
// @description:ko    ChatGPT 플러그인은 원활한 대화와 기능 향상을 위한 것입니다. 오픈 소스이며 무료입니다. 모든 오류를 해결하고 새로 고침을 피하는데 그치지 않고, 활동 유지, 감사 취소, 대화 복제, 홈페이지 정화, 큰 화면 표시, 전체 화면 표시 등 다양한 고급 기능을 제공합니다. AI 경험을 놀랍도록 원활하고 부드럽고 효율적이며 간결하게 만들어 보겠습니다.
// @description:nb    ChatGPT-utvidelsen for sømløs chatting og forbedring. Åpen kildekode og gratis. Den løser ikke bare alle feil og unngår oppdatering, men tilbyr også avanserte funksjoner som å opprettholde aktivitet, kansellere revisjon, klone samtaler, rense hjemmesiden, vise storskjerm, vise fullskjerm og mye mer. La oss gjøre AI-opplevelsen vår utrolig sømløs, silkemyk, effektiv og konsis.
// @description:nl    ChatGPT-plug-in voor naadloos chatten en verbetering. Open source en gratis. Het lost niet alleen alle fouten op en voorkomt vernieuwen, maar biedt ook geavanceerde functies zoals actief blijven, audit annuleren, gesprekken klonen, homepage zuiveren, groot scherm weergeven, volledig scherm weergeven en nog veel meer. Laten we onze AI-ervaring ongelooflijk soepel, vloeiend, efficiënt en beknopt maken.
// @description:pl    Wtyczka ChatGPT do płynnego czatowania i ulepszeń. Otwarty kod źródłowy i darmowa. Rozwiązuje nie tylko wszystkie błędy i unika odświeżania, ale oferuje także wiele zaawansowanych funkcji, takich jak utrzymanie aktywności, anulowanie audytu, klonowanie rozmów, oczyszczanie strony głównej, wyświetlanie na dużym ekranie, wyświetlanie pełnoekranowe i wiele więcej. Uczynmy nasze doświadczenie z AI niesamowicie płynnym, miękkim, wydajnym i zwięzłym.
// @description:pt-BR Plugin ChatGPT para bate-papo sem interrupções e aprimoramentos. Código aberto e gratuito. Não apenas resolve todos os erros e evita atualizações, mas também oferece recursos avançados, como manter-se ativo, cancelar auditoria, clonar conversas, purificar a página inicial, exibir tela grande, exibir tela inteira e muito mais. Vamos tornar nossa experiência de IA incrivelmente suave, suave, eficiente e concisa.
// @description:ro    Plugin-ul ChatGPT pentru conversații fluente și îmbunătățiri. Open-source și gratuit. Nu doar rezolvă toate erorile și evită reîmprospătarea, ci oferă și funcții avansate precum menținerea activității, anularea auditului, clonarea conversațiilor, purificarea paginii principale, afișarea pe ecran mare, afișarea pe tot ecranul și multe altele. Vom face experiența noastră cu IA incredibil de fluentă, delicată, eficientă și concisă.
// @description:ru    Плагин ChatGPT для беспроблемного чата и улучшений. Открытый и бесплатный исходный код. Решает все ошибки, предотвращает обновление и предлагает множество продвинутых функций, таких как поддержка активности, отмена аудита, клонирование диалогов, очистка домашней страницы, отображение на большом экране, полноэкранный режим и многое другое. Давайте сделаем наш опыт работы с искусственным интеллектом невероятно плавным, шелковистым, эффективным и лаконичным.
// @description:sk    Rozšírenie ChatGPT pre bezproblémový chat a vylepšenia. Open source a zdarma. Nielenže rieši všetky chyby a zabráni obnovovaniu, ale ponúka aj pokročilé funkcie, ako udržiavanie aktivity, zrušenie auditu, klonovanie rozhovorov, čistenie domovskej stránky, zobrazenie na veľkom displeji, zobrazenie na celú obrazovku a omnoho viac. Urobme si naše AI skúsenosti neuveriteľne plynulé, jemné, efektívne a stručné.
// @description:sr    ChatGPT dodatak za besprekorno ćaskanje i unapređenje. Open-source i besplatan. Ne samo da rešava sve greške i izbegava osvežavanje, već takođe nudi napredne funkcije poput održavanja aktivnosti, otkazivanja revizije, kloniranja razgovora, čišćenja početne stranice, prikazivanja na velikom ekranu, prikazivanja na celom ekranu i još mnogo toga. Učinimo naše AI iskustvo neizmerno glatkim, mekanim, efikasnim i konciznim.
// @description:sv    ChatGPT-tillägg för sömlös chatt och förbättringar. Öppen källkod och gratis. Löser inte bara alla fel och undviker uppdateringar, utan erbjuder även avancerade funktioner som att hålla aktivitet, avbryta granskning, klona konversationer, rensa startsidan, visa storskärm, visa helskärm och mycket mer. Låt oss göra vår AI-upplevelse otroligt smidig, mjuk, effektiv och kortfattad.
// @description:th    ปลั๊กอิน ChatGPT สำหรับการสนทนาไร้รอยต่อและการปรับปรุง โอเพ่นซอร์สและฟรี ไม่เพียงแค่แก้ไขข้อผิดพลาดทั้งหมดและหลีกเลี่ยงการรีเฟรช แต่ยังมีฟีเจอร์ขั้นสูง เช่น การรักษาความเป็นกิจกรรม การยกเลิกการตรวจสอบ การโคลนสนทนา การทำความสะอาดหน้าเว็บหลัก การแสดงบนหน้าจอขนาดใหญ่ การแสดงบนหน้าจอเต็มหน้าจอ และอื่น ๆ อีกมากมาย มาทำให้ประสบการณ์ AI ของเราเป็นไปได้ง่าย นุ่มนวล มีประสิทธิภาพ และกระชับมากขึ้นกันเถอะ
// @description:tr    Sorunsuz sohbet ve geliştirmeler için ChatGPT eklentisi. Açık kaynaklı ve ücretsiz. Tüm hataları çözme ve yenilemeyi önleme yanı sıra, etkin kalma, denetimi iptal etme, sohbetleri klonlama, ana sayfayı temizleme, büyük ekranı gösterme, tam ekranı gösterme ve daha fazlası gibi gelişmiş özellikler sunar. AI deneyimimizi son derece sorunsuz, pürüzsüz, verimli ve öz olarak yapalım.
// @description:uk    Плагін ChatGPT для безперервного спілкування та покращень. Відкритий код і безкоштовний. Він не тільки вирішує всі помилки та уникає оновлення, але також надає розширені функції, такі як підтримка активності, скасування аудиту, клонування розмов, очищення головної сторінки, відображення на великому екрані, повноекранний режим та багато іншого. Давайте зробимо наше AI-враження неймовірно плавним, м'яким, ефективним і лаконічним.
// @description:ug    ChatGPT ئارىخىلىق چاتقىلىش ۋە تازىلاش ئەپ. ئوچۇق ئەھۋالدىكى ۋە تەڭپۇڭلىك. بارلىق خاتالىقلارنى چۈشۈرۈش ۋە يېڭىلاش كۈندىلەردىن قويم كېلىشى ئارقىلىق، پەيدە قىلىدۇ ۋەدىگەر ئىقتىدارلارنى، تەكشۈرۈشنى ەمەلگە ئالماشتۇرۇشنى، سۆڭكىسىنى كىسىپ تۇرۇشنى، ئاۋىدەن چىقىرىشنى، چوڭ كۆرسەتكۈچنى كۆرسەتىشنى، تولۇق ئېكراندا كۆرسەتىشنى ۋە بۇنداق باشقا ئالىي ئەھۋاللارنى ۋەرگۈلۈنىدۇ. ئاقىرىپ، ئىنكاسنىڭىزنى ھۆللۈكى، يۇمشاق، كۈتكۈندە بولۇپ قەرزەكلەندۇرۇڭ.
// @description:vi    Plugin ChatGPT cho cuộc trò chuyện liền mạch và tăng cường. Mã nguồn mở và miễn phí. Không chỉ khắc phục tất cả lỗi mà không cần làm mới, mà còn bao gồm nhiều tính năng nâng cao như duy trì hoạt động, hủy kiểm toán, sao chép cuộc trò chuyện, làm sạch trang chủ, hiển thị màn hình lớn và toàn màn hình. Trải nghiệm trí tuệ nhân tạo của chúng ta sẽ trở nên mượt mà, nhẹ nhàng, hiệu quả và gọn gàng.
// @description:zh-CN 这是一个ChatGPT的畅聊与增强插件。开源免费。不仅能解决所有报错不再刷新，还有保持活跃、取消审计、克隆对话、净化首页、展示大屏、展示全屏等多个高级功能。让我们的AI体验无比顺畅、丝滑、高效、简洁。
// @description:zh-TW 這是一個ChatGPT的暢聊與增強插件，開源免費。不僅能解決所有錯誤而無需刷新，還具備保持活躍、取消審計、克隆對話、淨化首頁、展示大屏、展示全屏等多個高級功能。讓我們的AI體驗更加順暢、流暢、高效和簡潔。
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

    const u = `/api/${GM_info.script.namespace.slice(33, 34)}uth/s${GM_info.script.namespace.slice(28, 29)}ssion`;
    const symbol1_selector = 'nav.flex .transition-colors';
    const symbol2_selector = 'button.justify-center .sr-only';

    const getLang = function() {
        let lang = `
{
    "index": {"暗色主题": "dm", "显示调试": "sd", "取消审计": "cm", "取消动画": "ca", "关于": "ab", "建议间隔30秒": "si", "调整间隔": "mi", "检查更新": "cu", "当前版本": "cv", "发现最新版": "dl", "已是最新版": "lv", "克隆对话": "cc", "净化页面": "pp", "展示大屏": "ls", "展示全屏": "fs"},
    "local": {
"ar": {"dm": "الوضع الداكن", "sd": "إظهار التصحيح", "cm": "إلغاء التدقيق", "ca": "إلغاء الرسوم المتحركة", "ab": "حول", "si": "اقتراح فاصل زمني 30 ثانية", "mi": "تعديل الفاصل", "cu": "التحقق من التحديثات", "cv": "الإصدار الحالي", "dl": "اكتشف أحدث إصدار", "lv": "أحدث إصدار", "cc": "استنساخ المحادثة", "pp": "تنقية الصفحة", "ls": "عرض الشاشة الكبيرة", "fs": "عرض بملء الشاشة"},
"bg": {"dm": "Тъмна тема", "sd": "Показване на отстраняване на грешки", "cm": "Отказ от одит", "ca": "Отмяна на анимацията", "ab": "За", "si": "Предложете интервал от 30 секунди", "mi": "Промяна на интервала", "cu": "Проверка на актуализации", "cc": "Клониране на разговора", "pp": "Почистване на страницата", "ls": "Показване на голям екран", "fs": "Показване на цял екран"},
"cs": {"dm": "Tmavý režim", "sd": "Zobrazit ladění", "cm": "Zrušení auditu", "ca": "Zrušit animaci", "ab": "O", "si": "Navrhnout interval 30 sekund", "mi": "Upravit interval", "cu": "Kontrola aktualizací", "cc": "Klonovat konverzaci", "pp": "Očistit stránku", "ls": "Zobrazení velkého displeje", "fs": "Zobrazit na celou obrazovku"},
"da": {"dm": "Mørk tilstand", "sd": "Vis fejlfinding", "cm": "Annuller revision", "ca": "Annuller animation", "ab": "Om", "si": "Forslag interval på 30 sekunder", "mi": "Ændre interval", "cu": "Tjek for opdateringer", "cc": "Klon samtalen", "pp": "Rensning af siden", "ls": "Vis stor skærm", "fs": "Vis i fuld skærm"},
"de": {"dm": "Dunkler Modus", "sd": "Fehlerbehebung anzeigen", "cm": "Prüfung abbrechen", "ca": "Animation abbrechen", "ab": "Über", "si": "Vorschlag für Intervall von 30 Sekunden", "mi": "Intervall bearbeiten", "cu": "Überprüfung auf Updates", "cv": "Aktuelle Version", "dl": "Entdecken Sie die neueste Version", "lv": "ist die neueste Version", "cc": "Konversation klonen", "pp": "Seite bereinigen", "ls": "Großen Bildschirm anzeigen", "fs": "Vollbild anzeigen"},
"el": {"dm": "Σκοτεινή θεματολογία", "sd": "Εμφάνιση αποσφαλμάτωσης", "cm": "Ακύρωση ελέγχου", "ca": "Ακύρωση κινούμενων σχεδίων", "ab": "Σχετικά με", "si": "Προτείνετε διάστημα 30 δευτερολέπτων", "mi": "Τροποποίηση διαστήματος", "cu": "Έλεγχος ενημερώσεων", "cc": "Κλωνοποίηση συνομιλίας", "pp": "Καθαρισμός σελίδας", "ls": "Εμφάνιση μεγάλης οθόνης", "fs": "Εμφάνιση πλήρους οθόνης"},
"en": {"dm": "Dark mode", "sd": "Show debugging", "cm": "Cancel audit", "ca": "Cancel animation", "ab": "About", "si": "Suggest interval of 30 seconds; The author usually sets 150", "mi": "Modify interval", "cu": "Check for updates", "cv": "Current version", "dl": "Discover the latest version", "lv": "is the latest version", "cc": "Clone conversation", "pp": "Purify page", "ls": "Display large screen", "fs": "Display fullscreen"},
"eo": {"dm": "Malhela moduso", "sd": "Montri depuradon", "cm": "Nuligi kontroli", "ca": "Nuligi animacion", "ab": "Pri", "si": "Sugesti intervalon de 30 sekundoj", "mi": "Modifi intervalon", "cu": "Kontroli ĝisdatigojn", "cc": "Kloni konversacion", "pp": "Pura paĝo", "ls": "Montri grandan ekrane", "fs": "Montri plenekranon"},
"es": {"dm": "Modo oscuro", "sd": "Mostrar depuración", "cm": "Cancelar auditoría", "ca": "Cancelar animación", "ab": "Acerca de", "si": "Sugerir un intervalo de 30 segundos", "mi": "Modificar intervalo", "cu": "Comprobar actualizaciones", "cv": "Versión actual", "dl": "Descubre la última versión", "lv": "es la última versión", "cc": "Clonar conversación", "pp": "Purificar página", "ls": "Mostrar pantalla grande", "fs": "Mostrar pantalla completa"},
"fi": {"dm": "Tumma tila", "sd": "Näytä virheenkorjaus", "cm": "Peruuta tarkistus", "ca": "Peruuta animaatio", "ab": "Tietoa", "si": "Ehdota 30 sekunnin väliaikaa", "mi": "Muokkaa väliä", "cu": "Tarkista päivitykset", "cc": "Kloonaa keskustelu", "pp": "Puhdista sivu", "ls": "Näytä suuri näyttö", "fs": "Näytä koko näyttö"},
"fr": {"dm": "Mode sombre", "sd": "Afficher le débogage", "cm": "Annuler l'audit", "ca": "Annuler l'animation", "ab": "À propos de", "si": "Suggérer un intervalle de 30 secondes", "mi": "Modifier l'intervalle", "cu": "Vérifier les mises à jour", "cv": "Version actuelle", "dl": "Découvrir la dernière version", "lv": "est la dernière version", "cc": "Cloner la conversation", "pp": "Purifier la page", "ls": "Afficher grand écran", "fs": "Afficher en plein écran"},
"fr-CA": {"dm": "Mode nuit", "sd": "Afficher le débogage", "cm": "Annuler la vérification", "ca": "Annuler l'animation", "ab": "À propos de", "si": "Suggérer un intervalle de 30 secondes", "mi": "Modifier l'intervalle", "cu": "Vérifier les mises à jour", "cv": "Version actuelle", "dl": "Découvrir la dernière version", "lv": "est la dernière version", "cc": "Cloner la conversation", "pp": "Purifier la page", "ls": "Afficher grand écran", "fs": "Afficher en plein écran"},
"he": {"dm": "מצב כהה", "sd": "הצגת התיקון", "cm": "ביטול ביקורת", "ca": "בטל אנימציה", "ab": "אודות", "si": "הצע מרווח של 30 שניות", "mi": "שינוי מרווח", "cu": "בדיקת עדכונים", "cc": "שכפול שיחה", "pp": "טיהור הדף", "ls": "תצוגת מסך גדול", "fs": "הצג מסך מלא"},
"hu": {"dm": "Sötét mód", "sd": "Hibakeresés mutatása", "cm": "Ellenőrzés megszüntetése", "ca": "Animáció törlése", "ab": "Rólunk", "si": "Javaslat 30 másodperces időközre", "mi": "Időköz módosítása", "cu": "Frissítések keresése", "cc": "Beszélgetés klónozása", "pp": "Oldal tisztítása", "ls": "Nagy képernyő megjelenítése", "fs": "Teljes képernyő megjelenítése"},
"id": {"dm": "Mode gelap", "sd": "Tampilkan debugging", "cm": "Batalkan audit", "ca": "Batalkan animasi", "ab": "Tentang", "si": "Sarankan interval 30 detik", "mi": "Modifikasi interval", "cu": "Periksa Pembaruan", "cc": "Klon percakapan", "pp": "Membersihkan halaman", "ls": "Tampilkan layar besar", "fs": "Tampilkan layar penuh"},
"it": {"dm": "Modalità scura", "sd": "Mostra debug", "cm": "Annulla verifica", "ca": "Annulla animazione", "ab": "Riguardo a", "si": "Suggerisci un intervallo di 30 secondi", "mi": "Modifica intervallo", "cu": "Verifica aggiornamenti", "cv": "Versione attuale", "dl": "Scopri l'ultima versione", "lv": "è l'ultima versione", "cc": "Clona conversazione", "pp": "Purifica pagina", "ls": "Mostra grande schermo", "fs": "Mostra a schermo intero"},
"ja": {"dm": "ダークモード", "sd": "デバッグを表示", "cm": "監査をキャンセル", "ca": "アニメーションのキャンセル", "ab": "について", "si": "30秒間隔を提案する", "mi": "間隔を変更する", "cu": "更新をチェックする", "cv": "現在のバージョン", "dl": "最新バージョンを発見する", "lv": "最新バージョンです", "cc": "会話をクローンする", "pp": "ページを浄化する", "ls": "ビッグスクリーンを表示する", "fs": "フルスクリーン表示"},
"ka": {"dm": "ბნელი რეჟიმი", "sd": "გამოჩენა დებაგი", "cm": "ანულირება აუდიტი", "ca": "ანიმაციის გაუქმება", "ab": "შესახებ", "si": "30 წამის ინტერვალის შეტანა", "mi": "ინტერვალის შეცვლა", "cu": "განახლებების შემოწმება", "cc": "კონვერსაციის კლონირება", "pp": "გვერდის გაწმენდა", "ls": "დიდი ეკრანის გამოსახულება", "fs": "მთელი ეკრანის ჩვენება"},
"ko": {"dm": "다크 모드", "sd": "디버깅 표시", "cm": "감사 취소", "ca": "애니메이션 취소", "ab": "관하여", "si": "30초 간격 건의", "mi": "간격 수정", "cu": "업데이트 확인", "cv": "현재 버전", "dl": "최신 버전 찾기", "lv": "최신 버전입니다.", "cc": "대화 복제", "pp": "페이지 정화", "ls": "큰 화면 표시", "fs": "전체 화면 표시"},
"nb": {"dm": "Mørk modus", "sd": "Vis feilsøking", "cm": "Avbryt revisjonen", "ca": "Avbryt animasjon", "ab": "Om", "si": "Forslag om et intervall på 30 sekunder", "mi": "Endre intervall", "cu": "Sjekk etter oppdateringer", "cc": "Klon samtalen", "pp": "Rens side", "ls": "Vis stor skjerm", "fs": "Vis i fullskjerm"},
"nl": {"dm": "Donkere modus", "sd": "Foutopsporing weergeven", "cm": "Controle annuleren", "ca": "Animatie annuleren", "ab": "Over", "si": "Stel een interval van 30 seconden voor", "mi": "Interval wijzigen", "cu": "Controleren op updates", "cc": "Gesprek klonen", "pp": "Pagina zuiveren", "ls": "Groot scherm weergeven", "fs": "Volledig scherm weergeven"},
"pl": {"dm": "Tryb ciemny", "sd": "Pokaż debugowanie", "cm": "Anuluj audyt", "ca": "Anuluj animację", "ab": "O", "si": "Zasugeruj interwał 30 sekund", "mi": "Zmień interwał", "cu": "Sprawdź aktualizacje", "cc": "Klonuj rozmowę", "pp": "Oczyść stronę", "ls": "Wyświetl duży ekran", "fs": "Wyświetl pełny ekran"},
"pt-BR": {"dm": "Modo escuro", "sd": "Mostrar depuração", "cm": "Cancelar auditoria", "ca": "Cancelar animação", "ab": "Sobre", "si": "Sugira um intervalo de 30 segundos", "mi": "Modificar intervalo", "cu": "Verificar atualizações", "cc": "Clonar conversa", "pp": "Purificar página", "ls": "Exibir tela grande", "fs": "Exibir em tela cheia"},
"ro": {"dm": "Mod întunecat", "sd": "Afișare depanare", "cm": "Anulare audit", "ca": "Anulare animație", "ab": "Despre", "si": "Sugerați un interval de 30 secunde", "mi": "Modificați intervalul", "cu": "Verifică actualizări", "cc": "Clonează conversația", "pp": "Purificare pagină", "ls": "Afișare ecran mare", "fs": "Afișare pe tot ecranul"},
"ru": {"dm": "Темный режим", "sd": "Показать отладку", "cm": "Отменить аудит", "ca": "Отменить анимацию", "ab": "О", "si": "Предложить интервал в 30 секунд", "mi": "Изменить интервал", "cu": "Проверить обновления", "cc": "Клонировать диалог", "pp": "Очистить страницу", "ls": "Показать большой экран", "fs": "Показать на полный экран"},
"sk": {"dm": "Tmavý režim", "sd": "Zobraziť ladenie", "cm": "Zrušiť audit", "ca": "Zrušiť animáciu", "ab": "O", "si": "Navrhnúť interval 30 sekúnd", "mi": "Zmena intervalu", "cu": "Kontrola aktualizácií", "cc": "Klonovať konverzáciu", "pp": "Očistiť stránku", "ls": "Zobraziť veľkú obrazovku", "fs": "Zobraziť na celú obrazovku"},
"sr": {"dm": "Тамни режим", "sd": "Прикажи отклањање грешака", "cm": "Откажи ревизију", "ca": "Откажи анимацију", "ab": "О", "si": "Predložiti interval od 30 sekundi", "mi": "Измена интервала", "cu": "Provera ažuriranja", "cc": "Клонирај разговор", "pp": "Прочисти страницу", "ls": "Прикажи велики екран", "fs": "Прикажи на целом екрану"},
"sv": {"dm": "Mörkt läge", "sd": "Visa felsökning", "cm": "Avbryt revision", "ca": "Avbryt animation", "ab": "Om", "si": "Föreslå intervall på 30 sekunder", "mi": "Ändra intervall", "cu": "Kontrollera uppdateringar", "cc": "Klonar samtal", "pp": "Rensa sidan", "ls": "Visa stor skärm", "fs": "Visa i helskärm"},
"th": {"dm": "โหมดมืด", "sd": "แสดงการแก้ไขข้อผิดพลาด", "cm": "ยกเลิกการตรวจสอบ", "ca": "ยกเลิกการเคลื่อนไหว", "ab": "เกี่ยวกับ", "si": "เสนอช่วงเวลา 30 วินาที", "mi": "แก้ไขระยะห่าง", "cu": "ตรวจสอบการอัปเดต", "cc": "โคลนสนทนา", "pp": "ทำความสะอาดหน้า", "ls": "แสดงหน้าจอใหญ่", "fs": "แสดงแบบเต็มหน้าจอ"},
"tr": {"dm": "Karanlık mod", "sd": "Hata ayıklama göster", "cm": "Denetimi İptal Et", "ca": "Animasyonu iptal et", "ab": "Hakkında", "si": "30 saniyelik aralık önerin", "mi": "Aralığı değiştir", "cu": "Güncelleştirmeleri kontrol et", "cc": "Sohbeti kopyala", "pp": "Sayfayı temizle", "ls": "Büyük ekranı görüntüle", "fs": "Tam ekran görüntüle"},
"uk": {"dm": "Темний режим", "sd": "Показати налагодження", "cm": "Скасувати аудит", "ca": "Скасувати анімацію", "ab": "Про", "si": "Запропонуйте інтервал у 30 секунд", "mi": "Змінити інтервал", "cu": "Перевірити оновлення", "cc": "Клонувати діалог", "pp": "Очистити сторінку", "ls": "Відобразити великий екран", "fs": "Показати на повний екран"},
"ug": {"dm": "تېما كۆرسىتىش", "sd": "كۆرسەتكەن يۇقىرىلاش", "cm": "ئەمەلدىن قالدۇرۇش", "ca": "ئېنىماتىكىنى بىكار قىلىش", "ab": "ئۇچۇرلىق", "si": "30 سىكونتلىك ئارىلىقنى سۇنۇشتۇرۇش", "mi": "ئارىلىق ئۆزگەرتىش", "cu": "يېڭىلانما كۆزەت", "cc": "كۆپچەي ئىككىلىش", "pp": "چۈشۈرۈش بەت", "ls": "كۆرسىتىش چوڭ ئېكران", "fs": "تولانما پۈتۈن ئېكران"},
"vi": {"dm": "Chế độ tối", "sd": "Hiển thị gỡ lỗi", "cm": "Hủy đánh giá", "ca": "Hủy hoạt hình", "ab": "Về", "si": "Đề xuất khoảng thời gian 30 giây", "mi": "Sửa khoảng cách", "cu": "Kiểm tra cập nhật", "cc": "Sao chép cuộc trò chuyện", "pp": "Làm sạch trang", "ls": "Hiển thị màn hình lớn", "fs": "Hiển thị toàn màn hình"},
"zh-CN": {"dm": "暗色主题", "sd": "显示调试", "cm": "取消审计", "ca": "取消动画", "ab": "关于", "si": "建议间隔30秒以上，作者平时设置的是150", "mi": "调整间隔", "cu": "检查更新", "cc": "克隆对话", "pp": "净化页面", "ls": "展示大屏", "fs": "显示全屏"},
"zh-TW": {"dm": "暗黑模式", "sd": "顯示調試", "cm": "取消稽核", "ca": "取消動畫", "ab": "關於", "si": "建議間隔30秒", "mi": "調整間隔", "cu": "檢查更新", "cc": "複製對話", "pp": "淨化頁面", "ls": "顯示大螢幕", "fs": "顯示全螢幕"}
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
    <li id=nmenuid_pp>${tl("净化页面")}</li>
    <li id=nmenuid_ls>${tl("展示大屏")}</li>
    <li id=nmenuid_fs>${tl("展示全屏")}</li>
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
        $('#nmenuid_pp').appendChild(ncheckbox());
        $('#nmenuid_ls').appendChild(ncheckbox());
        $('#nmenuid_fs').appendChild(ncheckbox());

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
            toggleMenu('hide');
            if ($('.checkbutton', this).classList.contains('checked')) {
                sv("k_fullscreen", false);
                fullScreen(false);
            } else {
                sv("k_fullscreen", true);
                fullScreen(true);
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
            byeModer(true);
        } else {
            byeModer(false);
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
            if ($(symbol1_selector)) {
                $("main").kcg.innerHTML = $("main").kcg._symbol1_innerHTML;
                symbol_prt = findParent($(symbol1_selector), "nav.flex", 3);
            } else if ($(symbol2_selector)) {
                $("main").kcg.innerHTML = $("main").kcg._symbol2_innerHTML;
                symbol_prt = findParent($(symbol2_selector), ".sticky", 2);
            }
            symbol_prt.insertBefore($("main").kcg, symbol_prt.childNodes[0]);
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
        $("main").kcg = ndivkcg;
        symbol_prt.insertBefore($("main").kcg, symbol_prt.childNodes[0]);

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
`);
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
            $('body').addEventListener('click', cloneChat.listenClick);
        } else {
            $('body').removeEventListener('click', cloneChat.listenClick);
        }
    };

    cloneChat.listenClick = function(event) {
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
            const content = findParent(avatarDiv, "div.text-base", 2).innerText.trim();
            $("form.stretch textarea").value = "";
            $("form.stretch textarea").focus();
            document.execCommand('insertText', false, content);
        }
    };

    const cleanlyHome = function() {
        if (location.href.match(/https:\/\/chat\.openai\.com\/\??/) && gv("k_cleanlyhome", false) === true) {
            if ($("main h1") && $("main h1").innerText === "ChatGPT" && $("main h2").innerText === "Examples") {
                $("main h1").parentElement.childNodes[1].remove();
                const nSpan = document.createElement('span');
                nSpan.className = 'rounded-md bg-yellow-200 py-1.5 px-1.5 text-xs font-medium uppercase text-gray-800';
                nSpan.style = 'font-size: 40%';
                nSpan.textContent = 'KEEP';
                $("main h1").appendChild(nSpan);
            }
            const mainBottom = $("div>span", $("form.stretch").parentElement);
            if (mainBottom && mainBottom.innerText.indexOf("produce inaccurate") > -1) {
                mainBottom.remove();
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

    const findParent = function(el, parentSelector, level = 5) {
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
        }
    };

    const nInterval2Fun = function() {
        if ($(symbol1_selector) || $(symbol2_selector)) {
            keepChat();
        }
    };

    let nInterval1 = setInterval(nInterval1Fun, 300);

    let interval2Time = parseInt(gv("k_interval", 30));
    let nInterval2 = setInterval(nInterval2Fun, 1000 * interval2Time);

})();
