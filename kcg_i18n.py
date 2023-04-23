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
例如翻译"显示调试"的结果是: en: Hide debug window
接下来，请翻译: 建议间隔30秒

## 第三步、

配置本脚本以下几个变量：
lang：将KeepChatGPT中的lang变量值复制粘贴到这里
new_str：填写想要本地化的词汇，例如取消审计，随意填，如果重复了就会覆盖
new_str_min：填英文缩写，例如cm，随意填，如果重复了就会覆盖
transle_tmp：将ChatGPT翻译的结果复制粘贴到这里

## 第四步、

运行，并把结果复制粘贴到KeepChatGPT中的lang变量值。

"""

import json

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

def print_json(lang):
    print('{')
    print('    "index": %s,' % (json.dumps(lang['index'], ensure_ascii = False)))
    print('    "local": {')
    lj = []
    for country, langjson in lang['local'].items():
        lj.append('"%s": %s' % (country, json.dumps(langjson, ensure_ascii = False)))
    lj = ',\n'.join(lj)
    print(lj)
    print('    }')
    print('}')

def main():
    lang = {
    "index": {"暗色主题": "dm", "显示调试": "sd", "取消审计": "cm", "取消动画": "ca", "关于": "ab", "调整频率": "af", "建议间隔30秒": "si"},
    "local": {
"ar": {"dm": "الوضع الداكن", "sd": "إظهار التصحيح", "cm": "إلغاء التدقيق", "ca": "إلغاء الرسوم المتحركة", "ab": "حول", "af": "ضبط التردد", "si": "اقتراح فاصل زمني 30 ثانية"},
"bg": {"dm": "Тъмна тема", "sd": "Показване на отстраняване на грешки", "cm": "Отказ от одит", "ca": "Отмяна на анимацията", "ab": "За", "af": "Настройка на честотата", "si": "Предложете интервал от 30 секунди"},
"cs": {"dm": "Tmavý režim", "sd": "Zobrazit ladění", "cm": "Zrušení auditu", "ca": "Zrušit animaci", "ab": "O", "af": "Nastavit frekvenci", "si": "Navrhnout interval 30 sekund"},
"da": {"dm": "Mørk tilstand", "sd": "Vis fejlfinding", "cm": "Annuller revision", "ca": "Annuller animation", "ab": "Om", "af": "Juster frekvens", "si": "Forslag interval på 30 sekunder"},
"de": {"dm": "Dunkler Modus", "sd": "Fehlerbehebung anzeigen", "cm": "Prüfung abbrechen", "ca": "Animation abbrechen", "ab": "Über", "af": "Frequenz anpassen", "si": "Vorschlag für Intervall von 30 Sekunden"},
"el": {"dm": "Σκοτεινή θεματολογία", "sd": "Εμφάνιση αποσφαλμάτωσης", "cm": "Ακύρωση ελέγχου", "ca": "Ακύρωση κινούμενων σχεδίων", "ab": "Σχετικά με", "af": "Ρύθμιση συχνότητας", "si": "Προτείνετε διάστημα 30 δευτερολέπτων"},
"en": {"dm": "Dark mode", "sd": "Show debugging", "cm": "Cancel audit", "ca": "Cancel animation", "ab": "About", "af": "Adjust frequency", "si": "Suggest interval of 30 seconds"},
"eo": {"dm": "Malhela moduso", "sd": "Montri depuradon", "cm": "Nuligi kontroli", "ca": "Nuligi animacion", "ab": "Pri", "af": "Agordi frekvencion", "si": "Sugesti intervalon de 30 sekundoj"},
"es": {"dm": "Modo oscuro", "sd": "Mostrar depuración", "cm": "Cancelar auditoría", "ca": "Cancelar animación", "ab": "Acerca de", "af": "Ajustar frecuencia", "si": "Sugerir un intervalo de 30 segundos"},
"fi": {"dm": "Tumma tila", "sd": "Näytä virheenkorjaus", "cm": "Peruuta tarkistus", "ca": "Peruuta animaatio", "ab": "Tietoa", "af": "Säädä taajuutta", "si": "Ehdota 30 sekunnin väliaikaa"},
"fr": {"dm": "Mode sombre", "sd": "Afficher le débogage", "cm": "Annuler l'audit", "ca": "Annuler l'animation", "ab": "À propos de", "af": "Ajuster la fréquence", "si": "Suggérer un intervalle de 30 secondes"},
"fr-CA": {"dm": "Mode nuit", "sd": "Afficher le débogage", "cm": "Annuler la vérification", "ca": "Annuler l'animation", "ab": "À propos de", "af": "Ajuster la fréquence", "si": "Suggérer un intervalle de 30 secondes"},
"he": {"dm": "מצב כהה", "sd": "הצגת התיקון", "cm": "ביטול ביקורת", "ca": "בטל אנימציה", "ab": "אודות", "af": "להתאים תדר", "si": "הצע מרווח של 30 שניות"},
"hu": {"dm": "Sötét mód", "sd": "Hibakeresés mutatása", "cm": "Ellenőrzés megszüntetése", "ca": "Animáció törlése", "ab": "Rólunk", "af": "Frekvencia beállítása", "si": "Javaslat 30 másodperces időközre"},
"id": {"dm": "Mode gelap", "sd": "Tampilkan debugging", "cm": "Batalkan audit", "ca": "Batalkan animasi", "ab": "Tentang", "af": "Sesuaikan frekuensi", "si": "Sarankan interval 30 detik"},
"it": {"dm": "Modalità scura", "sd": "Mostra debug", "cm": "Annulla verifica", "ca": "Annulla animazione", "ab": "Riguardo a", "af": "Regola la frequenza", "si": "Suggerisci un intervallo di 30 secondi"},
"ja": {"dm": "ダークモード", "sd": "デバッグを表示", "cm": "監査をキャンセル", "ca": "アニメーションのキャンセル", "ab": "について", "af": "周波数を調整する", "si": "30秒間隔を提案する"},
"ka": {"dm": "ბნელი რეჟიმი", "sd": "გამოჩენა დებაგი", "cm": "ანულირება აუდიტი", "ca": "ანიმაციის გაუქმება", "ab": "შესახებ", "af": "ფრექვენციის შემადგენლობა", "si": "30 წამის ინტერვალის შეტანა"},
"ko": {"dm": "다크 모드", "sd": "디버깅 표시", "cm": "감사 취소", "ca": "애니메이션 취소", "ab": "관하여", "af": "주파수 조정", "si": "30초 간격 건의"},
"nb": {"dm": "Mørk modus", "sd": "Vis feilsøking", "cm": "Avbryt revisjonen", "ca": "Avbryt animasjon", "ab": "Om", "af": "Juster frekvens", "si": "Forslag om et intervall på 30 sekunder"},
"nl": {"dm": "Donkere modus", "sd": "Foutopsporing weergeven", "cm": "Controle annuleren", "ca": "Animatie annuleren", "ab": "Over", "af": "Frequentie aanpassen", "si": "Stel een interval van 30 seconden voor"},
"pl": {"dm": "Tryb ciemny", "sd": "Pokaż debugowanie", "cm": "Anuluj audyt", "ca": "Anuluj animację", "ab": "O", "af": "Dostosuj częstotliwość", "si": "Zasugeruj interwał 30 sekund"},
"pt-BR": {"dm": "Modo escuro", "sd": "Mostrar depuração", "cm": "Cancelar auditoria", "ca": "Cancelar animação", "ab": "Sobre", "af": "Ajustar frequência", "si": "Sugira um intervalo de 30 segundos"},
"ro": {"dm": "Mod întunecat", "sd": "Afișare depanare", "cm": "Anulare audit", "ca": "Anulare animație", "ab": "Despre", "af": "Reglați frecvența", "si": "Sugerați un interval de 30 secunde"},
"ru": {"dm": "Темный режим", "sd": "Показать отладку", "cm": "Отменить аудит", "ca": "Отменить анимацию", "ab": "О", "af": "Настройте частоту", "si": "Предложить интервал в 30 секунд"},
"sk": {"dm": "Tmavý režim", "sd": "Zobraziť ladenie", "cm": "Zrušiť audit", "ca": "Zrušiť animáciu", "ab": "O", "af": "Nastavte frekvenciu", "si": "Navrhnúť interval 30 sekúnd"},
"sr": {"dm": "Тамни режим", "sd": "Прикажи отклањање грешака", "cm": "Откажи ревизију", "ca": "Откажи анимацију", "ab": "О", "af": "Podesi frekvenciju", "si": "Predložiti interval od 30 sekundi"},
"sv": {"dm": "Mörkt läge", "sd": "Visa felsökning", "cm": "Avbryt revision", "ca": "Avbryt animation", "ab": "Om", "af": "Justera frekvensen", "si": "Föreslå intervall på 30 sekunder"},
"th": {"dm": "โหมดมืด", "sd": "แสดงการแก้ไขข้อผิดพลาด", "cm": "ยกเลิกการตรวจสอบ", "ca": "ยกเลิกการเคลื่อนไหว", "ab": "เกี่ยวกับ", "af": "ปรับความถี่", "si": "เสนอช่วงเวลา 30 วินาที"},
"tr": {"dm": "Karanlık mod", "sd": "Hata ayıklama göster", "cm": "Denetimi İptal Et", "ca": "Animasyonu iptal et", "ab": "Hakkında", "af": "Frekans ayarla", "si": "30 saniyelik aralık önerin"},
"uk": {"dm": "Темний режим", "sd": "Показати налагодження", "cm": "Скасувати аудит", "ca": "Скасувати анімацію", "ab": "Про", "af": "Налаштуйте частоту", "si": "Запропонуйте інтервал у 30 секунд"},
"ug": {"dm": "تېما كۆرسىتىش", "sd": "كۆرسەتكەن يۇقىرىلاش", "cm": "ئەمەلدىن قالدۇرۇش", "ca": "ئېنىماتىكىنى بىكار قىلىش", "ab": "ئۇچۇرلىق", "af": "تېزلىكنى تەڭشەش", "si": "30 سىكونتلىك ئارىلىقنى سۇنۇشتۇرۇش"},
"vi": {"dm": "Chế độ tối", "sd": "Hiển thị gỡ lỗi", "cm": "Hủy đánh giá", "ca": "Hủy hoạt hình", "ab": "Về", "af": "Điều chỉnh tần số", "si": "Đề xuất khoảng thời gian 30 giây"},
"zh-CN": {"dm": "暗色主题", "sd": "显示调试", "cm": "取消审计", "ca": "取消动画", "ab": "关于", "af": "调整频率", "si": "建议间隔30秒以上，作者平时设置的是150"},
"zh-TW": {"dm": "暗黑模式", "sd": "顯示調試", "cm": "取消稽核", "ca": "取消動畫", "ab": "關於", "af": "調整頻率", "si": "建議間隔30秒"}
    }
}

    new_str = "取消动画"

    new_str_min = "ca"

    transle_tmp = """
