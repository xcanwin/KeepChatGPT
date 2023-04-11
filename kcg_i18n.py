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
	lang = {"index":{"暗色主题":"dm","浅色主题":"lm","隐藏调试":"hd","显示调试":"sd"},"local":{"ar":{"dm":"الوضع الداكن","lm":"وضع فاتح","hd":"إخفاء التصحيح","sd":"إظهار التصحيح"},"bg":{"dm":"Тъмна тема","lm":"Светла тема","hd":"Скриване на отстраняване на грешки","sd":"Показване на отстраняване на грешки"},"cs":{"dm":"Tmavý režim","lm":"Světlý režim","hd":"Skrýt ladění","sd":"Zobrazit ladění"},"da":{"dm":"Mørk tilstand","lm":"Lys tilstand","hd":"Skjul fejlfinding","sd":"Vis fejlfinding"},"de":{"dm":"Dunkler Modus","lm":"Heller Modus","hd":"Debugging ausblenden","sd":"Fehlerbehebung anzeigen"},"el":{"dm":"Σκοτεινή θεματολογία","lm":"Φωτεινή θεματολογία","hd":"Απόκρυψη αποσφαλμάτωσης","sd":"Εμφάνιση αποσφαλμάτωσης"},"en":{"dm":"Dark mode","lm":"Light mode","hd":"Hide debugging","sd":"Show debugging"},"eo":{"dm":"Malhela moduso","lm":"Hela moduso","hd":"Kaŝi la korektadon","sd":"Montri depuradon"},"es":{"dm":"Modo oscuro","lm":"Modo claro","hd":"Ocultar depuración","sd":"Mostrar depuración"},"fi":{"dm":"Tumma tila","lm":"Vaalea tila","hd":"Piilota virheenkorjaus","sd":"Näytä virheenkorjaus"},"fr":{"dm":"Mode sombre","lm":"Mode clair","hd":"Masquer le débogage","sd":"Afficher le débogage"},"fr-CA":{"dm":"Mode nuit","lm":"Mode jour","hd":"Masquer le débogage","sd":"Afficher le débogage"},"he":{"dm":"מצב כהה","lm":"מצב בהיר","hd":"הסתרת תיקון באגים","sd":"הצגת התיקון"},"hu":{"dm":"Sötét mód","lm":"Világos mód","hd":"Hibakeresés elrejtése","sd":"Hibakeresés mutatása"},"id":{"dm":"Mode gelap","lm":"Mode terang","hd":"Sembunyikan debugging","sd":"Tampilkan debugging"},"it":{"dm":"Modalità scura","lm":"Modalità chiara","hd":"Nascondi il debug","sd":"Mostra debug"},"ja":{"dm":"ダークモード","lm":"ライトモード","hd":"デバッグを非表示","sd":"デバッグを表示"},"ka":{"dm":"ბნელი რეჟიმი","lm":"ნათელი რეჟიმი","hd":"ბრძანების მართვა დამალვა","sd":"გამოჩენა დებაგი"},"ko":{"dm":"다크 모드","lm":"라이트 모드","hd":"디버깅 숨기기","sd":"디버깅 표시"},"nb":{"dm":"Mørk modus","lm":"Lys modus","hd":"Skjul feilsøking","sd":"Vis feilsøking"},"nl":{"dm":"Donkere modus","lm":"Lichte modus","hd":"Foutopsporing verbergen","sd":"Foutopsporing weergeven"},"pl":{"dm":"Tryb ciemny","lm":"Tryb jasny","hd":"Ukryj debugowanie","sd":"Pokaż debugowanie"},"pt-BR":{"dm":"Modo escuro","lm":"Modo claro","hd":"Ocultar depuração","sd":"Mostrar depuração"},"ro":{"dm":"Mod întunecat","lm":"Mod luminos","hd":"Ascunde depanarea","sd":"Afișare depanare"},"ru":{"dm":"Темный режим","lm":"Светлый режим","hd":"Скрыть отладку","sd":"Показать отладку"},"sk":{"dm":"Tmavý režim","lm":"Svetlý režim","hd":"Skryť ladenie","sd":"Zobraziť ladenie"},"sr":{"dm":"Тамни режим","lm":"Светла тема","hd":"Сакриј отклањање грешака","sd":"Прикажи отклањање грешака"},"sv":{"dm":"Mörkt läge","lm":"Ljust läge","hd":"Dölj felsökning","sd":"Visa felsökning"},"th":{"dm":"โหมดมืด","lm":"โหมดสว่าง","hd":"ซ่อนการตรวจจับข้อผิดพลาด","sd":"แสดงการแก้ไขข้อผิดพลาด"},"tr":{"dm":"Karanlık mod","lm":"Aydınlık mod","hd":"Hata ayıklamayı gizle","sd":"Hata ayıklama göster"},"uk":{"dm":"Темний режим","lm":"Світлий режим","hd":"Приховати налагодження","sd":"Показати налагодження"},"ug":{"dm":"تېما كۆرسىتىش","lm":"ئاچقۇچ كۆرۈنۈش","hd":"خاتا تۈزۈملىكنى يوشۇرۇش","sd":"كۆرسەتكەن يۇقىرىلاش"},"vi":{"dm":"Chế độ tối","lm":"Chế độ sáng","hd":"Ẩn gỡ lỗi","sd":"Hiển thị gỡ lỗi"},"zh-CN":{"dm":"暗色主题","lm":"浅色主题","hd":"隐藏调试","sd":"显示调试"},"zh-TW":{"dm":"暗黑模式","lm":"淺色主題","hd":"隱藏除錯","sd":"顯示調試"}}}

	new_str = "取消审计"

	new_str_min = "cm"

	transle_tmp = """
	ar: إلغاء التدقيق
	bg: Отказ от одит
	cs: Zrušení auditu
	da: Annuller revision
	de: Prüfung abbrechen
	el: Ακύρωση ελέγχου
	en: Cancel audit
	eo: Nuligi kontroli
	es: Cancelar auditoría
	fi: Peruuta tarkistus
	fr: Annuler l'audit
	fr-CA: Annuler la vérification
	he: ביטול ביקורת
	hu: Ellenőrzés megszüntetése
	id: Batalkan audit
	it: Annulla verifica
	ja: 監査をキャンセル
	ka: ანულირება აუდიტი
	ko: 감사 취소
	nb: Avbryt revisjonen
	nl: Controle annuleren
	pl: Anuluj audyt
	pt-BR: Cancelar auditoria
	ro: Anulare audit
	ru: Отменить аудит
	sk: Zrušiť audit
	sr: Откажи ревизију
	sv: Avbryt revision
	th: ยกเลิกการตรวจสอบ
	tr: Denetimi İptal Et
	uk: Скасувати аудит
	ug: ئەمەلدىن قالدۇرۇش
	vi: Hủy đánh giá
	zh-CN: 取消审计
	zh-TW: 取消稽核
	"""

	lang = lang_add(lang, new_str, new_str_min, transle_tmp)
	print(lang)

#	del_str = "隐藏调试"
#	del_str_min = "hd"
#	lang = lang_del(lang, del_str, del_str_min)
#	print(lang)

main()
