// ==UserScript==
// @name              KeepChatGPT
// @description       让我们在使用ChatGPT过程中更高效、更顺畅，完美解决ChatGPT网络错误，不再频繁地刷新网页，足足省去10个多余的步骤。还可以取消后台监管审计。解决了这几类报错: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) This content may violate our content policy. If you believe this to be in error, please submit your feedback — your input will aid our research in this area.
// @version           6.2
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
// @description:zh-CN 让我们在使用ChatGPT过程中更高效、更顺畅，完美解决ChatGPT网络错误，不再频繁地刷新网页，足足省去10个多余的步骤。还可以取消后台监管审计。解决了这几类报错: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com. (3) This content may violate our content policy. If you believe this to be in error, please submit your feedback — your input will aid our research in this area.
// @description:zh-TW 讓我們在使用ChatGPT過程中更高效、更順暢，完美解決ChatGPT網絡錯誤，不再頻繁地刷新網頁，足足省去10個多餘的步驟。解決了這幾類報錯: (1) NetworkError when attempting to fetch resource. (2) Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
// @icon              data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" stroke-width="2" fill="none" stroke="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
// @license           GPL-2.0-only
// @match             https://chat.openai.com/chat*
// @grant             GM_addStyle
// @grant             GM_addElement
// @grant             GM_setValue
// @grant             GM_getValue
// @run-at            document-idie
// ==/UserScript==


