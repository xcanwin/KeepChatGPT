// ==UserScript==
// @name              KeepChatGPT
// @description       让我们在使用ChatGPT过程中更高效、更顺畅，完美解决ChatGPT网络错误，不再频繁地刷新网页，足足省去10个多余的步骤。还可以取消后台监管审计。解决了这几类报错: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) This content may violate our content policy. If you believe this to be in error, please submit your feedback — your input will aid our research in this area. (4) Conversation not found.
// @version           8.5
// @author            xcanwin
// @namespace         https://github.com/xcanwin/KeepChatGPT/
// @supportURL        https://github.com/xcanwin/KeepChatGPT/
// @updateURL         https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js
// @downloadURL       https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js
// @description:ar    لنجعل استخدام ChatGPT لدينا أكثر كفاءة وسلاسة، من خلال تحسين الحل لأخطاء شبكة ChatGPT. وهذا يوفر لنا من تحديث صفحة الويب بشكل متكرر ويقضي على أكثر من 10 خطوات غير ضرورية. تم حل الأخطاء التالية: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:bg    Нека направим използването на ChatGPT по-ефективно и по-гладко, като усъвършенстваме решението за мрежови грешки на ChatGPT. Това ни спестява от често опресняване на уеб страницата и отстранява над 10 ненужни стъпки. Следните грешки са решен: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:cs    Vylepšeme naše používání ChatGPT, aby bylo efektivnější a plynulejší, dokonalým řešením síťových chyb ChatGPT. Toto nás šetří častým obnovováním webové stránky a eliminuje více než 10 zbytečných kroků. Následující chyby byly vyřešen: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:da    Lad os gøre vores brug af ChatGPT mere effektiv og problemfri ved at perfektionere løsningen på ChatGPT-netværksfejl. Dette sparer os for hyppigt at genindlæse websiden og eliminerer mere end 10 unødvendige trin. Følgende fejl er blevet løs: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:de    Lassen Sie uns unsere Nutzung von ChatGPT effizienter und reibungsloser gestalten, indem wir die Lösung für ChatGPT-Netzwerkfehler perfektionieren. Dies spart uns häufiges Aktualisieren der Webseite und eliminiert mehr als 10 unnötige Schritte. Die folgenden Fehler wurden behobe: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:el    Ας κάνουμε τη χρήση του ChatGPT πιο αποτελεσματική και πιο ομαλή, βελτιώνοντας τη λύση στα προβλήματα δικτύου του ChatGPT. Αυτό μας σώζει από το συχνό ανανέωση της ιστοσελίδας και εξαλείφει πάνω από 10 περιττά βήματα. Τα ακόλουθα σφάλματα έχουν λυθε: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:en    Let's make our use of ChatGPT more efficient and seamless, and perfectly resolve ChatGPT network errors without frequently refreshing the webpage, saving more than 10 unnecessary steps. It is also possible to disable auditing. This resolves the following types of errors: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:eo    Ni plifaciligas nian uzadon de ChatGPT per pli efikaj kaj pli glataj solvoj por ChatGPT-retoj. Tio savas nin de oftaj reŝarĝoj de la retpaĝo kaj eliminigas pli ol 10 superfluajn paŝojn. La sekvaj eraroj estas solvita: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:es    Hagamos que nuestro uso de ChatGPT sea más eficiente y más fluido, perfeccionando la solución a los errores de red de ChatGPT. Esto nos ahorra de actualizar frecuentemente la página web y elimina más de 10 pasos innecesarios. Los siguientes errores han sido resuelto: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:fi    Tehdään käytöstämme ChatGPT:ää tehokkaampaa ja sujuvampaa täydellistämällä ratkaisu ChatGPT:n verkkovirheisiin. Tämä säästää meidät usein tapahtuvilta verkkosivun päivityksiltä ja poistaa yli 10 tarpeetonta vaihetta. Seuraavat virheet on ratkaist: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:fr    Rendons notre utilisation de ChatGPT plus efficace et plus fluide en perfectionnant la solution aux erreurs de réseau de ChatGPT. Cela nous évite de rafraîchir fréquemment la page Web et élimine plus de 10 étapes inutiles. Les erreurs suivantes ont été résolue: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:fr-CA Rendons notre utilisation de ChatGPT plus efficace et plus fluide en perfectionnant la solution aux erreurs de réseau de ChatGPT. Cela nous évite de rafraîchir fréquemment la page Web et élimine plus de 10 étapes inutiles. Les erreurs suivantes ont été résolue: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:he    בואו נשפר על שימוש יעיל וחלק יותר ב ChatGPT על-ידי מציאת פתרון מושלם לשגיאות הרשת של ChatGPT. זה חוסך מאיתנו מרענון תדיר של הדף ומסיר מעל 10 שלבים מיותרים. נפתרו השגיאות הבאו: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:hu    Tegyük hatékonyabbá és zökkenőmentesebbé ChatGPT használatunkat a ChatGPT hálózati hibáinak tökéletesítésével. Ez megóv minket a weboldal gyakori frissítésétől és több mint 10 felesleges lépés megszüntetését jelenti. Az alábbi hibák megoldásra kerülte: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:id    Mari kita membuat penggunaan ChatGPT kita lebih efisien dan lancar, dengan menyempurnakan solusi untuk kesalahan jaringan ChatGPT. Ini menghemat kita dari sering merefresh halaman dan menghilangkan lebih dari 10 langkah yang tidak perlu. Kesalahan-kesalahan berikut telah diatas: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:it    Rendiamo il nostro uso di ChatGPT più efficiente e scorrevole, perfezionando la soluzione per gli errori di rete di ChatGPT. Ciò ci salva dal dover aggiornare frequentemente la pagina web ed elimina oltre 10 passaggi non necessari. Sono stati risolti i seguenti error: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:ja    ChatGPTのネットワークエラーの問題を完璧に解決することで、ChatGPTの使用をより効率的でスムーズにすることができます。これにより、Webページを頻繁にリフレッシュする必要がなく、10以上の不要なステップを削除できます。以下のエラーが解決されまし: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:ka    შევქმნათ ChatGPT-ს გამოყენება უფრო ეფექტური და უარყოფითი, ჩვენს საჭიროებების შედეგად ChatGPT-ს ქსელის შეცდომების საკუთარ ამოცანას შევასრულოთ. ეს შესაძლოა ჩვენ ვებგვერდის მრავალჯერად განახლებისგან გავიმეოროთ და შევარჩიოთ 10 უმაღლესი მარტივი ნაბიჯი. შემდეგი შეცდომები გადააჭარბებს: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:ko    ChatGPT 사용을 더 효율적이고 원활하게 만들어 ChatGPT 네트워크 오류를 완벽히 해결하고 웹 페이지를 자주 새로 고치지 않아도 되게 하여 10개 이상의 불필요한 단계를 제거했습니다. 다음 오류가 해결되었습니다: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:nb    La oss gjøre bruken av ChatGPT mer effektiv og jevnere ved å perfeksjonere løsningen for ChatGPT nettverksfeil. Dette sparer oss for å stadig måtte laste inn siden på nytt og eliminerer over 10 unødvendige trinn. Følgende feil er nå løst: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:nl    Laten we ons gebruik van ChatGPT efficiënter en soepeler maken door de oplossing voor ChatGPT-netwerkfouten te perfectioneren. Dit bespaart ons van het vaak vernieuwen van de webpagina en elimineert meer dan 10 onnodige stappen. De volgende fouten zijn opgelost: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:pl    Uczyńmy nasze użytkowanie ChatGPT bardziej wydajnym i płynnym, doskonaląc rozwiązanie problemów z siecią ChatGPT. To pozwoli nam uniknąć częstego odświeżania strony i wyeliminować ponad 10 niepotrzebnych kroków. Następujące błędy zostały rozwiązane: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:pt-BR Vamos tornar nosso uso do ChatGPT mais eficiente e suave, aprimorando a solução para erros de rede do ChatGPT. Isso nos poupa de atualizar frequentemente a página da web e elimina mais de 10 etapas desnecessárias. Os seguintes erros foram resolvidos: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:ro Să facem utilizarea noastră a ChatGPT mai eficientă și mai fluentă, perfecționând soluția pentru erorile de rețea ale ChatGPT. Acest lucru ne salvează de la actualizarea frecventă a paginii web și elimină peste 10 pași inutili. Următoarele erori au fost rezolvate: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:ru    Сделаем наше использование ChatGPT более эффективным и плавным, усовершенствовав решение для ошибок сети ChatGPT. Это позволит нам избежать частого обновления веб-страницы и убрать более 10 ненужных шагов. Следующие ошибки были устранены: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:sk    Urobme naše používanie ChatGPT efektívnejším a plynulejším, vylepšením riešenia pre ChatGPT sieťové chyby. To nás ušetrí od častého obnovovania webovej stránky a odstráni viac ako 10 zbytočných krokov. Nasledujúce chyby boli vyriešené: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:sr    Učinimo naše korišćenje ChatGPT-a efikasnijim i glatkijim, usavršavanjem rešenja za ChatGPT mrežne greške. To nas oslobađa od čestog osvežavanja veb stranice i eliminiše više od 10 nepotrebnih koraka. Sledeće greške su rešene: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:sv    Låt oss göra vårt användande av ChatGPT mer effektivt och smidigt genom att förbättra lösningen på ChatGPT-nätverksfel. Detta sparar oss från att behöva ladda om webbsidan ofta och eliminerar över 10 onödiga steg. Följande fel har lösts: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:th    ให้เราใช้ ChatGPT ได้อย่างมีประสิทธิภาพและราบรื่นมากขึ้น โดยการแก้ไขปัญหาเครือข่าย ChatGPT อย่างสมบูรณ์แบบ นี้ช่วยประหยัดเวลาจากการรีเฟรชหน้าเว็บไซต์บ่อยครั้งและลบขั้นตอนที่ไม่จำเป็นมากกว่า 10 ขั้นตอน ข้อผิดพลาดต่อไปนี้ได้รับการแก้ไ: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:tr    ChatGPT ağ hatalarının mükemmel çözümüyle ChatGPT kullanımımızı daha verimli ve akıcı hale getirelim. Bu sayede web sayfasını sık sık yenilemekten kurtuluruz ve gereksiz 10 adımı ortadan kaldırırız. Aşağıdaki hatalar çözülmüştür: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:uk    Давайте зробимо наше використання ChatGPT більш ефективним та плавним, вдосконаливши рішення щодо помилок мережі ChatGPT. Це дозволяє нам уникнути частого оновлення веб-сторінки та усунути понад 10 зайвих кроків. Наступні помилки були виправлені: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:ug    چات GPT ئىشلىتىشتىكىمىزنى ئېتىبارلىق ئەرزىگە تۇنۇشتۇرۇشقا ئائىلە قىلىپ، چات GPT توردىكى تورخىذا خاتالىقىلارنى تەمىنلەشتۈرۈشقا ئائىلە قىلىپ، تورخىذىلىش يېتىشىپ قالدىغان خاتالىقلىرىمىزنى 10 دىن ئارتۇق بۇلۇپ تەتۈرلىتىشكە بولىدۇ. بۇ قانداق خاتالىقلىر تەمىنلەندى: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:vi    Hãy làm việc của chúng ta trên ChatGPT hiệu quả hơn và mượt hơn bằng cách hoàn thiện giải pháp cho các lỗi mạng ChatGPT. Điều này giúp chúng ta không cần phải làm mới trang web thường xuyên và loại bỏ hơn 10 bước không cần thiết. Những lỗi sau đã được khắc phục: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:zh-CN 让我们在使用ChatGPT过程中更高效、更顺畅，完美解决ChatGPT网络错误，不再频繁地刷新网页，足足省去10个多余的步骤。还可以取消后台监管审计。解决了这几类报错: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) This content may violate our content policy. If you believe this to be in error, please submit your feedback — your input will aid our research in this area. (4) Conversation not found.
// @description:zh-TW 讓我們在使用ChatGPT過程中更高效、更順暢，完美解決ChatGPT網絡錯誤，不再頻繁地刷新網頁，足足省去10個多餘的步驟。解決了這幾類報錯: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @icon              data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" stroke-width="2" fill="none" stroke="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
// @license           GPL-2.0-only
// @match             https://chat.openai.com/*
// @grant             GM_addStyle
// @grant             GM_addElement
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             unsafeWindow
// @run-at            document-idle
// ==/UserScript==


