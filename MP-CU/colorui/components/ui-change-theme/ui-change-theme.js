const app = getApp();
Component({
    data: {
        color: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'grey'],
        sys_theme: app.cu_tools.sys_theme
    },
    options: {
        addGlobalClass: true,
        multipleSlots: true,
    },
    properties: {
        ui: {
            type: String,
            value: ''
        },
    },
    lifetimes: {
        created() {
            //this.opacityStatus();
        },
        attached() {
            /*this.setData({
                isFristPage: app.cu_tools.sys_isFirstPage()
            });*/
        },
        ready() {

        },
    },
    observers: {
        /*'scrollTop'(res) {
            this.opacityStatus();
        },*/
    },
    methods: {
        setTheme(e) {
            let val = e.currentTarget.dataset.value;
            app.cu_tools.setTheme(val); //  设置主题
            this.setData({
                sys_theme: val
            })
            this.triggerEvent('onThemeChange', val);
        },
        chooseColor(val) {
            this.triggerEvent('setMain', val);
        }
    }
})