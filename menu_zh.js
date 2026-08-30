var page_prefixes = [
    "index", "background", "research",
    "publication", "lab/introduction", "link"
]
var lang_code = "zh"
var page_descriptions = [
    "首頁",
    "背景",
    "研究",
    "著作",
    "實驗室",
    "相關連結"
]

document.write('<div class="topnav">\n')
for (let i = 0; i < page_descriptions.length; i++) {
    document.write('<a class="menu" href="')
    document.write(page_prefixes[i])
    if (i != 0) {
        document.write('_' + lang_code)
    }
    document.write('.html">')
    document.write(page_descriptions[i])
    document.write('</a>\n')
}
document.write('</div>\n')

/* 通常ページ共通の，ページ先頭へ戻るボタン． */
document.write('<a href="#" id="return" aria-label="返回頁首"><i class="fa-solid fa-circle-chevron-up" aria-hidden="true"></i></a>\n')

document.write('<div class="mobilemenu">\n')
document.write('<button type="button" class="mobilemenu__box" aria-label="開啟選單" aria-expanded="false" aria-controls="mobilemenu__content" data-open-label="開啟選單" data-close-label="關閉選單"><span aria-hidden="true"></span></button>\n')
document.write('<div class="mobilemenu__content" id="mobilemenu__content">')
document.write('<ul class="mobilemenu__list">')
for (let i = 0; i < page_descriptions.length; i++) {
    document.write('<li class="mobilemenu__item"><a class="menu" href="')
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
