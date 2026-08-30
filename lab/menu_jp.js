var page_prefixes = [
    "index", "introduction", "member"
]
var lang_code = "jp"
var page_descriptions = [
    "ホーム",
    "研究室紹介",
    "メンバー"
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
document.write('<a href="#" id="return" aria-label="ページ先頭へ戻る"><i class="fa-solid fa-circle-chevron-up" aria-hidden="true"></i></a>\n')

document.write('<div class="mobilemenu">\n')
document.write('<button type="button" class="mobilemenu__box" aria-label="メニューを開く" aria-expanded="false" aria-controls="mobilemenu__content" data-open-label="メニューを開く" data-close-label="メニューを閉じる"><span aria-hidden="true"></span></button>\n')
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
