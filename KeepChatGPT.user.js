// ==UserScript==
// @name              KeepChatGPT
// @description       这是一款提高ChatGPT的数据安全能力和效率的插件。并且免费共享大量创新功能，如：自动刷新、保持活跃、数据安全、取消审计、克隆对话、言无不尽、净化页面、展示大屏、展示全屏、拦截跟踪、日新月异等。让我们的AI体验无比安全、顺畅、丝滑、高效、简洁。
// @version           22.2
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
// @description:zh-CN 这是一款提高ChatGPT的数据安全能力和效率的插件。并且免费共享大量创新功能，如：自动刷新、保持活跃、数据安全、取消审计、克隆对话、言无不尽、净化页面、展示大屏、展示全屏、拦截跟踪、日新月异等。让我们的AI体验无比安全、顺畅、丝滑、高效、简洁。
// @description:zh-TW 這是一個增強ChatGPT數據安全能力和效率的插件。並且免費共享各種創新功能，如：自動刷新、活動持久、數據安全、取消審計、會話克隆、無限對話、主頁整理、大屏幕展示、全屏展示、追踪攔截、持續更新等。讓我們體驗智能、安全、無縫、高效、簡潔的AI。
// @icon              data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPCEtLSBDcmVhdGVkIHdpdGggTWV0aG9kIERyYXcgLSBodHRwOi8vZ2l0aHViLmNvbS9kdW9waXhlbC9NZXRob2QtRHJhdy8gLS0+CiA8Zz4KICA8dGl0bGU+YmFja2dyb3VuZDwvdGl0bGU+CiAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjQ3IiB3aWR0aD0iNDciIHk9Ii0xIiB4PSItMSIvPgogIDxnIGRpc3BsYXk9Im5vbmUiIG92ZXJmbG93PSJ2aXNpYmxlIiB5PSIwIiB4PSIwIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiBpZD0iY2FudmFzR3JpZCI+CiAgIDxyZWN0IGZpbGw9InVybCgjZ3JpZHBhdHRlcm4pIiBzdHJva2Utd2lkdGg9IjAiIHk9IjAiIHg9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiLz4KICA8L2c+CiA8L2c+CiA8Zz4KICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgPGltYWdlIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzBBQUFBdENBTUFBQUFOeEJLb0FBQUFObEJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0FnSUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCTHIweWtBQUFBRVhSU1RsTUFJdmZqMXFNNGxHZUN6YnhJZHhXd1ZFcUlTSmdBQUFFdlNVUkJWRWpIemRUYmJvVWdFSVhobVFGQkRoN1crNzlzRWNNR2JOR20yVTM3M2ZySHhHVXlWRVNQRVIvcFlzR2RoVG9NUVBUWEJBQlR5d0dLNld1c3JpKzN3RVFqRTJEL29MWlRaUjlyUVNWdnJ1ZFdyZi9wZ2pNZ094ZDA0R0lYWUtiV0trZ2tnemdpY29KS3JkU0pnb1lsaXpZMmRNSFc2NU1Db0k5R243eGx1ckhoc05FM1RXZ21lbWJieVo1RmVpTysxN2RCY0VkQzIzczg4WmRyb201MEY4VUF3alRHQXBpdVhtbHNiZXZuZC8rd1RtZUR1ZFRHMlptcTJUcFRhdVpVRWdCVGFvZEVjNzJXaVN1MUFkRFdPekpOSjQxc0g5UWJFQllCek90amxnQnNnem9BOW5nUWN4MEJZUXVFUWIwZ2s3V01uQzF0N1p4N2JlSnhtT3ZWU1B4cmsxVDJlenV2UXFRaUJ1Vnp3TC80TCtsVGJYak1kRFVEa0JHY3VMODM5eVpxT0syR3RGYmFVZllCQzNzbUVVWHJITThBQUFBQVNVVk9SSzVDWUlJPSIgaWQ9InN2Z18xIiBoZWlnaHQ9IjQ1IiB3aWR0aD0iNDUiIHk9IjAiIHg9IjAiLz4KIDwvZz4KPC9zdmc+
// @license           GPL-2.0-only
// @match             *://chat.openai.com
// @match             *://chat.openai.com/*
// @connect           raw.githubusercontent.com
// @connect           greasyfork.org
// @connect           chat.openai.com
// @grant             GM_addStyle
// @grant             GM_addElement
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_xmlhttpRequest
// @grant             unsafeWindow
// @run-at            document-body
// @noframes
// @downloadURL https://update.greasyfork.org/scripts/462804/KeepChatGPT.user.js
// @updateURL https://update.greasyfork.org/scripts/462804/KeepChatGPT.meta.js
// ==/UserScript==


