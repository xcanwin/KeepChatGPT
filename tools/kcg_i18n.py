#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
# 作用：

本脚本用于实现KeepChatGPT多语言化

# 使用方法：

## 第一步、

明确想要本地化的词汇，例如：
建议间隔30秒

## 第二步、

翻译成各国的临时语言包，向ChatGPT发送以下指令:
ar,bg,cs,da,de,el,en,eo,es,fi,fr,fr-CA,he,hu,id,it,ja,ka,ko,nb,nl,pl,pt-BR,ro,ru,sk,sr,sv,th,tr,uk,ug,vi,zh-CN,zh-TW
按照上述国家顺序翻译一句话，并且按照我要求的格式逐行输出
格式要求：国家缩写: 翻译后的文字
冒号后面首字母需要大写
例如翻译"显示调试"的结果是: en: Show debug window
接下来，请翻译: 建议间隔30秒

## 第三步、

配置本脚本以下几个变量：
lang：将KeepChatGPT中的lang变量值复制粘贴到这里
new_str：填写想要本地化的词汇，例如建议间隔30秒，随意填，如果重复了就会覆盖
new_str_min：填本地化词汇的英文缩写，例如si，随意填，如果重复了就会覆盖
transle_tmp：将ChatGPT翻译的结果复制粘贴到这里

## 第四步、

运行，并把结果复制粘贴到KeepChatGPT中的lang变量值。

