// ==UserScript==
// @name              KeepChatGPT
// @description       这是一款提高ChatGPT的数据安全能力和效率的插件。并且免费共享大量创新功能，如：自动刷新、保持活跃、数据安全、取消审计、克隆对话、言无不尽、净化页面、展示大屏、拦截跟踪、日新月异、明察秋毫等。让我们的AI体验无比安全、顺畅、丝滑、高效、简洁。
// @version           35.0
// @author            xcanwin
// @namespace         https://github.com/xcanwin/KeepChatGPT/
// @supportURL        https://github.com/xcanwin/KeepChatGPT/
// @description:ar    هذا هو ملحق يعزز قدرات وكفاءة بيانات ChatGPT الأمان، ويشترك مجانًا في العديد من الميزات الابتكارية مثل: التحديث التلقائي، البقاء نشطًا، الأمان للبيانات، إلغاء التدقيق، استنساخ الحوار، إلقاء الأحرف، تنقية الصفحة الرئيسية، عرض الشاشة الكبيرة، عرض ملء الشاشة، اعتراض التتبع، التطور الدائم وغيرها.
// @description:bg    Това е добавка, която повишава способностите и ефективността на данните на ChatGPT за сигурност и безпасност и споделя множество иновативни функции безплатно, като: автоматично обновление, поддържане на активност, сигурност на данните, отмяна на одита, клониране на диалог, безкрайни символи, почистване на началната страница, голям екран, пълен екран, прехващане на проследяване, непрекъснато развитие и други.
// @description:cs    Toto je doplněk zvyšující schopnosti a efektivitu zabezpečení dat u ChatGPT a sdílí mnoho inovativních funkcí zdarma, jako je automatické obnovení, udržování aktivity, zabezpečení dat, zrušení auditu, klonování konverzace, bezedné znaky, úprava úvodní stránky, zobrazení na velké obrazovce, zobrazení na celou obrazovku, blokování sledování, nepřetržitý vývoj a další.
// @description:da    Dette er en tilføjelse, der forbedrer ChatGPT's datasikkerhedsfunktioner og effektivitet og deler mange innovative funktioner gratis, såsom automatisk opdatering, aktivitetsbevaring, datasikkerhed, afbrydelse af revision, dialogkloning, uendelige tegn, rensning af startside, storskærmvisning, fuldskærmsvisning, sporingsinterception, konstant udvikling og mere.
// @description:de    Dies ist ein Add-On, das die Datenschutzfunktionen und Effizienz von ChatGPT verbessert und viele innovative Funktionen kostenlos teilt, wie z. B. automatische Aktualisierung, Aktivitätserhaltung, Datensicherheit, Aufhebung der Prüfung, Klonen von Gesprächen, endlose Zeichen, Bereinigung der Startseite, Großbildanzeige, Vollbildanzeige, Tracking-Abfangen, kontinuierliche Entwicklung und mehr.
// @description:el    Αυτό είναι ένα πρόσθετο που βελτιώνει τις δυνατότητες ασφάλειας και αποτελεσματικότητας των δεδομένων του ChatGPT και μοιράζεται πολλά καινοτόμα χαρακτηριστικά δωρεάν, όπως αυτόματη ανανέωση, διατήρηση της ενεργότητας, ασφάλεια δεδομένων, ακύρωση ελέγχου, κλωνοποίηση συνομιλίας, απεριόριστους χαρακτήρες, καθαρισμός της αρχικής σελίδας, προβολή σε μεγάλη οθόνη, προβολή σε πλήρη οθόνη, παρεμβολή ιχνηλάτησης, συνεχής εξέλιξη και άλλα.
// @description:en    This is an add-on that enhances ChatGPT's data security capabilities and efficiency, sharing numerous innovative features for free, such as automatic refresh, activity preservation, data security, audit cancellation, conversation cloning, limitless characters, homepage purification, large screen display, full-screen display, tracking interception, ever-evolving, and more.
// @description:eo    Ĉi tio estas aldonaĵo kiu plibonigas la datumsekurecan kapablecon kaj efikon de ChatGPT, kunhavigante multajn inovajn funkciojn senpage, ekzemple: aŭtomata refreŝigo, konservado de aktiveco, datumsekureco, nuligo de revizio, klonado de konversacio, senlimaj signoj, hejmpaĝa purigado, grandekrana montrado, tutskrana montrado, traksekvad-intercepto, ĉiam-evoluanta, kaj pli.
// @description:es    Este es un complemento que mejora las capacidades de seguridad de datos de ChatGPT y la eficiencia, compartiendo numerosas características innovadoras de forma gratuita, como la actualización automática, preservación de actividad, seguridad de datos, cancelación de auditoría, clonación de conversaciones, caracteres ilimitados, purificación de la página de inicio, visualización en pantalla grande, visualización en pantalla completa, interceptación de seguimiento, en constante evolución y más.
// @description:fi    Tämä on lisäosa, joka parantaa ChatGPT:n tietoturvakykyjä ja tehokkuutta, jakamalla lukuisia innovatiivisia ominaisuuksia ilmaiseksi, kuten automaattinen päivitys, toiminnan säilyttäminen, tietoturva, tarkastuksen peruutus, keskustelun kloonaus, rajattomat merkit, etusivun puhdistus, suuren näytön näyttö, kokoruutunäyttö, seurannan pysäytys, jatkuva kehittyminen ja enemmän.
// @description:fr    Ceci est une extension qui améliore les capacités de sécurité des données de ChatGPT et l'efficacité, en partageant de nombreuses fonctionnalités innovantes gratuitement, telles que le rafraîchissement automatique, la préservation de l'activité, la sécurité des données, l'annulation de l'audit, le clonage de conversation, des caractères illimités, la purification de la page d'accueil, l'affichage en grand écran, l'affichage en plein écran, l'interception de suivi.
// @description:fr-CA Ceci est une extension qui améliore les capacités de sécurité des données de ChatGPT et l'efficacité, en partageant de nombreuses fonctionnalités innovantes gratuitement, telles que le rafraîchissement automatique, la préservation de l'activité, la sécurité des données, l'annulation de l'audit, le clonage de conversation, des caractères illimités, la purification de la page d'accueil, l'affichage en grand écran, l'affichage en plein écran, l'interception de suivi.
// @description:he    זוהי תוספת המשפרת את יכולות האבטחה והיעילות של ChatGPT ומשתפת מגוון רחב של תכונות חדשניות בחינם, כמו רענון אוטומטי, שמירת פעילות, אבטחת נתונים, ביטול ניתוח, שכפול שיחה, תווים ללא הגבלה, טיהור דף הבית, הצגה במסך גדול, הצגה במסך מלא, לכידת מעקב, תפוקה מתמידה ועוד.
// @description:hu    Ez egy bővítmény, amely javítja a ChatGPT adatbiztonsági képességeit és hatékonyságát, ingyenesen megosztva számos innovatív funkciót, mint például az automatikus frissítés, az aktivitás megőrzése, az adatbiztonság, az ellenőrzés visszavonása, a beszélgetés klónozása, a végtelen karakterek, a kezdőlap tisztítása, a nagy képernyős megjelenítés, a teljes képernyős megjelenítés, a követés elfogása, folyamatos fejlődés és még sok más.
// @description:id    Ini adalah tambahan yang meningkatkan kemampuan keamanan data ChatGPT dan efisiensi, berbagi banyak fitur inovatif secara gratis, seperti pembaruan otomatis, pelestarian aktivitas, keamanan data, pembatalan audit, kloning percakapan, karakter tak terbatas, penyucian beranda, tampilan layar besar, tampilan layar penuh, penyadapan pelacakan, perkembangan terus-menerus, dan lainnya.
// @description:it    Questo è un componente aggiuntivo che migliora le capacità di sicurezza dei dati di ChatGPT e l'efficienza, condividendo numerose funzionalità innovative gratuitamente, come l'aggiornamento automatico, la conservazione dell'attività, la sicurezza dei dati, l'annullamento dell'audit, il clonaggio delle conversazioni, caratteri illimitati, la purificazione della home page, la visualizzazione su schermo grande, la visualizzazione a schermo intero, l'intercettazione del tracciamento.
// @description:ja    これはChatGPTのデータセキュリティ能力と効率を向上させるアドオンであり、自動リフレッシュ、アクティビティの保持、データセキュリティ、監査キャンセル、会話のクローン、無制限の文字、ホームページの浄化、大画面表示、フルスクリーン表示、トラッキングのインターセプトなどの革新的な機能を無料で共有しています。絶え間なく進化し続けます。
// @description:ka    ეს არის დამატება, რომელიც გაუზრდება ChatGPT-ის მონაცემთა უსაფრთხოების შესაძლებლობებს და ეფექტურობას და გაუთავისუფლებს უკავშირის რაოდენობებს უფასოდ, როგორიცაა: ავტომატური განახლება, საქმიანობის შენახვა, მონაცემთა უსაფრთხოება, აუდიტის გაუქმება, საუზმე კონტაქტის კლონი, ულიმიტო სიმბოლოები, მთავარი გვერდის გაწმენდა, დიდ ეკრანზე ჩვენება, სრული ეკრანზე ჩვენება, ტრეკინგის წამი, საუკეთესო განვითარება და სხვა.
// @description:ko    이것은 ChatGPT의 데이터 보안 기능과 효율성을 향상시키는 애드온으로, 자동 새로 고침, 활동 보존, 데이터 보안, 감사 취소, 대화 복제, 무제한 문자, 홈페이지 정화, 대형 화면 표시, 전체 화면 표시, 추적 가로채기 등의 혁신적인 기능을 무료로 공유합니다. 끊임없이 진화하며 더 많은 기능을 제공합니다.
// @description:nb    Dette er en tilleggsfunksjon som forbedrer ChatGPTs datasikkerhetsevner og effektivitet, og deler mange innovative funksjoner gratis, som automatisk oppdatering, aktivitetsbevaring, datasikkerhet, opphevelse av revisjon, samtalekloning, ubegrensede tegn, hjemmeside-rengjøring, visning på storskjerm, fullskjermvisning, sporingssperre, kontinuerlig utvikling og mer.
// @description:nl    Dit is een add-on die de gegevensbeveiligingsmogelijkheden en efficiëntie van ChatGPT verbetert en tal van innovatieve functies gratis deelt, zoals automatische vernieuwing, activiteitenbehoud, gegevensbeveiliging, annulering van audit, gespreksklonering, onbeperkte tekens, homepage zuivering, grootschermweergave, volledig schermweergave, tracking onderschepping, voortdurende evolutie en meer.
// @description:pl    To dodatek, który poprawia zdolności zabezpieczeń danych w ChatGPT oraz efektywność, udostępniając wiele innowacyjnych funkcji za darmo, takich jak automatyczne odświeżanie, zachowanie aktywności, bezpieczeństwo danych, anulowanie audytu, klonowanie rozmowy, nieograniczone znaki, oczyszczanie strony głównej, wyświetlanie na dużym ekranie, wyświetlanie na pełnym ekranie, przechwytywanie śledzenia, nieustanny rozwój i więcej.
// @description:pt-BR Este é um complemento que melhora as capacidades de segurança de dados do ChatGPT e a eficiência, compartilhando inúmeras características inovadoras gratuitamente, como atualização automática, preservação de atividade, segurança de dados, cancelamento de auditoria, clonagem de conversas, caracteres ilimitados, purificação da página inicial, exibição em tela grande, exibição em tela cheia, interceptação de rastreamento, evolução constante e mais.
// @description:ro    Acesta este un modul care îmbunătățește capacitățile de securitate a datelor pentru ChatGPT și eficiența, partajând numeroase funcționalități inovatoare gratuit, cum ar fi reîmprospătarea automată, păstrarea activității, securitatea datelor, anularea auditului, clonarea conversației, caractere nelimitate, purificarea paginii de start, afișarea pe ecran mare, afișarea pe tot ecranul, interceptarea urmăririi, evoluție continuă și multe altele.
// @description:ru    Это дополнение, повышающее способности к защите данных ChatGPT и эффективности, бесплатно предоставляющее множество инновационных функций, таких как автоматическое обновление, сохранение активности, защита данных, отмена аудита, клонирование диалога, неограниченные символы, очистка домашней страницы, отображение на большом экране, полноэкранный режим, перехват отслеживания, непрерывное развитие и многое другое.
// @description:sk    Toto je doplnok, ktorý zlepšuje schopnosti zabezpečenia údajov ChatGPT a efektívnosť, zdieľa množstvo inovatívnych funkcií zdarma, ako automatické obnovenie, zachovanie aktivity, bezpečnosť údajov, zrušenie auditu, klonovanie konverzácie, neobmedzené znaky, vyčistenie úvodnej stránky, zobrazenie na veľkom displeji, zobrazenie na celú obrazovku, odchyt sledovania, neustály vývoj a viac.
// @description:sr    Ovo je dodatak koji poboljšava mogućnosti bezbednosti podataka u ChatGPT i efikasnost, deleći brojne inovativne funkcije besplatno, kao što su automatsko osvežavanje, očuvanje aktivnosti, bezbednost podataka, otkazivanje revizije, kloniranje razgovora, neograničeni znakovi, pročišćavanje početne stranice, prikaz na velikom ekranu, prikaz na celom ekranu, presretanje praćenja, neprestani razvoj i više.
// @description:sv    Detta är en tillägg som förbättrar ChatGPT: s dataskyddsfunktioner och effektivitet, och delar många innovativa funktioner gratis, som automatisk uppdatering, aktivitetsbevarande, dataskydd, återkallande av granskning, kloning av samtal, obegränsade tecken, rening av startsidan, stor skärmvisning, helskärmsvisning, spårningsavlyssning, ständig utveckling och mer.
// @description:th    นี่คือส่วนเสริมที่เสริมสร้างความสามารถในเรื่องการรักษาความปลอดภัยของข้อมูล ChatGPT และประสิทธิภาพ โดยแบ่งปันฟีเจอร์นวัตกรรมหลากหลายฟรี เช่น การรีเฟรชอัตโนมัติ การรักษาความเคลื่อนไหว การรักษาความปลอดภัยข้อมูล การยกเลิกการตรวจสอบ การทำซ้ำของบทสนทนา อักขระไม่จำกัด การทำความสะอาดหน้าโฮมเพจ การแสดงบนหน้าจอขนาดใหญ่ การแสดงบนหน้าจอเต็มหน้าจอ การแอบดักการติดตาม การเจริญเติบโตอยู่เสมอ และอื่น ๆ
// @description:tr    Bu, ChatGPT'nin veri güvenliği yeteneklerini ve verimliliğini artıran, otomatik yenileme, etkinlik koruma, veri güvenliği, denetim iptali, konuşma klonlama, sınırsız karakter, ana sayfa temizleme, büyük ekran gösterimi, tam ekran gösterimi, izleme engelleme gibi birçok yenilikçi özelliği ücretsiz paylaşan bir eklentidir. Sürekli gelişim ve daha fazlası.
// @description:uk    Це додаток, який покращує можливості забезпечення безпеки даних у ChatGPT та ефективність, поділяючи безкоштовно численні інноваційні функції, такі як автоматичне оновлення, збереження активності, безпека даних, скасування аудиту, клонування розмови, необмежені символи, очищення домашньої сторінки, відображення на великому екрані, відображення на повному екрані, перехоплення відстеження, постійний розвиток та багато іншого.
// @description:ug    بۇ، ChatGPT داتا تىنېلەش كۈچلىرىنى ۋە تەۋسىيەلىكىنى يۇقىرىلاشقان بىر قوشما، ئاپتوماتىك تىزىملاش، پائالىيەت ساقلاش، داتا تىنېشلىتىش، تۆۋەندۇرۇش تىكلىپىنى بىكارلاش، سېنىمىسىز بەلگەلەر، باش بەت ئارىلىقتا تازىلاش، چوڭ كۆرۈش دىسپىلى نۇمايىش، پۈتۈن ئېكران نۇمايىش، داپتىراق ئىزلەش، دائىمىي ئىشلەتكۈچى قوشمىسى، ۋە باشقا كۆپ مەزمۇننى بەلگىلەپ بېرىدۇ.
// @description:vi    Đây là một tiện ích bổ sung cải thiện khả năng bảo mật dữ liệu của ChatGPT và hiệu suất, chia sẻ nhiều tính năng đổi mới miễn phí, như làm mới tự động, bảo tồn hoạt động, bảo mật dữ liệu, hủy kiểm toán, sao chép cuộc trò chuyện, ký tự không giới hạn, làm sạch trang chủ, hiển thị trên màn hình lớn, hiển thị toàn màn hình, chặn theo dõi và phát triển liên tục và hơn nữa.
// @description:zh-CN 这是一款提高ChatGPT的数据安全能力和效率的插件。并且免费共享大量创新功能，如：自动刷新、保持活跃、数据安全、取消审计、克隆对话、言无不尽、净化页面、展示大屏、拦截跟踪、日新月异、明察秋毫等。让我们的AI体验无比安全、顺畅、丝滑、高效、简洁。
// @description:zh-TW 这是一款提高ChatGPT的資料安全能力和效率的插件。並且免費共享大量創新功能，如：自動刷新、保持活躍、資料安全、取消審計、克隆對話、言無不盡、淨化頁面、展示大屏、攔截跟蹤、日新月異、明察秋毫等。讓我們的AI體驗無比安全、順暢、絲滑、高效、簡潔。
// @icon              data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPCEtLSBDcmVhdGVkIHdpdGggTWV0aG9kIERyYXcgLSBodHRwOi8vZ2l0aHViLmNvbS9kdW9waXhlbC9NZXRob2QtRHJhdy8gLS0+CiA8Zz4KICA8dGl0bGU+YmFja2dyb3VuZDwvdGl0bGU+CiAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjQ3IiB3aWR0aD0iNDciIHk9Ii0xIiB4PSItMSIvPgogIDxnIGRpc3BsYXk9Im5vbmUiIG92ZXJmbG93PSJ2aXNpYmxlIiB5PSIwIiB4PSIwIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiBpZD0iY2FudmFzR3JpZCI+CiAgIDxyZWN0IGZpbGw9InVybCgjZ3JpZHBhdHRlcm4pIiBzdHJva2Utd2lkdGg9IjAiIHk9IjAiIHg9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiLz4KICA8L2c+CiA8L2c+CiA8Zz4KICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgPGltYWdlIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzBBQUFBdENBTUFBQUFOeEJLb0FBQUFObEJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0FnSUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCTHIweWtBQUFBRVhSU1RsTUFJdmZqMXFNNGxHZUN6YnhJZHhXd1ZFcUlTSmdBQUFFdlNVUkJWRWpIemRUYmJvVWdFSVhobVFGQkRoN1crNzlzRWNNR2JOR20yVTM3M2ZySHhHVXlWRVNQRVIvcFlzR2RoVG9NUVBUWEJBQlR5d0dLNld1c3JpKzN3RVFqRTJEL29MWlRaUjlyUVNWdnJ1ZFdyZi9wZ2pNZ094ZDA0R0lYWUtiV0trZ2tnemdpY29KS3JkU0pnb1lsaXpZMmRNSFc2NU1Db0k5R243eGx1ckhoc05FM1RXZ21lbWJieVo1RmVpTysxN2RCY0VkQzIzczg4WmRyb201MEY4VUF3alRHQXBpdVhtbHNiZXZuZC8rd1RtZUR1ZFRHMlptcTJUcFRhdVpVRWdCVGFvZEVjNzJXaVN1MUFkRFdPekpOSjQxc0g5UWJFQllCek90amxnQnNnem9BOW5nUWN4MEJZUXVFUWIwZ2s3V01uQzF0N1p4N2JlSnhtT3ZWU1B4cmsxVDJlenV2UXFRaUJ1Vnp3TC80TCtsVGJYak1kRFVEa0JHY3VMODM5eVpxT0syR3RGYmFVZllCQzNzbUVVWHJITThBQUFBQVNVVk9SSzVDWUlJPSIgaWQ9InN2Z18xIiBoZWlnaHQ9IjQ1IiB3aWR0aD0iNDUiIHk9IjAiIHg9IjAiLz4KIDwvZz4KPC9zdmc+
// @license           GPL-2.0-only
// @match             *://chat.openai.com/
// @match             *://chat.openai.com/*
// @match             *://chatgpt.com/
// @match             *://chatgpt.com/*
// @connect           raw.githubusercontent.com
// @connect           update.greasyfork.org
// @connect           chat.openai.com
// @connect           chatgpt.com
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
// @downloadURL https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js
// @updateURL https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js
// ==/UserScript==

