var page_prefixes = [
    "index", "background", "research",
    "publication", "lab/introduction", "link"
]
var lang_code = "tw"
var page_descriptions = [
    "頭頁",
    "背景",
    "研究",
    "著作",
    "研究室",
    "相關網鍊"
]
var page_descriptions_sup = [
    "Thâu-ia̍h",
    "Puē-kíng",
    "Gián-kiù",
    "Tù-tsok",
    "Gián-kiù-sik",
    "Siong-kuan bāng-liān"
]

document.write('<div class="topnav">\n')
document.write('<table border="0" width="480">')
document.write('<tr>')
for (let i = 0; i < page_descriptions.length; i++) {
    document.write('<th><a class="menu menu--tw" href="')
    document.write(page_prefixes[i])
    if (i != 0) {
        document.write('_' + lang_code)
    }
    document.write('.html">')
    document.write(page_descriptions[i])
    document.write('<br>')
    document.write('<text class="tw_navi">')
    document.write(page_descriptions_sup[i])
    document.write('</text></a></th>\n')
}
document.write('</tr>\n')
document.write('</table>\n')
document.write('</div>\n')

/* 通常ページ共通の，ページ先頭へ戻るボタン． */
document.write('<a href="#" id="return" aria-label="轉去頁頭 Tńg-khì ia̍h-thâu"><i class="fa-solid fa-circle-chevron-up" aria-hidden="true"></i></a>\n')

document.write('<div class="mobilemenu">\n')
document.write('<button type="button" class="mobilemenu__box" aria-label="拍開選單 Phah-khui suán-tuann" aria-expanded="false" aria-controls="mobilemenu__content" data-open-label="拍開選單 Phah-khui suán-tuann" data-close-label="關起選單 Kuainn-khí suán-tuann"><span aria-hidden="true"></span></button>\n')
document.write('<div class="mobilemenu__content" id="mobilemenu__content">')
document.write('<ul class="mobilemenu__list">')
for (let i = 0; i < page_descriptions.length; i++) {
    document.write('<li class="mobilemenu__item"><a class="menu menu--tw" href="')
    document.write(page_prefixes[i])
    if (i != 0) {
        document.write('_' + lang_code)
    }
    document.write('.html">')
    document.write(page_descriptions[i])
    document.write(' ')
    document.write('<text class="tw_navi">')
    document.write(page_descriptions_sup[i])
    document.write('</text></a></li>\n')
}
document.write('</ul>\n')
document.write('</div>\n')
document.write('</div>\n')
