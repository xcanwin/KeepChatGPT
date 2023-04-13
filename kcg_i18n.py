#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
# 作用：

本脚本用于实现KeepChatGPT多语言化

# 使用方法：

## 第一步、

明确想要本地化的词汇，例如：
取消审计

## 第二步、

翻译成各国的临时语言包，向ChatGPT发送以下指令：
ar,bg,cs,da,de,el,en,eo,es,fi,fr,fr-CA,he,hu,id,it,ja,ka,ko,nb,nl,pl,pt-BR,ro,ru,sk,sr,sv,th,tr,uk,ug,vi,zh-CN,zh-TW
按照上述国家顺序翻译一句话，并且按照我要求的格式逐行输出
格式要求：国家缩写:翻译后的文字
例如翻译"显示调试"的结果是：en: Hide debug window
接下来，请翻译：取消审计

## 第三步、

配置本脚本以下几个变量：
lang：从KeepChatGPT中的lang变量值复制粘贴到这里
new_str：填写想要本地化的词汇，例如取消审计，随意填，如果重复了就会
new_str_min：填英文缩写，例如cm，随意填
transle_tmp：从ChatGPT翻译的结果复制粘贴到这里

## 第四步、

运行，并把结果复制粘贴到KeepChatGPT中的lang变量值。

