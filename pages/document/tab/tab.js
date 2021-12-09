const app = getApp();

Page({
    data: {
        NavCur: 0,
        change: ''
    },
    onLoad() {

    },
    tabChange(data) {
        console.log(data)
        let change = JSON.stringify(data);
        console.log(change)
        this.setData({
            change: change
        })
    }
})
