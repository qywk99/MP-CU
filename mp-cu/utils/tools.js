module.exports = {
    sys_info: wx.getSystemInfoSync(),	// 获取系统信息
    sys_statusBar: wx.getSystemInfoSync().statusBarHeight,
    sys_navBar: wx.getSystemInfoSync().statusBarHeight + 50,
    //getColor 随机生成库内颜色名
    getColor() {
        let colorArr = ['yellow', 'orange', 'red', 'pink', 'mauve', 'purple', 'blue', 'cyan', 'green', 'olive', 'grey', 'brown'];
        return colorArr[Math.floor(Math.random() * colorArr.length)]
    },
    // 获取胶囊信息
    sys_capsule() {
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (!capsule) {
            console.error('getMenuButtonBoundingClientRect error');
            capsule = { bottom: 56, height: 32, left: 278, right: 365, top: 24, width: 87 };
        }
        return capsule;
    },
    TYPE_ARRAY :"[object Array]",
    TYPE_OBJECT : "[object Object]",
    _typeOf : function (val) {
        return Object.prototype.toString.call(val);
    },
    _deepClone :function (obj) {
        return JSON.parse(JSON.stringify(obj));
    },
}