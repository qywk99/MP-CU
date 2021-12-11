const app = getApp();

Page({
    data: {
        code1: '<ui-navbar> </ui-navbar>',
        code2: '<ui-navbar backtext="text"> </ui-navbar>',
        code3: '<ui-navbar shadow> </ui-navbar> \n<ui-navbar shadow="sm"> </ui-navbar> \n<ui-navbar shadow="lg"> </ui-navbar>',
        parameter: [], slots: [],
    },
    onLoad() {
        this.setData({
            parameter: [
                {
                    "name": "back",
                    "type": "Boolean",
                    "default": "true",
                    "info": "是否显示返回"
                },
                {
                    "name": "backtext",
                    "type": "String",
                    "default": "/",
                    "info": "返回文本"
                },
                {
                    "name": "status",
                    "type": "String",
                    "default": "/",
                    "info": "状态栏文本颜色,light / dark （其他字符串视为黑色）"
                },
                {
                    "name": "opacity",
                    "type": "Boolean",
                    "default": "false",
                    "info": "开启滑动渐变后 文本样式是否翻转"
                },
                {
                    "name": "opacityBg",
                    "type": "Boolean",
                    "default": "false",
                    "info": "开启滑动渐变后 返回按钮是否添加背景"
                },
                {
                    "name": "fixed",
                    "type": "Boolean",
                    "default": "false",
                    "info": "是否浮动占位,为true时浮动不占位"
                },
                {
                    "name": "shadow",
                    "type": "Boolean,String",
                    "default": "/",
                    "info": "是否开启阴影,true / false / 'sm' / 'lg'"
                },
                {
                    "name": "capsule",
                    "type": "Boolean",
                    "default": "false",
                    "info": "是否开启胶囊返回"
                },
                {
                    "name": "bg",
                    "type": "String",
                    "default": "box-bg",
                    "info": "背景颜色"
                },
                {
                    "name": "img",
                    "type": "String",
                    "default": "box-bg",
                    "info": "背景图片"
                },
                {
                    "name": "isSlot",
                    "type": "Boolean",
                    "default": "true",
                    "info": "开启slot默认插槽"
                },
                {
                    "name": "isCenter",
                    "type": "Boolean",
                    "default": "false",
                    "info": "开启slot中间插槽"
                },
                {
                    "name": "isRight",
                    "type": "Boolean",
                    "default": "false",
                    "info": "开启slot右边插槽"
                },
                {
                    "name": "scrollTop",
                    "type": "Number",
                    "default": "0",
                    "info": "滚动条位置"
                },
            ],
            slots: [
                {
                    "name": "无",
                    "info": "自定义整条bar,需要将参数custom设置为true"
                },
                {
                    "name": "left",
                    "info": "自定义bar的左边内容(默认带有back的部分,完全自定义左边部分请将参数back设置为false)"
                },
                {
                    "name": "center",
                    "info": "自定义bar的中间内容"
                },
                {
                    "name": "right",
                    "info": "自定义bar的右边内容,排序从右开始的弹性布局,小程序端会自动生成胶囊的安全区域。做小程序及跨端的时候right表现的不是很理想，请以项目实际情况自定义right部分"
                }
            ]
        })
    },
})
