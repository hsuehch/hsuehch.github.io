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
    document.write('<th><a id="menu" href="')
    document.write(page_prefixes[i])
    if (i != 0) {
        document.write('_' + lang_code)
    }
    document.write('.html">')
    document.write(page_descriptions[i])
    document.write('<br>')
    document.write('<text id="tw_navi">')
    document.write(page_descriptions_sup[i])
    document.write('</text></a></th>\n')
}
document.write('</tr>\n')
document.write('</table>\n')
document.write('</div>\n')

document.write('<div class="mobilemenu">\n')
document.write('<input type="checkbox" id="mobilemenu__check">\n')
document.write('<label for="mobilemenu__check" class="mobilemenu__box"><span></span></label>\n')
document.write('<div class="mobilemenu__content">')
document.write('<ul class="mobilemenu__list">')
for (let i = 0; i < page_descriptions.length; i++) {
    document.write('<li class="mobilemenu__item"><a id="menu" href="')
    document.write(page_prefixes[i])
    if (i != 0) {
        document.write('_' + lang_code)
    }
    document.write('.html">')
    document.write(page_descriptions[i])
    document.write(' ')
    document.write('<text id="tw_navi">')
    document.write(page_descriptions_sup[i])
    document.write('</text></a></li>\n')
}
document.write('</ul>\n')
document.write('</div>\n')
document.write('</div>\n')
