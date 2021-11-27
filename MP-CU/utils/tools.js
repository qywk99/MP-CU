const config = require('../app/config/index');
module.exports = {
    sys_theme: wx.getStorageSync('sys_theme')?wx.getStorageSync('sys_theme'):config.theme,
    sys_main: wx.getStorageSync('sys_main')?wx.getStorageSync('sys_main'):config.main,
    sys_text: wx.getStorageSync('sys_text')?wx.getStorageSync('sys_text'):config.text,
    //设置主题
    setTheme(val) {
        wx.setStorageSync('sys_theme', val);
    },
    //设置主颜色
    setMain(val) {
        wx.setStorageSync('sys_main', val);
    },
    //设置字号等级
    setText(val) {
        wx.setStorageSync('sys_text', val);
    },
    sys_capsule() {
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (!capsule) {
            console.log('getMenuButtonBoundingClientRect error');
            capsule = {bottom: 56, height: 32, left: 278, right: 365, top: 24, width: 87};
        }
        return capsule;
    },
    //实例是否为路由栈的第一个页面
    sys_isFirstPage() {
        let pages = getCurrentPages();
        return pages.length === 1
    },
    //getColor 随机生成库内颜色名
    getColor() {
        let colorArr = ['yellow', 'orange', 'red', 'pink', 'mauve', 'purple', 'blue', 'cyan', 'green', 'olive', 'grey', 'brown'];
        return colorArr[Math.floor(Math.random() * colorArr.length)]
    },
    _backPage() {
        if (this.sys_isFirstPage) {
            this._toHome();
        } else {
            wx.navigateBack({
                delta: 1,
                fail(res) {
                    console.log(res);
                }
            });
        }
    },
    _toHome() {
        wx.switchTab({
            url: config.homePath,
            fail(res) {
                console.log(res);
            }
        });
    },
    _to(url, type = '') {
        switch (type) {
            case 'switchTab':
                wx.switchTab({
                    url: url,
                    fail(res) {
                        console.log(res);
                    }
                });
                break;
            case 'reLaunch':
                wx.reLaunch({
                    url: url,
                    success(res) {
                        console.log(res);
                    },
                    fail(res) {
                        console.log(res);
                    }
                });
                break;
            case 'redirectTo':
                wx.redirectTo({
                    url: url,
                    fail(res) {
                        console.log(res);
                    }
                });
                break;
            default:
                wx.navigateTo({
                    url: url,
                    fail(res) {
                        console.log(res);
                    }
                })
                break;
        }
    }
}