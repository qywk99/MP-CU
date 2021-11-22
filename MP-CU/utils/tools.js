//const app = getApp();
module.exports = {
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
            url: '/pages/home/home',
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
    },
}