ar: إلغاء الرسوم المتحركة
bg: Отмяна на анимацията
cs: Zrušit animaci
da: Annuller animation
de: Animation abbrechen
el: Ακύρωση κινούμενων σχεδίων
en: Cancel animation
eo: Nuligi animacion
es: Cancelar animación
fi: Peruuta animaatio
fr: Annuler l'animation
fr-CA: Annuler l'animation
he: בטל אנימציה
hu: Animáció törlése
id: Batalkan animasi
it: Annulla animazione
ja: アニメーションのキャンセル
ka: ანიმაციის გაუქმება
ko: 애니메이션 취소
nb: Avbryt animasjon
nl: Animatie annuleren
pl: Anuluj animację
pt-BR: Cancelar animação
ro: Anulare animație
ru: Отменить анимацию
sk: Zrušiť animáciu
sr: Откажи анимацију
sv: Avbryt animation
th: ยกเลิกการเคลื่อนไหว
tr: Animasyonu iptal et
uk: Скасувати анімацію
ug: ئېنىماتىكىنى بىكار قىلىش
vi: Hủy hoạt hình
zh-CN: 取消动画
zh-TW: 取消動畫
"""

    lang = lang_add(lang, new_str, new_str_min, transle_tmp)
    print_json(lang)

    # del_str = "浅色主题"
    # del_str_min = "lm"
    # lang = lang_del(lang, del_str, del_str_min)
    # print_json(lang)

main()