(function() {
    'use strict';

    var $ = (Selector, el) => (el || document).querySelector(Selector);
    var $$ = (Selector, el) => (el || document).querySelectorAll(Selector);

    var tl = function(s) {
        var lang = `
{
    "index": {"暗色主题": "dm", "显示调试": "sd", "取消审计": "cm", "关于": "ab", "调整频率": "af", "建议间隔30秒": "si"},
    "local": {
"ar": {"dm": "الوضع الداكن", "sd": "إظهار التصحيح", "cm": "إلغاء التدقيق", "ab": "حول", "af": "ضبط التردد", "si": "اقتراح فاصل زمني 30 ثانية"},
"bg": {"dm": "Тъмна тема", "sd": "Показване на отстраняване на грешки", "cm": "Отказ от одит", "ab": "За", "af": "Настройка на честотата", "si": "Предложете интервал от 30 секунди"},
"cs": {"dm": "Tmavý režim", "sd": "Zobrazit ladění", "cm": "Zrušení auditu", "ab": "O", "af": "Nastavit frekvenci", "si": "Navrhnout interval 30 sekund"},
"da": {"dm": "Mørk tilstand", "sd": "Vis fejlfinding", "cm": "Annuller revision", "ab": "Om", "af": "Juster frekvens", "si": "Forslag interval på 30 sekunder"},
"de": {"dm": "Dunkler Modus", "sd": "Fehlerbehebung anzeigen", "cm": "Prüfung abbrechen", "ab": "Über", "af": "Frequenz anpassen", "si": "Vorschlag für Intervall von 30 Sekunden"},
"el": {"dm": "Σκοτεινή θεματολογία", "sd": "Εμφάνιση αποσφαλμάτωσης", "cm": "Ακύρωση ελέγχου", "ab": "Σχετικά με", "af": "Ρύθμιση συχνότητας", "si": "Προτείνετε διάστημα 30 δευτερολέπτων"},
"en": {"dm": "Dark mode", "sd": "Show debugging", "cm": "Cancel audit", "ab": "About", "af": "Adjust frequency", "si": "Suggest interval of 30 seconds"},
"eo": {"dm": "Malhela moduso", "sd": "Montri depuradon", "cm": "Nuligi kontroli", "ab": "Pri", "af": "Agordi frekvencion", "si": "Sugesti intervalon de 30 sekundoj"},
"es": {"dm": "Modo oscuro", "sd": "Mostrar depuración", "cm": "Cancelar auditoría", "ab": "Acerca de", "af": "Ajustar frecuencia", "si": "Sugerir un intervalo de 30 segundos"},
"fi": {"dm": "Tumma tila", "sd": "Näytä virheenkorjaus", "cm": "Peruuta tarkistus", "ab": "Tietoa", "af": "Säädä taajuutta", "si": "Ehdota 30 sekunnin väliaikaa"},
"fr": {"dm": "Mode sombre", "sd": "Afficher le débogage", "cm": "Annuler l'audit", "ab": "À propos de", "af": "Ajuster la fréquence", "si": "Suggérer un intervalle de 30 secondes"},
"fr-CA": {"dm": "Mode nuit", "sd": "Afficher le débogage", "cm": "Annuler la vérification", "ab": "À propos de", "af": "Ajuster la fréquence", "si": "Suggérer un intervalle de 30 secondes"},
"he": {"dm": "מצב כהה", "sd": "הצגת התיקון", "cm": "ביטול ביקורת", "ab": "אודות", "af": "להתאים תדר", "si": "הצע מרווח של 30 שניות"},
"hu": {"dm": "Sötét mód", "sd": "Hibakeresés mutatása", "cm": "Ellenőrzés megszüntetése", "ab": "Rólunk", "af": "Frekvencia beállítása", "si": "Javaslat 30 másodperces időközre"},
"id": {"dm": "Mode gelap", "sd": "Tampilkan debugging", "cm": "Batalkan audit", "ab": "Tentang", "af": "Sesuaikan frekuensi", "si": "Sarankan interval 30 detik"},
"it": {"dm": "Modalità scura", "sd": "Mostra debug", "cm": "Annulla verifica", "ab": "Riguardo a", "af": "Regola la frequenza", "si": "Suggerisci un intervallo di 30 secondi"},
"ja": {"dm": "ダークモード", "sd": "デバッグを表示", "cm": "監査をキャンセル", "ab": "について", "af": "周波数を調整する", "si": "30秒間隔を提案する"},
"ka": {"dm": "ბნელი რეჟიმი", "sd": "გამოჩენა დებაგი", "cm": "ანულირება აუდიტი", "ab": "შესახებ", "af": "ფრექვენციის შემადგენლობა", "si": "30 წამის ინტერვალის შეტანა"},
"ko": {"dm": "다크 모드", "sd": "디버깅 표시", "cm": "감사 취소", "ab": "관하여", "af": "주파수 조정", "si": "30초 간격 건의"},
"nb": {"dm": "Mørk modus", "sd": "Vis feilsøking", "cm": "Avbryt revisjonen", "ab": "Om", "af": "Juster frekvens", "si": "Forslag om et intervall på 30 sekunder"},
"nl": {"dm": "Donkere modus", "sd": "Foutopsporing weergeven", "cm": "Controle annuleren", "ab": "Over", "af": "Frequentie aanpassen", "si": "Stel een interval van 30 seconden voor"},
"pl": {"dm": "Tryb ciemny", "sd": "Pokaż debugowanie", "cm": "Anuluj audyt", "ab": "O", "af": "Dostosuj częstotliwość", "si": "Zasugeruj interwał 30 sekund"},
"pt-BR": {"dm": "Modo escuro", "sd": "Mostrar depuração", "cm": "Cancelar auditoria", "ab": "Sobre", "af": "Ajustar frequência", "si": "Sugira um intervalo de 30 segundos"},
"ro": {"dm": "Mod întunecat", "sd": "Afișare depanare", "cm": "Anulare audit", "ab": "Despre", "af": "Reglați frecvența", "si": "Sugerați un interval de 30 secunde"},
"ru": {"dm": "Темный режим", "sd": "Показать отладку", "cm": "Отменить аудит", "ab": "О", "af": "Настройте частоту", "si": "Предложить интервал в 30 секунд"},
"sk": {"dm": "Tmavý režim", "sd": "Zobraziť ladenie", "cm": "Zrušiť audit", "ab": "O", "af": "Nastavte frekvenciu", "si": "Navrhnúť interval 30 sekúnd"},
"sr": {"dm": "Тамни режим", "sd": "Прикажи отклањање грешака", "cm": "Откажи ревизију", "ab": "О", "af": "Podesi frekvenciju", "si": "Predložiti interval od 30 sekundi"},
"sv": {"dm": "Mörkt läge", "sd": "Visa felsökning", "cm": "Avbryt revision", "ab": "Om", "af": "Justera frekvensen", "si": "Föreslå intervall på 30 sekunder"},
"th": {"dm": "โหมดมืด", "sd": "แสดงการแก้ไขข้อผิดพลาด", "cm": "ยกเลิกการตรวจสอบ", "ab": "เกี่ยวกับ", "af": "ปรับความถี่", "si": "เสนอช่วงเวลา 30 วินาที"},
"tr": {"dm": "Karanlık mod", "sd": "Hata ayıklama göster", "cm": "Denetimi İptal Et", "ab": "Hakkında", "af": "Frekans ayarla", "si": "30 saniyelik aralık önerin"},
"uk": {"dm": "Темний режим", "sd": "Показати налагодження", "cm": "Скасувати аудит", "ab": "Про", "af": "Налаштуйте частоту", "si": "Запропонуйте інтервал у 30 секунд"},
"ug": {"dm": "تېما كۆرسىتىش", "sd": "كۆرسەتكەن يۇقىرىلاش", "cm": "ئەمەلدىن قالدۇرۇش", "ab": "ئۇچۇرلىق", "af": "تېزلىكنى تەڭشەش", "si": "30 سىكونتلىك ئارىلىقنى سۇنۇشتۇرۇش"},
"vi": {"dm": "Chế độ tối", "sd": "Hiển thị gỡ lỗi", "cm": "Hủy đánh giá", "ab": "Về", "af": "Điều chỉnh tần số", "si": "Đề xuất khoảng thời gian 30 giây"},
"zh-CN": {"dm": "暗色主题", "sd": "显示调试", "cm": "取消审计", "ab": "关于", "af": "调整频率", "si": "建议间隔30秒以上，作者平时设置的是150"},
"zh-TW": {"dm": "暗黑模式", "sd": "顯示調試", "cm": "取消稽核", "ab": "關於", "af": "調整頻率", "si": "建議間隔30秒"}
    }
}
`;
        var i, r, nl;
        try {
            lang = JSON.parse(lang);
            i = lang.index[s];
            nl = navigator.language;
            if (nl in lang.local) {
                r = lang.local[nl][i];
            } else {
                r = lang.local[nl.slice(0, 2)][i];
            }
        } catch (e) {
            r = s;
        }
        if (r == undefined) {r = s;}
        return r;
    };

    var sv = function(key, value = "") {
        GM_setValue(key, value);
    };

    var gv = function(key, value = "") {
        return GM_getValue(key, value);
    };

    var formatDate = function(d) {
        return (new Date(d)).toLocaleString();
    };

    var setIfr = function(u = "") {
        if ($("#xcanwin")==null) {
            var nIfr = document.createElement('iframe');
            nIfr.id = "xcanwin";
            nIfr.style = `height: 0px; width: 100%;`;
            if (u) {
                nIfr.src = u;
            }
            nIfr.onload = function() {
                var nIfrText = $("#xcanwin").contentWindow.document.documentElement.innerText;
                try {
                    $("#xcanwin").contentWindow.document.documentElement.style = `background: #FCF3CF; height: 360px; width: 1080px; overflow; auto;`;
                    if (nIfrText.indexOf(`"expires":"`) > -1) {
                        console.log(`KeepChatGPT: IFRAME: Expire date: ${formatDate(JSON.parse(nIfrText).expires)}`);
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

    var keepChat = function() {
        fetch(u).then((response) => {
            response.text().then((data) => {
                try {
                    var contentType = response.headers.get('Content-Type');
                    if (contentType.indexOf("application/json") > -1 && response.status !== 403 && data.indexOf(`"expires":"`) > -1) {
                        console.log(`KeepChatGPT: FETCH: Expire date: ${formatDate(JSON.parse(data).expires)}`);
                        $("#xcanwin").contentWindow.document.documentElement.innerHTML = data;
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

    var ncheckbox = function() {
        var nsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        nsvg.setAttribute("viewBox", "0 0 100 30");
        nsvg.classList.add("checkbutton");
        nsvg.innerHTML = `<g fill="none" fill-rule="evenodd"><path fill="#E3E3E3" d="M0 15C0 6.716 6.716 0 15 0h14c8.284 0 15 6.716 15 15s-6.716 15-15 15H15C6.716 30 0 23.284 0 15z"/><circle fill="#FFF" cx="15" cy="15" r="13"/></g>`;
        return nsvg.cloneNode(true);
    };

    var ndialog = function(title = 'KeepChatGPT', content = '', buttonvalue = 'OK', buttonfun = function(t){}, inputtype = 'input', inputvalue = '') {
        var ndivalert = document.createElement('div');
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
        $(".kdialoginput", ndivalert).value = inputvalue;
        $(".kdialogclose", ndivalert).onclick = function() {
            ndivalert.remove();
        };
        $(".kdialogbtn", ndivalert).onclick = function() {
            buttonfun(ndivalert);
            $(".kdialogclose", ndivalert).onclick();
        };
        document.body.appendChild(ndivalert);
    };

    var loadMenu = function() {
        if ($(".kmenu")!==null) {
            return;
        }
        var ndivmenu = document.createElement('div');
        ndivmenu.setAttribute("class", "kmenu");
        ndivmenu.innerHTML = `<ul><li id=nmenuid1>${tl("显示调试")}</li><li id=nmenuid2>${tl("暗色主题")}</li><li id=nmenuid3>${tl("取消审计")}</li><li id=nmenuid4>${tl("调整频率")}</li><a href='${GM_info.script.namespace}'><li id=nmenuid0>${tl("关于")}</li></a></ul>`;
        document.body.appendChild(ndivmenu);

        $('#nmenuid1').appendChild(ncheckbox());
        $('#nmenuid2').appendChild(ncheckbox());
        $('#nmenuid3').appendChild(ncheckbox());

        $('#nmenuid1').onclick = function() {
            if ($('.checkbutton', this).classList.contains('checked')) {
                if ($('#xcanwin')) $('#xcanwin').style.height = '0px';
                sv("k_showDebug", false);
            } else {
                if ($('#xcanwin')) $('#xcanwin').style.height = '80px';
                sv("k_showDebug", true);
            }
            $('.checkbutton', this).classList.toggle('checked');
        };
        $('#nmenuid2').onclick = function() {
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
        $('#nmenuid3').onclick = function() {
            if ($('.checkbutton', this).classList.contains('checked')) {
                byeModer(false);
                sv("k_closeModer", false);
            } else {
                byeModer(true);
                sv("k_closeModer", true);
            }
            $('.checkbutton', this).classList.toggle('checked');
        };
        $('#nmenuid4').onclick = function() {
            ndialog(`${tl("调整频率")}`, `${tl("建议间隔30秒")}`, `Go`, function(t) {
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
    };

    var loadKCG = function() {
        var symbol_prt;
        if ($("#kcg")!==null) {
            return;
        }
        if ($("main").kcg!==undefined) {
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

        var ndivkcg = document.createElement("div");
        ndivkcg.id = "kcg";
        ndivkcg.setAttribute("class", "flex py-3 px-3 items-center gap-3 rounded-md text-sm mb-1 flex-shrink-0 border border-white/20");

        var ndivmenu = $(".kmenu");
        ndivkcg.onmouseover = ndivmenu.onmouseover = function() {
            if ($("#kcg")) {
                ndivmenu.style.display = 'block';
                ndivmenu.style.left = `${$("#kcg").getBoundingClientRect().right + 20}px`;
                ndivmenu.style.top = `${$("#kcg").getBoundingClientRect().top}px`;
            }
        };
        ndivkcg.onmouseleave = ndivmenu.onmouseleave = function() {
            ndivmenu.style.display = 'none';
        };
        ndivkcg.onclick = function() {
            if (ndivmenu.style.display == 'none') {
                ndivmenu.style.display = 'block';
                ndivmenu.style.left = `${$("#kcg").getBoundingClientRect().right + 20}px`;
                ndivmenu.style.top = `${$("#kcg").getBoundingClientRect().top}px`;
            } else {
                ndivmenu.style.display = 'none';
            }
        };
        var icon = GM_info.script.icon ? GM_info.script.icon : `${GM_info.script.namespace}raw/main/assets/logo.svg`;
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

    var addStyle = function() {
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

#kcg::before {
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

    var setUserOptions = function() {
        if (gv("k_showDebug", false) == true) {
            $('#nmenuid1 .checkbutton').classList.add('checked');
            if ($('#xcanwin')) $('#xcanwin').style.height = '80px';
        } else {
            if ($('#xcanwin')) $('#xcanwin').style.height = '0px';
        }

        if (gv("k_theme", "light") == "light") {
            $('#kcg').styleOrigin = $('#kcg').style;
        } else {
            $('#nmenuid2 .checkbutton').classList.add('checked');
            $('#kcg').style.background = "#2C3E50";
            $('#kcg').style.animation = "none";
            $('#kcg').style.color = "#ffffff";
            $('#kcg').style.marginRight = "inherit";
        }

        if (gv("k_closeModer", false) == true) {
            $('#nmenuid3 .checkbutton').classList.add('checked');
            byeModer(true);
        } else {
            byeModer(false);
        }
    };

    var byeModer = function(action) {
        if (typeof _fetch == 'undefined') {
            var _fetch = fetch;
        }
        if (action == true) {
            unsafeWindow.fetch = new Proxy(fetch, {
                apply: function (target, thisArg, argumentsList) {
                    var n = {};
                    n.json = function() {return {};};
                    return argumentsList[0].includes('moderations') ? Promise.resolve(n) : target.apply(thisArg, argumentsList);
                }
            });
        } else {
            unsafeWindow.fetch = _fetch;
        }
    };

    var byeConversationNotFound = function(action) {
        if (typeof _fetch == 'undefined') {
            var _fetch = fetch;
        }
        if (action == true) {
            unsafeWindow.fetch = new Proxy(_fetch, {
                apply: function (target, thisArg, argumentsList) {
                    try {
                        if (argumentsList[0].includes('conversation')) {
                            var post_body = JSON.parse(argumentsList[1].body);
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

    var nInterval1Fun = function() {
        if ($(symbol1_class) || $(symbol2_class)) {
            loadKCG();
        }
    };

    var nInterval2Fun = function() {
        if ($(symbol1_class) || $(symbol2_class)) {
            keepChat();
        }
    };

    var nInterval1 = setInterval(nInterval1Fun, 300);
    var interval2Time = parseInt(gv("k_interval", 30));
    var nInterval2 = setInterval(nInterval2Fun, 1000 * interval2Time);

    var u = `/api/${GM_info.script.namespace.slice(33, 34)}uth/s${GM_info.script.namespace.slice(28, 29)}ssion`;
    var symbol1_class = 'nav>a.flex';
    var symbol2_class = 'button.justify-center';

})();
