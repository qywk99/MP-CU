const app = getApp();
Page({
    data: {
        code1: '...\n<ui-change-theme/>',
        code2: '...\n"darkmode": true',
        parameter: []
    },
    onLoad() {
        this.setData({
            parameter: [{
                default: "/",
                info: "是否圆角,可选sm/lg",
                name: "radius",
                type: "String,Boolean"
            },
            {
                default: "/",
                info: "是否显示下划线",
                name: "border",
                type: "Boolean"
            }]
        })
    },
})
