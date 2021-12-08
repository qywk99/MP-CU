const app = getApp();

Page({
    data: {
        code1: '<ui-title title="标题"> </ui-title>',
        code2: '<ui-title title="标题" desc="副标题"> \n</ui-title>',
        code3: '<ui-title title="基础" desc="basic" isIcon>\n</ui-title> \n\n',
        code31: '<ui-title title="自定义图标" desc="icon">  \n  <block slot="icon">   \n    <text class="text-red cicon-whatshot">\n    </text>  \n  </block> \n</ui-title>',
        code4: '<ui-title title="等级一" desc="等级一" isIcon depth="1">\n</ui-title>',
    },
    onLoad() {

    },
})
