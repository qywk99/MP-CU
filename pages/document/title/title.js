const app = getApp();

Page({
    data: {
        code1: '<ui-title title="标题"/>',
        code2: '<ui-title title="标题" desc="副标题"/>',
        code3: '<ui-title title="基础" desc="basic" isIcon/>',
        code31: '<ui-title title="自定义图标" desc="icon">\n  <text slot="icon" class="cicon-whatshot"/>\n</ui-title>',
        code4: '<ui-title title="等级一" desc="等级一" isIcon depth="1"/>',
        parameter: [{
            default: "",
            info: "其他class",
            name: "ui",
            type: "String"
        },
        {
            default: "bg-none",
            info: "背景颜色",
            name: "bg",
            type: "String"
        },
        {
            default: "",
            info: "标题名称",
            name: "title",
            type: "String"
        },
        {
            default: "副标题",
            info: "背景颜色",
            name: "desc",
            type: "String"
        },
        {
            default: "ui-TC",
            info: "标题class",
            name: "titleUi",
            type: "String"
        },
        {
            default: "ui-TC-3",
            info: "副标题class",
            name: "descUi",
            type: "String"
        },
        {
            default: "0",
            info: "等级字号,{1~4}",
            name: "depth",
            type: "Number/String"
        },
        {
            default: "ui-BG-Main",
            info: "dot的class",
            name: "dot",
            type: "String"
        },
        {
            default: "ui-BG-Main",
            info: "line的class",
            name: "line",
            type: "String"
        },
        {
            default: "false",
            info: "显示图标",
            name: "isIcon",
            type: "Boolean"
        },
        {
            default: "false",
            info: "圆点",
            name: "hasDot",
            type: "Boolean"
        },
        {
            default: "false",
            info: "短线",
            name: "hasLine",
            type: "Boolean"
        },
        {
            default: "left",
            info: "内容对齐，{left / center / right}",
            name: "align",
            type: "String"
        },
        {
            default: "default",
            info: "特殊模板",
            name: "tpl",
            type: "String"
        },
        {
            default: "false",
            info: "线",
            name: "inLine",
            type: "Boolean"
        }],
        slots: [{
            name: "默认",
            info: "标题区的内容"
        }, {
            name: "icon",
            info: "自定义图标"
        }, {
            name: "more",
            info: "更多内容"
        }],
    },
    onLoad() {

    },
})
