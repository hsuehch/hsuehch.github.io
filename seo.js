/* canonicalと多言語ページの対応を<head>へ追加する． */
function addSeoLink(rel, path, hreflang) {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = new URL(path, window.BASE_URL).href;

    if (hreflang) {
        link.hreflang = hreflang;
    }

    document.head.appendChild(link);
}

/* canonicalPathは公開URLのルートから見たパスを指定する． */
function setCanonical(canonicalPath) {
    addSeoLink("canonical", canonicalPath);
}

/* Googleが対応する英語，日本語，繁体字中国語の各ページを相互に関連付ける． */
function setLanguageAlternates(pageName) {
    const languages = {
        en: `${pageName}_en.html`,
        ja: `${pageName}_jp.html`,
        "zh-Hant": `${pageName}_zh.html`
    };

    for (const [language, path] of Object.entries(languages)) {
        addSeoLink("alternate", path, language);
    }
}
