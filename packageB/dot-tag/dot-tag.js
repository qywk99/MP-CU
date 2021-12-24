Page({
    data: {
        imgA: '', imgB: '', imgC: ''
    },
    onLoad() {
        let list = [];
        for(let i = 1; i< 15; i++) {
            let url = i  < 10 ? '0' + (i) : i;
            list.push('https://cos.color-ui.com/wallpaper/10' + url + '.jpg');
        }
        let imgA = this.getImage(list);
        let imgB = this.getImage(list);
        let imgC = this.getImage(list);
        this.setData({
            imgA: imgA,
            imgB: imgB,
            imgC: imgC
        })
    },
    getImage(list) {
        return list[Math.floor(Math.random() * list.length)];
    },
})