const app = getApp();
Page({
    data: {
        cur: 1, ui: ''
    },
    onLoad(e) {
        this.setData({
            cur: e.cur
        })
    },
    tapSetNavbar() {
        wx.reLaunch({
            url: '/pages/demo/navbar/navbar?cur=1'
        })
    },
    tapSetUi(e) {
        this.setData({
            ui: e.currentTarget.dataset.value
        })
    },
})