(function () {
    "use strict";

    var global = {};
    if (
        typeof __kcg_test_probe__ !== "undefined" &&
        __kcg_test_probe__ &&
        typeof __kcg_test_probe__ === "object"
    ) {
        global = __kcg_test_probe__;
    }

    const $ = (Selector, el) => (el || document).querySelector(Selector);
    const $$ = (Selector, el) => (el || document).querySelectorAll(Selector);

    const muob = (Selector, el, func) => {
        const seen = new WeakSet();
        const visit = (root) => {
            const targets = root && root.matches && root.matches(Selector) ? [root] : [];
            if (root && root.querySelectorAll) {
                targets.push(...root.querySelectorAll(Selector));
            }
            targets.forEach((target) => {
                if (seen.has(target)) return;
                seen.add(target);
                func(target);
            });
        };
        const observer = new MutationObserver((mutationsList, observer2) => {
            for (let mutation of mutationsList) {
                if (mutation.type === "attributes") {
                    visit(mutation.target);
                } else if (mutation.type === "childList") {
                    mutation.addedNodes.forEach(visit);
                }
            }
        });
        observer.observe(el, {
            childList: true,
            subtree: true,
            // React 可能把节点先插入、再提升为编辑器（后补 contenteditable）。
            attributes: true,
            attributeFilter: ["contenteditable", "data-composer-markdown"],
        });
        visit(el);
    };

    const sv = function (key, value = "") {
        GM_setValue(key, value);
    };

    const gv = function (key, value = "") {
        return GM_getValue(key, value);
    };

    const u = `/api/${GM_info.script.namespace.slice(33, 34)}uth/s${GM_info.script.namespace.slice(28, 29)}ssion`;
    // 侧边栏主导航（不含折叠态 rail）、页面主区域，以及消息与输入框节点。
    const symbol1_selector = "[data-sidebar-navigation-root] nav";
    const symbol2_selector = "main";
    const prompt_selector =
        'form[data-chatgpt-composer] .ProseMirror[contenteditable="true"], form.w-full #prompt-textarea';

    // 新版前端 SPA 切换会话后，旧会话的输入框仍留在 DOM 中且隐藏，querySelector 会先命中它。
    // 这里返回第一个实际渲染（可见）的输入框，避免克隆/脱敏写入看不见的编辑器。
    const getPromptTextarea = function () {
        const nodes = Array.from($$(prompt_selector));
        for (const node of nodes) {
            if (node.getClientRects().length > 0) {
                return node;
            }
        }
        return nodes[0] || null;
    };
    const user_message_selector =
        'main div[data-chatgpt-search-unit-key$=":user"]';
    const assistant_message_selector =
        'main div[data-chatgpt-search-unit-key$=":assistant"]';
    const trackingHostRegex =
        /(^|\.)((google-analytics|googletagmanager)\.com|browser-intake-datadoghq\.com|gravatar\.com|intercomcdn\.com|intercom\.io|featuregates\.org|statsigapi\.net|ab\.chatgpt\.com)$/i;
    const trackingPathRegex =
        /\/v1\/initialize|\/messenger\/|\/rgstr|\/v1\/sdk_exception|\/ces\/v1\/(?:t|p|i|m)(?:\?|$)|\/ces\/v1\/telemetry\/intake(?:\?|$)|\/ces\/statsc\/flush(?:\?|$)|\/backend-api\/beacons\//i;
    const trackingBlockRegex =
        /gravatar\.com|browser-intake-datadoghq\.com|\.wp\.com|intercomcdn\.com|sentry\.io|sentry_key=|intercom\.io|featuregates\.org|\/v1\/initialize|\/messenger\/|statsigapi\.net|\/rgstr|\/v1\/sdk_exception|google-analytics\.com|googletagmanager\.com|\/ces\/v1\/telemetry\/intake|\/ces\/statsc\/flush|\/ces\/v1\/(?:t|p|i|m)(?:\?|$)|\/backend-api\/beacons\//i;
    const trackingScriptRegex =
        /widget\.intercom\.io|googletagmanager\.com|google-analytics\.com/i;
    let domStable = false;
    let domStableQueue = [];

    const markDomStable = function () {
        if (domStable) return;
        domStable = true;
        const queue = domStableQueue.slice();
        domStableQueue = [];
        queue.forEach((fn) => {
            try {
                fn();
            } catch (e) {
                console.log(`KeepChatGPT: DOM_STABLE: ERROR: ${e}`);
            }
        });
    };

    const onDomStable = function (fn) {
        if (domStable) {
            fn();
            return;
        }
        domStableQueue.push(fn);
    };

    const bootstrapDomStable = function () {
        const finalize = function () {
            const raf =
                window.requestAnimationFrame ||
                function (cb) {
                    return setTimeout(cb, 16);
                };
            raf(() => raf(markDomStable));
        };
        if (document.readyState === "complete") {
            finalize();
        } else {
            window.addEventListener("load", finalize, { once: true });
        }
    };

    const datasec_blocklist_default =
        "18888888888\nhttps://securiy-domain.com\n([\\w-]+(\\.[\\w-]+)*)@163\.com\nmy-secret-username\n";

    const getLang = function () {
        let lang = `
{
    "index": {"暗色主题": "dm", "显示调试": "sd", "取消审计": "cm", "取消动画": "ca", "关于": "ab", "建议间隔50秒": "si", "调整间隔": "mi", "检查更新": "cu", "当前版本": "cv", "发现最新版": "dl", "已是最新版": "lv", "克隆对话": "cc", "净化页面": "pp", "展示大屏": "ls", "言无不尽": "sc", "拦截跟踪": "it", "日新月异": "ec", "赞赏鼓励": "ap", "警告": "wn", "数据安全": "ds", "发现敏感数据": "dd", "使用正则编写规则": "rr", "通用": "gn", "隐私与安全": "pa", "界面与阅读": "ur", "开发与调试": "dt", "按钮色调": "bh", "0为当前色调": "oh", "明察秋毫": "ko"},
    "local": {
"ar": {"dm": "الوضع الداكن", "sd": "إظهار التصحيح", "cm": "إلغاء التدقيق", "ca": "إلغاء الرسوم المتحركة", "ab": "حول", "si": "اقتراح فاصل زمني 50 ثانية", "mi": "تعديل الفاصل", "cu": "التحقق من التحديثات", "cv": "الإصدار الحالي", "dl": "اكتشف أحدث إصدار", "lv": "أحدث إصدار", "cc": "استنساخ المحادثة", "pp": "تنقية الصفحة", "ls": "عرض الشاشة الكبيرة", "sc": "تحدث بشكل كامل", "it": "اعتراض التتبع", "ec": "التغير المستمر", "ap": "تقدير", "wn": "تحذير", "ds": "أمان البيانات", "dd": "اكتشف البيانات الحساسة", "rr": "استخدم الريجكس لكتابة القواعد", "ko": "الرصد الدقيق"},
"bg": {"dm": "Тъмна тема", "sd": "Показване на отстраняване на грешки", "cm": "Отказ от одит", "ca": "Отмяна на анимацията", "ab": "За", "si": "Предложете интервал от 50 секунди", "mi": "Промяна на интервала", "cu": "Проверка на актуализации", "cc": "Клониране на разговора", "pp": "Почистване на страницата", "ls": "Показване на голям екран", "sc": "Говорете пълно", "it": "Прихващане на проследяването", "ec": "Непрекъснато променящ се", "ap": "Оценка", "wn": "Предупреждение", "ds": "Сигурност на данните", "dd": "Откриване на чувствителни данни", "rr": "Използвайте регулярни изрази за съставяне на правила", "ko": "Остро наблюдение"},
"cs": {"dm": "Tmavý režim", "sd": "Zobrazit ladění", "cm": "Zrušení auditu", "ca": "Zrušit animaci", "ab": "O", "si": "Navrhnout interval 50 sekund", "mi": "Upravit interval", "cu": "Kontrola aktualizací", "cc": "Klonovat konverzaci", "pp": "Očistit stránku", "ls": "Zobrazení velkého displeje", "sc": "Mluvte úplně", "it": "Zachytávání sledování", "ec": "Neustále se měnící", "ap": "Ocenění", "wn": "Varování", "ds": "Bezpečnost dat", "dd": "Detekce citlivých dat", "rr": "Použijte regulární výrazy pro psaní pravidel", "ko": "Přesné pozorování"},
"da": {"dm": "Mørk tilstand", "sd": "Vis fejlfinding", "cm": "Annuller revision", "ca": "Annuller animation", "ab": "Om", "si": "Forslag interval på 50 sekunder", "mi": "Ændre interval", "cu": "Tjek for opdateringer", "cc": "Klon samtalen", "pp": "Rensning af siden", "ls": "Vis stor skærm", "sc": "Fuldfør udtalelsen", "it": "Interceptor sporing", "ec": "Konstant forandring", "ap": "Værdssættelse", "wn": "Advarsel", "ds": "Datasikkerhed", "dd": "Opdage følsomme data", "rr": "Brug regex til at skrive regler", "ko": "Skarp observation"},
"de": {"dm": "Dunkler Modus", "sd": "Fehlerbehebung anzeigen", "cm": "Prüfung abbrechen", "ca": "Animation abbrechen", "ab": "Über", "si": "Vorschlag für Intervall von 50 Sekunden", "mi": "Intervall bearbeiten", "cu": "Überprüfung auf Updates", "cv": "Aktuelle Version", "dl": "Entdecken Sie die neueste Version", "lv": "ist die neueste Version", "cc": "Konversation klonen", "pp": "Seite bereinigen", "ls": "Großen Bildschirm anzeigen", "sc": "Sprich vollständig", "it": "Tracking abfangen", "ec": "Ständiger Wandel", "ap": "Wertschätzung", "wn": "Warnung", "ds": "Datensicherheit", "dd": "Entdeckung sensibler Daten", "rr": "Verwenden Sie Regex, um Regeln zu schreiben", "ko": "Scharfe Beobachtung"},
"el": {"dm": "Σκοτεινή θεματολογία", "sd": "Εμφάνιση αποσφαλμάτωσης", "cm": "Ακύρωση ελέγχου", "ca": "Ακύρωση κινούμενων σχεδίων", "ab": "Σχετικά με", "si": "Προτείνετε διάστημα 50 δευτερολέπτων", "mi": "Τροποποίηση διαστήματος", "cu": "Έλεγχος ενημερώσεων", "cc": "Κλωνοποίηση συνομιλίας", "pp": "Καθαρισμός σελίδας", "ls": "Εμφάνιση μεγάλης οθόνης", "sc": "Ολοκλήρωσε την ομιλία", "it": "Ανίχνευση παρακολούθησης", "ec": "Αδιάκοπη αλλαγή", "ap": "Εκτίμηση", "wn": "Προειδοποίηση", "ds": "Ασφάλεια δεδομένων", "dd": "Ανακάλυψη ευαίσθητων δεδομένων", "rr": "Χρησιμοποιήστε regex για να γράψετε κανόνες", "ko": "Εξαιρετική παρατήρηση"},
"en": {"dm": "Dark mode", "sd": "Show debugging", "cm": "Cancel audit", "ca": "Cancel animation", "ab": "About", "si": "Suggest interval of 50 seconds; The author usually sets 900", "mi": "Modify interval", "cu": "Check for updates", "cv": "Current version", "dl": "Discover the latest version", "lv": "is the latest version", "cc": "Conversation cloning", "pp": "Purified page", "ls": "Wide display mode", "sc": "Complete response", "it": "Intercept tracking", "ec": "More chat info", "ap": "Sponsor", "wn": "Warning", "ds": "Data security", "dd": "Discover sensitive data", "rr": "Use regex to write rules", "gn": "General", "pa": "Privacy & security", "ur": "Interface & reading", "dt": "Dev & debugging", "bh": "Button hue", "oh": "0 keeps default hue", "ko": "Keen observation"},
"eo": {"dm": "Malhela moduso", "sd": "Montri depuradon", "cm": "Nuligi kontroli", "ca": "Nuligi animacion", "ab": "Pri", "si": "Sugesti intervalon de 50 sekundoj", "mi": "Modifi intervalon", "cu": "Kontroli ĝisdatigojn", "cc": "Kloni konversacion", "pp": "Pura paĝo", "ls": "Montri grandan ekrane", "sc": "Parolu plene", "it": "Intercepti Trakadon", "ec": "Ĉiam ŝanĝiĝanta", "ap": "Aprobo", "wn": "Averto", "ds": "Datensekureco", "dd": "Malkovru sensitivajn datumojn", "rr": "Uzu regulajn esprimojn por skribi regulojn", "ko": "Akra observado"},
"es": {"dm": "Modo oscuro", "sd": "Mostrar depuración", "cm": "Cancelar auditoría", "ca": "Cancelar animación", "ab": "Acerca de", "si": "Sugerir un intervalo de 50 segundos", "mi": "Modificar intervalo", "cu": "Comprobar actualizaciones", "cv": "Versión actual", "dl": "Descubre la última versión", "lv": "es la última versión", "cc": "Clonar conversación", "pp": "Purificar página", "ls": "Mostrar pantalla grande", "sc": "Termina tu discurso", "it": "Interceptar Rastreo", "ec": "Cambio constante", "ap": "Apreciación", "wn": "Advertencia", "ds": "Seguridad de datos", "dd": "Descubrir datos sensibles", "rr": "Usa regex para escribir reglas", "ko": "Observación aguda"},
"fi": {"dm": "Tumma tila", "sd": "Näytä virheenkorjaus", "cm": "Peruuta tarkistus", "ca": "Peruuta animaatio", "ab": "Tietoa", "si": "Ehdota 50 sekunnin väliaikaa", "mi": "Muokkaa väliä", "cu": "Tarkista päivitykset", "cc": "Kloonaa keskustelu", "pp": "Puhdista sivu", "ls": "Näytä suuri näyttö", "sc": "Puhu loppuun asti", "it": "Sieppaa seuranta", "ec": "Jatkuvasti muuttuva", "ap": "Arvostus", "wn": "Varoitus", "ds": "Tietoturva", "dd": "Löytää arkaluonteista dataa", "rr": "Käytä regexiä sääntöjen kirjoittamiseen", "ko": "Tarkka havainnointi"},
"fr": {"dm": "Mode sombre", "sd": "Afficher le débogage", "cm": "Annuler l'audit", "ca": "Annuler l'animation", "ab": "À propos de", "si": "Suggérer un intervalle de 50 secondes", "mi": "Modifier l'intervalle", "cu": "Vérifier les mises à jour", "cv": "Version actuelle", "dl": "Découvrir la dernière version", "lv": "est la dernière version", "cc": "Cloner la conversation", "pp": "Purifier la page", "ls": "Afficher grand écran", "sc": "Parlez complètement", "it": "Interception de suivi", "ec": "En perpétuelle évolution", "ap": "Appréciation", "wn": "Avertissement", "ds": "Sécurité des données", "dd": "Découvrir des données sensibles", "rr": "Utilisez des regex pour écrire des règles", "ko": "Observation fine"},
"fr-CA": {"dm": "Mode nuit", "sd": "Afficher le débogage", "cm": "Annuler la vérification", "ca": "Annuler l'animation", "ab": "À propos de", "si": "Suggérer un intervalle de 50 secondes", "mi": "Modifier l'intervalle", "cu": "Vérifier les mises à jour", "cv": "Version actuelle", "dl": "Découvrir la dernière version", "lv": "est la dernière version", "cc": "Cloner la conversation", "pp": "Purifier la page", "ls": "Afficher grand écran", "sc": "Parlez complètement", "it": "Intercepter le suivi", "ec": "Évolution constante", "ap": "Appréciation", "wn": "Avertissement", "ds": "Sécurité des données", "dd": "Découvrir des données sensibles", "rr": "Utilisez des regex pour écrire des règles", "ko": "Observation fine"},
"he": {"dm": "מצב כהה", "sd": "הצגת התיקון", "cm": "ביטול ביקורת", "ca": "בטל אנימציה", "ab": "אודות", "si": "הצע מרווח של 50 שניות", "mi": "שינוי מרווח", "cu": "בדיקת עדכונים", "cc": "שכפול שיחה", "pp": "טיהור הדף", "ls": "תצוגת מסך גדול", "sc": "דבר במלואו", "it": "התערבות במעקב", "ec": "שינוי מתמיד", "ap": "הערכה", "wn": "אזהרה", "ds": "אבטחת מידע", "dd": "גילוי נתונים רגישים", "rr": "השתמש בביטויים רגולריים לכתיבת כללים", "ko": "תפיסה חדה"},
"hu": {"dm": "Sötét mód", "sd": "Hibakeresés mutatása", "cm": "Ellenőrzés megszüntetése", "ca": "Animáció törlése", "ab": "Rólunk", "si": "Javaslat 50 másodperces időközre", "mi": "Időköz módosítása", "cu": "Frissítések keresése", "cc": "Beszélgetés klónozása", "pp": "Oldal tisztítása", "ls": "Nagy képernyő megjelenítése", "sc": "Beszélj teljesen", "it": "Követés elfogása", "ec": "Folyamatos változás", "ap": "Elismerés", "wn": "Figyelmeztetés", "ds": "Adatbiztonság", "dd": "Érzékeny adatok felfedezése", "rr": "Használja a regex-et a szabályok írásához", "ko": "Éles megfigyelés"},
"id": {"dm": "Mode gelap", "sd": "Tampilkan debugging", "cm": "Batalkan audit", "ca": "Batalkan animasi", "ab": "Tentang", "si": "Sarankan interval 50 detik", "mi": "Modifikasi interval", "cu": "Periksa Pembaruan", "cc": "Klon percakapan", "pp": "Membersihkan halaman", "ls": "Tampilkan layar besar", "sc": "Berbicara secara lengkap", "it": "Intersepsi Pelacakan", "ec": "Perubahan terus-menerus", "ap": "Penghargaan", "wn": "Peringatan", "ds": "Keamanan data", "dd": "Temukan data sensitif", "rr": "Gunakan regex untuk menulis aturan", "ko": "Pengamatan tajam"},
"it": {"dm": "Modalità scura", "sd": "Mostra debug", "cm": "Annulla verifica", "ca": "Annulla animazione", "ab": "Riguardo a", "si": "Suggerisci un intervallo di 50 secondi", "mi": "Modifica intervallo", "cu": "Verifica aggiornamenti", "cv": "Versione attuale", "dl": "Scopri l'ultima versione", "lv": "è l'ultima versione", "cc": "Clona conversazione", "pp": "Purifica pagina", "ls": "Mostra grande schermo", "sc": "Parla completamente", "it": "Intercettare il tracciamento", "ec": "Cambiamento costante", "ap": "Apprezzamento", "wn": "Avvertimento", "ds": "Sicurezza dei dati", "dd": "Scoprire dati sensibili", "rr": "Usa regex per scrivere regole", "ko": "Osservazione acuta"},
"ja": {"dm": "ダークモード", "sd": "デバッグを表示", "cm": "監査をキャンセル", "ca": "アニメーションのキャンセル", "ab": "について", "si": "50秒間隔を提案する", "mi": "間隔を変更する", "cu": "更新をチェックする", "cv": "現在のバージョン", "dl": "最新バージョンを発見する", "lv": "最新バージョンです", "cc": "会話をクローンする", "pp": "ページを浄化する", "ls": "ビッグスクリーンを表示する", "sc": "完全に話してください", "it": "トラッキングの傍受", "ec": "絶え間ない変化", "ap": "評価", "wn": "警告", "ds": "データセキュリティ", "dd": "機密データを発見する", "rr": "正規表現を使用してルールを書く", "ko": "鋭い観察"},
"ka": {"dm": "ბნელი რეჟიმი", "sd": "გამოჩენა დებაგი", "cm": "ანულირება აუდიტი", "ca": "ანიმაციის გაუქმება", "ab": "შესახებ", "si": "50 წამის ინტერვალის შეტანა", "mi": "ინტერვალის შეცვლა", "cu": "განახლებების შემოწმება", "cc": "კონვერსაციის კლონირება", "pp": "გვერდის გაწმენდა", "ls": "დიდი ეკრანის გამოსახულება", "sc": "სრულად ილაპარაკეთ", "it": "თვალყური მისმართავა", "ec": "მუდმივი ცვლილება", "ap": "შეფასება", "wn": "გაფრთხილება", "ds": "მონაცემთა უსაფრთხოება", "dd": "საკითხავი მონაცემების გამოცნობა", "rr": "გამოიყენეთ regex წესების დაწერად", "ko": "მკრეფად გამოვიდა"},
"ko": {"dm": "다크 모드", "sd": "디버깅 표시", "cm": "감사 취소", "ca": "애니메이션 취소", "ab": "관하여", "si": "50초 간격 건의", "mi": "간격 수정", "cu": "업데이트 확인", "cv": "현재 버전", "dl": "최신 버전 찾기", "lv": "최신 버전입니다.", "cc": "대화 복제", "pp": "페이지 정화", "ls": "큰 화면 표시", "sc": "완전히 말하세요", "it": "추적 가로채기", "ec": "끊임없는 변화", "ap": "감사", "wn": "경고", "ds": "데이터 보안", "dd": "민감한 데이터 발견", "rr": "정규 표현식을 사용하여 규칙 작성", "ko": "예리한 관찰"},
"nb": {"dm": "Mørk modus", "sd": "Vis feilsøking", "cm": "Avbryt revisjonen", "ca": "Avbryt animasjon", "ab": "Om", "si": "Forslag om et intervall på 50 sekunder", "mi": "Endre intervall", "cu": "Sjekk etter oppdateringer", "cc": "Klon samtalen", "pp": "Rens side", "ls": "Vis stor skjerm", "sc": "Snakk fullstendig", "it": "Intercept sporing", "ec": "Kontinuerlig endring", "ap": "Verdsatt", "wn": "Advarsel", "ds": "Datasikkerhet", "dd": "Oppdage sensitiv data", "rr": "Bruk regex for å skrive regler", "ko": "Skarpt observasjon"},
"nl": {"dm": "Donkere modus", "sd": "Foutopsporing weergeven", "cm": "Controle annuleren", "ca": "Animatie annuleren", "ab": "Over", "si": "Stel een interval van 50 seconden voor", "mi": "Interval wijzigen", "cu": "Controleren op updates", "cc": "Gesprek klonen", "pp": "Pagina zuiveren", "ls": "Groot scherm weergeven", "sc": "Spreek volledig uit", "it": "Onderscheppen van tracking", "ec": "Voortdurende verandering", "ap": "Waardering", "wn": "Waarschuwing", "ds": "Gegevensbeveiliging", "dd": "Gevoelige gegevens ontdekken", "rr": "Gebruik regex om regels te schrijven", "ko": "Scherp observeren"},
"pl": {"dm": "Tryb ciemny", "sd": "Pokaż debugowanie", "cm": "Anuluj audyt", "ca": "Anuluj animację", "ab": "O", "si": "Zasugeruj interwał 50 sekund", "mi": "Zmień interwał", "cu": "Sprawdź aktualizacje", "cc": "Klonuj rozmowę", "pp": "Oczyść stronę", "ls": "Wyświetl duży ekran", "sc": "Mów całkowicie", "it": "Przechwytywanie śledzenia", "ec": "Ciągłe zmiany", "ap": "Docenienie", "wn": "Ostrzeżenie", "ds": "Bezpieczeństwo danych", "dd": "Wykrywanie wrażliwych danych", "rr": "Użyj regex do pisania reguł", "ko": "Wnikliwa obserwacja"},
"pt-BR": {"dm": "Modo escuro", "sd": "Mostrar depuração", "cm": "Cancelar auditoria", "ca": "Cancelar animação", "ab": "Sobre", "si": "Sugira um intervalo de 50 segundos", "mi": "Modificar intervalo", "cu": "Verificar atualizações", "cc": "Clonar conversa", "pp": "Purificar página", "ls": "Exibir tela grande", "sc": "Fale completamente", "it": "Interceptar Rastreamento", "ec": "Mudança constante", "ap": "Apreciação", "wn": "Aviso", "ds": "Segurança de dados", "dd": "Descobrir dados sensíveis", "rr": "Use regex para escrever regras", "ko": "Observação aguçada"},
"ro": {"dm": "Mod întunecat", "sd": "Afișare depanare", "cm": "Anulare audit", "ca": "Anulare animație", "ab": "Despre", "si": "Sugerați un interval de 50 secunde", "mi": "Modificați intervalul", "cu": "Verifică actualizări", "cc": "Clonează conversația", "pp": "Purificare pagină", "ls": "Afișare ecran mare", "sc": "Vorbiți complet", "it": "Interceptarea urmăririi", "ec": "Schimbare continuă", "ap": "Apreciere", "wn": "Avertizare", "ds": "Securitatea datelor", "dd": "Descoperirea datelor sensibile", "rr": "Folosiți regex pentru a scrie reguli", "ko": "Observație fină"},
"ru": {"dm": "Темный режим", "sd": "Показать отладку", "cm": "Отменить аудит", "ca": "Отменить анимацию", "ab": "О", "si": "Предложить интервал в 50 секунд", "mi": "Изменить интервал", "cu": "Проверить обновления", "cc": "Клонировать диалог", "pp": "Очистить страницу", "ls": "Показать большой экран", "sc": "Говорите полностью", "it": "Перехват отслеживания", "ec": "Постоянное изменение", "ap": "Признательность", "wn": "Предупреждение", "ds": "Безопасность данных", "dd": "Обнаружение конфиденциальных данных", "rr": "Используйте регулярные выражения для написания правил", "ko": "Точное наблюдение"},
"sk": {"dm": "Tmavý režim", "sd": "Zobraziť ladenie", "cm": "Zrušiť audit", "ca": "Zrušiť animáciu", "ab": "O", "si": "Navrhnúť interval 50 sekúnd", "mi": "Zmena intervalu", "cu": "Kontrola aktualizácií", "cc": "Klonovať konverzáciu", "pp": "Očistiť stránku", "ls": "Zobraziť veľkú obrazovku", "sc": "Hovorte úplne", "it": "Zachytenie sledovania", "ec": "Neustále sa meniace", "ap": "Ocenenie", "wn": "Varovanie", "ds": "Bezpečnosť údajov", "dd": "Objavenie citlivých dát", "rr": "Použite regex na písanie pravidiel", "ko": "Presné pozorovanie"},
"sr": {"dm": "Тамни режим", "sd": "Прикажи отклањање грешака", "cm": "Откажи ревизију", "ca": "Откажи анимацију", "ab": "О", "si": "Predložiti interval od 50 sekundi", "mi": "Измена интервала", "cu": "Provera ažuriranja", "cc": "Клонирај разговор", "pp": "Прочисти страницу", "ls": "Прикажи велики екран", "sc": "Говорите у потпуности", "it": "Пресретање праћења", "ec": "Непрестана промена", "ap": "Поштовање", "wn": "Упозорење", "ds": "Сигурност података", "dd": "Откривање осетљивих података", "rr": "Користите регуларне изразе за писање правила", "ko": "Прецизно набљудавање"},
"sv": {"dm": "Mörkt läge", "sd": "Visa felsökning", "cm": "Avbryt revision", "ca": "Avbryt animation", "ab": "Om", "si": "Föreslå intervall på 50 sekunder", "mi": "Ändra intervall", "cu": "Kontrollera uppdateringar", "cc": "Klonar samtal", "pp": "Rensa sidan", "ls": "Visa stor skärm", "sc": "Tala helt klart", "it": "Interceptera spårning", "ec": "Ständig förändring", "ap": "Uppskattning", "wn": "Varning", "ds": "Datasäkerhet", "dd": "Upptäcka känslig data", "rr": "Använd regex för att skriva regler", "ko": "Skarp observation"},
"th": {"dm": "โหมดมืด", "sd": "แสดงการแก้ไขข้อผิดพลาด", "cm": "ยกเลิกการตรวจสอบ", "ca": "ยกเลิกการเคลื่อนไหว", "ab": "เกี่ยวกับ", "si": "เสนอช่วงเวลา 50 วินาที", "mi": "แก้ไขระยะห่าง", "cu": "ตรวจสอบการอัปเดต", "cc": "โคลนสนทนา", "pp": "ทำความสะอาดหน้า", "ls": "แสดงหน้าจอใหญ่", "sc": "พูดคุยให้เสร็จสิ้น", "it": "การดักจับการติดตาม", "ec": "การเปลี่ยนแปลงตลอดเวลา", "ap": "การประเมินค่า", "wn": "คำเตือน", "ds": "ความปลอดภัยของข้อมูล", "dd": "ค้นพบข้อมูลที่ละเอียดอ่อน", "rr": "ใช้ regex เพื่อเขียนกฎ", "ko": "การสังเกตอย่างชัดเจน"},
"tr": {"dm": "Karanlık mod", "sd": "Hata ayıklama göster", "cm": "Denetimi İptal Et", "ca": "Animasyonu iptal et", "ab": "Hakkında", "si": "50 saniyelik aralık önerin", "mi": "Aralığı değiştir", "cu": "Güncelleştirmeleri kontrol et", "cc": "Sohbeti kopyala", "pp": "Sayfayı temizle", "ls": "Büyük ekranı görüntüle", "sc": "Tamamlayın konuşmayı", "it": "İzlemeyi Engellemek", "ec": "Sürekli değişim", "ap": "Takdir", "wn": "Uyarı", "ds": "Veri güvenliği", "dd": "Hassas verileri keşfetmek", "rr": "Kuralları yazmak için regex kullanın", "ko": "Keskin gözlem"},
"uk": {"dm": "Темний режим", "sd": "Показати налагодження", "cm": "Скасувати аудит", "ca": "Скасувати анімацію", "ab": "Про", "si": "Запропонуйте інтервал у 50 секунд", "mi": "Змінити інтервал", "cu": "Перевірити оновлення", "cc": "Клонувати діалог", "pp": "Очистити сторінку", "ls": "Відобразити великий екран", "sc": "Говоріть повністю", "it": "Перехоплення відстеження", "ec": "Постійна зміна", "ap": "Вдячність", "wn": "Попередження", "ds": "Безпека даних", "dd": "Виявлення конфіденційних даних", "rr": "Використовуйте регулярні вирази для написання правил", "ko": "Точне спостереження"},
"ug": {"dm": "تېما كۆرسىتىش", "sd": "كۆرسەتكەن يۇقىرىلاش", "cm": "ئەمەلدىن قالدۇرۇش", "ca": "ئېنىماتىكىنى بىكار قىلىش", "ab": "ئۇچۇرلىق", "si": "50 سىكونتلىك ئارىلىقنى سۇنۇشتۇرۇش", "mi": "ئارىلىق ئۆزگەرتىش", "cu": "يېڭىلانما كۆزەت", "cc": "كۆپچەي ئىككىلىش", "pp": "چۈشۈرۈش بەت", "ls": "كۆرسىتىش چوڭ ئېكران", "sc": "تاماملا سۆزلىشىڭىز", "it": "قولايلىنىش تىزىتكۈن", "ec": "تەڭشەك ئىستىقامەت", "ap": "قىلىش", "wn": "ئاگاھلاندۇرۇش", "ds": "مەلۇمات بىخەتەرلىكى", "dd": "سىزىقلىق مەلۇماتنى تاپشۇرۇش", "rr": "قائىدىلەرنى يېزىش ئۈچۈن regex نى ئىشلىتىڭ", "ko": "ئاڭلىتىش قىممىتى"},
"vi": {"dm": "Chế độ tối", "sd": "Hiển thị gỡ lỗi", "cm": "Hủy đánh giá", "ca": "Hủy hoạt hình", "ab": "Về", "si": "Đề xuất khoảng thời gian 50 giây", "mi": "Sửa khoảng cách", "cu": "Kiểm tra cập nhật", "cc": "Sao chép cuộc trò chuyện", "pp": "Làm sạch trang", "ls": "Hiển thị màn hình lớn", "sc": "Nói đầy đủ", "it": "Chặn Theo Dõi", "ec": "Luôn thay đổi", "ap": "Đánh giá", "wn": "Cảnh báo", "ds": "Bảo mật dữ liệu", "dd": "Phát hiện dữ liệu nhạy cảm", "rr": "Sử dụng regex để viết quy tắc", "ko": "Quan sát tinh tế"},
"zh-CN": {"dm": "暗色主题", "sd": "显示调试", "cm": "取消审计", "ca": "取消动画", "ab": "关于", "si": "建议间隔50秒以上，作者平时设置的是900秒", "mi": "调整间隔", "cu": "检查更新", "cc": "克隆对话", "pp": "净化页面", "ls": "展示大屏", "sc": "言无不尽", "it": "拦截跟踪", "ec": "日新月异", "ap": "赞赏鼓励", "wn": "警告", "ds": "数据安全", "dd": "你输入的内容里存在以下敏感数据，已为你自动化脱敏", "rr": "本功能会将聊天输入框里的敏感信息进行脱敏和警告<br>请根据正则表达式语法编写数据安全规则，不同的规则用换行间隔", "gn": "通用", "pa": "隐私与安全", "ur": "界面与阅读", "dt": "开发与调试", "bh": "按钮色调", "oh": "0为当前色调", "ko": "明察秋毫"},
"zh-TW": {"dm": "暗黑模式", "sd": "顯示調試", "cm": "取消稽核", "ca": "取消動畫", "ab": "關於", "si": "建議間隔50秒，作者平時設置的是900秒", "mi": "調整間隔", "cu": "檢查更新", "cc": "複製對話", "pp": "淨化頁面", "ls": "顯示大螢幕", "sc": "言無不盡", "it": "拦截追踪", "ec": "日新月異", "ap": "讚賞鼓勵", "wn": "警告", "ds": "資料安全", "dd": "發現敏感數據", "rr": "使用正則表達式撰寫規則", "gn": "一般", "pa": "隱私與安全", "ur": "介面與閱讀", "dt": "開發與調試", "bh": "按鈕色調", "oh": "0為目前色調", "ko": "明察秋毫"}
    }
}
`;
        lang = JSON.parse(lang);
        for (let k in lang.local) {
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
        language = gv("k_language", language);
        //language = "en"; //Debug English
        return [lang.index, lang.local[language], language];
    };

    const [langIndex, langLocal, language] = getLang();

    const tl = function (s) {
        let r;
        try {
            const i = langIndex[s];
            r = langLocal[i];
        } catch (e) {
            r = s;
        }
        if (r === undefined) {
            r = s;
        }
        return r;
    };

    class IndexedDB {
        constructor(dbName, storeName) {
            this.dbName = dbName;
            this.storeName = storeName;
        }

        async open() {
            if (this.ready) {
                await this.ready;
            }
            return new Promise((resolve, reject) => {
                const openRequest = indexedDB.open(this.dbName, 1);

                openRequest.onupgradeneeded = function (e) {
                    const db = e.target.result;
                    console.log(db.objectStoreNames, this.storeName);
                    if (!db.objectStoreNames.contains(this.storeName)) {
                        const objectStore = db.createObjectStore(
                            this.storeName,
                            { keyPath: "id" },
                        );
                        objectStore.createIndex("name", "name", {
                            unique: false,
                        });
                    }
                }.bind(this);

                openRequest.onsuccess = function (e) {
                    const db = e.target.result;
                    resolve(db);
                };

                openRequest.onerror = function (e) {
                    reject("Error opening db");
                };
            });
        }

        async operate(operation, item) {
            const db = await this.open();
            return new Promise((resolve, reject) => {
                const tx = db.transaction(this.storeName, "readwrite");
                const store = tx.objectStore(this.storeName);
                let request;

                switch (operation) {
                    case "add":
                        request = store.add(item);
                        break;
                    case "put":
                        request = store.put(item);
                        break;
                    case "delete":
                        request = store.delete(item.id);
                        break;
                    default:
                        db.close();
                        reject("Invalid operation");
                        return;
                }

                request.onsuccess = function () {
                    resolve(request.result);
                };

                request.onerror = function () {
                    reject("Error", request.error);
                };

                tx.oncomplete = function () {
                    db.close();
                };
            });
        }

        async operate_get(id) {
            const db = await this.open();
            return new Promise((resolve, reject) => {
                const tx = db.transaction(this.storeName, "readonly");
                const store = tx.objectStore(this.storeName);
                const request = store.get(id);

                request.onsuccess = function () {
                    resolve(request.result);
                };

                request.onerror = function () {
                    reject("Error", request.error);
                };

                tx.oncomplete = function () {
                    db.close();
                };
            });
        }

        async store() {
            const db = await this.open();
            const tx = db.transaction(this.storeName, "readonly");
            const store = tx.objectStore(this.storeName);
            return store;
        }

        async get(id) {
            return await this.operate_get(id);
        }

        async add(item) {
            return await this.operate("add", item);
        }

        async put(item) {
            return await this.operate("put", item);
        }

        async delete(item) {
            return await this.operate("delete", item);
        }
    }

    const formatDate = function (d) {
        return new Date(d).toLocaleString();
    };

    const formatDate2 = function (dt) {
        const [Y, M, D, h, m, s] = [
            dt.getFullYear(),
            dt.getMonth() + 1,
            dt.getDate(),
            dt.getHours(),
            dt.getMinutes(),
            dt.getSeconds(),
        ].map((el) => el.toString().padStart(2, "0"));
        const dtTmp = dt.toLocaleDateString();
        const currentDate = new Date();
        const currentDateTmp = currentDate.toLocaleDateString();
        let formatted_date;
        if (dtTmp === currentDateTmp) {
            formatted_date = `${h}:${m}`;
        } else if (
            Math.floor(
                Math.abs(new Date(dtTmp) - new Date(currentDateTmp)) /
                    (24 * 60 * 60 * 1000),
            ) < 7
        ) {
            const weekday =
                language.slice(0, 2) === "zh"
                    ? ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
                    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            formatted_date = weekday[dt.getDay()];
        } else {
            formatted_date = `${M}/${D}`;
        }
        return formatted_date;
    };

    const formatJson = function (d) {
        try {
            const j = JSON.parse(d);
            return `<pre>${JSON.stringify(j, null, 2)}</pre>`;
        } catch (e) {
            return d;
        }
    };

    const htmlEncode = function (text) {
        var tempElement = document.createElement("div");
        var textNode = document.createTextNode(text);
        tempElement.appendChild(textNode);
        return tempElement.innerHTML;
    };

    const parseRequestUrl = function (requestUrl) {
        if (typeof requestUrl !== "string" || requestUrl.trim() === "") {
            return null;
        }
        try {
            return new URL(requestUrl, location.origin);
        } catch (e) {
            return null;
        }
    };

    const isTrackingRequest = function (requestUrl) {
        // 兼容 fetch(new URL(...)) / sendBeacon(new URL(...)) 传入 URL 对象的情况。
        if (typeof URL !== "undefined" && requestUrl instanceof URL) {
            requestUrl = requestUrl.href;
        }
        if (typeof requestUrl !== "string" || requestUrl.trim() === "") {
            return false;
        }
        if (trackingBlockRegex.test(requestUrl)) {
            return true;
        }
        const parsedUrl = parseRequestUrl(requestUrl);
        if (!parsedUrl) {
            return false;
        }
        return (
            trackingHostRegex.test(parsedUrl.hostname) ||
            trackingPathRegex.test(`${parsedUrl.pathname}${parsedUrl.search}`)
        );
    };

    const buildBlockedTrackingResponse = function () {
        return new Response(null, {
            status: 204,
            statusText: "No Content",
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "X-KeepChatGPT-Blocked": "tracking",
            },
        });
    };

    const setIfr = function (u = "") {
        if ($("#xcanwin") === null) {
            const nIfr = document.createElement("iframe");
            nIfr.id = "xcanwin";
            nIfr.style = `height: 80px; width: 100%; display: none;`;
            if (gv("k_showDebug", false) === true) {
                nIfr.style.display = "";
            } else {
                nIfr.style.display = "none";
            }
            if (u) {
                nIfr.src = u;
            }
            nIfr.onload = function () {
                const nIfrText =
                    $("#xcanwin").contentWindow.document.documentElement
                        .innerText;
                try {
                    $("#xcanwin").contentWindow.document.documentElement.style =
                        `background: #FCF3CF; height: 360px; width: 1080px; overflow; auto;`;
                    if (nIfrText.indexOf(`"expires":"`) > -1) {
                        console.log(
                            `KeepChatGPT: IFRAME: Expire date: ${formatDate(JSON.parse(nIfrText).expires)}`,
                        );
                        $(
                            "#xcanwin",
                        ).contentWindow.document.documentElement.innerHTML =
                            formatJson(nIfrText);
                    } else if (
                        nIfrText.match(
                            /Please stand by|while we are checking your browser|Please turn JavaScript on|Please enable Cookies|reload the page/,
                        )
                    ) {
                        console.log(`KeepChatGPT: IFRAME: BypassCF`);
                    }
                } catch (e) {
                    console.log(
                        `KeepChatGPT: IFRAME: ERROR: ${e},\nERROR RESPONSE:\n${nIfrText}`,
                    );
                }
            };
            ($("main") || document.body).appendChild(nIfr);
        } else {
            if (u) {
                $("#xcanwin").src = u;
            }
        }
    };

    const keepChat = function () {
        GM_xmlhttpRequest({
            method: "GET",
            url: u,
            headers: {
                "Content-Type": "application/json",
            },
            onload: function (response) {
                const data = response.responseText;
                try {
                    if (
                        response.responseHeaders.match(
                            /content-type:\s*application\/json/i,
                        ) &&
                        response.status !== 403 &&
                        data.indexOf(`"expires":"`) > -1
                    ) {
                        console.log(
                            `KeepChatGPT: FETCH: Expire date: ${formatDate(JSON.parse(data).expires)}`,
                        );
                        //$("#xcanwin").contentWindow.document.documentElement.innerHTML = formatJson(data);
                    } else {
                        setIfr(u);
                    }
                } catch (e) {
                    console.log(
                        `KeepChatGPT: FETCH: ERROR: ${e},\nERROR RESPONSE:\n${data}`,
                    );
                    setIfr(u);
                }
            },
        });
    };

    const ncheckbox = function () {
        const nsvg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
        );
        nsvg.setAttribute("viewBox", "0 0 45 30");
        nsvg.classList.add("checkbutton");
        nsvg.innerHTML = `<g fill="none" fill-rule="evenodd"><path fill="#979797" d="M0 15C0 6.716 6.716 0 15 0h14c8.284 0 15 6.716 15 15s-6.716 15-15 15H15C6.716 30 0 23.284 0 15z"/><circle fill="#FFF" cx="15" cy="15" r="13"/></g>`;
        return nsvg.cloneNode(true);
    };

    // 通用弹窗：用于输入配置、显示更新信息、展示赞赏二维码等。
    const ndialog = function (
        title = "KeepChatGPT",
        content = "",
        buttonvalue = "OK",
        buttonfun = function (t) {
            return t;
        },
        inputtype = "br",
        inputvalue = "",
    ) {
        const ndivalert = document.createElement("div");
        ndivalert.setAttribute("class", "kdialog-overlay");
        ndivalert.innerHTML = `
<div class="kdialog-shell" role="dialog" aria-modal="true" aria-label="${title}">
  <div class="kdialog-head">
    <h2>${title}</h2>
  </div>
  <div class="kdialog-body">
    <p class="kdialogcontent">${content}</p>
    <${inputtype} class="kdialoginput"></${inputtype}>
    <div class="kdialog-actions">
      <button type="button" class="kdialogbtn">${buttonvalue}</button>
      <button type="button" class="kdialogclose">Cancel</button>
    </div>
  </div>
</div>
        `;

        if (inputtype === "br") {
            $(".kdialoginput", ndivalert).style = `display: none`;
            $(".kdialogcontent", ndivalert).style = `line-height: 2.2;`;
        } else if (inputtype === "img") {
            $(".kdialoginput", ndivalert).src = inputvalue;
            $(".kdialoginput", ndivalert).style =
                `max-height: 25rem; height: unset; width: unset; margin: 0 auto;`;
        } else if (inputtype === "textarea") {
            $(".kdialoginput", ndivalert).value = inputvalue;
            $(".kdialoginput", ndivalert).style = `height: 10rem;`;
        } else {
            $(".kdialoginput", ndivalert).value = inputvalue;
        }

        // 统一关闭逻辑，保证点击遮罩和取消按钮行为一致。
        const closeDialog = function () {
            ndivalert.remove();
            document.removeEventListener("keydown", onEsc);
        };
        const onEsc = function (event) {
            if (event.key === "Escape") {
                closeDialog();
            }
        };

        $(".kdialogclose", ndivalert).onclick = closeDialog;
        $(".kdialogbtn", ndivalert).onclick = function () {
            buttonfun(ndivalert);
            closeDialog();
        };
        ndivalert.addEventListener("click", function (event) {
            if (event.target === ndivalert) {
                closeDialog();
            }
        });
        document.addEventListener("keydown", onEsc);
        document.body.appendChild(ndivalert);
    };

    // 创建设置项按钮：统一标题、描述、交互样式。
    const createMenuItem = function (item) {
        if (item.type === "range") {
            const nitem = document.createElement("div");
            nitem.id = `nmenuid_${item.id}`;
            nitem.className =
                `kmenu-item kmenu-item-range ${item.extraClass || ""}`.trim();
            nitem.innerHTML = `
<span class="kmenu-item-main">
  <span class="kmenu-item-title">${item.title}</span>
  ${item.desc ? `<span class="kmenu-item-desc">${item.desc}</span>` : ``}
</span>
<span class="kmenu-range-row">
  <input id="kcg_hue_slider" class="kmenu-item-range-input" type="range" min="${item.min}" max="${item.max}" step="${item.step}" value="0">
  <span id="kcg_hue_value" class="kmenu-item-range-value">0°</span>
</span>
`;
            return nitem;
        }

        const nitem = document.createElement("button");
        nitem.type = "button";
        nitem.id = `nmenuid_${item.id}`;
        nitem.className =
            `kmenu-item ${item.type === "toggle" ? "kmenu-item-toggle" : "kmenu-item-action"} ${item.extraClass || ""}`.trim();
        nitem.innerHTML = `
<span class="kmenu-item-main">
  <span class="kmenu-item-title">${item.title}</span>
  ${item.desc ? `<span class="kmenu-item-desc">${item.desc}</span>` : ``}
</span>
`;
        if (item.type === "toggle") {
            nitem.appendChild(ncheckbox());
        }
        return nitem;
    };

    // 设置信息架构：仅负责视觉分组，不改变原有业务配置 key。
    const getMenuGroups = function () {
        return [
            {
                title: tl("通用"),
                items: [
                    {
                        id: `af`,
                        title: tl("调整间隔"),
                        desc: tl("建议间隔50秒"),
                        type: `action`,
                    },
                    { id: `cu`, title: tl("检查更新"), type: `action` },
                    { id: `ab`, title: tl("关于"), type: `action` },
                    {
                        id: `ap`,
                        title: tl("赞赏鼓励"),
                        type: `action`,
                        extraClass: `kmenu-item-ap`,
                    },
                ],
            },
            {
                title: tl("隐私与安全"),
                items: [
                    {
                        id: `ds`,
                        title: tl("数据安全"),
                        desc: tl("使用正则编写规则"),
                        type: `action`,
                    },
                    { id: `cm`, title: tl("取消审计"), type: `toggle` },
                    { id: `it`, title: tl("拦截跟踪"), type: `toggle` },
                ],
            },
            {
                title: tl("界面与阅读"),
                items: [
                    { id: `dm`, title: tl("暗色主题"), type: `toggle` },
                    {
                        id: `hue`,
                        title: tl("按钮色调"),
                        desc: tl("0为当前色调"),
                        type: `range`,
                        min: -180,
                        max: 180,
                        step: 1,
                    },
                    { id: `ko`, title: tl("明察秋毫"), type: `toggle` },
                    { id: `pp`, title: tl("净化页面"), type: `toggle` },
                    { id: `ls`, title: tl("展示大屏"), type: `toggle` },
                    { id: `sc`, title: tl("言无不尽"), type: `toggle` },
                    { id: `cc`, title: tl("克隆对话"), type: `toggle` },
                    { id: `ec`, title: tl("日新月异"), type: `toggle` },
                ],
            },
            {
                title: tl("开发与调试"),
                items: [{ id: `sd`, title: tl("显示调试"), type: `toggle` }],
            },
        ];
    };

    // 加载设置弹窗并绑定菜单行为。
    const loadMenu = function () {
        if ($(".kmenu") !== null) {
            return;
        }

        const icon = GM_info.script.icon
            ? GM_info.script.icon
            : `${GM_info.script.namespace}raw/main/assets/logo.svg`;
        const ndivmenu = document.createElement("div");
        ndivmenu.setAttribute("class", "kmenu khide");
        ndivmenu.setAttribute("aria-hidden", "true");
        ndivmenu.innerHTML = `
<div class="kmenu-backdrop"></div>
<div class="kmenu-panel" role="dialog" aria-modal="true" aria-label="KeepChatGPT" tabindex="-1">
  <div class="kmenu-head">
    <div class="kmenu-brand">
      <img src="${icon}" alt="KeepChatGPT">
      <div class="kmenu-brand-text">
        <strong>KeepChatGPT</strong>
        <span>by xcanwin</span>
      </div>
    </div>
    <button type="button" class="kmenu-close" aria-label="Close">×</button>
  </div>
  <div class="kmenu-content"></div>
</div>
`;

        const nmenuContent = $(".kmenu-content", ndivmenu);
        getMenuGroups().forEach((group) => {
            const ngroup = document.createElement("section");
            ngroup.className = "kmenu-group";
            ngroup.innerHTML = `<h3 class="kmenu-group-title">${group.title}</h3>`;

            const ngroupBody = document.createElement("div");
            ngroupBody.className = "kmenu-group-body";
            group.items.forEach((item) => {
                ngroupBody.appendChild(createMenuItem(item));
            });
            ngroup.appendChild(ngroupBody);
            nmenuContent.appendChild(ngroup);
        });
        document.body.appendChild(ndivmenu);

        // 点击遮罩或右上角关闭按钮都可以关闭设置弹窗。
        const closeMenu = function () {
            toggleMenu("hide");
        };
        $(".kmenu-close", ndivmenu).onclick = closeMenu;
        $(".kmenu-backdrop", ndivmenu).onclick = closeMenu;

        // 弹窗内使用 Tab 时保持焦点循环，避免焦点落到页面背景元素。
        ndivmenu.addEventListener("keydown", function (event) {
            if (event.key !== "Tab") {
                return;
            }
            const focusableSelector = `button, [href], input, textarea, [tabindex]:not([tabindex="-1"])`;
            const focusables = Array.from(
                $$(focusableSelector, ndivmenu),
            ).filter((el) => !el.disabled && el.offsetParent !== null);
            if (focusables.length === 0) {
                return;
            }
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });

        // 全局 Escape 关闭，避免焦点在输入框时无法关闭设置弹窗。
        if (!global.kmenuEscListenerAdded) {
            global.kmenuEscListenerAdded = true;
            document.addEventListener("keydown", function (event) {
                if (
                    event.key === "Escape" &&
                    $(".kmenu")?.classList.contains("kshow")
                ) {
                    toggleMenu("hide");
                }
            });
        }

        $("#nmenuid_ds").onclick = function () {
            toggleMenu("hide");
            ndialog(
                `${tl("数据安全")}`,
                `${tl("使用正则编写规则")}`,
                `Save`,
                function (t) {
                    let datasecblocklist;
                    try {
                        datasecblocklist = `${$(".kdialoginput", t).value}\n`
                            .replace(/\r/g, `\n`)
                            .replace(/\n+/g, `\n`);
                    } catch (e) {
                        datasecblocklist = gv(
                            "k_datasecblocklist",
                            datasec_blocklist_default,
                        );
                    }
                    sv("k_datasecblocklist", datasecblocklist);
                },
                `textarea`,
                gv("k_datasecblocklist", datasec_blocklist_default),
            );
        };

        $("#nmenuid_sd").onclick = function () {
            const ncheck = $(".checkbutton", this);
            if (ncheck?.classList.contains("checked")) {
                if ($("#xcanwin")) {
                    $("#xcanwin").style.display = "none";
                }
                sv("k_showDebug", false);
            } else {
                if ($("#xcanwin")) {
                    $("#xcanwin").style.display = "";
                }
                sv("k_showDebug", true);
            }
            ncheck?.classList.toggle("checked");
        };

        $("#nmenuid_dm").onclick = function () {
            const ncheck = $(".checkbutton", this);
            if (ncheck?.classList.contains("checked")) {
                $("body").classList.remove("kdark");
                sv("k_theme", "light");
            } else {
                $("body").classList.add("kdark");
                sv("k_theme", "dark");
            }
            ncheck?.classList.toggle("checked");
            applyKcgHueByTheme();
        };

        $("#kcg_hue_slider")?.addEventListener("input", function () {
            const hueValue = normalizeKcgHue(this.value);
            applyKcgHue(hueValue);
            setKcgHueLabel(hueValue);
            sv(getKcgHueStorageKey(getCurrentTheme()), hueValue);
        });

        $("#nmenuid_cm").onclick = function () {
            const ncheck = $(".checkbutton", this);
            if (ncheck?.classList.contains("checked")) {
                sv("k_closeModer", false);
            } else {
                sv("k_closeModer", true);
            }
            ncheck?.classList.toggle("checked");
        };

        $("#nmenuid_af").onclick = function () {
            toggleMenu("hide");
            ndialog(
                `${tl("调整间隔")}`,
                `${tl("建议间隔50秒")}`,
                `Go`,
                function (t) {
                    let nextInterval;
                    try {
                        nextInterval = parseInt($(".kdialoginput", t).value);
                    } catch (e) {
                        nextInterval = parseInt(gv("k_interval", 50));
                    }
                    // 非数字或过小值不应用，避免把定时器间隔清成 0。
                    if (!Number.isFinite(nextInterval) || nextInterval < 10) {
                        return;
                    }
                    interval2Time = nextInterval;
                    clearInterval(nInterval2);
                    nInterval2 = setInterval(
                        nInterval2Fun,
                        1000 * interval2Time,
                    );
                    sv("k_interval", interval2Time);
                },
                `input`,
                parseInt(gv("k_interval", 50)),
            );
        };

        $("#nmenuid_ko").onclick = function () {
            const ncheck = $(".checkbutton", this);
            if (ncheck?.classList.contains("checked")) {
                $("body").classList.remove("kkeenobservation");
                sv("k_keenObservation", false);
            } else {
                $("body").classList.add("kkeenobservation");
                sv("k_keenObservation", true);
            }
            ncheck?.classList.toggle("checked");
        };

        $("#nmenuid_cc").onclick = function () {
            const ncheck = $(".checkbutton", this);
            if (ncheck?.classList.contains("checked")) {
                sv("k_clonechat", false);
                cloneChat(false);
            } else {
                sv("k_clonechat", true);
                cloneChat(true);
            }
            ncheck?.classList.toggle("checked");
        };

        $("#nmenuid_pp").onclick = function () {
            const ncheck = $(".checkbutton", this);
            if (ncheck?.classList.contains("checked")) {
                $("body").classList.remove("kpurifypage");
                sv("k_cleanlyhome", false);
            } else {
                $("body").classList.add("kpurifypage");
                purifyPage();
                sv("k_cleanlyhome", true);
            }
            ncheck?.classList.toggle("checked");
        };

        $("#nmenuid_ls").onclick = function () {
            const ncheck = $(".checkbutton", this);
            if (ncheck?.classList.contains("checked")) {
                sv("k_largescreen", false);
            } else {
                sv("k_largescreen", true);
            }
            $("body").classList.toggle("largescreen");
            ncheck?.classList.toggle("checked");
        };

        $("#nmenuid_sc").onclick = function () {
            const ncheck = $(".checkbutton", this);
            if (ncheck?.classList.contains("checked")) {
                sv("k_speakcompletely", false);
            } else {
                sv("k_speakcompletely", true);
            }
            ncheck?.classList.toggle("checked");
        };

        $("#nmenuid_it").onclick = function () {
            const ncheck = $(".checkbutton", this);
            if (ncheck?.classList.contains("checked")) {
                sv("k_intercepttracking", false);
                interceptTracking(false);
            } else {
                sv("k_intercepttracking", true);
                interceptTracking(true);
            }
            ncheck?.classList.toggle("checked");
        };

        $("#nmenuid_ec").onclick = function () {
            const ncheck = $(".checkbutton", this);
            if (ncheck?.classList.contains("checked")) {
                sv("k_everchanging", false);
                everChanging(false);
            } else {
                sv("k_everchanging", true);
                everChanging(true);
            }
            ncheck?.classList.toggle("checked");
        };

        $("#nmenuid_cu").onclick = function () {
            toggleMenu("hide");
            checkForUpdates();
        };

        $("#nmenuid_ap").onclick = function () {
            toggleMenu("hide");
            supportAuthor();
        };

        $("#nmenuid_ab").onclick = function () {
            toggleMenu("hide");
            window.open(GM_info.script.namespace, "_blank");
        };
    };

    // 设置统一的开关视觉状态，避免节点不存在时抛出错误。
    const setToggleChecked = function (menuId, checked = false) {
        const ncheck = $(`#${menuId} .checkbutton`);
        if (!ncheck) {
            return;
        }
        if (checked) {
            ncheck.classList.add("checked");
        } else {
            ncheck.classList.remove("checked");
        }
    };

    const normalizeKcgHue = function (value) {
        const parsed = parseInt(value);
        if (Number.isNaN(parsed)) {
            return 0;
        }
        return Math.min(180, Math.max(-180, parsed));
    };

    const getCurrentTheme = function () {
        return $("body").classList.contains("kdark") ? "dark" : "light";
    };

    const getKcgHueStorageKey = function (theme) {
        return theme === "dark" ? "k_kcgHue_dark" : "k_kcgHue_light";
    };

    const getKcgHueDefaultValue = function () {
        return 0;
    };

    const getKcgHueBaseOffset = function () {
        return 0;
    };

    const setKcgHueLabel = function (hueValue) {
        if ($("#kcg_hue_value")) {
            $("#kcg_hue_value").textContent = `${hueValue}°`;
        }
    };

    const applyKcgHue = function (hueValue) {
        const normalizedHue = normalizeKcgHue(hueValue);
        const effectiveHue = normalizedHue + getKcgHueBaseOffset();
        const hueIntensity = Math.min(180, Math.abs(effectiveHue)) / 180;
        document.documentElement.style.setProperty(
            "--kcg-hue-rotate",
            `${Math.round(effectiveHue)}deg`,
        );
        document.documentElement.style.setProperty(
            "--kcg-hue-saturate",
            `${(1 + hueIntensity * 0.25).toFixed(3)}`,
        );
    };

    const applyKcgHueByTheme = function () {
        const hueValue = normalizeKcgHue(
            gv(getKcgHueStorageKey(getCurrentTheme()), getKcgHueDefaultValue()),
        );
        applyKcgHue(hueValue);
        if ($("#kcg_hue_slider")) {
            $("#kcg_hue_slider").value = `${hueValue}`;
        }
        setKcgHueLabel(hueValue);
    };

    const setUserOptions = function () {
        if (gv("k_showDebug", false) === true) {
            setToggleChecked("nmenuid_sd", true);
            if ($("#xcanwin")) {
                $("#xcanwin").style.display = "";
            }
        } else if ($("#xcanwin")) {
            $("#xcanwin").style.display = "none";
        }

        if (gv("k_theme", "light") === "dark") {
            setToggleChecked("nmenuid_dm", true);
            $("body").classList.add("kdark");
        }

        applyKcgHueByTheme();

        if (gv("k_closeModer", false) === true) {
            setToggleChecked("nmenuid_cm", true);
        }

        if (gv("k_keenObservation", true) === true) {
            setToggleChecked("nmenuid_ko", true);
            $("body").classList.add("kkeenobservation");
        }

        if (gv("k_clonechat", false) === true) {
            setToggleChecked("nmenuid_cc", true);
            cloneChat(true);
        }

        if (gv("k_cleanlyhome", false) === true) {
            setToggleChecked("nmenuid_pp", true);
            purifyPage();
            $("body").classList.add("kpurifypage");
        }

        if (gv("k_largescreen", false) === true) {
            setToggleChecked("nmenuid_ls", true);
            $("body").classList.add("largescreen");
        }

        if (gv("k_speakcompletely", false) === true) {
            setToggleChecked("nmenuid_sc", true);
        }

        if (gv("k_intercepttracking", false) === true) {
            setToggleChecked("nmenuid_it", true);
            interceptTracking(true);
        }

        if (gv("k_everchanging", false) === true) {
            setToggleChecked("nmenuid_ec", true);
            everChanging(true);
        }

        //检查更新：首次、每3天
        if (
            gv("k_lastupdate", 0) === 0 ||
            Date.now() - gv("k_lastupdate", 0) >= 1000 * 60 * 60 * 24 * 3
        ) {
            sv("k_lastupdate", Date.now());
            checkForUpdates("auto");
        }

        if (
            gv("k_last_support_author", 0) === 0 ||
            Date.now() - gv("k_last_support_author", 0) >=
                1000 * 60 * 60 * 24 * 30
        ) {
            sv("k_last_support_author", Date.now());
            supportAuthor();
        }
    };

    // 统一控制设置弹窗显示状态，并维护焦点返回。
    const toggleMenu = function (action) {
        const ndivmenu = $(".kmenu");
        if (!ndivmenu) {
            return;
        }
        if (action === "show") {
            global.kmenuLastFocus = document.activeElement;
            ndivmenu.classList.remove("khide");
            ndivmenu.classList.add("kshow");
            ndivmenu.setAttribute("aria-hidden", "false");
            document.body.classList.add("kmenu-open");
            $(".kmenu-panel", ndivmenu)?.focus();
        } else {
            ndivmenu.classList.remove("kshow");
            ndivmenu.classList.add("khide");
            ndivmenu.setAttribute("aria-hidden", "true");
            document.body.classList.remove("kmenu-open");
            if (global.kmenuLastFocus && global.kmenuLastFocus.focus) {
                global.kmenuLastFocus.focus();
            }
        }
    };

    const loadKCG = function () {
        let symbol_prt;
        if ($("#kcg") !== null) {
            addStyle();
            setUserOptions();
            return;
        }
        setIfr(u);

        const ndivkcg = document.createElement("div");
        ndivkcg.id = "kcg";
        ndivkcg.setAttribute(
            "class",
            "flex py-3 px-3 items-center gap-3 rounded-md text-sm mb-1 flex-shrink-0 border border-white/20",
        );
        ndivkcg.setAttribute("role", "button");
        ndivkcg.setAttribute("tabindex", "0");

        const icon = GM_info.script.icon
            ? GM_info.script.icon
            : `${GM_info.script.namespace}raw/main/assets/logo.svg`;
        ndivkcg._symbol1_innerHTML = `<img src='${icon}' style='width: 1rem;' /><div style='font-size: 0.8rem'>Keep${ndivkcg.id.slice(1, 2).toUpperCase()}hatGPT by x${ndivkcg.id.slice(1, 2)}anwin</div>`;
        ndivkcg._symbol2_innerHTML = `<img src='${icon}' style='width: 1rem;' />`;

        if ($(symbol1_selector)) {
            ndivkcg.innerHTML = ndivkcg._symbol1_innerHTML;
            ndivkcg.classList.add("kcg-pc");
            ndivkcg.classList.remove("kcg-mb");
            symbol_prt = $(symbol1_selector);
        } /* else if ($(symbol2_selector)) {
            ndivkcg.innerHTML = ndivkcg._symbol2_innerHTML;
            ndivkcg.classList.remove('kcg-pc');
            ndivkcg.classList.add('kcg-mb');
            symbol_prt = fp(".sticky", $(symbol2_selector), 4);
            let gpt_menu = fp(".no-draggable", $(symbol2_selector), 4);
            gpt_menu.classList.remove('absolute');
        } */
        if (!symbol_prt) return;
        symbol_prt.insertBefore(ndivkcg, symbol_prt.childNodes[0]);
        loadMenu();

        // 支持点击与键盘打开设置弹窗。
        const toggleMenuByKcg = function (event) {
            event.preventDefault();
            event.stopPropagation();
            const nmenu = $(".kmenu");
            if (nmenu?.classList.contains("kshow")) {
                toggleMenu("hide");
            } else {
                toggleMenu("show");
            }
        };
        ndivkcg.addEventListener("click", toggleMenuByKcg);
        ndivkcg.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                toggleMenuByKcg(event);
            }
        });

        applyKeenObservationAvatar(); //更新明察秋毫用户头像
        document.documentElement.style.setProperty(
            "--keenobservation-assistant-image-url",
            `url('${$('link[rel="apple-touch-icon"]')?.href || "https://cdn.oaistatic.com/assets/favicon-180x180-od45eci6.webp"}')`,
        ); //更新明察秋毫机器人头像
        addStyle();
        setUserOptions();
    };

    const addStyle = function () {
        $("#kcg-style")?.remove();
        const kcgStyle = GM_addStyle(`
/*
:root {
    --keenobservation-user-image-url: '';
    --keenobservation-assistant-image-url: '';
}
*/

/*日星月异*/
:root {
    --kcg-ec-sidebar-bg: linear-gradient(to right top, #d0dcff, #f0f0ff, #fff3f3);
    --kcg-ec-row-bg: rgba(255, 255, 255, 0.15);
    --kcg-ec-row-selected-bg: #bfcbfd;
    --kcg-ec-row-hover-bg: #d5ddff;
}
/*官方暗色模式*/
:root[data-theme="dark"], .dark {
    --kcg-ec-sidebar-bg: linear-gradient(to right top, #171717, #060606, #171717);
    --kcg-ec-row-bg: rgba(255, 255, 255, 0.05);
    --kcg-ec-row-selected-bg: #444;
    --kcg-ec-row-hover-bg: #2f2f2f;
}
.ever-changing {
    /*左边栏*/
    [data-sidebar-navigation-root] {
        background: var(--kcg-ec-sidebar-bg);
    }
    /*左边栏会话条目*/
    ${symbol1_selector} .sidebar-item:has(a[href*='/c/']) {
        height: 3.5rem;
        /*行与行之间留一点间隙，避免按钮粘连*/
        margin-block: 0.125rem;
        background-color: var(--kcg-ec-row-bg);
    }
    /*左边栏选中条目（新前端用 aria-current 标记当前会话）*/
    ${symbol1_selector} .sidebar-item:has(a[aria-current="page"]) {
        background-color: var(--kcg-ec-row-selected-bg);
    }
    /*左边栏鼠标滑动*/
    ${symbol1_selector} .sidebar-item:has(a[href*='/c/']):hover {
        background-color: var(--kcg-ec-row-hover-bg);
    }
    /*左边栏条目文字*/
    [data-kcg-everchanging="true"] {
        flex: 1 1 auto;
        min-width: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.125rem;
    }
    .navhead {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        min-width: 0;
    }
    .navtitle {
        flex: 1 1 auto;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
    }
    .navdate {
        flex-shrink: 0;
        font-size: 0.71rem;
        opacity: 0.55;
    }
    .navlast {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.75rem;
        opacity: 0.65;
    }
    /*鼠标滑动时让出右侧的置顶、更多操作按钮*/
    ${symbol1_selector} .sidebar-item:hover .navdate {
        visibility: hidden;
    }
}

/*KeepChatGPT 视觉系统 token（亮色）*/
:root {
    --kcg-accent: #3f7cff;
    --kcg-accent-soft: #eaf1ff;
    --kcg-panel: rgba(248, 251, 255, 0.94);
    --kcg-panel-strong: rgba(255, 255, 255, 0.98);
    --kcg-border: rgba(63, 124, 255, 0.2);
    --kcg-text: #15213a;
    --kcg-text-muted: #536284;
    --kcg-shadow: 0 18px 42px rgba(33, 64, 133, 0.22);
    --kcg-hue-rotate: 0deg;
    --kcg-hue-saturate: 1;
}

/*KeepChatGPT 视觉系统 token（暗色）*/
body.kdark {
    --kcg-accent: #66b4ff;
    --kcg-accent-soft: #031a38;
    --kcg-panel: rgba(2, 11, 24, 0.97);
    --kcg-panel-strong: rgba(4, 16, 33, 0.99);
    --kcg-border: rgba(110, 188, 255, 0.56);
    --kcg-text: #f8fbff;
    --kcg-text-muted: #e1eafd;
    --kcg-shadow: 0 28px 58px rgba(0, 4, 15, 0.78);
}

/*KeepChatGPT 入口*/
#kcg {
    position: relative;
    overflow: hidden;
    background: linear-gradient(138deg, #fff6cf 0%, #dff1ff 52%, #e8fff2 100%);
    color: #0d1b42;
    border-color: rgba(44, 95, 180, 0.36);
    box-shadow: none;
    user-select: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    filter: hue-rotate(var(--kcg-hue-rotate)) saturate(var(--kcg-hue-saturate));
}
#kcg::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.35), transparent 52%);
    pointer-events: none;
}
#kcg:hover {
    transform: translateY(-1px);
    box-shadow: none;
}
#kcg:focus-visible {
    outline: 2px solid var(--kcg-accent);
    outline-offset: 2px;
}
#kcg img {
    border-radius: 0.325rem;
}
/* LOGO 文本统一右移并加粗（亮暗主题一致） */
#kcg > div {
    margin-left: 0.24rem;
    font-weight: 700;
    color: #111;
}

/* 降低动画与视觉特效负担 */
@media (prefers-reduced-motion: reduce) {
    #kcg {
        transition: none;
        animation: none !important;
    }
}
.kcg-pc {
    position: relative;
    margin-top: .5rem;
    margin-bottom: .5rem;
    margin-left: .5rem;
    margin-right: .5rem;
}
.kcg-mb {
    position: absolute;
    margin-top: .3rem;
    margin-bottom: .3rem;
    top: 0;
    left: .5rem;
    bottom: 0;
}
body.kdark #kcg {
    /* LOGO 降亮约20% */
    background: linear-gradient(to top right, #15002b, #000, #090055);
    border-color: rgba(230, 242, 255, 0.6);
    border-width: 0.5px;
    animation: none;
    box-shadow: none;
}
body.kdark #kcg::before {
    background:
        linear-gradient(180deg, rgba(171, 224, 255, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 18% 18%, rgba(105, 178, 255, 0.06), transparent 56%);
}
body.kdark #kcg:hover {
    border-color: rgba(230, 242, 255, 0.6);
    box-shadow: none;
}
body.kdark #kcg img {
    filter: invert(1);
}
body.kdark #kcg > div {
    color: #fff;
}

body.kdark .kmenu-panel {
    background: linear-gradient(160deg, rgba(2, 10, 22, 0.98), rgba(4, 15, 31, 0.99));
}
body.kdark .kmenu-head {
    background: linear-gradient(90deg, rgba(4, 23, 50, 0.96), rgba(4, 18, 38, 0.78) 48%, rgba(3, 12, 24, 0.62) 100%);
}

/*设置弹窗：全屏遮罩 + 中央面板*/
.kmenu {
    position: fixed;
    inset: 0;
    z-index: 2147483000;
    display: none;
    pointer-events: auto;
}
.kmenu-open > *:not(.kmenu):not(.kdialog-overlay):not(script):not(style) {
    pointer-events: none !important;
}
.kmenu-open .kmenu,
.kmenu-open .kmenu * {
    pointer-events: auto !important;
}
.kmenu-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(10, 20, 40, 0.35);
}
.kmenu-panel {
    position: relative;
    width: min(46rem, calc(100vw - 2rem));
    max-height: calc(100vh - 4rem);
    margin: 2rem auto;
    border-radius: 1rem;
    border: 1px solid var(--kcg-border);
    background: linear-gradient(160deg, var(--kcg-panel), var(--kcg-panel-strong));
    box-shadow: var(--kcg-shadow);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    pointer-events: auto;
}
.kmenu-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.1rem;
    border-bottom: 1px solid var(--kcg-border);
    background: linear-gradient(90deg, var(--kcg-accent-soft), transparent);
}
.kmenu-brand {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    color: var(--kcg-text);
}
.kmenu-brand img {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.35rem;
}
body.kdark .kmenu-brand img {
    filter: invert(1);
}
.kmenu-brand-text {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    margin-left: 0.12rem;
}
.kmenu-brand-text strong {
    font-size: 0.96rem;
    line-height: 1.1rem;
}
.kmenu-brand-text span {
    font-size: 0.75rem;
    color: var(--kcg-text-muted);
}
.kmenu-close {
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--kcg-border);
    border-radius: 0.625rem;
    background: rgba(255, 255, 255, 0.6);
    color: var(--kcg-text-muted);
    font-size: 1.25rem;
    line-height: 1;
    cursor: pointer;
    transition: none;
}
body.kdark .kmenu-close {
    background: rgba(5, 18, 37, 0.94);
}
.kmenu-close:hover {
    color: var(--kcg-accent);
    border-color: var(--kcg-accent);
}
.kmenu-close:focus-visible {
    outline: 2px solid var(--kcg-accent);
    outline-offset: 1px;
}
.kmenu-content {
    padding: 1rem 1rem 1.1rem;
    overflow: auto;
}
.kmenu-group + .kmenu-group {
    margin-top: 0.95rem;
}
.kmenu-group-title {
    margin: 0 0 0.55rem;
    color: var(--kcg-text-muted);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}
.kmenu-group-body {
    display: grid;
    gap: 0.45rem;
}
.kmenu-item {
    width: 100%;
    border: 1px solid transparent;
    border-radius: 0.8rem;
    background: rgba(255, 255, 255, 0.45);
    color: var(--kcg-text);
    padding: 0.68rem 0.78rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    text-align: left;
    cursor: pointer;
    transition: none;
}
body.kdark .kmenu-item {
    background: rgba(4, 16, 34, 0.9);
}
.kmenu-item:hover {
    border-color: var(--kcg-border);
    background: rgba(255, 255, 255, 0.72);
    transform: translateY(-1px);
}
body.kdark .kmenu-item:hover {
    background: rgba(7, 28, 56, 0.98);
}
body.kdark .kmenu-group-title {
    color: #e9f1ff;
}
body.kdark .kmenu-item-desc {
    color: #dce8ff;
}
body.kdark .kmenu-brand-text span {
    color: #dce9ff;
}

body.kdark .kdialog-shell {
    background: linear-gradient(165deg, rgba(2, 10, 22, 0.98), rgba(4, 15, 31, 0.99));
}
body.kdark .kdialogcontent {
    color: #e8f0ff;
}
.kmenu-item:focus-visible {
    outline: 2px solid var(--kcg-accent);
    outline-offset: 1px;
}
.kmenu-item-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.14rem;
    min-width: 0;
}
.kmenu-item-title {
    font-size: 0.9rem;
    line-height: 1.2;
}
.kmenu-item-desc {
    font-size: 0.74rem;
    color: var(--kcg-text-muted);
    line-height: 1.25;
}
.kmenu-item-range {
    display: block;
    cursor: default;
}
.kmenu-range-row {
    margin-top: 0.52rem;
    display: flex;
    align-items: center;
    gap: 0.65rem;
}
.kmenu-item-range-input {
    flex: 1;
    accent-color: var(--kcg-accent);
    /* 新版前端的全局 reset 会对 input 设置 appearance:none，导致原生轨道和滑头消失 */
    -webkit-appearance: auto;
    appearance: auto;
}
body.kdark .kmenu-item-range-input {
    color-scheme: dark;
}
.kmenu-item-range-value {
    min-width: 3.2rem;
    text-align: right;
    font-size: 0.76rem;
    color: var(--kcg-text-muted);
}
.kmenu-item-ap .kmenu-item-title {
    color: #00a16d;
    font-weight: 700;
}
.kmenu-open {
    overflow: hidden;
}
@media (max-width: 768px) {
    .kmenu-panel {
        width: calc(100vw - 1rem);
        max-height: calc(100vh - 1rem);
        margin: 0.5rem auto;
        border-radius: 0.9rem;
    }
    .kmenu-content {
        padding: 0.85rem;
    }
}

/*通用弹窗样式（输入框、更新提示、赞赏弹窗）*/
.kdialog-overlay {
    position: fixed;
    inset: 0;
    z-index: 3100;
    background: rgba(7, 13, 28, 0.55);
    display: grid;
    place-items: center;
    padding: 1rem;
}
.kdialog-shell {
    width: min(36rem, calc(100vw - 2rem));
    border-radius: 0.95rem;
    border: 1px solid var(--kcg-border);
    background: linear-gradient(165deg, var(--kcg-panel), var(--kcg-panel-strong));
    box-shadow: var(--kcg-shadow);
    color: var(--kcg-text);
    overflow: hidden;
}
.kdialog-head {
    padding: 1rem 1.1rem 0.82rem;
    border-bottom: 1px solid var(--kcg-border);
}
.kdialog-head h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
}
.kdialog-body {
    padding: 1rem 1.1rem 1.1rem;
}
.kdialogcontent {
    margin: 0 0 0.85rem;
    color: var(--kcg-text-muted);
    font-size: 0.86rem;
}
.kdialoginput {
    width: 100%;
    border: 1px solid var(--kcg-border);
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.75);
    color: var(--kcg-text);
    padding: 0.7rem 0.85rem;
    resize: vertical;
    min-height: 2.5rem;
}
body.kdark .kdialoginput {
    background: rgba(2, 15, 34, 0.94);
}
body.kdark .kdialogclose {
    color: #f0f7ff;
}
.kdialog-actions {
    margin-top: 0.95rem;
    display: flex;
    justify-content: flex-end;
    gap: 0.6rem;
}
.kdialogbtn, .kdialogclose {
    border: 1px solid var(--kcg-border);
    border-radius: 0.65rem;
    padding: 0.48rem 0.95rem;
    cursor: pointer;
    font-size: 0.82rem;
    transition: none;
}
.kdialogbtn {
    background: var(--kcg-accent);
    border-color: var(--kcg-accent);
    color: #ffffff;
}
.kdialogclose {
    background: transparent;
    color: var(--kcg-text-muted);
}
.kdialogbtn:hover, .kdialogclose:hover {
    transform: translateY(-1px);
}

/*净化页面*/
.kpurifypage {
    main section.group\\/home-suggestions /*首页的快捷提示词*/,
    main .text-center.text-xs.select-none[data-markdown-copy="exclude"] /*输入框底部的提示标签*/,
    main [class*="aria-live=polite"] /*上下文的选中文本的"询问ChatGPT"弹窗*/
    {
        display: none;
    }
}

/*明察秋毫*/
.kkeenobservation {
    /*用户气泡优化*/
    ${user_message_selector} {
        position: relative;
        padding-right: 2.75rem;
    }
    ${user_message_selector} [data-user-message-bubble="true"] {
        background-color: #e1eaff;
    }

    /*添加用户头像*/
    ${user_message_selector}::after {
        content: '';
        position: absolute;
        right: 0rem;
        top: 0rem;
        width: 2rem;
        height: 2rem;
        background-color: gray;
        background-image: var(--keenobservation-user-image-url);
        background-size: contain;
        border-radius: 50%;
        pointer-events: auto;
    }

    /*机器人气泡优化*/
    ${assistant_message_selector} {
        position: relative;
        padding-left: 3rem;
    }
    ${assistant_message_selector} [data-chatgpt-selection-message-id] {
        width: fit-content;
        max-width: 100%;
        border-radius: 1.5rem;
        padding: 0.75rem 1.25rem;
        background-color: #f3f4f6;
    }
    /*机器人操作按钮与气泡对齐*/
    [data-talvt-turn-state] > .turn-action-controls {
        padding-left: 3rem;
    }

    /*添加机器人头像*/
    ${assistant_message_selector}::after {
        content: '';
        position: absolute;
        left: 0rem;
        top: 0rem;
        width: 2rem;
        height: 2rem;
        background-color: gray;
        background-image: var(--keenobservation-assistant-image-url);
        background-size: contain;
        border-radius: 50%;
        pointer-events: auto;
    }
}
/*官方暗色模式*/
:root[data-theme="dark"], .dark {
    .kkeenobservation {
        ${user_message_selector} [data-user-message-bubble="true"] {
            background-color: #525452;
        }
        ${assistant_message_selector} [data-chatgpt-selection-message-id] {
            background-color: rgba(255, 255, 255, 0.08);
        }
    }
}

/*侧边栏*/
${symbol1_selector} {
    position: relative;
    scrollbar-width: thin;
}
${symbol1_selector} [data-app-action-sidebar-scroll] {
    scrollbar-width: thin;
}

/*选择按钮*/
.checkbutton {
    width: 2.1rem;
    height: 1.4rem;
    margin-left: auto;
    position: static;
    flex-shrink: 0;
}
.checkbutton:hover {
    cursor: pointer;
}
.checkbutton path {
    transition: fill 0.2s ease-in-out;
}
.checkbutton circle {
    transition: transform 0.2s ease-in-out;
}
.checked path {
    fill: #30D158;
}
.checked circle {
    transform: translateX(14px);
}

/*展示大屏*/
.largescreen {
    @media (min-width:1024px) {
        /* ChatGPT 新版前端通过 --thread-content-max-width 变量限制消息区、输入区、首页的内容宽度 */
        main [class*="--thread-content-max-width:"] {
            --thread-content-max-width: min(90rem, calc(100vw - 8rem)) !important;
        }
    }
}

.khide {
    display: none !important;
}
.kshow {
    display: block !important;
}

`);
        if (kcgStyle) {
            kcgStyle.id = "kcg-style";
        }
    };

    const scheduleEverChangingAttach = function (kec_object, delay = 180) {
        if (global.kecAttachTimer) {
            clearTimeout(global.kecAttachTimer);
        }
        global.kecAttachTimer = setTimeout(function () {
            attachDate(kec_object);
        }, delay);
    };

    const flattenConversationText = function (value) {
        if (value === null || value === undefined) {
            return "";
        }
        if (typeof value === "string") {
            return value;
        }
        if (Array.isArray(value)) {
            return value.map(flattenConversationText).join(" ");
        }
        if (typeof value === "object") {
            if (typeof value.text === "string") {
                return value.text;
            }
            if (typeof value.content === "string") {
                return value.content;
            }
            if (value.content) {
                return flattenConversationText(value.content);
            }
            if (Array.isArray(value.parts)) {
                return flattenConversationText(value.parts);
            }
        }
        return "";
    };

    const extractConversationPreview = function (message) {
        const text = flattenConversationText(message?.content?.parts || message?.content)
            .replace(/[\r\n]+/g, " ")
            .replace(/\s+/g, " ")
            .trim();
        return text.slice(0, 100);
    };

    const extractConversationModel = function (message) {
        return (
            message?.metadata?.model_slug ||
            message?.metadata?.default_model_slug ||
            ""
        );
    };

    const extractConversationIdFromUrl = function (requestUrl) {
        if (typeof requestUrl !== "string") {
            return "";
        }
        const matched = requestUrl.match(
            /\/backend-api\/conversations?\/(?:id\/)?(([^/]{4,}?){4}-[^/]{4,}?)(\?|$)/,
        );
        return matched ? matched[1] : "";
    };

    // 会话列表：/backend-api/conversations?...offset=
    const isConversationListUrl = function (requestUrl) {
        return (
            typeof requestUrl === "string" &&
            /\/backend-api\/conversations\?.*offset=/.test(requestUrl)
        );
    };

    // 会话详情：旧版 /backend-api/conversation/<id>，新版 /backend-api/conversations/<id>?num_turns=；
    // 新版删除为 DELETE /backend-api/conversation/id/<id>
    const isConversationDetailUrl = function (requestUrl) {
        return extractConversationIdFromUrl(requestUrl) !== "";
    };

    // 发送消息：旧版 /backend-api/conversation，新版 /backend-api/f/conversation
    const isConversationSendUrl = function (requestUrl) {
        return (
            typeof requestUrl === "string" &&
            /\/backend-api\/(f\/)?conversation(\?|$)/.test(requestUrl)
        );
    };

    // 取消审计：仅当请求体已携带 supports_modapi 时才关闭，避免给新接口塞入未知字段。
    const patchConversationSendBody = function (bodyText) {
        try {
            const postBody = JSON.parse(bodyText);
            if (
                postBody &&
                typeof postBody === "object" &&
                "supports_modapi" in postBody
            ) {
                postBody.supports_modapi = false;
                return JSON.stringify(postBody);
            }
        } catch (e) {}
        return bodyText;
    };

    const normalizeConversationUpdateTime = function (value) {
        if (!value) {
            return null;
        }
        let updateTime = value;
        updateTime = updateTime < 10 ** 10 ? updateTime * 1000 : updateTime;
        const parsedDate = new Date(updateTime);
        return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
    };

    const findConversationMessageForPreview = function (payload) {
        // 新版会话详情用 messages 数组代替 mapping。
        if (Array.isArray(payload?.messages)) {
            const messages = payload.messages.filter(Boolean);
            const isVisible = (message) =>
                (message.author?.role === "assistant" ||
                    message.author?.role === "user") &&
                message.metadata?.is_visually_hidden_from_conversation !==
                    true &&
                extractConversationPreview(message) !== "";
            const currentMessage = messages.find(
                (message) => message.id === payload.current_node,
            );
            if (currentMessage && isVisible(currentMessage)) {
                return currentMessage;
            }
            for (let i = messages.length - 1; i >= 0; i--) {
                if (isVisible(messages[i])) {
                    return messages[i];
                }
            }
            return null;
        }
        const currentNodeMessage =
            payload?.mapping?.[payload?.current_node]?.message;
        if (currentNodeMessage) {
            return currentNodeMessage;
        }
        const mappedMessages = Object.values(payload?.mapping || {})
            .map((node) => node?.message)
            .filter(Boolean)
            .sort((a, b) => {
                const aTime = Number(a?.create_time || 0);
                const bTime = Number(b?.create_time || 0);
                return bTime - aTime;
            });
        return mappedMessages[0] || null;
    };

    const buildConversationRecordFromPayload = function (
        payload,
        fallbackConversationId = "",
    ) {
        if (!payload || typeof payload !== "object") {
            return null;
        }
        const conversationId =
            payload.conversation_id || payload.id || fallbackConversationId;
        const updateTime = normalizeConversationUpdateTime(
            payload.update_time || payload.create_time,
        );
        if (!conversationId || !updateTime) {
            return null;
        }
        const previewMessage = findConversationMessageForPreview(payload);
        return {
            id: conversationId,
            title: payload.title || "",
            update_time: updateTime,
            last: extractConversationPreview(previewMessage),
            model: extractConversationModel(previewMessage),
        };
    };

    const extractConversationIdFromPageUrl = function () {
        const matched = location.pathname.match(
            /\/c\/(([^/]{4,}?){4}-[^/]{4,}?)(?:\/|$)/,
        );
        return matched ? matched[1] : "";
    };

    // 取最后一条有文本内容的助手回复；优先读 Markdown 正文，避免带上"ChatGPT 说："等屏幕阅读器文本。
    const getLastAssistantText = function () {
        // SPA 切换会话后旧会话节点仍在 DOM 中：限定当前渲染的会话容器；
        // 不按视口可见性过滤单条消息，虚拟列表会让屏外消息没有 client rects。
        const containers = Array.from(
            $$('[data-thread-find-target="conversation"]'),
        ).filter((el) => el.getClientRects().length > 0);
        const scope = containers[containers.length - 1] || document;
        const assistantMessages = Array.from(
            $$(assistant_message_selector, scope),
        );
        for (let i = assistantMessages.length - 1; i >= 0; i--) {
            const contentElement =
                $('[data-markdown-text-style="assistant-message"]', assistantMessages[i]) ||
                assistantMessages[i];
            const text = `${contentElement.innerText || ""}`
                .replace(/[\r\n]+/g, " ")
                .replace(/\s+/g, " ")
                .trim()
                .slice(0, 100);
            if (text) {
                return text;
            }
        }
        return "";
    };

    const updateEverChangingFromCurrentPage = async function () {
        const conversationId = extractConversationIdFromPageUrl();
        const last = getLastAssistantText();
        if (!conversationId || !last || !global.st_ec) return;

        const oldRecord = (await global.st_ec.get(conversationId)) || {};
        // 打开历史页面不等于新消息：保留服务端时间，内容未变时不写库。
        if (
            gv("k_everchanging", false) !== true ||
            extractConversationIdFromPageUrl() !== conversationId
        ) {
            return;
        }
        if (oldRecord.last === last && oldRecord.update_time) return;
        const record = {
            id: conversationId,
            title:
                document.title && document.title !== "ChatGPT"
                    ? document.title
                    : oldRecord.title || "",
            update_time: oldRecord.update_time || new Date(),
            last: last,
            model: oldRecord.model || "",
        };
        await global.st_ec.put(record);
        const kec_object = {};
        kec_object[record.id] = record;
        scheduleEverChangingAttach(kec_object, 120);
    };

    const scheduleCurrentConversationRecordUpdate = function (delay = 1200) {
        if (global.currentConversationRecordTimer) {
            clearTimeout(global.currentConversationRecordTimer);
        }
        global.currentConversationRecordTimer = setTimeout(function () {
            if (gv("k_everchanging", false) === true) {
                updateEverChangingFromCurrentPage();
            }
        }, delay);
    };

    const shouldDeleteEverChangingRecord = function (payload) {
        return Boolean(
            payload &&
                (payload.is_visible === false ||
                    payload.is_archived === true ||
                    payload.is_hidden === true),
        );
    };

    const parseJsonSafely = function (text, fallback = null) {
        try {
            return JSON.parse(text);
        } catch (e) {
            return fallback;
        }
    };

    // 日新月异：通过 response.clone() 旁路读取历史接口响应，不消费调用方的 body，也无需重建 Response。
    const syncEverChangingResponse = async function (
        response,
        requestUrl,
        method,
        reqBodyText,
    ) {
        if (
            gv("k_everchanging", false) !== true ||
            !global.st_ec ||
            typeof requestUrl !== "string" ||
            !response.ok
        ) {
            return;
        }
        const isList = isConversationListUrl(requestUrl);
        const crt_con_id = extractConversationIdFromUrl(requestUrl);
        if (!isList && !(crt_con_id && (method === "GET" || method === "PATCH" || method === "DELETE"))) {
            return;
        }
        try {
            // DELETE 的新响应体只有 {"success":true}，无需读取。
            if (method === "DELETE") {
                await global.st_ec.delete({ id: crt_con_id });
                scheduleEverChangingAttach(undefined, 120);
                return;
            }
            const payload = parseJsonSafely(await response.clone().text());
            if (!payload) return;

            // 刷新侧边栏时，同步更新数据库中的标题、时间和摘要。
            if (isList && Array.isArray(payload.items)) {
                let kec_object = {};
                await Promise.all(
                    payload.items.map(async (el) => {
                        const update_time = new Date(el.update_time);
                        const ec_tmp = (await global.st_ec.get(el.id)) || {};
                        const mergedRecord = {
                            id: el.id,
                            title: el.title,
                            update_time: update_time,
                            last: ec_tmp.last || "",
                            model: ec_tmp.model || "",
                        };
                        await global.st_ec.put(mergedRecord);
                        kec_object[el.id] = mergedRecord;
                    }),
                );
                scheduleEverChangingAttach(kec_object, 220);
                // 打开、编辑、删除单个历史对话时，增量更新对应侧边栏数据。
            } else if (crt_con_id && method === "GET") {
                const record = buildConversationRecordFromPayload(payload, crt_con_id);
                if (record) {
                    await global.st_ec.put(record);
                    let kec_object = {};
                    kec_object[record.id] = record;
                    scheduleEverChangingAttach(kec_object, 120);
                }
            } else if (crt_con_id && method === "PATCH") {
                const reqBody = parseJsonSafely(reqBodyText);
                if (
                    shouldDeleteEverChangingRecord(payload) ||
                    shouldDeleteEverChangingRecord(reqBody)
                ) {
                    await global.st_ec.delete({ id: crt_con_id });
                    scheduleEverChangingAttach(undefined, 120);
                }
            }
        } catch (e) {
            console.error("KeepChatGPT everChanging response sync error:", e);
        }
    };

    global.__test__ = Object.assign(global.__test__ || {}, {
        isTrackingRequest: isTrackingRequest,
        extractConversationPreview: extractConversationPreview,
        buildConversationRecordFromPayload: buildConversationRecordFromPayload,
        shouldDeleteEverChangingRecord: shouldDeleteEverChangingRecord,
        parseJsonSafely: parseJsonSafely,
        extractConversationIdFromUrl: extractConversationIdFromUrl,
        isConversationListUrl: isConversationListUrl,
        isConversationDetailUrl: isConversationDetailUrl,
        isConversationSendUrl: isConversationSendUrl,
        patchConversationSendBody: patchConversationSendBody,
        selectors: {
            sidebar: symbol1_selector,
            prompt: prompt_selector,
            userMessage: user_message_selector,
            assistantMessage: assistant_message_selector,
        },
    });

    const hookFetch = function () {
        const rawSendBeacon = navigator.sendBeacon?.bind(navigator);
        unsafeWindow.fetch = new Proxy(fetch, {
            apply: function (target, thisArg, argumentsList) {
                let fetchReqUrl = "";
                let fetchReqOptions = {};

                if (
                    typeof argumentsList[0] === "string" ||
                    argumentsList[0] instanceof URL
                ) {
                    fetchReqUrl =
                        argumentsList[0] instanceof URL
                            ? argumentsList[0].href
                            : argumentsList[0];
                    fetchReqOptions = argumentsList[1] || {};
                } else if (argumentsList[0] instanceof Request) {
                    fetchReqOptions = argumentsList[0];
                    fetchReqUrl = fetchReqOptions.url;
                }

                const fetchReqMethod = (
                    argumentsList[1]?.method ||
                    fetchReqOptions?.method ||
                    "GET"
                ).toUpperCase();

                try {
                    // 取消审计1：直接返回一个空的审核结果。
                    if (
                        gv("k_closeModer", false) &&
                        typeof fetchReqUrl === "string" &&
                        /\/backend-api\/moderations(\?|$)/.test(fetchReqUrl)
                    ) {
                        return Promise.resolve(
                            new Response(JSON.stringify({}), {
                                status: 200,
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            }),
                        );
                        // 取消审计2：发送会话请求前，关闭 modapi 支持位。
                    } else if (
                        gv("k_closeModer", false) &&
                        isConversationSendUrl(fetchReqUrl) &&
                        argumentsList[1] &&
                        typeof argumentsList[1].body === "string"
                    ) {
                        argumentsList[1].body = patchConversationSendBody(
                            argumentsList[1].body,
                        );
                        // 拦截跟踪：必须返回标准 Response，避免调用方执行 text/json 时崩溃。
                    } else if (
                        gv("k_intercepttracking", false) &&
                        isTrackingRequest(fetchReqUrl)
                    ) {
                        console.log(
                            `KeepChatGPT: ${tl("拦截跟踪")}: ${fetchReqUrl}`,
                        );
                        return Promise.resolve(buildBlockedTrackingResponse());
                        // fix openai bug：补一个稳定的 compliance 响应。
                    } else if (
                        typeof fetchReqUrl === "string" &&
                        /\/backend-api\/compliance/.test(fetchReqUrl)
                    ) {
                        return Promise.resolve(
                            new Response(
                                JSON.stringify({
                                    registration_country: null,
                                    require_cookie_consent: false,
                                    terms_of_use: {
                                        is_required: false,
                                        display: null,
                                    },
                                    cookie_consent: null,
                                    age_verification: null,
                                }),
                                {
                                    status: 200,
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                },
                            ),
                        );
                    }
                } catch (e) {
                    console.error("KeepChatGPT hookFetch error:", e);
                }

                const fetchRsp = target.apply(thisArg, argumentsList);

                return fetchRsp
                    .then((response) => {
                        if (
                            gv("k_everchanging", false) === true &&
                            fetchReqMethod === "POST" &&
                            isConversationSendUrl(fetchReqUrl)
                        ) {
                            scheduleCurrentConversationRecordUpdate(3000);
                        }

                        // 刷新侧边栏、打开、编辑、删除历史对话时，增量更新侧边栏数据。
                        syncEverChangingResponse(
                            response,
                            fetchReqUrl,
                            fetchReqMethod,
                            typeof argumentsList[1]?.body === "string"
                                ? argumentsList[1].body
                                : "",
                        );

                        return response;
                    })
                    .catch((error) => Promise.reject(error));
            },
        });

        if (rawSendBeacon) {
            navigator.sendBeacon = function (url, data) {
                try {
                    if (
                        gv("k_intercepttracking", false) &&
                        isTrackingRequest(url)
                    ) {
                        console.log(`KeepChatGPT: ${tl("拦截跟踪")}: ${url}`);
                        return true;
                    }
                } catch (e) {}
                return rawSendBeacon(url, data);
            };
        }
    };

    // 网络层兜底：补充 XHR 拦截，兼容未经过 fetch 的跟踪请求。
    const hookXHR = function () {
        const XHR = unsafeWindow.XMLHttpRequest;
        if (!XHR || !XHR.prototype) return;
        if (XHR.prototype._kcgHooked === true) return;
        XHR.prototype._kcgHooked = true;
        const xhrOpen = XHR.prototype.open;
        const xhrSend = XHR.prototype.send;

        XHR.prototype.open = function (method, url, ...rest) {
            this._kcg_url = typeof url === "string" ? url : `${url || ""}`;
            return xhrOpen.call(this, method, url, ...rest);
        };

        XHR.prototype.send = function (...args) {
            try {
                const xhrReqUrl = this._kcg_url || "";
                if (
                    gv("k_intercepttracking", false) &&
                    isTrackingRequest(xhrReqUrl)
                ) {
                    console.log(`KeepChatGPT: ${tl("拦截跟踪")}: ${xhrReqUrl}`);
                    this.abort();
                    return;
                }
            } catch (e) {}
            return xhrSend.apply(this, args);
        };
    };

    const everChanging = function (action) {
        if (action === true) {
            $(symbol1_selector)?.classList.add("knav");
            $("body").classList.add("ever-changing");
            everChanging.startObserver();
            scheduleEverChangingAttach(undefined, 60);
        } else {
            $(symbol1_selector)?.classList.remove("knav");
            $("body").classList.remove("ever-changing");
            everChanging.stopObserver();
            clearTimeout(global.kecAttachTimer);
            clearTimeout(global.currentConversationRecordTimer);
            $$("[data-kcg-everchanging='true']").forEach((el) => el.remove());
            $$("[data-kcg-original-hidden='true']").forEach((el) => {
                el.style.display = "";
                el.removeAttribute("data-kcg-original-hidden");
            });
        }
    };

    everChanging.observer = null;

    everChanging.startObserver = function () {
        if (everChanging.observer || !document.body) {
            return;
        }
        everChanging.observer = new MutationObserver(function () {
            if (gv("k_everchanging", false) !== true) {
                return;
            }
            scheduleEverChangingAttach();
            scheduleCurrentConversationRecordUpdate();
        });
        everChanging.observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    };

    everChanging.stopObserver = function () {
        if (everChanging.observer) {
            everChanging.observer.disconnect();
            everChanging.observer = null;
        }
    };

    const attachDate = function (kec_object) {
        $$(`${symbol1_selector} a[href*='/c/']`).forEach(async (el) => {
            let a_id;
            const a_id_m = el.href.match(
                "/(([^/]{4,}?){4}-[^/]{4,}?)(\\?|$)(\\?|$)",
            );
            if (a_id_m) {
                a_id = a_id_m[1];
            } else {
                return;
            }
            let kec_obj_el;
            if (kec_object) {
                kec_obj_el = kec_object[a_id];
            } else {
                if (global.st_ec) {
                    kec_obj_el = await global.st_ec.get(a_id);
                } else {
                    kec_obj_el = {};
                }
            }
            const title = (kec_obj_el && kec_obj_el.title) || "";
            const update_time = (kec_obj_el && kec_obj_el.update_time) || "";
            const last = (kec_obj_el && kec_obj_el.last) || "";
            const model = (kec_obj_el && kec_obj_el.model) || "";
            const previewText = last || model || "";

            if (!title || !update_time) return;
            if (!previewText) {
                $("[data-kcg-everchanging='true']", el)?.remove();
                $$("[data-kcg-original-hidden='true']", el).forEach((node) => {
                    node.style.display = "";
                    node.removeAttribute("data-kcg-original-hidden");
                });
                return;
            }
            if (
                !$(".navtitle", el) ||
                !$(".navdate", el) ||
                (previewText && !$(".navlast", el))
            ) {
                const cdiv_old =
                    $(`[data-thread-title]`, el) || el.firstElementChild;
                if (cdiv_old && !cdiv_old.hasAttribute("data-kcg-everchanging")) {
                    cdiv_old.style.display = "none";
                    cdiv_old.setAttribute("data-kcg-original-hidden", "true");
                }
                const cdiv_new = document.createElement("div");
                cdiv_new.setAttribute("data-kcg-everchanging", "true");
                cdiv_new.innerHTML = `<div class="navhead"><div class="navtitle">${htmlEncode(title)}</div><div class="navdate">${formatDate2(update_time)}</div></div>${previewText ? `<div class="navlast">${htmlEncode(previewText)}</div>` : ``}`;
                const renderedNode = $("[data-kcg-everchanging='true']", el);
                if (renderedNode) {
                    renderedNode.replaceWith(cdiv_new);
                } else {
                    el.appendChild(cdiv_new);
                }
            } else if (
                $(".navtitle", el).textContent !== title ||
                $(".navdate", el).textContent !== formatDate2(update_time) ||
                ($(".navlast", el)?.textContent || "") !== previewText
            ) {
                $(".navtitle", el).textContent = title;
                $(".navdate", el).textContent = formatDate2(update_time);
                if (previewText) {
                    if ($(".navlast", el)) {
                        $(".navlast", el).textContent = previewText;
                    } else {
                        const navlast = document.createElement("div");
                        navlast.className = "navlast";
                        navlast.textContent = previewText;
                        $("[data-kcg-everchanging='true']", el)?.appendChild(
                            navlast,
                        );
                    }
                } else {
                    $(".navlast", el)?.remove();
                }
            }
        });
    };

    const verInt = function (vs) {
        const vl = vs.split(".");
        let vi = 0;
        for (let i = 0; i < vl.length && i < 3; i++) {
            vi += parseInt(vl[i]) * 1000 ** (2 - i);
        }
        return vi;
    };

    const checkForUpdates = function (action = "click") {
        const downloadURL = `https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js`;
        const updateURL = downloadURL;
        GM_xmlhttpRequest({
            method: "GET",
            url: `${updateURL}?t=${Date.now()}`,
            onload: function (response) {
                const crv = GM_info.script.version;
                const m = response.responseText.match(/@version\s+(\S+)/);
                const ltv = m && m[1];
                if (ltv && verInt(ltv) > verInt(crv)) {
                    ndialog(
                        `${tl("检查更新")}`,
                        `${tl("当前版本")}: ${crv}, ${tl("发现最新版")}: ${ltv}`,
                        `UPDATE`,
                        function (t) {
                            window.open(
                                `${downloadURL}?t=${Date.now()}`,
                                "_blank",
                            );
                        },
                    );
                } else {
                    if (action === "click") {
                        ndialog(
                            `${tl("检查更新")}`,
                            `${tl("当前版本")}: ${crv}, ${tl("已是最新版")}`,
                            `OK`,
                        );
                    }
                }
            },
        });
    };

    /*
    克隆对话
    */
    const cloneChat = function (action) {
        cloneChat.firstTarget = null;
        if (action === true) {
            window.addEventListener("click", cloneChat.listen_Click);
        } else {
            window.removeEventListener("click", cloneChat.listen_Click);
        }
    };

    const setPromptRichText = function (promptTextarea, contentProseMirror) {
        promptTextarea.innerHTML = "";
        promptTextarea.focus();

        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(promptTextarea);
        range.collapse(false);

        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }

        if (typeof range.createContextualFragment === "function") {
            const fragment = range.createContextualFragment(contentProseMirror);
            range.insertNode(fragment);
            range.collapse(false);
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
            }
        } else {
            promptTextarea.innerHTML = contentProseMirror;
        }

        promptTextarea.dispatchEvent(new Event("input", { bubbles: true }));
    };

    /*
    纯文本写入：每行一个 <p>，用片段插入。
    旧实现使用 document.execCommand("insertText")，在新版 ProseMirror 编辑器里
    会把每个换行变成"段落+空段落"（行间出现空行）。
    */
    const setPromptPlainText = function (promptTextarea, text) {
        const contentProseMirror = `${text || ""}`
            .split(/\r?\n/)
            .map((line) => `<p>${htmlEncode(line) || "<br>"}</p>`)
            .join("");
        setPromptRichText(promptTextarea, contentProseMirror);
    };

    cloneChat.listen_Click = function (event) {
        event.stopPropagation();
        const clickedElement = document.elementFromPoint(
            event.clientX,
            event.clientY,
        );
        if (clickedElement && clickedElement.matches(user_message_selector)) {
            // 获取该元素的边界信息
            const rect = clickedElement.getBoundingClientRect();

            // 伪元素的宽度和高度是2rem
            const logoWidth = 32;
            const logoHeight = 32;

            // 计算伪元素所在区域的边界
            const logoRight = rect.right;
            const logoLeft = rect.right - logoWidth;
            const logoTop = rect.top;
            const logoBottom = rect.top + logoHeight;

            // 判断鼠标点击的位置是否在伪元素范围内
            if (
                event.clientX >= logoLeft &&
                event.clientX <= logoRight &&
                event.clientY >= logoTop &&
                event.clientY <= logoBottom
            ) {
                const contentElement =
                    $(".whitespace-pre-wrap", clickedElement) ||
                    $("[data-user-message-bubble]", clickedElement);
                const promptTextarea = getPromptTextarea();
                if (!contentElement || !promptTextarea) return;
                setPromptPlainText(promptTextarea, contentElement.innerText.trim());
            }
        }
    };

    /*
    净化页面
    */
    const purifyPage = function () {
        if (
            location.href.match(
                /https:\/\/(chatgpt\.com|chat\.openai\.com)\/\??/,
            )
        ) {
            //添加专属logo
            if (
                $("main h1") &&
                $("main h1").innerText.match(/^ChatGPT(\nPLUS)?$/)
            ) {
                $("main h1").classList.add("text-gray-200");
                const nSpan = document.createElement("span");
                nSpan.className =
                    "bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase";
                nSpan.textContent = `KEEP`;
                $("main h1").appendChild(nSpan);
            }
        }
    };

    /*
    言无不尽
    新版前端的"继续生成"按钮以可访问名称（aria-label/文本）标识，旧版按 SVG 路径匹配的方式已失效。
    */
    const speakCompletely = function () {
        if (gv("k_speakcompletely", false) === true) {
            const continueButton = Array.from($$("main button")).find(
                (button) => {
                    if (
                        button.disabled ||
                        button.getAttribute("aria-disabled") === "true" ||
                        button.dataset.kcgContinuation === "true"
                    ) {
                        return false;
                    }
                    if (
                        button.closest(
                            '[role="dialog"], [contenteditable="true"]',
                        )
                    ) {
                        return false;
                    }
                    const label = (
                        button.getAttribute("aria-label") ||
                        button.textContent ||
                        ""
                    ).trim();
                    return /^(继续生成|繼續生成|繼續產生|Continue generating|Continuar generando)$/i.test(
                        label,
                    );
                },
            );
            if (continueButton) {
                continueButton.dataset.kcgContinuation = "true";
                setTimeout(function () {
                    if (
                        gv("k_speakcompletely", false) === true &&
                        continueButton.isConnected
                    ) {
                        continueButton.click();
                    }
                }, 1000);
            }
        }
    };

    const dataSec = function () {
        muob(prompt_selector, $(`body`), (promptTextarea) => {
            // 对每个出现的输入框挂监听（含旧会话隐藏框，无副作用）；扫描时以事件源为准。
            promptTextarea.addEventListener("input", dataSec.listen_input);
            promptTextarea.addEventListener("paste", dataSec.listen_input);
        });
    };

    dataSec.listen_input = function (event) {
        // 粘贴时同步读取剪贴板文本：编辑器若异步完成插入，可用作复查依据。
        const clipboardText =
            event?.type === "paste"
                ? event.clipboardData?.getData("text/plain") || ""
                : "";
        const scanPrompt = function (recheck) {
            const promptTextarea = getPromptTextarea();
            if (!promptTextarea || !promptTextarea.isConnected) return;

            const editorText =
                "value" in promptTextarea
                    ? promptTextarea.value
                    : promptTextarea.innerText || promptTextarea.textContent;
            const result = sanitizeDataSecText(
                editorText,
                gv("k_datasecblocklist", datasec_blocklist_default),
            );
            if (!result.matches.join(`\n`).trim()) {
                // 首次未命中且剪贴板确有敏感数据：延时复查一次，兜住异步插入。
                if (!recheck && clipboardText) {
                    const clipboardResult = sanitizeDataSecText(
                        clipboardText,
                        gv("k_datasecblocklist", datasec_blocklist_default),
                    );
                    if (clipboardResult.matches.join(`\n`).trim()) {
                        setTimeout(function () {
                            scanPrompt(true);
                        }, 400);
                    }
                }
                return;
            }

            setPromptPlainText(promptTextarea, result.text);
            ndialog(
                `⚠️${tl("警告")}`,
                `${tl("发现敏感数据")}`,
                `Thanks`,
                function (t) {},
                `textarea`,
                result.matches.join(`\n`),
            );
        };
        event?.type === "paste" ? setTimeout(scanPrompt, 0) : scanPrompt(false);
    };

    const sanitizeDataSecText = function (
        text,
        rulesText = datasec_blocklist_default,
    ) {
        let result = `${text || ""}`;
        const matches = [];
        `${rulesText || ""}`.split(`\n`).forEach((ruleText) => {
            if (!ruleText) return;
            try {
                const rule = new RegExp(ruleText, "g");
                const found = result.match(rule) || [];
                found.forEach((item) => {
                    if (!matches.includes(item)) matches.push(item);
                });
                result = result.replace(rule, ``);
            } catch (e) {
                if (gv("k_showDebug", false) === true) {
                    console.log(`KeepChatGPT: DATASEC: ERROR: ${e}`);
                }
            }
        });
        return { text: result, matches: matches };
    };

    global.__test__ = Object.assign(global.__test__ || {}, {
        sanitizeDataSecText: sanitizeDataSecText,
    });

    const supportAuthor = function () {
        ndialog(
            `${tl("赞赏鼓励")}`,
            `· 本项目由兴趣驱使，提升自己的体验，并共享世界。
<br>· 如果你喜欢作者的项目，可以给作者一个免费的Star或者Follow。
<br>· 如果你希望作者的小猫吃到更好的罐头，欢迎赞赏与激励。`,
            `更多鼓励方式`,
            function (t) {
                window.open(`${GM_info.script.namespace}#赞赏`, "_blank");
            },
            `img`,
            `https://github.com/xcanwin/KeepChatGPT/raw/main/assets/appreciate_wechat.png`,
        );
    };

    const interceptTracking = function (action) {
        if (action === true) {
            window.addEventListener(
                "beforescriptexecute",
                interceptTracking.listen_beforescriptexecute,
            );
            interceptTracking.startObserver();
        } else {
            window.removeEventListener(
                "beforescriptexecute",
                interceptTracking.listen_beforescriptexecute,
            );
            interceptTracking.stopObserver();
        }
    };

    interceptTracking.observer = null;

    interceptTracking.blockScript = function (scriptElement) {
        if (!scriptElement || scriptElement.tagName !== "SCRIPT") return false;
        if (trackingScriptRegex.test(scriptElement.src || "")) {
            scriptElement.textContent = ``;
            scriptElement.remove();
            return true;
        }
        return false;
    };

    interceptTracking.startObserver = function () {
        if (interceptTracking.observer || !document.documentElement) return;
        interceptTracking.observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === "attributes") {
                    // 先插入、后补 src 的脚本同样要拦截。
                    interceptTracking.blockScript(mutation.target);
                    continue;
                }
                for (const node of mutation.addedNodes) {
                    if (node.nodeType !== 1) continue;
                    if (node.tagName === "SCRIPT") {
                        interceptTracking.blockScript(node);
                    } else if (node.querySelectorAll) {
                        node.querySelectorAll("script").forEach(
                            (scriptElement) =>
                                interceptTracking.blockScript(scriptElement),
                        );
                    }
                }
            }
        });
        interceptTracking.observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["src"],
        });
        $$("script").forEach((scriptElement) =>
            interceptTracking.blockScript(scriptElement),
        );
    };

    interceptTracking.stopObserver = function () {
        if (interceptTracking.observer) {
            interceptTracking.observer.disconnect();
            interceptTracking.observer = null;
        }
    };

    interceptTracking.listen_beforescriptexecute = function (event) {
        const scriptElement = event.target;
        if (interceptTracking.blockScript(scriptElement)) {
            event.preventDefault();
        }
    };

    /*
    寻找元素的父元素
    */
    const fp = function (parentSelector, el, level = 5) {
        if (el === null) {
            return null;
        }
        let parent = el.parentNode;
        let count = 1;
        while (parent && count <= level) {
            if (
                parent &&
                parent.constructor !== HTMLDocument &&
                parent.matches(parentSelector)
            ) {
                return parent;
            }
            parent = parent.parentNode;
            count++;
        }
        return null;
    };

    /*
    fix openai bug
    帮助openai官方修复bug：Alpha语言环境存在bug导致无法发送信息
    */
    const fixOpenaiBUG = function () {
        localStorage.removeItem("oai/apps/locale");
        if (gv("k_lastjob", "") === "") {
            sv("k_lastjob", Date.now().toString() + ",0");
        } else {
            let d, t;
            [d, t] = gv("k_lastjob", "").split(",");
            if (Date.now() - parseInt(d) >= 1000 * 60 * 60 * 24 * 7 && t <= 3) {
                t = parseInt(t) + 1;
                sv("k_lastjob", Date.now().toString() + "," + t);
            }
        }
    };

    /*
    绕过一部分CF机器人校验
    */
    const byebyeCF = () => {
        GM_cookie.delete({
            name: "cf_clearance",
            domain: ".chatgpt.com",
            path: "/",
        });
    };

    const nInterval1Fun = function () {
        byebyeCF();
        if ($(symbol1_selector) || $(symbol2_selector)) {
            if ($(symbol1_selector) && !$("#kcg")) loadKCG();
            setIfr();
            speakCompletely();
            applyKeenObservationAvatar();
        }
    };

    const nInterval2Fun = function () {
        if ($(symbol1_selector) || $(symbol2_selector)) {
            keepChat();
        }
    };

    /*
    基础数据库
    */
    const userInfo = () => {
        const user_info = {
            email: `default`,
            image_url: ``,
        };
        global.st_ec = new IndexedDB(
            `KeepChatGPT_${user_info.email}`,
            "conversations",
        );
        // 新版页面不再内嵌邮箱与头像，改由会话接口读取；读取完成前数据库操作先等待，避免写入错误的库。
        if (typeof fetch === "function") {
            global.st_ec.ready = fetch(u, { credentials: "same-origin" })
                .then((response) => response.json())
                .then((session) => {
                    const user = session?.user || {};
                    user_info.email = user.email || user_info.email;
                    user_info.image_url =
                        user.image || user.picture || user_info.image_url;
                    global.st_ec.dbName = `KeepChatGPT_${user_info.email}`;
                })
                .catch((e) => {
                    console.log(`KeepChatGPT: USERINFO: ERROR: ${e}`);
                });
        }
        return user_info;
    };

    // 明察秋毫头像：优先会话接口返回的头像，其次取侧边栏账号按钮里的头像。
    const applyKeenObservationAvatar = function () {
        const imageUrl =
            user_info.image_url ||
            $('[data-sidebar-navigation-root] button[aria-haspopup="menu"] img')
                ?.src ||
            ``;
        if (global.keenObservationAvatar === imageUrl) return;
        global.keenObservationAvatar = imageUrl;
        document.documentElement.style.setProperty(
            "--keenobservation-user-image-url",
            imageUrl ? `url('${imageUrl}')` : `none`,
        );
    };

    /*
    拦截持久存储弹窗
    */
    const blockStorageDialog = () => {
        if (navigator.storage && navigator.storage.persist) {
            navigator.storage.persist = () => Promise.resolve(false);
        }
    };

    const user_info = userInfo();
    bootstrapDomStable();

    let kcgBooted = false;
    let kcgBootTimer = null;
    let kcgBootstrapObserver = null;
    let nInterval1 = null;
    let nInterval2 = null;
    let interval2Time = parseInt(gv("k_interval", 50));
    if (!Number.isFinite(interval2Time) || interval2Time < 10) {
        interval2Time = 50;
    }
    const kcgBootstrapQuietTime = 600;

    const bootKCG = function () {
        if (kcgBooted) return;
        if (!$(symbol1_selector)) return;

        kcgBooted = true;
        if (kcgBootTimer) {
            clearTimeout(kcgBootTimer);
            kcgBootTimer = null;
        }
        if (kcgBootstrapObserver) {
            kcgBootstrapObserver.disconnect();
            kcgBootstrapObserver = null;
        }

        loadKCG();
        setIfr();

        if (!nInterval1) {
            nInterval1 = setInterval(nInterval1Fun, 1000);
        }
        if (!nInterval2) {
            nInterval2 = setInterval(nInterval2Fun, 1000 * interval2Time);
        }
    };

    const scheduleKcgBootstrap = function () {
        if (kcgBooted) return;

        onDomStable(() => {
            if (kcgBooted) return;
            if (!$(symbol1_selector)) return;

            if (kcgBootTimer) {
                clearTimeout(kcgBootTimer);
            }

            // Wait for a short DOM-quiet window instead of using a fixed startup delay.
            kcgBootTimer = setTimeout(bootKCG, kcgBootstrapQuietTime);
        });
    };

    kcgBootstrapObserver = new MutationObserver(() => {
        scheduleKcgBootstrap();
    });
    kcgBootstrapObserver.observe(document.body, {
        childList: true,
        subtree: true,
    });

    scheduleKcgBootstrap();

    blockStorageDialog();
    hookFetch();
    hookXHR();
    //fixOpenaiBUG();
    dataSec();
})();
