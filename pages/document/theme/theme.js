const app = getApp();

Page({
    data: {
        loading: true,
        code1: '...\n<ui-change-theme/>',
        theme: '',
    },
    onLoad() {

    },
    //主题更新
    onThemeChange(e) {
        this.setData({
            theme: e.detail
        })
    },
    tapAvatar() {
        // /pages/parameter/parameter?component=ui-theme
    },
})
