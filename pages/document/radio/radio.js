const app = getApp();

Page({
    data: {
        radio: 1,
        color: 'blue-light',
        group: 1,
        disabled: 1,
        clearable: 1
    },
    onLoad() {

    },
    clearableChange(e) {
        this.setData({
            clearable: e.detail
        })
    },
})
