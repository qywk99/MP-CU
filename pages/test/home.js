const app = getApp();

Page({
    data: {
        scrollTop: 0, listColor: [], list: [{
            title: '触底加载', text: '数据列表触底加载实验', name: '@胖虎', icon: 'list', url: 'list/old-list/index'
        }, {
            title: '虚拟加载', text: '数据列表虚拟加载实验', name: '@胖虎', icon: 'list1', url: 'list/fictitious-list/index'
        }],
    },
    onLoad() {
        let list = this.data.list, color = [];
        for (let i = 0; i < list.length; i++) {
            let val = this.getColor();
            color.push(val)
        }
        this.setData({
            listColor: color
        })
    },
    //随机生成库内颜色名
    getColor() {
        let colorArr = ['yellow', 'orange', 'red', 'pink', 'mauve', 'purple', 'blue', 'cyan', 'green', 'olive', 'grey', 'brown'];
        return colorArr[Math.floor(Math.random() * colorArr.length)]
    },
    tapToUrl(e) {
        wx.navigateTo({
            url: e.currentTarget.dataset.url
        })
    },
    // 监听用户滑动页面事件。
    onPageScroll(e) {
        // 注意：请只在需要的时候才在 page 中定义此方法，不要定义空方法。以减少不必要的事件派发对渲染层-逻辑层通信的影响。
        // 注意：请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作。尤其是每次传输大量数据，会影响通信耗时。
        // https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPageScroll-Object-object
        this.setData({
            scrollTop: e.scrollTop
        })
    },
})