(function() {
    'use strict';

    var global = {};

    const $ = (Selector, el) => (el || document).querySelector(Selector);
    const $$ = (Selector, el) => (el || document).querySelectorAll(Selector);

    const u = `/api/${GM_info.script.namespace.slice(33, 34)}uth/s${GM_info.script.namespace.slice(28, 29)}ssion`;
    const symbol1_selector = 'nav.flex .mb-1,.pr-2';
    const symbol2_selector = 'button.justify-center .sr-only';

    const datasec_blocklist_default = "18888888888\nhttps://公司域名.com\n银行卡号\n([\\w-]+(\\.[\\w-]+)*)@163\.com\n";

    const getLang = function() {
        let lang = `
{
    "index": {"暗色主题": "dm", "显示调试": "sd", "取消审计": "cm", "取消动画": "ca", "关于": "ab", "建议间隔50秒": "si", "调整间隔": "mi", "检查更新": "cu", "当前版本": "cv", "发现最新版": "dl", "已是最新版": "lv", "克隆对话": "cc", "净化页面": "pp", "展示大屏": "ls", "展示全屏": "fs", "言无不尽": "sc", "拦截跟踪": "it", "日新月异": "ec", "赞赏鼓励": "ap", "警告": "wn", "数据安全": "ds", "发现敏感数据": "dd", "使用正则编写规则": "rr"},
    "local": {
"ar": {"dm": "الوضع الداكن", "sd": "إظهار التصحيح", "cm": "إلغاء التدقيق", "ca": "إلغاء الرسوم المتحركة", "ab": "حول", "si": "اقتراح فاصل زمني 50 ثانية", "mi": "تعديل الفاصل", "cu": "التحقق من التحديثات", "cv": "الإصدار الحالي", "dl": "اكتشف أحدث إصدار", "lv": "أحدث إصدار", "cc": "استنساخ المحادثة", "pp": "تنقية الصفحة", "ls": "عرض الشاشة الكبيرة", "fs": "عرض بملء الشاشة", "sc": "تحدث بشكل كامل", "it": "اعتراض التتبع", "ec": "التغير المستمر", "ap": "تقدير", "wn": "تحذير", "ds": "أمان البيانات", "dd": "اكتشف البيانات الحساسة", "rr": "استخدم الريجكس لكتابة القواعد"},
"bg": {"dm": "Тъмна тема", "sd": "Показване на отстраняване на грешки", "cm": "Отказ от одит", "ca": "Отмяна на анимацията", "ab": "За", "si": "Предложете интервал от 50 секунди", "mi": "Промяна на интервала", "cu": "Проверка на актуализации", "cc": "Клониране на разговора", "pp": "Почистване на страницата", "ls": "Показване на голям екран", "fs": "Показване на цял екран", "sc": "Говорете пълно", "it": "Прихващане на проследяването", "ec": "Непрекъснато променящ се", "ap": "Оценка", "wn": "Предупреждение", "ds": "Сигурност на данните", "dd": "Откриване на чувствителни данни", "rr": "Използвайте регулярни изрази за съставяне на правила"},
"cs": {"dm": "Tmavý režim", "sd": "Zobrazit ladění", "cm": "Zrušení auditu", "ca": "Zrušit animaci", "ab": "O", "si": "Navrhnout interval 50 sekund", "mi": "Upravit interval", "cu": "Kontrola aktualizací", "cc": "Klonovat konverzaci", "pp": "Očistit stránku", "ls": "Zobrazení velkého displeje", "fs": "Zobrazit na celou obrazovku", "sc": "Mluvte úplně", "it": "Zachytávání sledování", "ec": "Neustále se měnící", "ap": "Ocenění", "wn": "Varování", "ds": "Bezpečnost dat", "dd": "Detekce citlivých dat", "rr": "Použijte regulární výrazy pro psaní pravidel"},
"da": {"dm": "Mørk tilstand", "sd": "Vis fejlfinding", "cm": "Annuller revision", "ca": "Annuller animation", "ab": "Om", "si": "Forslag interval på 50 sekunder", "mi": "Ændre interval", "cu": "Tjek for opdateringer", "cc": "Klon samtalen", "pp": "Rensning af siden", "ls": "Vis stor skærm", "fs": "Vis i fuld skærm", "sc": "Fuldfør udtalelsen", "it": "Interceptor sporing", "ec": "Konstant forandring", "ap": "Værdssættelse", "wn": "Advarsel", "ds": "Datasikkerhed", "dd": "Opdage følsomme data", "rr": "Brug regex til at skrive regler"},
"de": {"dm": "Dunkler Modus", "sd": "Fehlerbehebung anzeigen", "cm": "Prüfung abbrechen", "ca": "Animation abbrechen", "ab": "Über", "si": "Vorschlag für Intervall von 50 Sekunden", "mi": "Intervall bearbeiten", "cu": "Überprüfung auf Updates", "cv": "Aktuelle Version", "dl": "Entdecken Sie die neueste Version", "lv": "ist die neueste Version", "cc": "Konversation klonen", "pp": "Seite bereinigen", "ls": "Großen Bildschirm anzeigen", "fs": "Vollbild anzeigen", "sc": "Sprich vollständig", "it": "Tracking abfangen", "ec": "Ständiger Wandel", "ap": "Wertschätzung", "wn": "Warnung", "ds": "Datensicherheit", "dd": "Entdeckung sensibler Daten", "rr": "Verwenden Sie Regex, um Regeln zu schreiben"},
"el": {"dm": "Σκοτεινή θεματολογία", "sd": "Εμφάνιση αποσφαλμάτωσης", "cm": "Ακύρωση ελέγχου", "ca": "Ακύρωση κινούμενων σχεδίων", "ab": "Σχετικά με", "si": "Προτείνετε διάστημα 50 δευτερολέπτων", "mi": "Τροποποίηση διαστήματος", "cu": "Έλεγχος ενημερώσεων", "cc": "Κλωνοποίηση συνομιλίας", "pp": "Καθαρισμός σελίδας", "ls": "Εμφάνιση μεγάλης οθόνης", "fs": "Εμφάνιση πλήρους οθόνης", "sc": "Ολοκλήρωσε την ομιλία", "it": "Ανίχνευση παρακολούθησης", "ec": "Αδιάκοπη αλλαγή", "ap": "Εκτίμηση", "wn": "Προειδοποίηση", "ds": "Ασφάλεια δεδομένων", "dd": "Ανακάλυψη ευαίσθητων δεδομένων", "rr": "Χρησιμοποιήστε regex για να γράψετε κανόνες"},
"en": {"dm": "Dark mode", "sd": "Show debugging", "cm": "Cancel audit", "ca": "Cancel animation", "ab": "About", "si": "Suggest interval of 50 seconds; The author usually sets 900", "mi": "Modify interval", "cu": "Check for updates", "cv": "Current version", "dl": "Discover the latest version", "lv": "is the latest version", "cc": "Conversation cloning", "pp": "Purified page", "ls": "Wide display mode", "fs": "Fullscreen mode", "sc": "Complete response", "it": "Intercept tracking", "ec": "More chat info", "ap": "Sponsor", "wn": "Warning", "ds": "Data security", "dd": "Discover sensitive data", "rr": "Use regex to write rules"},
"eo": {"dm": "Malhela moduso", "sd": "Montri depuradon", "cm": "Nuligi kontroli", "ca": "Nuligi animacion", "ab": "Pri", "si": "Sugesti intervalon de 50 sekundoj", "mi": "Modifi intervalon", "cu": "Kontroli ĝisdatigojn", "cc": "Kloni konversacion", "pp": "Pura paĝo", "ls": "Montri grandan ekrane", "fs": "Montri plenekranon", "sc": "Parolu plene", "it": "Intercepti Trakadon", "ec": "Ĉiam ŝanĝiĝanta", "ap": "Aprobo", "wn": "Averto", "ds": "Datensekureco", "dd": "Malkovru sensitivajn datumojn", "rr": "Uzu regulajn esprimojn por skribi regulojn"},
"es": {"dm": "Modo oscuro", "sd": "Mostrar depuración", "cm": "Cancelar auditoría", "ca": "Cancelar animación", "ab": "Acerca de", "si": "Sugerir un intervalo de 50 segundos", "mi": "Modificar intervalo", "cu": "Comprobar actualizaciones", "cv": "Versión actual", "dl": "Descubre la última versión", "lv": "es la última versión", "cc": "Clonar conversación", "pp": "Purificar página", "ls": "Mostrar pantalla grande", "fs": "Mostrar pantalla completa", "sc": "Termina tu discurso", "it": "Interceptar Rastreo", "ec": "Cambio constante", "ap": "Apreciación", "wn": "Advertencia", "ds": "Seguridad de datos", "dd": "Descubrir datos sensibles", "rr": "Usa regex para escribir reglas"},
"fi": {"dm": "Tumma tila", "sd": "Näytä virheenkorjaus", "cm": "Peruuta tarkistus", "ca": "Peruuta animaatio", "ab": "Tietoa", "si": "Ehdota 50 sekunnin väliaikaa", "mi": "Muokkaa väliä", "cu": "Tarkista päivitykset", "cc": "Kloonaa keskustelu", "pp": "Puhdista sivu", "ls": "Näytä suuri näyttö", "fs": "Näytä koko näyttö", "sc": "Puhu loppuun asti", "it": "Sieppaa seuranta", "ec": "Jatkuvasti muuttuva", "ap": "Arvostus", "wn": "Varoitus", "ds": "Tietoturva", "dd": "Löytää arkaluonteista dataa", "rr": "Käytä regexiä sääntöjen kirjoittamiseen"},
"fr": {"dm": "Mode sombre", "sd": "Afficher le débogage", "cm": "Annuler l'audit", "ca": "Annuler l'animation", "ab": "À propos de", "si": "Suggérer un intervalle de 50 secondes", "mi": "Modifier l'intervalle", "cu": "Vérifier les mises à jour", "cv": "Version actuelle", "dl": "Découvrir la dernière version", "lv": "est la dernière version", "cc": "Cloner la conversation", "pp": "Purifier la page", "ls": "Afficher grand écran", "fs": "Afficher en plein écran", "sc": "Parlez complètement", "it": "Interception de suivi", "ec": "En perpétuelle évolution", "ap": "Appréciation", "wn": "Avertissement", "ds": "Sécurité des données", "dd": "Découvrir des données sensibles", "rr": "Utilisez des regex pour écrire des règles"},
"fr-CA": {"dm": "Mode nuit", "sd": "Afficher le débogage", "cm": "Annuler la vérification", "ca": "Annuler l'animation", "ab": "À propos de", "si": "Suggérer un intervalle de 50 secondes", "mi": "Modifier l'intervalle", "cu": "Vérifier les mises à jour", "cv": "Version actuelle", "dl": "Découvrir la dernière version", "lv": "est la dernière version", "cc": "Cloner la conversation", "pp": "Purifier la page", "ls": "Afficher grand écran", "fs": "Afficher en plein écran", "sc": "Parlez complètement", "it": "Intercepter le suivi", "ec": "Évolution constante", "ap": "Appréciation", "wn": "Avertissement", "ds": "Sécurité des données", "dd": "Découvrir des données sensibles", "rr": "Utilisez des regex pour écrire des règles"},
"he": {"dm": "מצב כהה", "sd": "הצגת התיקון", "cm": "ביטול ביקורת", "ca": "בטל אנימציה", "ab": "אודות", "si": "הצע מרווח של 50 שניות", "mi": "שינוי מרווח", "cu": "בדיקת עדכונים", "cc": "שכפול שיחה", "pp": "טיהור הדף", "ls": "תצוגת מסך גדול", "fs": "הצג מסך מלא", "sc": "דבר במלואו", "it": "התערבות במעקב", "ec": "שינוי מתמיד", "ap": "הערכה", "wn": "אזהרה", "ds": "אבטחת מידע", "dd": "גילוי נתונים רגישים", "rr": "השתמש בביטויים רגולריים לכתיבת כללים"},
"hu": {"dm": "Sötét mód", "sd": "Hibakeresés mutatása", "cm": "Ellenőrzés megszüntetése", "ca": "Animáció törlése", "ab": "Rólunk", "si": "Javaslat 50 másodperces időközre", "mi": "Időköz módosítása", "cu": "Frissítések keresése", "cc": "Beszélgetés klónozása", "pp": "Oldal tisztítása", "ls": "Nagy képernyő megjelenítése", "fs": "Teljes képernyő megjelenítése", "sc": "Beszélj teljesen", "it": "Követés elfogása", "ec": "Folyamatos változás", "ap": "Elismerés", "wn": "Figyelmeztetés", "ds": "Adatbiztonság", "dd": "Érzékeny adatok felfedezése", "rr": "Használja a regex-et a szabályok írásához"},
"id": {"dm": "Mode gelap", "sd": "Tampilkan debugging", "cm": "Batalkan audit", "ca": "Batalkan animasi", "ab": "Tentang", "si": "Sarankan interval 50 detik", "mi": "Modifikasi interval", "cu": "Periksa Pembaruan", "cc": "Klon percakapan", "pp": "Membersihkan halaman", "ls": "Tampilkan layar besar", "fs": "Tampilkan layar penuh", "sc": "Berbicara secara lengkap", "it": "Intersepsi Pelacakan", "ec": "Perubahan terus-menerus", "ap": "Penghargaan", "wn": "Peringatan", "ds": "Keamanan data", "dd": "Temukan data sensitif", "rr": "Gunakan regex untuk menulis aturan"},
"it": {"dm": "Modalità scura", "sd": "Mostra debug", "cm": "Annulla verifica", "ca": "Annulla animazione", "ab": "Riguardo a", "si": "Suggerisci un intervallo di 50 secondi", "mi": "Modifica intervallo", "cu": "Verifica aggiornamenti", "cv": "Versione attuale", "dl": "Scopri l'ultima versione", "lv": "è l'ultima versione", "cc": "Clona conversazione", "pp": "Purifica pagina", "ls": "Mostra grande schermo", "fs": "Mostra a schermo intero", "sc": "Parla completamente", "it": "Intercettare il tracciamento", "ec": "Cambiamento costante", "ap": "Apprezzamento", "wn": "Avvertimento", "ds": "Sicurezza dei dati", "dd": "Scoprire dati sensibili", "rr": "Usa regex per scrivere regole"},
"ja": {"dm": "ダークモード", "sd": "デバッグを表示", "cm": "監査をキャンセル", "ca": "アニメーションのキャンセル", "ab": "について", "si": "50秒間隔を提案する", "mi": "間隔を変更する", "cu": "更新をチェックする", "cv": "現在のバージョン", "dl": "最新バージョンを発見する", "lv": "最新バージョンです", "cc": "会話をクローンする", "pp": "ページを浄化する", "ls": "ビッグスクリーンを表示する", "fs": "フルスクリーン表示", "sc": "完全に話してください", "it": "トラッキングの傍受", "ec": "絶え間ない変化", "ap": "評価", "wn": "警告", "ds": "データセキュリティ", "dd": "機密データを発見する", "rr": "正規表現を使用してルールを書く"},
"ka": {"dm": "ბნელი რეჟიმი", "sd": "გამოჩენა დებაგი", "cm": "ანულირება აუდიტი", "ca": "ანიმაციის გაუქმება", "ab": "შესახებ", "si": "50 წამის ინტერვალის შეტანა", "mi": "ინტერვალის შეცვლა", "cu": "განახლებების შემოწმება", "cc": "კონვერსაციის კლონირება", "pp": "გვერდის გაწმენდა", "ls": "დიდი ეკრანის გამოსახულება", "fs": "მთელი ეკრანის ჩვენება", "sc": "სრულად ილაპარაკეთ", "it": "თვალყური მისმართავა", "ec": "მუდმივი ცვლილება", "ap": "შეფასება", "wn": "გაფრთხილება", "ds": "მონაცემთა უსაფრთხოება", "dd": "საკითხავი მონაცემების გამოცნობა", "rr": "გამოიყენეთ regex წესების დაწერად"},
"ko": {"dm": "다크 모드", "sd": "디버깅 표시", "cm": "감사 취소", "ca": "애니메이션 취소", "ab": "관하여", "si": "50초 간격 건의", "mi": "간격 수정", "cu": "업데이트 확인", "cv": "현재 버전", "dl": "최신 버전 찾기", "lv": "최신 버전입니다.", "cc": "대화 복제", "pp": "페이지 정화", "ls": "큰 화면 표시", "fs": "전체 화면 표시", "sc": "완전히 말하세요", "it": "추적 가로채기", "ec": "끊임없는 변화", "ap": "감사", "wn": "경고", "ds": "데이터 보안", "dd": "민감한 데이터 발견", "rr": "정규 표현식을 사용하여 규칙 작성"},
"nb": {"dm": "Mørk modus", "sd": "Vis feilsøking", "cm": "Avbryt revisjonen", "ca": "Avbryt animasjon", "ab": "Om", "si": "Forslag om et intervall på 50 sekunder", "mi": "Endre intervall", "cu": "Sjekk etter oppdateringer", "cc": "Klon samtalen", "pp": "Rens side", "ls": "Vis stor skjerm", "fs": "Vis i fullskjerm", "sc": "Snakk fullstendig", "it": "Intercept sporing", "ec": "Kontinuerlig endring", "ap": "Verdsatt", "wn": "Advarsel", "ds": "Datasikkerhet", "dd": "Oppdage sensitiv data", "rr": "Bruk regex for å skrive regler"},
"nl": {"dm": "Donkere modus", "sd": "Foutopsporing weergeven", "cm": "Controle annuleren", "ca": "Animatie annuleren", "ab": "Over", "si": "Stel een interval van 50 seconden voor", "mi": "Interval wijzigen", "cu": "Controleren op updates", "cc": "Gesprek klonen", "pp": "Pagina zuiveren", "ls": "Groot scherm weergeven", "fs": "Volledig scherm weergeven", "sc": "Spreek volledig uit", "it": "Onderscheppen van tracking", "ec": "Voortdurende verandering", "ap": "Waardering", "wn": "Waarschuwing", "ds": "Gegevensbeveiliging", "dd": "Gevoelige gegevens ontdekken", "rr": "Gebruik regex om regels te schrijven"},
"pl": {"dm": "Tryb ciemny", "sd": "Pokaż debugowanie", "cm": "Anuluj audyt", "ca": "Anuluj animację", "ab": "O", "si": "Zasugeruj interwał 50 sekund", "mi": "Zmień interwał", "cu": "Sprawdź aktualizacje", "cc": "Klonuj rozmowę", "pp": "Oczyść stronę", "ls": "Wyświetl duży ekran", "fs": "Wyświetl pełny ekran", "sc": "Mów całkowicie", "it": "Przechwytywanie śledzenia", "ec": "Ciągłe zmiany", "ap": "Docenienie", "wn": "Ostrzeżenie", "ds": "Bezpieczeństwo danych", "dd": "Wykrywanie wrażliwych danych", "rr": "Użyj regex do pisania reguł"},
"pt-BR": {"dm": "Modo escuro", "sd": "Mostrar depuração", "cm": "Cancelar auditoria", "ca": "Cancelar animação", "ab": "Sobre", "si": "Sugira um intervalo de 50 segundos", "mi": "Modificar intervalo", "cu": "Verificar atualizações", "cc": "Clonar conversa", "pp": "Purificar página", "ls": "Exibir tela grande", "fs": "Exibir em tela cheia", "sc": "Fale completamente", "it": "Interceptar Rastreamento", "ec": "Mudança constante", "ap": "Apreciação", "wn": "Aviso", "ds": "Segurança de dados", "dd": "Descobrir dados sensíveis", "rr": "Use regex para escrever regras"},
"ro": {"dm": "Mod întunecat", "sd": "Afișare depanare", "cm": "Anulare audit", "ca": "Anulare animație", "ab": "Despre", "si": "Sugerați un interval de 50 secunde", "mi": "Modificați intervalul", "cu": "Verifică actualizări", "cc": "Clonează conversația", "pp": "Purificare pagină", "ls": "Afișare ecran mare", "fs": "Afișare pe tot ecranul", "sc": "Vorbiți complet", "it": "Interceptarea urmăririi", "ec": "Schimbare continuă", "ap": "Apreciere", "wn": "Avertizare", "ds": "Securitatea datelor", "dd": "Descoperirea datelor sensibile", "rr": "Folosiți regex pentru a scrie reguli"},
"ru": {"dm": "Темный режим", "sd": "Показать отладку", "cm": "Отменить аудит", "ca": "Отменить анимацию", "ab": "О", "si": "Предложить интервал в 50 секунд", "mi": "Изменить интервал", "cu": "Проверить обновления", "cc": "Клонировать диалог", "pp": "Очистить страницу", "ls": "Показать большой экран", "fs": "Показать на полный экран", "sc": "Говорите полностью", "it": "Перехват отслеживания", "ec": "Постоянное изменение", "ap": "Признательность", "wn": "Предупреждение", "ds": "Безопасность данных", "dd": "Обнаружение конфиденциальных данных", "rr": "Используйте регулярные выражения для написания правил"},
"sk": {"dm": "Tmavý režim", "sd": "Zobraziť ladenie", "cm": "Zrušiť audit", "ca": "Zrušiť animáciu", "ab": "O", "si": "Navrhnúť interval 50 sekúnd", "mi": "Zmena intervalu", "cu": "Kontrola aktualizácií", "cc": "Klonovať konverzáciu", "pp": "Očistiť stránku", "ls": "Zobraziť veľkú obrazovku", "fs": "Zobraziť na celú obrazovku", "sc": "Hovorte úplne", "it": "Zachytenie sledovania", "ec": "Neustále sa meniace", "ap": "Ocenenie", "wn": "Varovanie", "ds": "Bezpečnosť údajov", "dd": "Objavenie citlivých dát", "rr": "Použite regex na písanie pravidiel"},
"sr": {"dm": "Тамни режим", "sd": "Прикажи отклањање грешака", "cm": "Откажи ревизију", "ca": "Откажи анимацију", "ab": "О", "si": "Predložiti interval od 50 sekundi", "mi": "Измена интервала", "cu": "Provera ažuriranja", "cc": "Клонирај разговор", "pp": "Прочисти страницу", "ls": "Прикажи велики екран", "fs": "Прикажи на целом екрану", "sc": "Говорите у потпуности", "it": "Пресретање праћења", "ec": "Непрестана промена", "ap": "Поштовање", "wn": "Упозорење", "ds": "Сигурност података", "dd": "Откривање осетљивих података", "rr": "Користите регуларне изразе за писање правила"},
"sv": {"dm": "Mörkt läge", "sd": "Visa felsökning", "cm": "Avbryt revision", "ca": "Avbryt animation", "ab": "Om", "si": "Föreslå intervall på 50 sekunder", "mi": "Ändra intervall", "cu": "Kontrollera uppdateringar", "cc": "Klonar samtal", "pp": "Rensa sidan", "ls": "Visa stor skärm", "fs": "Visa i helskärm", "sc": "Tala helt klart", "it": "Interceptera spårning", "ec": "Ständig förändring", "ap": "Uppskattning", "wn": "Varning", "ds": "Datasäkerhet", "dd": "Upptäcka känslig data", "rr": "Använd regex för att skriva regler"},
"th": {"dm": "โหมดมืด", "sd": "แสดงการแก้ไขข้อผิดพลาด", "cm": "ยกเลิกการตรวจสอบ", "ca": "ยกเลิกการเคลื่อนไหว", "ab": "เกี่ยวกับ", "si": "เสนอช่วงเวลา 50 วินาที", "mi": "แก้ไขระยะห่าง", "cu": "ตรวจสอบการอัปเดต", "cc": "โคลนสนทนา", "pp": "ทำความสะอาดหน้า", "ls": "แสดงหน้าจอใหญ่", "fs": "แสดงแบบเต็มหน้าจอ", "sc": "พูดคุยให้เสร็จสิ้น", "it": "การดักจับการติดตาม", "ec": "การเปลี่ยนแปลงตลอดเวลา", "ap": "การประเมินค่า", "wn": "คำเตือน", "ds": "ความปลอดภัยของข้อมูล", "dd": "ค้นพบข้อมูลที่ละเอียดอ่อน", "rr": "ใช้ regex เพื่อเขียนกฎ"},
"tr": {"dm": "Karanlık mod", "sd": "Hata ayıklama göster", "cm": "Denetimi İptal Et", "ca": "Animasyonu iptal et", "ab": "Hakkında", "si": "50 saniyelik aralık önerin", "mi": "Aralığı değiştir", "cu": "Güncelleştirmeleri kontrol et", "cc": "Sohbeti kopyala", "pp": "Sayfayı temizle", "ls": "Büyük ekranı görüntüle", "fs": "Tam ekran görüntüle", "sc": "Tamamlayın konuşmayı", "it": "İzlemeyi Engellemek", "ec": "Sürekli değişim", "ap": "Takdir", "wn": "Uyarı", "ds": "Veri güvenliği", "dd": "Hassas verileri keşfetmek", "rr": "Kuralları yazmak için regex kullanın"},
"uk": {"dm": "Темний режим", "sd": "Показати налагодження", "cm": "Скасувати аудит", "ca": "Скасувати анімацію", "ab": "Про", "si": "Запропонуйте інтервал у 50 секунд", "mi": "Змінити інтервал", "cu": "Перевірити оновлення", "cc": "Клонувати діалог", "pp": "Очистити сторінку", "ls": "Відобразити великий екран", "fs": "Показати на повний екран", "sc": "Говоріть повністю", "it": "Перехоплення відстеження", "ec": "Постійна зміна", "ap": "Вдячність", "wn": "Попередження", "ds": "Безпека даних", "dd": "Виявлення конфіденційних даних", "rr": "Використовуйте регулярні вирази для написання правил"},
"ug": {"dm": "تېما كۆرسىتىش", "sd": "كۆرسەتكەن يۇقىرىلاش", "cm": "ئەمەلدىن قالدۇرۇش", "ca": "ئېنىماتىكىنى بىكار قىلىش", "ab": "ئۇچۇرلىق", "si": "50 سىكونتلىك ئارىلىقنى سۇنۇشتۇرۇش", "mi": "ئارىلىق ئۆزگەرتىش", "cu": "يېڭىلانما كۆزەت", "cc": "كۆپچەي ئىككىلىش", "pp": "چۈشۈرۈش بەت", "ls": "كۆرسىتىش چوڭ ئېكران", "fs": "تولانما پۈتۈن ئېكران", "sc": "تاماملا سۆزلىشىڭىز", "it": "قولايلىنىش تىزىتكۈن", "ec": "تەڭشەك ئىستىقامەت", "ap": "قىلىش", "wn": "ئاگاھلاندۇرۇش", "ds": "مەلۇمات بىخەتەرلىكى", "dd": "سىزىقلىق مەلۇماتنى تاپشۇرۇش", "rr": "قائىدىلەرنى يېزىش ئۈچۈن regex نى ئىشلىتىڭ"},
"vi": {"dm": "Chế độ tối", "sd": "Hiển thị gỡ lỗi", "cm": "Hủy đánh giá", "ca": "Hủy hoạt hình", "ab": "Về", "si": "Đề xuất khoảng thời gian 50 giây", "mi": "Sửa khoảng cách", "cu": "Kiểm tra cập nhật", "cc": "Sao chép cuộc trò chuyện", "pp": "Làm sạch trang", "ls": "Hiển thị màn hình lớn", "fs": "Hiển thị toàn màn hình", "sc": "Nói đầy đủ", "it": "Chặn Theo Dõi", "ec": "Luôn thay đổi", "ap": "Đánh giá", "wn": "Cảnh báo", "ds": "Bảo mật dữ liệu", "dd": "Phát hiện dữ liệu nhạy cảm", "rr": "Sử dụng regex để viết quy tắc"},
"zh-CN": {"dm": "暗色主题", "sd": "显示调试", "cm": "取消审计", "ca": "取消动画", "ab": "关于", "si": "建议间隔50秒以上，作者平时设置的是900秒", "mi": "调整间隔", "cu": "检查更新", "cc": "克隆对话", "pp": "净化页面", "ls": "展示大屏", "fs": "展示全屏", "sc": "言无不尽", "it": "拦截跟踪", "ec": "日新月异", "ap": "赞赏鼓励", "wn": "警告", "ds": "数据安全", "dd": "你输入的内容里存在以下敏感数据，已为你自动化脱敏", "rr": "本功能会将聊天输入框里的敏感信息进行脱敏和警告<br>请根据正则表达式语法编写数据安全规则，不同的规则用换行间隔"},
"zh-TW": {"dm": "暗黑模式", "sd": "顯示調試", "cm": "取消稽核", "ca": "取消動畫", "ab": "關於", "si": "建議間隔50秒，作者平時設置的是900秒", "mi": "調整間隔", "cu": "檢查更新", "cc": "複製對話", "pp": "淨化頁面", "ls": "顯示大螢幕", "fs": "顯示全螢幕", "sc": "言無不盡", "it": "拦截追踪", "ec": "日新月異", "ap": "讚賞鼓勵", "wn": "警告", "ds": "資料安全", "dd": "發現敏感數據", "rr": "使用正則表達式撰寫規則"}
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
            $("main").firstElementChild.lastElementChild.appendChild(nIfr);
        } else{
            if (u) {
                $("#xcanwin").src = u;
            }
        }
    };

    const keepChat = function() {
        GM_xmlhttpRequest({
            method: "GET",
            url: u,
            headers: {
                "Content-Type": "application/json"
            },
            onload: function(response) {
                const data = response.responseText;
                try {
                    if (response.responseHeaders.match(/content-type:\s*application\/json/i) && response.status !== 403 && data.indexOf(`"expires":"`) > -1) {
                        console.log(`KeepChatGPT: FETCH: Expire date: ${formatDate(JSON.parse(data).expires)}`);
                        //$("#xcanwin").contentWindow.document.documentElement.innerHTML = formatJson(data);
                    } else {
                        setIfr(u);
                    }
                } catch (e) {
                    console.log(`KeepChatGPT: FETCH: ERROR: ${e},\nERROR RESPONSE:\n${data}`);
                    setIfr(u);
                }
            }
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
        ndivalert.innerHTML = `
<div class="fixed inset-0 bg-black/50 dark:bg-gray-600/70">
  <div class="grid-cols-[10px_1fr_10px] grid h-full w-full grid-rows-[minmax(10px,_1fr)_auto_minmax(10px,_1fr)] md:grid-rows-[minmax(20px,_1fr)_auto_minmax(20px,_1fr)] overflow-y-auto">
    <div class="relative col-auto col-start-2 row-auto row-start-2 w-full rounded-xl text-left shadow-xl transition-all left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 max-w-lg xl:max-w-xl">
      <div class="px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-black/10 dark:border-white/10">
        <h2 class="text-lg leading-6 text-gray-900 dark:text-gray-200">${title}</h2>
      </div>
      <div class="p-4 sm:p-6">
        <p class="text-muted pb-3 pt-2 text-sm text-gray-600 dark:text-white">${content}</p>
        <${inputtype} class="kdialoginput w-full resize-none rounded p-4 placeholder:text-gray-300 dark:bg-gray-800 border-gray-100 focus:border-brand-green border"></${inputtype}>
        <div class="mt-5 flex flex-col gap-3 sm:mt-4 sm:flex-row-reverse">
          <button class="kdialogbtn btn relative btn-primary">
            <div class="flex w-full gap-2 items-center justify-center">${buttonvalue}</div>
          </button>
          <button class="kdialogclose btn relative btn-neutral">
            <div class="flex w-full gap-2 items-center justify-center">Cancel</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
        `;
        if (inputtype === 'br') {
            $(".kdialoginput", ndivalert).style.display = 'none';
        } else if (inputtype === 'img') {
            $(".kdialoginput", ndivalert).src = inputvalue;
            $(".kdialoginput", ndivalert).style = `max-height: 25rem; height: unset; width: unset; margin: 0 auto;`;
        } else if (inputtype === 'textarea') {
            $(".kdialoginput", ndivalert).value = inputvalue;
            $(".kdialoginput", ndivalert).style = `height: 10rem; `;
        } else {
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
    <li id=nmenuid_ds>${tl("数据安全")}</li>
    <li id=nmenuid_cm>${tl("取消审计")}</li>
    <li id=nmenuid_cc>${tl("克隆对话")}</li>
    <li id=nmenuid_sc>${tl("言无不尽")}</li>
    <li id=nmenuid_pp>${tl("净化页面")}</li>
    <li id=nmenuid_ls>${tl("展示大屏")}</li>
    <li id=nmenuid_it>${tl("拦截跟踪")}</li>
    <li id=nmenuid_ec>${tl("日新月异")}</li>
    <li id=nmenuid_dm>${tl("暗色主题")}</li>
    <li id=nmenuid_sd>${tl("显示调试")}</li>
    <li id=nmenuid_cu>${tl("检查更新")}</li>
    <li id=nmenuid_ap>${tl("赞赏鼓励")}</li>
    <li id=nmenuid_ab>${tl("关于")}</li>
</ul>
`;
        document.body.appendChild(ndivmenu);

        $('#nmenuid_sd').appendChild(ncheckbox());
        $('#nmenuid_dm').appendChild(ncheckbox());
        $('#nmenuid_cm').appendChild(ncheckbox());
        $('#nmenuid_cc').appendChild(ncheckbox());
        $('#nmenuid_pp').appendChild(ncheckbox());
        $('#nmenuid_ls').appendChild(ncheckbox());
        $('#nmenuid_sc').appendChild(ncheckbox());
        $('#nmenuid_it').appendChild(ncheckbox());
        $('#nmenuid_ec').appendChild(ncheckbox());

        $('#nmenuid_ds').onclick = function() {
            toggleMenu('hide');
            ndialog(`${tl("数据安全")}`, `${tl("使用正则编写规则")}`, `Save`, function(t) {
                let datasecblocklist;
                try {
                    datasecblocklist = `${$(".kdialoginput", t).value}\n`.replace(/\r/g,`\n`).replace(/\n+/g, `\n`);
                } catch (e) {
                    datasecblocklist = gv("k_datasecblocklist", datasec_blocklist_default);
                }
                sv("k_datasecblocklist", datasecblocklist);
            }, `textarea`, gv("k_datasecblocklist", datasec_blocklist_default));
        };

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
            ndialog(`${tl("调整间隔")}`, `${tl("建议间隔50秒")}`, `Go`, function(t) {
                try {
                    interval2Time = parseInt($(".kdialoginput", t).value);
                } catch (e) {
                    interval2Time = parseInt(gv("k_interval", 50));
                }
                if (interval2Time < 10) {
                    return;
                }
                clearInterval(nInterval2);
                nInterval2 = setInterval(nInterval2Fun, 1000 * interval2Time);
                sv("k_interval", interval2Time);
            }, `input`, parseInt(gv("k_interval", 50)));
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
            $("#__next .overflow-hidden.w-full>div.overflow-hidden").classList.toggle('largescreen');
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
                $('nav.flex')?.classList.add('knav');
                everChanging();
            }
            $('.checkbutton', this).classList.toggle('checked');
        };

        $('#nmenuid_cu').onclick = function() {
            toggleMenu('hide');
            checkForUpdates();
        };

        $('#nmenuid_ap').onclick = function() {
            supportAuthor();
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
            $("#__next .overflow-hidden.w-full>div.overflow-hidden").classList.toggle('largescreen');
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
            $('nav.flex')?.classList.add('knav');
            everChanging();
        }

        //检查更新：首次、每3天
        if (gv("k_lastupdate", 0) === 0 || Date.now() - gv("k_lastupdate", 0) >= 1000 * 60 * 60 * 24 * 3) {
            sv("k_lastupdate", Date.now());
            checkForUpdates();
        }

        if (gv("k_last_support_author", 0) === 0 || Date.now() - gv("k_last_support_author", 0) >= 1000 * 60 * 60 * 24 * 30) {
            sv("k_last_support_author", Date.now());
            supportAuthor();
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
                $(symbol2_selector).parentNode.classList.remove('absolute');
            }
            symbol_prt.insertBefore(kcg_html, symbol_prt.childNodes[0]);
            return;
        }

        loadMenu();
        setIfr(u);

        const ndivkcg = document.createElement("div");
        ndivkcg.id = "kcg";
        ndivkcg.setAttribute("class", "kgold flex py-3 px-3 items-center gap-3 rounded-md text-sm mb-1 flex-shrink-0 border border-white/20");

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
        ndivkcg._symbol1_innerHTML = `<img src='${icon}' style='width: 1rem;' />Keep${ndivkcg.id.slice(1,2).toUpperCase()}hatGPT by x${ndivkcg.id.slice(1,2)}anwin`;
        ndivkcg._symbol2_innerHTML = `Keep${ndivkcg.id.slice(1,2).toUpperCase()}hatGPT`;

        if ($(symbol1_selector)) {
            ndivkcg.innerHTML = ndivkcg._symbol1_innerHTML;
            symbol_prt = findParent($(symbol1_selector), "nav.flex", 3);
        } else if ($(symbol2_selector)) {
            ndivkcg.innerHTML = ndivkcg._symbol2_innerHTML;
            symbol_prt = findParent($(symbol2_selector), ".sticky", 2);
            $(symbol2_selector).parentNode.classList.remove('absolute');
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

#kcg {
    margin-top: .5rem;
    margin-bottom: .5rem;
}
#kcg::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        to bottom right,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
    );
    transform: rotate(-45deg);
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
    max-width: 2.25rem !important;
    cursor: pointer;
}

nav {
    position: relative;
}
nav div.pt-3\\.5 {
    padding-bottom: .5rem;
    padding-top: .25rem;
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

.largescreen .flex.text-base {
    max-width: unset;
}
@media (min-width:1024px) {
    .largescreen .flex.text-base .lg\\:w-\\[calc\\(100\\%-115px\\)\\] {
        width: calc(100% - 72px);
    }
    .largescreen form.stretch {
        max-width: 85%;
    }
}
.largescreen img {
    width: 653px;
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
.knav li::after {
    content: "";
    display: block;
    height: 1px;
    background: linear-gradient(to right, transparent, #5e5e5e, transparent);
}

#nmenuid_ap {
    color: #00bf78;
}

nav.flex .transition-all {
    position: unset;
}

.hide {
    display: none;
}
`);
    };

    const hookFetch = function() {
        unsafeWindow.fetch = new Proxy(fetch, {
            apply: function (target, thisArg, argumentsList) {
                const fetchReqUrl = argumentsList[0];
                let fetchRsp;
                try {
                    const block_url = 'gravatar\.com|browser-intake-datadoghq\.com|\.wp\.com|intercomcdn\.com|sentry\.io|sentry_key=|intercom\.io|featuregates\.org|/v1/initialize|/messenger/|statsigapi\.net|/rgstr|/v1/sdk_exception';
                    if (gv("k_closeModer", false) && fetchReqUrl.match('/backend-api/moderations(\\?|$)')) {
                        //取消审计1
                        fetchRsp = Promise.resolve({
                            json: () => {return {}}
                        });
                        return fetchRsp;
                    } else if (gv("k_closeModer", false) && fetchReqUrl.match('/backend-api/conversation(\\?|$)')) {
                        //取消审计2
                        const post_body = JSON.parse(argumentsList[1].body);
                        post_body.supports_modapi = false;
                        argumentsList[1].body = JSON.stringify(post_body);
                    } else if (gv("k_intercepttracking", false) && fetchReqUrl.match(block_url)) {
                        //拦截跟踪
                        console.log(`KeepChatGPT: ${tl("拦截跟踪")}: ${fetchReqUrl}`);
                        fetchRsp = Promise.resolve({
                        });
                        return fetchRsp;
                    } else if (fetchReqUrl.match('/backend-api/compliance')) {
                        //fix openai bug
                        fetchRsp = Promise.resolve({
                            json: () => {return {"registration_country":null,"require_cookie_consent":false,"terms_of_use":{"is_required":false,"display":null},"cookie_consent":null,"age_verification":null}}
                        });
                        return fetchRsp;
                    }
                } catch (e) {}
                fetchRsp = target.apply(thisArg, argumentsList);
                return fetchRsp.then(response => {
                    if (fetchReqUrl.match('/api/auth/session(\\?|$)')) {
                        //打开网页时，创建数据库。
                        return response.text().then(async fetchRspBody => {
                            let fetchRspBodyNew = fetchRspBody;
                            let modifiedData = JSON.parse(fetchRspBody);
                            if (!global.st_ec) {
                                const email = modifiedData.user.email;
                                global.st_ec = new IndexedDB(`KeepChatGPT_${email}`, 'conversations');
                            }
                            delete modifiedData.error; //绕过登录超时 Your session has expired. Please log in again to continue using the app.
                            fetchRspBodyNew = JSON.stringify(modifiedData);
                            const responseNew = new Response(fetchRspBodyNew, {
                                status: response.status,
                                statusText: response.statusText,
                                headers: response.headers
                            });
                            return Promise.resolve(responseNew);
                        });
                    } else if (gv("k_everchanging", false) === true && fetchReqUrl.match('/backend-api/conversations\\?.*offset=')) {
                        //刷新侧边栏时，更新数据库：id、标题、更新时间。同时更新侧边栏
                        return response.text().then(async fetchRspBody => {
                            let fetchRspBodyNew = fetchRspBody;
                            const b = JSON.parse(fetchRspBody).items;
                            let kec_object = {};
                            b.forEach(async el => {
                                const update_time = new Date(el.update_time);
                                const ec_tmp = await global.st_ec.get(el.id) || {};
                                await global.st_ec.put({id: el.id, title: el.title, update_time: update_time, last: ec_tmp.last, model: ec_tmp.model});
                                kec_object[el.id] = {title: el.title, update_time: update_time, last: ec_tmp.last, model: ec_tmp.model};
                            });
                            setTimeout(function() {
                                attachDate(kec_object);
                            }, 600);
                            const responseNew = new Response(fetchRspBodyNew, {
                                status: response.status,
                                statusText: response.statusText,
                                headers: response.headers
                            });
                            return Promise.resolve(responseNew);
                        });
                    } else if (gv("k_everchanging", false) === true && fetchReqUrl.match('/backend-api/conversation/')) {
                        //点击侧边栏的历史对话时，更新数据库：当前id、当前标题、当前更新时间，当前last，当前model。同时更新侧边栏
                        return response.text().then(async fetchRspBody => {
                            let fetchRspBodyNew = fetchRspBody;
                            const f = JSON.parse(fetchRspBody);
                            const crt_con_id = f && f.conversation_id;
                            const crt_con_title = f && f.title;
                            let crt_con_update_time = f && f.update_time;
                            crt_con_update_time = crt_con_update_time < 10**10 ? crt_con_update_time * 1000 : crt_con_update_time;
                            crt_con_update_time = new Date(crt_con_update_time);
                            const crt_con_speak_last_keys = f && f.mapping && Object.keys(f.mapping);
                            const crt_con_speak_last_id = crt_con_speak_last_keys[crt_con_speak_last_keys.length - 1]
                            const crt_con_speak_last = f.mapping[crt_con_speak_last_id].message
                            const crt_con_last = crt_con_speak_last.content.parts[0].trim().replace(/[\r\n]/g, ``).substr(0, 100);
                            const crt_con_model = crt_con_speak_last.metadata.model_slug;
                            await global.st_ec.put({id: crt_con_id, title: crt_con_title, update_time: crt_con_update_time, last: crt_con_last, model: crt_con_model});
                            let kec_object = {};
                            kec_object[crt_con_id] = {title: crt_con_title, update_time: crt_con_update_time, last: crt_con_last, model: crt_con_model};
                            setTimeout(function() {
                                attachDate(kec_object);
                            }, 300);
                            const responseNew = new Response(fetchRspBodyNew, {
                                status: response.status,
                                statusText: response.statusText,
                                headers: response.headers
                            });
                            return Promise.resolve(responseNew);
                        });
                    }
                    return response;
                }).catch(error => {
                    console.error(error);
                    return Promise.reject(error);
                });
            }
        });
        navigator.sendBeacon = function(url, data) {};
    };

    const everChanging = function() {
        if (gv("k_everchanging", false) === true) {
            if (!global.everChangingOnce) {
                global.everChangingOnce = 1;
                GM_addStyle(`
nav.flex div.overflow-y-auto h3 {
    display: none;
}
nav.flex div.overflow-y-auto .relative.mt-5 {
    margin-top: 0;
}
`);
            }
            attachDate();
        }
    };

    const attachDate = function(kec_object) {
        $$('nav.flex li a').forEach(async el => {
            const keyrf = Object.keys(el).find(key => key.startsWith("__reactFiber"));
            const a_id = el[keyrf].return.return.memoizedProps.conversation.id;
            let kec_obj_el;
            if (kec_object) {
                kec_obj_el = kec_object[a_id];
            } else {
                kec_obj_el = await global.st_ec.get(a_id);
            }
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
<div style="max-height: unset; max-width: 70%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; position: absolute; color: #e1e1e1; font-weight: bold;" class="navtitle">
    ${title}
</div>
<div style="right: 0; position: absolute; color: gray; font-size: 0.71rem;" class="navdate">
    ${formatDate2(update_time)}
</div>
<br>
<div style="max-height: unset; max-width: 95%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #606060; font-size: 0.75rem;" class="navlast">
    ${htmlEncode(last)}
</div>
`;
                el.insertBefore(cdiv_new, el.childNodes[1]);
            } else if ($('.navtitle', el).innerHTML !== title || $('.navdate', el).innerHTML !== formatDate2(update_time) || $('.navlast', el).innerHTML !== last) {
                $('.navtitle', el).innerHTML = title;
                $('.navdate', el).innerHTML = formatDate2(update_time);
                $('.navlast', el).innerHTML = htmlEncode(last);
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
        const downloadURL = GM_info.script.downloadURL;
        const updateURL = GM_info.scriptUpdateURL || GM_info.script.updateURL || downloadURL;
        GM_xmlhttpRequest({
            method: "GET",
            url: `${updateURL}?t=${Date.now()}`,
            onload: function(response) {
                const crv = GM_info.script.version;
                const m = response.responseText.match(/@version\s+(\S+)/);
                const ltv = m && m[1];
                if (ltv && verInt(ltv) > verInt(crv)) {
                    ndialog(`${tl("检查更新")}`, `${tl("当前版本")}: ${crv}, ${tl("发现最新版")}: ${ltv}`, `UPDATE`, function(t) {
                        window.open(`${downloadURL}?t=${Date.now()}`, '_blank');
                    });
                } else {
                    ndialog(`${tl("检查更新")}`, `${tl("当前版本")}: ${crv}, ${tl("已是最新版")}`, `OK`);
                }
            }
        });
    };

    /*
    克隆对话
    */
    const cloneChat = function(action) {
        if (action === true) {
            window.addEventListener('click', cloneChat.listen_Click);
        } else {
            window.removeEventListener('click', cloneChat.listen_Click);
        }
    };

    cloneChat.listen_Click = function(event) {
        const avatarSelector = "main div.items-end>div:first-child";
        const avatarDiv = findParent(event.target, avatarSelector);
        if (avatarDiv) {
            const contentSelector = ".max-w-full .text-message";
            const content = $(contentSelector, findParent(avatarDiv, "main div.text-base", 2)).innerText.trim();
            $("form.stretch textarea").value = "";
            $("form.stretch textarea").focus();
            document.execCommand('insertText', false, content);
        }
    };

    /*
    净化页面
    */
    const cleanlyHome = function() {
        if (location.href.match(/https:\/\/chat\.openai\.com\/\??/) && gv("k_cleanlyhome", false) === true) {
            //添加专属logo
            if ($("main h1") && $("main h1").innerText.match(/^ChatGPT(\nPLUS)?$/)) {
                $("main h1").classList.add('text-gray-200');
                const nSpan = document.createElement('span');
                nSpan.className = 'bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase';
                nSpan.textContent = `KEEP`;
                $("main h1").appendChild(nSpan);
            }
            //净化首页的快捷提示词
            if ($('form.stretch .grow .bottom-full')) {
                $('form.stretch .grow .bottom-full').classList.add('hide');
            }
            //净化底部标签
            if ($(`main div.text-center>span`) ) {
                $(`main div.text-center>span`) .classList.add('hide');
            }
            //净化侧边栏的upgrade your plan
            const utp_svg = $(`nav.flex .border-t .icon-sm.shrink-0`) ;
            if (utp_svg && findParent(utp_svg, `a`, 4)) {
                findParent(utp_svg, `a`, 4).classList.add('hide');
            }
        }
    };

    const speakCompletely = function() {
        if (gv("k_speakcompletely", false) === true) {
            const continue_svg_selector = `form.stretch .justify-center polygon[points="11 19 2 12 11 5 11 19"]:not(.ct_clicked)`;
            if ($(continue_svg_selector)) {
                setTimeout(function() {
                    findParent($(continue_svg_selector), `button`).click();
                    $(continue_svg_selector).classList.add('ct_clicked');
                }, 1000);
            }
        }
    };

    const dataSec = function() {
        if (gv("k_datasecblocklist", datasec_blocklist_default)) {
            $("form.stretch textarea")?.addEventListener('input', dataSec.listen_input);
        } else {
            $("form.stretch textarea")?.removeEventListener('input', dataSec.listen_input);
        }
    };

    dataSec.listen_input = function(event) {
        let ms = [];
        gv("k_datasecblocklist", datasec_blocklist_default).split(`\n`).forEach(e => {
            if (e) {
                const m = $("form.stretch textarea").value.match(e);
                if (m && m[0]) {
                    $("form.stretch textarea").value = $("form.stretch textarea").value.replaceAll(m[0], ``);
                    ms.push(m[0]);
                }
            }
        });
        if (ms.join(`\n`).trim()) {
            ndialog(`⚠️${tl("警告")}`, `${tl("发现敏感数据")}`, `Thanks`, function(t) {}, `textarea`, ms.join(`\n`));
        }
    };

    const supportAuthor = function() {
        ndialog(`${tl("赞赏鼓励")}`, `· 本项目由兴趣驱使，提升自己的体验，并共享世界。
<br>· 如果你喜欢作者的项目，可以给作者一个免费的Star或者Follow。
<br>· 如果你希望作者的小猫吃到更好的罐头，欢迎赞赏与激励。`, `更多鼓励方式`, function(t) {
            window.open(`${GM_info.script.namespace}#赞赏`, '_blank');
        }, `img`, `https://github.com/xcanwin/KeepChatGPT/raw/main/assets/appreciate_wechat.png`);
    }

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

    const nInterval1Fun = function() {
        if ($(symbol1_selector) || $(symbol2_selector)) {
            loadKCG();
            setIfr();
            cleanlyHome();
            speakCompletely();
            dataSec();
        }
    };

    const nInterval2Fun = function() {
        if ($(symbol1_selector) || $(symbol2_selector)) {
            keepChat();
        }
    };

    hookFetch();

    let nInterval1 = setInterval(nInterval1Fun, 300);

    let interval2Time = parseInt(gv("k_interval", 50));
    let nInterval2 = setInterval(nInterval2Fun, 1000 * interval2Time);

})();
