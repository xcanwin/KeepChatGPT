// ==UserScript==
// @name              KeepChatGPT
// @description       让我们在使用ChatGPT过程中更高效、更顺畅，完美解决ChatGPT网络错误，不再频繁地刷新网页，足足省去10个多余的步骤。解决了这几类报错: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @version           3.2
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
// @description:en    Let's make our use of ChatGPT more efficient and smoother, by perfecting the solution to ChatGPT network errors. This saves us from frequently refreshing the webpage and eliminates over 10 unnecessary steps. The following errors have been resolve: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
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
// @description:zh-CN 让我们在使用ChatGPT过程中更高效、更顺畅，完美解决ChatGPT网络错误，不再频繁地刷新网页，足足省去10个多余的步骤。解决了这几类报错: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @description:zh-TW 讓我們在使用ChatGPT過程中更高效、更順暢，完美解決ChatGPT網路錯誤，不再頻繁地重新整理網頁，足足省去10個多餘的步驟。以下的錯誤已被解決: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @icon              data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" stroke-width="2" fill="none" stroke="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
// @license           GPL-2.0-only
// @match             *://chat.openai.com/chat*
// @grant             none
// @run-at            document-idie
// ==/UserScript==


(function() {
    'use strict';

    window.TL = function(s) {
        var i, r, lang = {"index":{"暗色主题":"dm","浅色主题":"lm","隐藏调试":"hd","显示调试":"sd"},"local":{"ar":{"dm":"الوضع الداكن","lm":"وضع فاتح","hd":"إخفاء التصحيح","sd":"إظهار التصحيح"},"bg":{"dm":"Тъмна тема","lm":"Светла тема","hd":"Скриване на отстраняване на грешки","sd":"Показване на отстраняване на грешки"},"cs":{"dm":"Tmavý režim","lm":"Světlý režim","hd":"Skrýt ladění","sd":"Zobrazit ladění"},"da":{"dm":"Mørk tilstand","lm":"Lys tilstand","hd":"Skjul fejlfinding","sd":"Vis fejlfinding"},"de":{"dm":"Dunkler Modus","lm":"Heller Modus","hd":"Debugging ausblenden","sd":"Fehlerbehebung anzeigen"},"el":{"dm":"Σκοτεινή θεματολογία","lm":"Φωτεινή θεματολογία","hd":"Απόκρυψη αποσφαλμάτωσης","sd":"Εμφάνιση αποσφαλμάτωσης"},"en":{"dm":"Dark mode","lm":"Light mode","hd":"Hide debugging","sd":"Show debugging"},"eo":{"dm":"Malhela moduso","lm":"Hela moduso","hd":"Kaŝi la korektadon","sd":"Montri depuradon"},"es":{"dm":"Modo oscuro","lm":"Modo claro","hd":"Ocultar depuración","sd":"Mostrar depuración"},"fi":{"dm":"Tumma tila","lm":"Vaalea tila","hd":"Piilota virheenkorjaus","sd":"Näytä virheenkorjaus"},"fr":{"dm":"Mode sombre","lm":"Mode clair","hd":"Masquer le débogage","sd":"Afficher le débogage"},"fr-CA":{"dm":"Mode nuit","lm":"Mode jour","hd":"Masquer le débogage","sd":"Afficher le débogage"},"he":{"dm":"מצב כהה","lm":"מצב בהיר","hd":"הסתרת תיקון באגים","sd":"הצגת התיקון"},"hu":{"dm":"Sötét mód","lm":"Világos mód","hd":"Hibakeresés elrejtése","sd":"Hibakeresés mutatása"},"id":{"dm":"Mode gelap","lm":"Mode terang","hd":"Sembunyikan debugging","sd":"Tampilkan debugging"},"it":{"dm":"Modalità scura","lm":"Modalità chiara","hd":"Nascondi il debug","sd":"Mostra debug"},"ja":{"dm":"ダークモード","lm":"ライトモード","hd":"デバッグを非表示","sd":"デバッグを表示"},"ka":{"dm":"ბნელი რეჟიმი","lm":"ნათელი რეჟიმი","hd":"ბრძანების მართვა დამალვა","sd":"გამოჩენა დებაგი"},"ko":{"dm":"다크 모드","lm":"라이트 모드","hd":"디버깅 숨기기","sd":"디버깅 표시"},"nb":{"dm":"Mørk modus","lm":"Lys modus","hd":"Skjul feilsøking","sd":"Vis feilsøking"},"nl":{"dm":"Donkere modus","lm":"Lichte modus","hd":"Foutopsporing verbergen","sd":"Foutopsporing weergeven"},"pl":{"dm":"Tryb ciemny","lm":"Tryb jasny","hd":"Ukryj debugowanie","sd":"Pokaż debugowanie"},"pt-BR":{"dm":"Modo escuro","lm":"Modo claro","hd":"Ocultar depuração","sd":"Mostrar depuração"},"ro":{"dm":"Mod întunecat","lm":"Mod luminos","hd":"Ascunde depanarea","sd":"Afișare depanare"},"ru":{"dm":"Темный режим","lm":"Светлый режим","hd":"Скрыть отладку","sd":"Показать отладку"},"sk":{"dm":"Tmavý režim","lm":"Svetlý režim","hd":"Skryť ladenie","sd":"Zobraziť ladenie"},"sr":{"dm":"Тамни режим","lm":"Светла тема","hd":"Сакриј отклањање грешака","sd":"Прикажи отклањање грешака"},"sv":{"dm":"Mörkt läge","lm":"Ljust läge","hd":"Dölj felsökning","sd":"Visa felsökning"},"th":{"dm":"โหมดมืด","lm":"โหมดสว่าง","hd":"ซ่อนการตรวจจับข้อผิดพลาด","sd":"แสดงการแก้ไขข้อผิดพลาด"},"tr":{"dm":"Karanlık mod","lm":"Aydınlık mod","hd":"Hata ayıklamayı gizle","sd":"Hata ayıklama göster"},"uk":{"dm":"Темний режим","lm":"Світлий режим","hd":"Приховати налагодження","sd":"Показати налагодження"},"ug":{"dm":"تېما كۆرسىتىش","lm":"ئاچقۇچ كۆرۈنۈش","hd":"خاتا تۈزۈملىكنى يوشۇرۇش","sd":"كۆرسەتكەن يۇقىرىلاش"},"vi":{"dm":"Chế độ tối","lm":"Chế độ sáng","hd":"Ẩn gỡ lỗi","sd":"Hiển thị gỡ lỗi"},"zh-CN":{"dm":"暗色主题","lm":"浅色主题","hd":"隐藏调试","sd":"显示调试"},"zh-TW":{"dm":"暗黑模式","lm":"淺色主題","hd":"隱藏除錯","sd":"顯示調試"}}};
        try {
            i = lang.index[s];
            r = lang.local[navigator.language][i];
        } catch (e) {
            r = s;
        }
        return r;
    }

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
                    var cf_checkbox = document.querySelector(".ctp-checkbox-label");
                    if (cf_checkbox) {
                        cf_checkbox.click();
                    }
                    console.log(`KeepChatGPT: ${JSON.parse(ifr.contentDocument.body.innerText)['expires']}`);
                    ifr.contentWindow.document.body.style.background = '#555';
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
            var nav = document.querySelector('nav');
            nav.insertBefore(ndiv, nav.childNodes[0]);
            ndiv.insertAdjacentHTML('afterend', `<div><ul class="dropdown-menu"><li id=nmenuid1>${TL("显示调试")}</li><li id=nmenuid2>${TL("暗色主题")}</li></ul></div>`);
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

.dropdown-menu {
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
  top: 7px;
  left: 250px;
}
.dropdown-menu li {
  display: block;
  padding: 8px 24px;
  text-align: left;
  user-select: none;
}
.dropdown-menu li:hover {
  background-color: #273746;
  cursor: pointer;
}

.rounded-sm {
  user-select: none;
}
`;
            document.body.appendChild(newstyle);
            var newscript = document.createElement('script');
            newscript.innerHTML = `
var dropdownButton = document.querySelector('#ndivid');
var dropdownMenu = document.querySelector('.dropdown-menu');

dropdownButton.onmouseover = dropdownMenu.onmouseover = function() {
  dropdownMenu.style.display = 'block';
};

dropdownButton.onmouseleave = dropdownMenu.onmouseleave = function() {
  dropdownMenu.style.display = 'none';
};

nmenuid1.onclick = function() {
    if (xcanwin.style.display == "none") {
        xcanwin.style.display = "";
        nmenuid1.innerText = TL("隐藏调试");
    } else {
        xcanwin.style.display = "none";
        nmenuid1.innerText = TL("显示调试");
    }
};
nmenuid2.onclick = function() {
    if (nmenuid2.innerText == TL("暗色主题")) {
        ndivid.styleOrigin = ndivid.style;
        ndivid.style.background = "#2C3E50";
        ndivid.style.animation = "none";
        ndivid.style.color = "#ffffff";
        nmenuid2.innerText = TL("浅色主题");
    } else {
        ndivid.style = ndivid.styleOrigin;
        nmenuid2.innerText = TL("暗色主题");
    }
};
`;
            document.body.appendChild(newscript);
        }
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
