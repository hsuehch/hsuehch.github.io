var page_prefixes = [
    "index", "introduction", "member"
]
var lang_code = "jp"
var page_descriptions = [
    "ホーム",
    "研究室紹介",
    "メンバ"
]

document.write('<div class="topnav">\n')
for (let i = 0; i < page_descriptions.length; i++) {
    if (page_prefixes[i] == "member") {
        document.write('<a id="menu" title="Coming soon">')
        document.write(page_descriptions[i])
        document.write('</a>')
        continue
    }
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
    if (page_prefixes[i] == "member") {
        document.write('<li class="mobilemenu__item"><a id="menu" title="Coming soon">')
        document.write(page_descriptions[i])
        document.write('</a></li>\n')
        continue
    }
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
