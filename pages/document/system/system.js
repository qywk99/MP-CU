const app = getApp();

Page({
    data: {
        code1: '<ui-sys>\n  ...业务代码\n</ui-sys>',
        code2: '<ui-sys bg="bg-white">\n    ...业务代码\n</ui-sys>',
        code3: '<ui-sys img="....">\n   ...业务代码\n</ui-sys>',
        code4: '<ui-sys bg="bg-none" img="....">\n  ...业务代码\n</ui-sys>',
        parameter: [{
            default: "{}",
            info: "内部样式",
            name: "styles",
            type: "Object"
        },
        {
            default: "ui-BG-1",
            info: "背景颜色",
            name: "bg",
            type: "String"
        },
        {
            default: "",
            info: "其他class",
            name: "ui",
            type: "String"
        },
        {
            default: "/",
            info: "背景图",
            name: "img",
            type: "String",
        },
        {
            default: "/",
            info: "引入文字以开启默认导航",
            name: "title",
            type: "String"
        },
        {
            default: "bg-blur",
            info: "默认导航的背景色",
            name: "navBg",
            type: "String"
        },
        {
            default: "auto",
            info: "是否加载中",
            name: "loading",
            type: "String/Boolean"
        },
        {
            default: "false",
            info: "是否开启tabbar",
            name: "tabbar",
            type: "Boolean"
        }]
    },
    onLoad() {
        
    }
})
