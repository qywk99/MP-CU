const app = getApp();

Page({
    data: {
        code: '<ui-code></ui-code>',
        code1: '<ui-code>...</ui-code> \n<ui-code :content="..."></ui-code>',
        html: '<ui-code>...</ui-code> \n<ui-code :content="..."></ui-code>',
        css: '.ui-code { \n  white-space: pre-wrap; \n  word-break: break-all; \n  word-wrap: break-word; \n  font-size: 90%; \n}',
        code2: '<ui-code tag="pre" lang="html" :content="...">\n</ui-code>\n<ui-code tag="pre" lang="css" :content="...">\n</ui-code>'
    },
    onLoad() {

    },
})
