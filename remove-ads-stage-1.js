"use strict";
const matchAds = (/**@type {string} */ src) => {
    // https://pagead2.googlesyndication.com
    return src.indexOf("googlesyndication.com") != -1;
};
const observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
            if (node instanceof HTMLScriptElement) {
                if (matchAds(node.src)) {
                    console.log("发现目标", node);
                    node.remove();
                }
            }
        }
    }
});
console.log("开始清除谷歌广告");
observer.observe(document.documentElement, { childList: true, subtree: true });