(function() {
    'use strict';

    var qs = document.querySelector.bind(document);

    var tl = function(s) {
        var lang = {'index': {'暗色主题': 'dm', '浅色主题': 'lm', '显示调试': 'sd', '取消审计': 'cm'}, 'local': {'ar': {'dm': 'الوضع الداكن', 'lm': 'وضع فاتح', 'sd': 'إظهار التصحيح', 'cm': 'إلغاء التدقيق'}, 'bg': {'dm': 'Тъмна тема', 'lm': 'Светла тема', 'sd': 'Показване на отстраняване на грешки', 'cm': 'Отказ от одит'}, 'cs': {'dm': 'Tmavý režim', 'lm': 'Světlý režim', 'sd': 'Zobrazit ladění', 'cm': 'Zrušení auditu'}, 'da': {'dm': 'Mørk tilstand', 'lm': 'Lys tilstand', 'sd': 'Vis fejlfinding', 'cm': 'Annuller revision'}, 'de': {'dm': 'Dunkler Modus', 'lm': 'Heller Modus', 'sd': 'Fehlerbehebung anzeigen', 'cm': 'Prüfung abbrechen'}, 'el': {'dm': 'Σκοτεινή θεματολογία', 'lm': 'Φωτεινή θεματολογία', 'sd': 'Εμφάνιση αποσφαλμάτωσης', 'cm': 'Ακύρωση ελέγχου'}, 'en': {'dm': 'Dark mode', 'lm': 'Light mode', 'sd': 'Show debugging', 'cm': 'Cancel audit'}, 'eo': {'dm': 'Malhela moduso', 'lm': 'Hela moduso', 'sd': 'Montri depuradon', 'cm': 'Nuligi kontroli'}, 'es': {'dm': 'Modo oscuro', 'lm': 'Modo claro', 'sd': 'Mostrar depuración', 'cm': 'Cancelar auditoría'}, 'fi': {'dm': 'Tumma tila', 'lm': 'Vaalea tila', 'sd': 'Näytä virheenkorjaus', 'cm': 'Peruuta tarkistus'}, 'fr': {'dm': 'Mode sombre', 'lm': 'Mode clair', 'sd': 'Afficher le débogage', 'cm': "Annuler l'audit"}, 'fr-CA': {'dm': 'Mode nuit', 'lm': 'Mode jour', 'sd': 'Afficher le débogage', 'cm': 'Annuler la vérification'}, 'he': {'dm': 'מצב כהה', 'lm': 'מצב בהיר', 'sd': 'הצגת התיקון', 'cm': 'ביטול ביקורת'}, 'hu': {'dm': 'Sötét mód', 'lm': 'Világos mód', 'sd': 'Hibakeresés mutatása', 'cm': 'Ellenőrzés megszüntetése'}, 'id': {'dm': 'Mode gelap', 'lm': 'Mode terang', 'sd': 'Tampilkan debugging', 'cm': 'Batalkan audit'}, 'it': {'dm': 'Modalità scura', 'lm': 'Modalità chiara', 'sd': 'Mostra debug', 'cm': 'Annulla verifica'}, 'ja': {'dm': 'ダークモード', 'lm': 'ライトモード', 'sd': 'デバッグを表示', 'cm': '監査をキャンセル'}, 'ka': {'dm': 'ბნელი რეჟიმი', 'lm': 'ნათელი რეჟიმი', 'sd': 'გამოჩენა დებაგი', 'cm': 'ანულირება აუდიტი'}, 'ko': {'dm': '다크 모드', 'lm': '라이트 모드', 'sd': '디버깅 표시', 'cm': '감사 취소'}, 'nb': {'dm': 'Mørk modus', 'lm': 'Lys modus', 'sd': 'Vis feilsøking', 'cm': 'Avbryt revisjonen'}, 'nl': {'dm': 'Donkere modus', 'lm': 'Lichte modus', 'sd': 'Foutopsporing weergeven', 'cm': 'Controle annuleren'}, 'pl': {'dm': 'Tryb ciemny', 'lm': 'Tryb jasny', 'sd': 'Pokaż debugowanie', 'cm': 'Anuluj audyt'}, 'pt-BR': {'dm': 'Modo escuro', 'lm': 'Modo claro', 'sd': 'Mostrar depuração', 'cm': 'Cancelar auditoria'}, 'ro': {'dm': 'Mod întunecat', 'lm': 'Mod luminos', 'sd': 'Afișare depanare', 'cm': 'Anulare audit'}, 'ru': {'dm': 'Темный режим', 'lm': 'Светлый режим', 'sd': 'Показать отладку', 'cm': 'Отменить аудит'}, 'sk': {'dm': 'Tmavý režim', 'lm': 'Svetlý režim', 'sd': 'Zobraziť ladenie', 'cm': 'Zrušiť audit'}, 'sr': {'dm': 'Тамни режим', 'lm': 'Светла тема', 'sd': 'Прикажи отклањање грешака', 'cm': 'Откажи ревизију'}, 'sv': {'dm': 'Mörkt läge', 'lm': 'Ljust läge', 'sd': 'Visa felsökning', 'cm': 'Avbryt revision'}, 'th': {'dm': 'โหมดมืด', 'lm': 'โหมดสว่าง', 'sd': 'แสดงการแก้ไขข้อผิดพลาด', 'cm': 'ยกเลิกการตรวจสอบ'}, 'tr': {'dm': 'Karanlık mod', 'lm': 'Aydınlık mod', 'sd': 'Hata ayıklama göster', 'cm': 'Denetimi İptal Et'}, 'uk': {'dm': 'Темний режим', 'lm': 'Світлий режим', 'sd': 'Показати налагодження', 'cm': 'Скасувати аудит'}, 'ug': {'dm': 'تېما كۆرسىتىش', 'lm': 'ئاچقۇچ كۆرۈنۈش', 'sd': 'كۆرسەتكەن يۇقىرىلاش', 'cm': 'ئەمەلدىن قالدۇرۇش'}, 'vi': {'dm': 'Chế độ tối', 'lm': 'Chế độ sáng', 'sd': 'Hiển thị gỡ lỗi', 'cm': 'Hủy đánh giá'}, 'zh-CN': {'dm': '暗色主题', 'lm': '浅色主题', 'sd': '显示调试', 'cm': '取消审计'}, 'zh-TW': {'dm': '暗黑模式', 'lm': '淺色主題', 'sd': '顯示調試', 'cm': '取消稽核'}}};
        var i, r;
        try {
            i = lang.index[s];
            r = lang.local[navigator.language][i];
        } catch (e) {
            r = s;
        }
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
        if (qs("#xcanwin")==null) {
            var nIfr = document.createElement('iframe');
            nIfr.id = "xcanwin";
            nIfr.style = `height: 0px; width: 100%;`;
            if (u) {
                nIfr.src = u;
            }
            nIfr.onload = function() {
                var nIfrText = qs("#xcanwin").contentWindow.document.documentElement.innerText;
                try {
                    qs("#xcanwin").contentWindow.document.documentElement.style = `background: #555; height: 360px; width: 1080px; overflow; auto;`;
                    if (nIfrText.indexOf(`"expires":"`) > -1) {
                        console.log(`KeepChatGPT: IFRAME: Expire date: ${formatDate(JSON.parse(nIfrText).expires)}`);
                    } else if (nIfrText.match(/Please stand by|while we are checking your browser|Please turn JavaScript on|Please enable Cookies|reload the page/)) {
                        console.log(`KeepChatGPT: IFRAME: BypassCF`);
                    }
                } catch (e) {
                    console.log(`KeepChatGPT: IFRAME: ERROR: ${e},\nERROR RESPONSE:\n${nIfrText}`);
                }
            };
            qs("nav").appendChild(nIfr);
        } else{
            if (u) {
                qs("#xcanwin").src = u;
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
                        qs("#xcanwin").contentWindow.document.documentElement.innerHTML = data;
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

    var loadhead = function() {
        if (qs("#kcg")!==null) {return;}
        var ndiv = document.createElement("div");
        ndiv.id = "kcg";
        ndiv.setAttribute("class", qs("nav a.flex").className);
        ndiv.innerHTML = `<img src='${GM_info.script.icon}' /><a href='${GM_info.script.namespace}'>Keep${ndiv.id.slice(1,2).toUpperCase()}hatGPT by x${ndiv.id.slice(1,2)}anwin</a>`;
        var nav = qs('nav');
        nav.insertBefore(ndiv, nav.childNodes[0]);
        ndiv.insertAdjacentHTML('afterend', `<div><ul class="dropdown-menu"><li id=nmenuid1>${gv("k_showDebug", false)?tl("显示调试")+"✓":tl("显示调试")+"✗"}</li><li id=nmenuid2>${gv("k_theme", "light")=="light"?tl("浅色主题")+"✓":tl("暗色主题")+"✓"}</li><li id=nmenuid3>${gv("k_closeModer", false)==false?tl("取消审计")+"✗":tl("取消审计")+"✓"}</li></ul></div>`);

        setIfr(u);

        var dropdownMenu = qs('.dropdown-menu');
        qs('#kcg').onmouseover = dropdownMenu.onmouseover = function() {
            dropdownMenu.style.display = 'block';
        };
        qs('#kcg').onmouseleave = dropdownMenu.onmouseleave = function() {
            dropdownMenu.style.display = 'none';
        };

        qs('#nmenuid1').onclick = function() {
            if (gv("k_showDebug", false) == true) {
                if (qs('#xcanwin')) qs('#xcanwin').style.height = '0px';
                qs('#nmenuid1').innerText = tl("显示调试")+"✗";
                sv("k_showDebug", false);
            } else {
                if (qs('#xcanwin')) qs('#xcanwin').style.height = '125px';
                qs('#nmenuid1').innerText = tl("显示调试")+"✓";
                sv("k_showDebug", true);
            }
        };
        qs('#nmenuid2').onclick = function() {
            if (gv("k_theme", "light") == "light") {
                qs('#kcg').styleOrigin = qs('#kcg').style;
                qs('#kcg').style.background = "#2C3E50";
                qs('#kcg').style.animation = "none";
                qs('#kcg').style.color = "#ffffff";
                qs('#nmenuid2').innerText = tl("暗色主题")+"✓";
                sv("k_theme", "dark");
            } else {
                qs('#kcg').style = qs('#kcg').styleOrigin;
                qs('#nmenuid2').innerText = tl("浅色主题")+"✓";
                sv("k_theme", "light");
            }
        };
        qs('#nmenuid3').onclick = function() {
            if (gv("k_closeModer", false) == true) {
                byeModer(false);
                qs('#nmenuid3').innerText = tl("取消审计")+"✗";
                sv("k_closeModer", false);
            } else {
                byeModer(true);
                qs('#nmenuid3').innerText = tl("取消审计")+"✓";
                sv("k_closeModer", true);
            }
        };
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
    left: calc(100% + 10px);
}
.dropdown-menu::before {
  content: "";
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: -30px;
  right: 0px;
  pointer-events: auto;
  z-index: -1;
}
.dropdown-menu::after {
  content: "";
  position: absolute;
  top: 20px;
  left: -20px;
  border-style: solid;
  border-width: 10px 10px 10px 10px;
  border-color: transparent #202123 transparent transparent;
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

nav {
    position: relative;
}
`);
    }

    var byeModer = function(action) {
        if (typeof _fetch == 'undefined') {
            var _fetch = fetch;
        }
        if (action == true) {
            unsafeWindow.fetch = new Proxy(fetch, {
                apply: function (target, thisArg, argumentsList) {
                    return argumentsList[0].includes('moderations') ? Promise.resolve({}) : target.apply(thisArg, argumentsList);
                }
            });
        } else {
            unsafeWindow.fetch = _fetch;
        }
    };

    setInterval(function() {
        if (qs("nav a.flex")) {
            loadhead();
        }
    }, 300);

    setInterval(function() {
        if (qs("nav a.flex")) {
            keepChat();
        }
    }, 1000 * 30);

    var u = `/api/${GM_info.script.author.slice(2,3)}uth/s${GM_info.script.name.slice(1, 2)}ssion`;

})();