"""

import json, os

def lang_add(lang, new_str, new_str_min, transle_tmp):
    lang["index"].update({new_str: new_str_min})
    transle_tmp = transle_tmp.replace("\r", "")
    for t in transle_tmp.split("\n"):
        if t.strip():
            key = t.split(":")[0].strip()
            value = "".join(t.split(":")[1:]).strip()
            lang["local"][key].update({new_str_min: value})
    return lang

def lang_del(lang, del_str, del_str_min):
    if del_str in lang["index"] and del_str_min == lang["index"][del_str]:
        del lang["index"][del_str]
        for l in lang["local"]:
            if del_str_min in lang["local"][l]:
                del lang["local"][l][del_str_min]
    return lang

def format_json(lang):
    langStr = ''
    langStr += '{' + '\n'
    langStr += '    "index": %s,' % (json.dumps(lang['index'], ensure_ascii = False)) + '\n'
    langStr += '    "local": {' + '\n'
    lj = []
    for country, langjson in lang['local'].items():
        lj.append('"%s": %s' % (country, json.dumps(langjson, ensure_ascii = False)))
    lj = ',\n'.join(lj)
    langStr += lj + '\n'
    langStr += '    }' + '\n'
    langStr += '}'
    return langStr

def save(data, outfile):
    if not os.path.exists('test'):
        os.mkdir('test')
    open(outfile, 'wb').write(data.encode())

def main():
    lang = '''
{
    "index": {"暗色主题": "dm", "显示调试": "sd", "取消审计": "cm", "取消动画": "ca", "关于": "ab", "建议间隔50秒": "si", "调整间隔": "mi", "检查更新": "cu", "当前版本": "cv", "发现最新版": "dl", "已是最新版": "lv", "克隆对话": "cc", "净化页面": "pp", "展示大屏": "ls", "展示全屏": "fs", "言无不尽": "sc", "拦截跟踪": "it", "日新月异": "ec", "赞赏鼓励": "ap"},
    "local": {
"ar": {"dm": "الوضع الداكن", "sd": "إظهار التصحيح", "cm": "إلغاء التدقيق", "ca": "إلغاء الرسوم المتحركة", "ab": "حول", "si": "اقتراح فاصل زمني 50 ثانية", "mi": "تعديل الفاصل", "cu": "التحقق من التحديثات", "cv": "الإصدار الحالي", "dl": "اكتشف أحدث إصدار", "lv": "أحدث إصدار", "cc": "استنساخ المحادثة", "pp": "تنقية الصفحة", "ls": "عرض الشاشة الكبيرة", "fs": "عرض بملء الشاشة", "sc": "تحدث بشكل كامل", "it": "اعتراض التتبع", "ec": "التغير المستمر", "ap": "تقدير"},
"bg": {"dm": "Тъмна тема", "sd": "Показване на отстраняване на грешки", "cm": "Отказ от одит", "ca": "Отмяна на анимацията", "ab": "За", "si": "Предложете интервал от 50 секунди", "mi": "Промяна на интервала", "cu": "Проверка на актуализации", "cc": "Клониране на разговора", "pp": "Почистване на страницата", "ls": "Показване на голям екран", "fs": "Показване на цял екран", "sc": "Говорете пълно", "it": "Прихващане на проследяването", "ec": "Непрекъснато променящ се", "ap": "Оценка"},
"cs": {"dm": "Tmavý režim", "sd": "Zobrazit ladění", "cm": "Zrušení auditu", "ca": "Zrušit animaci", "ab": "O", "si": "Navrhnout interval 50 sekund", "mi": "Upravit interval", "cu": "Kontrola aktualizací", "cc": "Klonovat konverzaci", "pp": "Očistit stránku", "ls": "Zobrazení velkého displeje", "fs": "Zobrazit na celou obrazovku", "sc": "Mluvte úplně", "it": "Zachytávání sledování", "ec": "Neustále se měnící", "ap": "Ocenění"},
"da": {"dm": "Mørk tilstand", "sd": "Vis fejlfinding", "cm": "Annuller revision", "ca": "Annuller animation", "ab": "Om", "si": "Forslag interval på 50 sekunder", "mi": "Ændre interval", "cu": "Tjek for opdateringer", "cc": "Klon samtalen", "pp": "Rensning af siden", "ls": "Vis stor skærm", "fs": "Vis i fuld skærm", "sc": "Fuldfør udtalelsen", "it": "Interceptor sporing", "ec": "Konstant forandring", "ap": "Værdssættelse"},
"de": {"dm": "Dunkler Modus", "sd": "Fehlerbehebung anzeigen", "cm": "Prüfung abbrechen", "ca": "Animation abbrechen", "ab": "Über", "si": "Vorschlag für Intervall von 50 Sekunden", "mi": "Intervall bearbeiten", "cu": "Überprüfung auf Updates", "cv": "Aktuelle Version", "dl": "Entdecken Sie die neueste Version", "lv": "ist die neueste Version", "cc": "Konversation klonen", "pp": "Seite bereinigen", "ls": "Großen Bildschirm anzeigen", "fs": "Vollbild anzeigen", "sc": "Sprich vollständig", "it": "Tracking abfangen", "ec": "Ständiger Wandel", "ap": "Wertschätzung"},
"el": {"dm": "Σκοτεινή θεματολογία", "sd": "Εμφάνιση αποσφαλμάτωσης", "cm": "Ακύρωση ελέγχου", "ca": "Ακύρωση κινούμενων σχεδίων", "ab": "Σχετικά με", "si": "Προτείνετε διάστημα 50 δευτερολέπτων", "mi": "Τροποποίηση διαστήματος", "cu": "Έλεγχος ενημερώσεων", "cc": "Κλωνοποίηση συνομιλίας", "pp": "Καθαρισμός σελίδας", "ls": "Εμφάνιση μεγάλης οθόνης", "fs": "Εμφάνιση πλήρους οθόνης", "sc": "Ολοκλήρωσε την ομιλία", "it": "Ανίχνευση παρακολούθησης", "ec": "Αδιάκοπη αλλαγή", "ap": "Εκτίμηση"},
"en": {"dm": "Dark mode", "sd": "Show debugging", "cm": "Cancel audit", "ca": "Cancel animation", "ab": "About", "si": "Suggest interval of 50 seconds; The author usually sets 900", "mi": "Modify interval", "cu": "Check for updates", "cv": "Current version", "dl": "Discover the latest version", "lv": "is the latest version", "cc": "Conversation cloning", "pp": "Purified page", "ls": "Wide display mode", "fs": "Fullscreen mode", "sc": "Complete response", "it": "Intercept tracking", "ec": "More chat info", "ap": "Sponsor"},
"eo": {"dm": "Malhela moduso", "sd": "Montri depuradon", "cm": "Nuligi kontroli", "ca": "Nuligi animacion", "ab": "Pri", "si": "Sugesti intervalon de 50 sekundoj", "mi": "Modifi intervalon", "cu": "Kontroli ĝisdatigojn", "cc": "Kloni konversacion", "pp": "Pura paĝo", "ls": "Montri grandan ekrane", "fs": "Montri plenekranon", "sc": "Parolu plene", "it": "Intercepti Trakadon", "ec": "Ĉiam ŝanĝiĝanta", "ap": "Aprobo"},
"es": {"dm": "Modo oscuro", "sd": "Mostrar depuración", "cm": "Cancelar auditoría", "ca": "Cancelar animación", "ab": "Acerca de", "si": "Sugerir un intervalo de 50 segundos", "mi": "Modificar intervalo", "cu": "Comprobar actualizaciones", "cv": "Versión actual", "dl": "Descubre la última versión", "lv": "es la última versión", "cc": "Clonar conversación", "pp": "Purificar página", "ls": "Mostrar pantalla grande", "fs": "Mostrar pantalla completa", "sc": "Termina tu discurso", "it": "Interceptar Rastreo", "ec": "Cambio constante", "ap": "Apreciación"},
"fi": {"dm": "Tumma tila", "sd": "Näytä virheenkorjaus", "cm": "Peruuta tarkistus", "ca": "Peruuta animaatio", "ab": "Tietoa", "si": "Ehdota 50 sekunnin väliaikaa", "mi": "Muokkaa väliä", "cu": "Tarkista päivitykset", "cc": "Kloonaa keskustelu", "pp": "Puhdista sivu", "ls": "Näytä suuri näyttö", "fs": "Näytä koko näyttö", "sc": "Puhu loppuun asti", "it": "Sieppaa seuranta", "ec": "Jatkuvasti muuttuva", "ap": "Arvostus"},
"fr": {"dm": "Mode sombre", "sd": "Afficher le débogage", "cm": "Annuler l'audit", "ca": "Annuler l'animation", "ab": "À propos de", "si": "Suggérer un intervalle de 50 secondes", "mi": "Modifier l'intervalle", "cu": "Vérifier les mises à jour", "cv": "Version actuelle", "dl": "Découvrir la dernière version", "lv": "est la dernière version", "cc": "Cloner la conversation", "pp": "Purifier la page", "ls": "Afficher grand écran", "fs": "Afficher en plein écran", "sc": "Parlez complètement", "it": "Interception de suivi", "ec": "En perpétuelle évolution", "ap": "Appréciation"},
"fr-CA": {"dm": "Mode nuit", "sd": "Afficher le débogage", "cm": "Annuler la vérification", "ca": "Annuler l'animation", "ab": "À propos de", "si": "Suggérer un intervalle de 50 secondes", "mi": "Modifier l'intervalle", "cu": "Vérifier les mises à jour", "cv": "Version actuelle", "dl": "Découvrir la dernière version", "lv": "est la dernière version", "cc": "Cloner la conversation", "pp": "Purifier la page", "ls": "Afficher grand écran", "fs": "Afficher en plein écran", "sc": "Parlez complètement", "it": "Intercepter le suivi", "ec": "Évolution constante", "ap": "Appréciation"},
"he": {"dm": "מצב כהה", "sd": "הצגת התיקון", "cm": "ביטול ביקורת", "ca": "בטל אנימציה", "ab": "אודות", "si": "הצע מרווח של 50 שניות", "mi": "שינוי מרווח", "cu": "בדיקת עדכונים", "cc": "שכפול שיחה", "pp": "טיהור הדף", "ls": "תצוגת מסך גדול", "fs": "הצג מסך מלא", "sc": "דבר במלואו", "it": "התערבות במעקב", "ec": "שינוי מתמיד", "ap": "הערכה"},
"hu": {"dm": "Sötét mód", "sd": "Hibakeresés mutatása", "cm": "Ellenőrzés megszüntetése", "ca": "Animáció törlése", "ab": "Rólunk", "si": "Javaslat 50 másodperces időközre", "mi": "Időköz módosítása", "cu": "Frissítések keresése", "cc": "Beszélgetés klónozása", "pp": "Oldal tisztítása", "ls": "Nagy képernyő megjelenítése", "fs": "Teljes képernyő megjelenítése", "sc": "Beszélj teljesen", "it": "Követés elfogása", "ec": "Folyamatos változás", "ap": "Elismerés"},
"id": {"dm": "Mode gelap", "sd": "Tampilkan debugging", "cm": "Batalkan audit", "ca": "Batalkan animasi", "ab": "Tentang", "si": "Sarankan interval 50 detik", "mi": "Modifikasi interval", "cu": "Periksa Pembaruan", "cc": "Klon percakapan", "pp": "Membersihkan halaman", "ls": "Tampilkan layar besar", "fs": "Tampilkan layar penuh", "sc": "Berbicara secara lengkap", "it": "Intersepsi Pelacakan", "ec": "Perubahan terus-menerus", "ap": "Penghargaan"},
"it": {"dm": "Modalità scura", "sd": "Mostra debug", "cm": "Annulla verifica", "ca": "Annulla animazione", "ab": "Riguardo a", "si": "Suggerisci un intervallo di 50 secondi", "mi": "Modifica intervallo", "cu": "Verifica aggiornamenti", "cv": "Versione attuale", "dl": "Scopri l'ultima versione", "lv": "è l'ultima versione", "cc": "Clona conversazione", "pp": "Purifica pagina", "ls": "Mostra grande schermo", "fs": "Mostra a schermo intero", "sc": "Parla completamente", "it": "Intercettare il tracciamento", "ec": "Cambiamento costante", "ap": "Apprezzamento"},
"ja": {"dm": "ダークモード", "sd": "デバッグを表示", "cm": "監査をキャンセル", "ca": "アニメーションのキャンセル", "ab": "について", "si": "50秒間隔を提案する", "mi": "間隔を変更する", "cu": "更新をチェックする", "cv": "現在のバージョン", "dl": "最新バージョンを発見する", "lv": "最新バージョンです", "cc": "会話をクローンする", "pp": "ページを浄化する", "ls": "ビッグスクリーンを表示する", "fs": "フルスクリーン表示", "sc": "完全に話してください", "it": "トラッキングの傍受", "ec": "絶え間ない変化", "ap": "評価"},
"ka": {"dm": "ბნელი რეჟიმი", "sd": "გამოჩენა დებაგი", "cm": "ანულირება აუდიტი", "ca": "ანიმაციის გაუქმება", "ab": "შესახებ", "si": "50 წამის ინტერვალის შეტანა", "mi": "ინტერვალის შეცვლა", "cu": "განახლებების შემოწმება", "cc": "კონვერსაციის კლონირება", "pp": "გვერდის გაწმენდა", "ls": "დიდი ეკრანის გამოსახულება", "fs": "მთელი ეკრანის ჩვენება", "sc": "სრულად ილაპარაკეთ", "it": "თვალყური მისმართავა", "ec": "მუდმივი ცვლილება", "ap": "შეფასება"},
"ko": {"dm": "다크 모드", "sd": "디버깅 표시", "cm": "감사 취소", "ca": "애니메이션 취소", "ab": "관하여", "si": "50초 간격 건의", "mi": "간격 수정", "cu": "업데이트 확인", "cv": "현재 버전", "dl": "최신 버전 찾기", "lv": "최신 버전입니다.", "cc": "대화 복제", "pp": "페이지 정화", "ls": "큰 화면 표시", "fs": "전체 화면 표시", "sc": "완전히 말하세요", "it": "추적 가로채기", "ec": "끊임없는 변화", "ap": "감사"},
"nb": {"dm": "Mørk modus", "sd": "Vis feilsøking", "cm": "Avbryt revisjonen", "ca": "Avbryt animasjon", "ab": "Om", "si": "Forslag om et intervall på 50 sekunder", "mi": "Endre intervall", "cu": "Sjekk etter oppdateringer", "cc": "Klon samtalen", "pp": "Rens side", "ls": "Vis stor skjerm", "fs": "Vis i fullskjerm", "sc": "Snakk fullstendig", "it": "Intercept sporing", "ec": "Kontinuerlig endring", "ap": "Verdsatt"},
"nl": {"dm": "Donkere modus", "sd": "Foutopsporing weergeven", "cm": "Controle annuleren", "ca": "Animatie annuleren", "ab": "Over", "si": "Stel een interval van 50 seconden voor", "mi": "Interval wijzigen", "cu": "Controleren op updates", "cc": "Gesprek klonen", "pp": "Pagina zuiveren", "ls": "Groot scherm weergeven", "fs": "Volledig scherm weergeven", "sc": "Spreek volledig uit", "it": "Onderscheppen van tracking", "ec": "Voortdurende verandering", "ap": "Waardering"},
"pl": {"dm": "Tryb ciemny", "sd": "Pokaż debugowanie", "cm": "Anuluj audyt", "ca": "Anuluj animację", "ab": "O", "si": "Zasugeruj interwał 50 sekund", "mi": "Zmień interwał", "cu": "Sprawdź aktualizacje", "cc": "Klonuj rozmowę", "pp": "Oczyść stronę", "ls": "Wyświetl duży ekran", "fs": "Wyświetl pełny ekran", "sc": "Mów całkowicie", "it": "Przechwytywanie śledzenia", "ec": "Ciągłe zmiany", "ap": "Docenienie"},
"pt-BR": {"dm": "Modo escuro", "sd": "Mostrar depuração", "cm": "Cancelar auditoria", "ca": "Cancelar animação", "ab": "Sobre", "si": "Sugira um intervalo de 50 segundos", "mi": "Modificar intervalo", "cu": "Verificar atualizações", "cc": "Clonar conversa", "pp": "Purificar página", "ls": "Exibir tela grande", "fs": "Exibir em tela cheia", "sc": "Fale completamente", "it": "Interceptar Rastreamento", "ec": "Mudança constante", "ap": "Apreciação"},
"ro": {"dm": "Mod întunecat", "sd": "Afișare depanare", "cm": "Anulare audit", "ca": "Anulare animație", "ab": "Despre", "si": "Sugerați un interval de 50 secunde", "mi": "Modificați intervalul", "cu": "Verifică actualizări", "cc": "Clonează conversația", "pp": "Purificare pagină", "ls": "Afișare ecran mare", "fs": "Afișare pe tot ecranul", "sc": "Vorbiți complet", "it": "Interceptarea urmăririi", "ec": "Schimbare continuă", "ap": "Apreciere"},
"ru": {"dm": "Темный режим", "sd": "Показать отладку", "cm": "Отменить аудит", "ca": "Отменить анимацию", "ab": "О", "si": "Предложить интервал в 50 секунд", "mi": "Изменить интервал", "cu": "Проверить обновления", "cc": "Клонировать диалог", "pp": "Очистить страницу", "ls": "Показать большой экран", "fs": "Показать на полный экран", "sc": "Говорите полностью", "it": "Перехват отслеживания", "ec": "Постоянное изменение", "ap": "Признательность"},
"sk": {"dm": "Tmavý režim", "sd": "Zobraziť ladenie", "cm": "Zrušiť audit", "ca": "Zrušiť animáciu", "ab": "O", "si": "Navrhnúť interval 50 sekúnd", "mi": "Zmena intervalu", "cu": "Kontrola aktualizácií", "cc": "Klonovať konverzáciu", "pp": "Očistiť stránku", "ls": "Zobraziť veľkú obrazovku", "fs": "Zobraziť na celú obrazovku", "sc": "Hovorte úplne", "it": "Zachytenie sledovania", "ec": "Neustále sa meniace", "ap": "Ocenenie"},
"sr": {"dm": "Тамни режим", "sd": "Прикажи отклањање грешака", "cm": "Откажи ревизију", "ca": "Откажи анимацију", "ab": "О", "si": "Predložiti interval od 50 sekundi", "mi": "Измена интервала", "cu": "Provera ažuriranja", "cc": "Клонирај разговор", "pp": "Прочисти страницу", "ls": "Прикажи велики екран", "fs": "Прикажи на целом екрану", "sc": "Говорите у потпуности", "it": "Пресретање праћења", "ec": "Непрестана промена", "ap": "Поштовање"},
"sv": {"dm": "Mörkt läge", "sd": "Visa felsökning", "cm": "Avbryt revision", "ca": "Avbryt animation", "ab": "Om", "si": "Föreslå intervall på 50 sekunder", "mi": "Ändra intervall", "cu": "Kontrollera uppdateringar", "cc": "Klonar samtal", "pp": "Rensa sidan", "ls": "Visa stor skärm", "fs": "Visa i helskärm", "sc": "Tala helt klart", "it": "Interceptera spårning", "ec": "Ständig förändring", "ap": "Uppskattning"},
"th": {"dm": "โหมดมืด", "sd": "แสดงการแก้ไขข้อผิดพลาด", "cm": "ยกเลิกการตรวจสอบ", "ca": "ยกเลิกการเคลื่อนไหว", "ab": "เกี่ยวกับ", "si": "เสนอช่วงเวลา 50 วินาที", "mi": "แก้ไขระยะห่าง", "cu": "ตรวจสอบการอัปเดต", "cc": "โคลนสนทนา", "pp": "ทำความสะอาดหน้า", "ls": "แสดงหน้าจอใหญ่", "fs": "แสดงแบบเต็มหน้าจอ", "sc": "พูดคุยให้เสร็จสิ้น", "it": "การดักจับการติดตาม", "ec": "การเปลี่ยนแปลงตลอดเวลา", "ap": "การประเมินค่า"},
"tr": {"dm": "Karanlık mod", "sd": "Hata ayıklama göster", "cm": "Denetimi İptal Et", "ca": "Animasyonu iptal et", "ab": "Hakkında", "si": "50 saniyelik aralık önerin", "mi": "Aralığı değiştir", "cu": "Güncelleştirmeleri kontrol et", "cc": "Sohbeti kopyala", "pp": "Sayfayı temizle", "ls": "Büyük ekranı görüntüle", "fs": "Tam ekran görüntüle", "sc": "Tamamlayın konuşmayı", "it": "İzlemeyi Engellemek", "ec": "Sürekli değişim", "ap": "Takdir"},
"uk": {"dm": "Темний режим", "sd": "Показати налагодження", "cm": "Скасувати аудит", "ca": "Скасувати анімацію", "ab": "Про", "si": "Запропонуйте інтервал у 50 секунд", "mi": "Змінити інтервал", "cu": "Перевірити оновлення", "cc": "Клонувати діалог", "pp": "Очистити сторінку", "ls": "Відобразити великий екран", "fs": "Показати на повний екран", "sc": "Говоріть повністю", "it": "Перехоплення відстеження", "ec": "Постійна зміна", "ap": "Вдячність"},
"ug": {"dm": "تېما كۆرسىتىش", "sd": "كۆرسەتكەن يۇقىرىلاش", "cm": "ئەمەلدىن قالدۇرۇش", "ca": "ئېنىماتىكىنى بىكار قىلىش", "ab": "ئۇچۇرلىق", "si": "50 سىكونتلىك ئارىلىقنى سۇنۇشتۇرۇش", "mi": "ئارىلىق ئۆزگەرتىش", "cu": "يېڭىلانما كۆزەت", "cc": "كۆپچەي ئىككىلىش", "pp": "چۈشۈرۈش بەت", "ls": "كۆرسىتىش چوڭ ئېكران", "fs": "تولانما پۈتۈن ئېكران", "sc": "تاماملا سۆزلىشىڭىز", "it": "قولايلىنىش تىزىتكۈن", "ec": "تەڭشەك ئىستىقامەت", "ap": "قىلىش"},
"vi": {"dm": "Chế độ tối", "sd": "Hiển thị gỡ lỗi", "cm": "Hủy đánh giá", "ca": "Hủy hoạt hình", "ab": "Về", "si": "Đề xuất khoảng thời gian 50 giây", "mi": "Sửa khoảng cách", "cu": "Kiểm tra cập nhật", "cc": "Sao chép cuộc trò chuyện", "pp": "Làm sạch trang", "ls": "Hiển thị màn hình lớn", "fs": "Hiển thị toàn màn hình", "sc": "Nói đầy đủ", "it": "Chặn Theo Dõi", "ec": "Luôn thay đổi", "ap": "Đánh giá"},
"zh-CN": {"dm": "暗色主题", "sd": "显示调试", "cm": "取消审计", "ca": "取消动画", "ab": "关于", "si": "建议间隔50秒以上，作者平时设置的是900秒", "mi": "调整间隔", "cu": "检查更新", "cc": "克隆对话", "pp": "净化页面", "ls": "展示大屏", "fs": "展示全屏", "sc": "言无不尽", "it": "拦截跟踪", "ec": "日新月异", "ap": "赞赏鼓励"},
"zh-TW": {"dm": "暗黑模式", "sd": "顯示調試", "cm": "取消稽核", "ca": "取消動畫", "ab": "關於", "si": "建議間隔50秒，作者平時設置的是900秒", "mi": "調整間隔", "cu": "檢查更新", "cc": "複製對話", "pp": "淨化頁面", "ls": "顯示大螢幕", "fs": "顯示全螢幕", "sc": "言無不盡", "it": "拦截追踪", "ec": "日新月異", "ap": "讚賞鼓勵"}
    }
}
'''

    lang = json.loads(lang)

    new_str = "赞赏鼓励"

    new_str_min = "ap"

    transle_tmp = """
ar: تقدير
bg: Оценка
cs: Ocenění
da: Værdssættelse
de: Wertschätzung
el: Εκτίμηση
en: Appreciation
eo: Aprobo
es: Apreciación
fi: Arvostus
fr: Appréciation
fr-CA: Appréciation
he: הערכה
hu: Elismerés
id: Penghargaan
it: Apprezzamento
ja: 評価
ka: შეფასება
ko: 감사
nb: Verdsatt
nl: Waardering
pl: Docenienie
pt-BR: Apreciação
ro: Apreciere
ru: Признательность
sk: Ocenenie
sr: Поштовање
sv: Uppskattning
th: การประเมินค่า
tr: Takdir
uk: Вдячність
ug: قىلىش
vi: Đánh giá
zh-CN: 赞赏鼓励
zh-TW: 讚賞鼓勵
"""

    # 删除字段
    # del_str = "调整频率"
    # del_str_min = "af"
    # lang = lang_del(lang, del_str, del_str_min)

    # 添加字段
    lang = lang_add(lang, new_str, new_str_min, transle_tmp)

    langStr = format_json(lang)
    print(langStr)
    save(langStr, 'test/lang.txt')

main()
