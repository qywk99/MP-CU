Component({
    data: {
        isLoading: false,
        tabBarIndex: 0,
    },
    options: {
        addGlobalClass: true,
    },
    properties: {
        bg: {       //背景颜色
            type: String,
            value: 'ui-BG-2'
        },
        ui: {       //其他class
            type: String,
            value: ''
        },
        img: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        navBg: {
            type: String,
            value: 'bg-blur'
        },
        styles: {   //样式
            type: String,
            value: ''
        },
        loading: {  //是否加载
            type: String,
            optionalTypes: Boolean,
            value: 'auto'
        },
        tabbar: {
            type: Boolean,
            value: false
        },
        footer: {
            type: Boolean,
            value: true
        },
    },
    lifetimes: {
        ready() {
            let {tabbar, loading} = this.data;
            if (tabbar) {
                wx.hideTabBar();
                this._onPage();
            }
            this.setData({isLoading: loading})
            this.setLoading();
        },
    },
    observers: {
        'tabbar'(val) {
            if (val) {
                wx.hideTabBar();
            }
        },
        'loading'(val) {
            this.setData({isLoading: val})
            this.setLoading();
        },
    },
    methods: {
        _onPage() {
            let _this = this;
            let page = getCurrentPages();
            let url = page[page.length - 1].route
            this.data.$cuConfig.tabBar.map((item,index)=>{
                if(item.url === '/'+url) {
                    _this.setData({tabBarIndex: index})
                }
            })
        },
        setLoading() {
            let _this = this;
            setTimeout(() => {
                if (_this.data.loading === 'auto') {
                    _this.setData({isLoading: false})
                }
            }, 800);
        },
        modalSuccess() {
           return this.data.$cuStore.$Modal
        },
    },
})