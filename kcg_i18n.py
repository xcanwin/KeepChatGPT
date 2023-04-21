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
    "index": {"暗色主题": "dm", "显示调试": "sd", "取消审计": "cm", "关于": "ab", "调整间隔": "af"},
    "local": {
"ar": {"dm": "الوضع الداكن", "sd": "إظهار التصحيح", "cm": "إلغاء التدقيق", "ab": "حول", "af": "ضبط التردد"},
"bg": {"dm": "Тъмна тема", "sd": "Показване на отстраняване на грешки", "cm": "Отказ от одит", "ab": "За", "af": "Настройка на честотата"},
"cs": {"dm": "Tmavý režim", "sd": "Zobrazit ladění", "cm": "Zrušení auditu", "ab": "O", "af": "Nastavit frekvenci"},
"da": {"dm": "Mørk tilstand", "sd": "Vis fejlfinding", "cm": "Annuller revision", "ab": "Om", "af": "Juster frekvens"},
"de": {"dm": "Dunkler Modus", "sd": "Fehlerbehebung anzeigen", "cm": "Prüfung abbrechen", "ab": "Über", "af": "Frequenz anpassen"},
"el": {"dm": "Σκοτεινή θεματολογία", "sd": "Εμφάνιση αποσφαλμάτωσης", "cm": "Ακύρωση ελέγχου", "ab": "Σχετικά με", "af": "Ρύθμιση συχνότητας"},
"en": {"dm": "Dark mode", "sd": "Show debugging", "cm": "Cancel audit", "ab": "About", "af": "Adjust frequency"},
"eo": {"dm": "Malhela moduso", "sd": "Montri depuradon", "cm": "Nuligi kontroli", "ab": "Pri", "af": "Agordi frekvencion"},
"es": {"dm": "Modo oscuro", "sd": "Mostrar depuración", "cm": "Cancelar auditoría", "ab": "Acerca de", "af": "Ajustar frecuencia"},
"fi": {"dm": "Tumma tila", "sd": "Näytä virheenkorjaus", "cm": "Peruuta tarkistus", "ab": "Tietoa", "af": "Säädä taajuutta"},
"fr": {"dm": "Mode sombre", "sd": "Afficher le débogage", "cm": "Annuler l'audit", "ab": "À propos de", "af": "Ajuster la fréquence"},
"fr-CA": {"dm": "Mode nuit", "sd": "Afficher le débogage", "cm": "Annuler la vérification", "ab": "À propos de", "af": "Ajuster la fréquence"},
"he": {"dm": "מצב כהה", "sd": "הצגת התיקון", "cm": "ביטול ביקורת", "ab": "אודות", "af": "להתאים תדר"},
"hu": {"dm": "Sötét mód", "sd": "Hibakeresés mutatása", "cm": "Ellenőrzés megszüntetése", "ab": "Rólunk", "af": "Frekvencia beállítása"},
"id": {"dm": "Mode gelap", "sd": "Tampilkan debugging", "cm": "Batalkan audit", "ab": "Tentang", "af": "Sesuaikan frekuensi"},
"it": {"dm": "Modalità scura", "sd": "Mostra debug", "cm": "Annulla verifica", "ab": "Riguardo a", "af": "Regola la frequenza"},
"ja": {"dm": "ダークモード", "sd": "デバッグを表示", "cm": "監査をキャンセル", "ab": "について", "af": "周波数を調整する"},
"ka": {"dm": "ბნელი რეჟიმი", "sd": "გამოჩენა დებაგი", "cm": "ანულირება აუდიტი", "ab": "შესახებ", "af": "ფრექვენციის შემადგენლობა"},
"ko": {"dm": "다크 모드", "sd": "디버깅 표시", "cm": "감사 취소", "ab": "관하여", "af": "주파수 조정"},
"nb": {"dm": "Mørk modus", "sd": "Vis feilsøking", "cm": "Avbryt revisjonen", "ab": "Om", "af": "Juster frekvens"},
"nl": {"dm": "Donkere modus", "sd": "Foutopsporing weergeven", "cm": "Controle annuleren", "ab": "Over", "af": "Frequentie aanpassen"},
"pl": {"dm": "Tryb ciemny", "sd": "Pokaż debugowanie", "cm": "Anuluj audyt", "ab": "O", "af": "Dostosuj częstotliwość"},
"pt-BR": {"dm": "Modo escuro", "sd": "Mostrar depuração", "cm": "Cancelar auditoria", "ab": "Sobre", "af": "Ajustar frequência"},
"ro": {"dm": "Mod întunecat", "sd": "Afișare depanare", "cm": "Anulare audit", "ab": "Despre", "af": "Reglați frecvența"},
"ru": {"dm": "Темный режим", "sd": "Показать отладку", "cm": "Отменить аудит", "ab": "О", "af": "Настройте частоту"},
"sk": {"dm": "Tmavý režim", "sd": "Zobraziť ladenie", "cm": "Zrušiť audit", "ab": "O", "af": "Nastavte frekvenciu"},
"sr": {"dm": "Тамни режим", "sd": "Прикажи отклањање грешака", "cm": "Откажи ревизију", "ab": "О", "af": "Podesi frekvenciju"},
"sv": {"dm": "Mörkt läge", "sd": "Visa felsökning", "cm": "Avbryt revision", "ab": "Om", "af": "Justera frekvensen"},
"th": {"dm": "โหมดมืด", "sd": "แสดงการแก้ไขข้อผิดพลาด", "cm": "ยกเลิกการตรวจสอบ", "ab": "เกี่ยวกับ", "af": "ปรับความถี่"},
"tr": {"dm": "Karanlık mod", "sd": "Hata ayıklama göster", "cm": "Denetimi İptal Et", "ab": "Hakkında", "af": "Frekans ayarla"},
"uk": {"dm": "Темний режим", "sd": "Показати налагодження", "cm": "Скасувати аудит", "ab": "Про", "af": "Налаштуйте частоту"},
"ug": {"dm": "تېما كۆرسىتىش", "sd": "كۆرسەتكەن يۇقىرىلاش", "cm": "ئەمەلدىن قالدۇرۇش", "ab": "ئۇچۇرلىق", "af": "تېزلىكنى تەڭشەش"},
"vi": {"dm": "Chế độ tối", "sd": "Hiển thị gỡ lỗi", "cm": "Hủy đánh giá", "ab": "Về", "af": "Điều chỉnh tần số"},
"zh-CN": {"dm": "暗色主题", "sd": "显示调试", "cm": "取消审计", "ab": "关于", "af": "调整频率"},
"zh-TW": {"dm": "暗黑模式", "sd": "顯示調試", "cm": "取消稽核", "ab": "關於", "af": "調整頻率"}
    }
}

    new_str = "建议间隔30秒"

    new_str_min = "si"

    transle_tmp = """
ar: اقتراح فاصل زمني 30 ثانية
bg: Предложете интервал от 30 секунди
cs: Navrhnout interval 30 sekund
da: Forslag interval på 30 sekunder
de: Vorschlag für Intervall von 30 Sekunden
el: Προτείνετε διάστημα 30 δευτερολέπτων
en: Suggest interval of 30 seconds
eo: Sugesti intervalon de 30 sekundoj
es: Sugerir un intervalo de 30 segundos
fi: Ehdota 30 sekunnin väliaikaa
fr: Suggérer un intervalle de 30 secondes
fr-CA: Suggérer un intervalle de 30 secondes
he: הצע מרווח של 30 שניות
hu: Javaslat 30 másodperces időközre
id: Sarankan interval 30 detik
it: Suggerisci un intervallo di 30 secondi
ja: 30秒間隔を提案する
ka: 30 წამის ინტერვალის შეტანა
ko: 30초 간격 건의
nb: Forslag om et intervall på 30 sekunder
nl: Stel een interval van 30 seconden voor
pl: Zasugeruj interwał 30 sekund
pt-BR: Sugira um intervalo de 30 segundos
ro: Sugerați un interval de 30 secunde
ru: Предложить интервал в 30 секунд
sk: Navrhnúť interval 30 sekúnd
sr: Predložiti interval od 30 sekundi
sv: Föreslå intervall på 30 sekunder
th: เสนอช่วงเวลา 30 วินาที
tr: 30 saniyelik aralık önerin
uk: Запропонуйте інтервал у 30 секунд
ug: 30 سىكونتلىك ئارىلىقنى سۇنۇشتۇرۇش
vi: Đề xuất khoảng thời gian 30 giây
zh-CN: 建议间隔30秒
zh-TW: 建議間隔30秒
"""

    lang = lang_add(lang, new_str, new_str_min, transle_tmp)
    print_json(lang)

    # del_str = "浅色主题"
    # del_str_min = "lm"
    # lang = lang_del(lang, del_str, del_str_min)
    # print_json(lang)

main()
