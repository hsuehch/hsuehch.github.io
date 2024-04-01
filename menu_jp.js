var page_prefixes = [
    "index", "background", "research",
    "publication", "lab/introduction", "link"
]
var lang_code = "jp"
var page_descriptions = [
    "ホーム",
    "背景",
    "研究",
    "出版物",
    "研究室",
    "リンク集"
]

document.write('<div class="topnav">\n')
for (let i = 0; i < page_descriptions.length; i++) {
    document.write('<a id="menu" href="')
    document.write(page_prefixes[i])
    if (i != 0) {
        document.write('_' + lang_code)
    }
    document.write('.html">')
    document.write(page_descriptions[i])
    document.write('</a>\n')
}
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
    document.write('</a></li>\n')
}
document.write('</ul>\n')
document.write('</div>\n')
document.write('</div>\n')
