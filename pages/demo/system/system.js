const app = getApp();
Page({
    data: {
        cur: 0,
        bg: '',
        bgImg: '',
        code: '<ui-sys>\n   ...业务代码\n</ui-sys>'
    },
    onLoad(e) {
        let index = parseInt(e.cur);
        this.setCur(index);
    },
    tapCur(e) {
        let index = parseInt(e.currentTarget.dataset.index);
        this.setCur(index);
    },
    setCur(index) {
        let bg = '', bgImg = '';
        if (index === 0) {
            bg = 'bg-img';
        }
        if (index === 1) {
            bg = '';
            bgImg = '/static/img/bg-5.jpg';
        }
        if (index === 2) {
            bg = 'bg-img';
            bgImg = '/static/img/bg-2.jpg';
        }
        this.setData({
            cur: index,
            bg: bg,
            bgImg: bgImg
        })
    },
})