"""


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

def main():
	lang = {'index': {'暗色主题': 'dm', '浅色主题': 'lm', '显示调试': 'sd', '取消审计': 'cm'}, 'local': {'ar': {'dm': 'الوضع الداكن', 'lm': 'وضع فاتح', 'sd': 'إظهار التصحيح', 'cm': 'إلغاء التدقيق'}, 'bg': {'dm': 'Тъмна тема', 'lm': 'Светла тема', 'sd': 'Показване на отстраняване на грешки', 'cm': 'Отказ от одит'}, 'cs': {'dm': 'Tmavý režim', 'lm': 'Světlý režim', 'sd': 'Zobrazit ladění', 'cm': 'Zrušení auditu'}, 'da': {'dm': 'Mørk tilstand', 'lm': 'Lys tilstand', 'sd': 'Vis fejlfinding', 'cm': 'Annuller revision'}, 'de': {'dm': 'Dunkler Modus', 'lm': 'Heller Modus', 'sd': 'Fehlerbehebung anzeigen', 'cm': 'Prüfung abbrechen'}, 'el': {'dm': 'Σκοτεινή θεματολογία', 'lm': 'Φωτεινή θεματολογία', 'sd': 'Εμφάνιση αποσφαλμάτωσης', 'cm': 'Ακύρωση ελέγχου'}, 'en': {'dm': 'Dark mode', 'lm': 'Light mode', 'sd': 'Show debugging', 'cm': 'Cancel audit'}, 'eo': {'dm': 'Malhela moduso', 'lm': 'Hela moduso', 'sd': 'Montri depuradon', 'cm': 'Nuligi kontroli'}, 'es': {'dm': 'Modo oscuro', 'lm': 'Modo claro', 'sd': 'Mostrar depuración', 'cm': 'Cancelar auditoría'}, 'fi': {'dm': 'Tumma tila', 'lm': 'Vaalea tila', 'sd': 'Näytä virheenkorjaus', 'cm': 'Peruuta tarkistus'}, 'fr': {'dm': 'Mode sombre', 'lm': 'Mode clair', 'sd': 'Afficher le débogage', 'cm': "Annuler l'audit"}, 'fr-CA': {'dm': 'Mode nuit', 'lm': 'Mode jour', 'sd': 'Afficher le débogage', 'cm': 'Annuler la vérification'}, 'he': {'dm': 'מצב כהה', 'lm': 'מצב בהיר', 'sd': 'הצגת התיקון', 'cm': 'ביטול ביקורת'}, 'hu': {'dm': 'Sötét mód', 'lm': 'Világos mód', 'sd': 'Hibakeresés mutatása', 'cm': 'Ellenőrzés megszüntetése'}, 'id': {'dm': 'Mode gelap', 'lm': 'Mode terang', 'sd': 'Tampilkan debugging', 'cm': 'Batalkan audit'}, 'it': {'dm': 'Modalità scura', 'lm': 'Modalità chiara', 'sd': 'Mostra debug', 'cm': 'Annulla verifica'}, 'ja': {'dm': 'ダークモード', 'lm': 'ライトモード', 'sd': 'デバッグを表示', 'cm': '監査をキャンセル'}, 'ka': {'dm': 'ბნელი რეჟიმი', 'lm': 'ნათელი რეჟიმი', 'sd': 'გამოჩენა დებაგი', 'cm': 'ანულირება აუდიტი'}, 'ko': {'dm': '다크 모드', 'lm': '라이트 모드', 'sd': '디버깅 표시', 'cm': '감사 취소'}, 'nb': {'dm': 'Mørk modus', 'lm': 'Lys modus', 'sd': 'Vis feilsøking', 'cm': 'Avbryt revisjonen'}, 'nl': {'dm': 'Donkere modus', 'lm': 'Lichte modus', 'sd': 'Foutopsporing weergeven', 'cm': 'Controle annuleren'}, 'pl': {'dm': 'Tryb ciemny', 'lm': 'Tryb jasny', 'sd': 'Pokaż debugowanie', 'cm': 'Anuluj audyt'}, 'pt-BR': {'dm': 'Modo escuro', 'lm': 'Modo claro', 'sd': 'Mostrar depuração', 'cm': 'Cancelar auditoria'}, 'ro': {'dm': 'Mod întunecat', 'lm': 'Mod luminos', 'sd': 'Afișare depanare', 'cm': 'Anulare audit'}, 'ru': {'dm': 'Темный режим', 'lm': 'Светлый режим', 'sd': 'Показать отладку', 'cm': 'Отменить аудит'}, 'sk': {'dm': 'Tmavý režim', 'lm': 'Svetlý režim', 'sd': 'Zobraziť ladenie', 'cm': 'Zrušiť audit'}, 'sr': {'dm': 'Тамни режим', 'lm': 'Светла тема', 'sd': 'Прикажи отклањање грешака', 'cm': 'Откажи ревизију'}, 'sv': {'dm': 'Mörkt läge', 'lm': 'Ljust läge', 'sd': 'Visa felsökning', 'cm': 'Avbryt revision'}, 'th': {'dm': 'โหมดมืด', 'lm': 'โหมดสว่าง', 'sd': 'แสดงการแก้ไขข้อผิดพลาด', 'cm': 'ยกเลิกการตรวจสอบ'}, 'tr': {'dm': 'Karanlık mod', 'lm': 'Aydınlık mod', 'sd': 'Hata ayıklama göster', 'cm': 'Denetimi İptal Et'}, 'uk': {'dm': 'Темний режим', 'lm': 'Світлий режим', 'sd': 'Показати налагодження', 'cm': 'Скасувати аудит'}, 'ug': {'dm': 'تېما كۆرسىتىش', 'lm': 'ئاچقۇچ كۆرۈنۈش', 'sd': 'كۆرسەتكەن يۇقىرىلاش', 'cm': 'ئەمەلدىن قالدۇرۇش'}, 'vi': {'dm': 'Chế độ tối', 'lm': 'Chế độ sáng', 'sd': 'Hiển thị gỡ lỗi', 'cm': 'Hủy đánh giá'}, 'zh-CN': {'dm': '暗色主题', 'lm': '浅色主题', 'sd': '显示调试', 'cm': '取消审计'}, 'zh-TW': {'dm': '暗黑模式', 'lm': '淺色主題', 'sd': '顯示調試', 'cm': '取消稽核'}}}

	new_str = "关于"

	new_str_min = "ab"

	transle_tmp = """
ar: حول
bg: за
cs: o
da: om
de: über
el: για
en: about
eo: pri
es: sobre
fi: noin
fr: à propos de
fr-CA: au sujet de
he: אודות
hu: ról
id: tentang
it: su
ja: 約
ka: შესახებ
ko: 약
nb: om
nl: over
pl: o
pt-BR: sobre
ro: despre
ru: о
sk: o
sr: о
sv: om
th: เกี่ยวกับ
tr: hakkında
uk: про
ug: ھەققىدە
vi: về
zh-CN: 关于
zh-TW: 關於
"""

	lang = lang_add(lang, new_str, new_str_min, transle_tmp)
	print(lang)

#	del_str = "隐藏调试"
#	del_str_min = "hd"
#	lang = lang_del(lang, del_str, del_str_min)
#	print(lang)

main()
