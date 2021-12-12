const app = getApp();

Page({
    data: {
        tabCur: 0,
        account: {
            phone: '',
            password: ''
        },
        login: {
            phone: '',
            code: ''
        },
        isLoading: false,
        wxisLoading: false,
    },
    tabNavChange(e) {
        this.setData({
            tabCur: e.detail.index
        })
    },
})
