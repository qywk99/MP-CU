import tools from '../../../utils/tools'

Component({
    data: {
        touch: false,
        sys_navBar: tools.sys_navBar,
    },
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        show: {
            //是否返回上一页
            type: Boolean,
            value: false
        },
        noNav: {
            type: Boolean,
            value: false
        },
        ui: {
            type: String,
            value: ''
        },
        title: {
            type: String,
            value: ''
        },
        content: {
            type: String,
            value: ''
        },
        iconCancel: {
            type: Boolean,
            optionalTypes: String,
            value: false
        },
        showCancel: {
            type: Boolean,
            optionalTypes: String,
            value: true
        },
        option: {
            type: Boolean,
            optionalTypes: String,
            value: true
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        confirmText: {
            type: String,
            value: '确定'
        },
        name: {
            type: String,
            value: ''
        },
        align: {
            type: String,
            value: ''
        },
        dialog: {
            type: String,
            value: ''
        },
        tpl: {
            type: String,
            value: 'default'
        },
        transparent: {
            type: Boolean,
            optionalTypes: String,
            value: false
        },
        mask: {
            type: Boolean,
            optionalTypes: String,
            value: true
        },
        duration: {
            type: Number,
            value: 0
        },
        top: {
            type: Number,
            value: 0
        }
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
        hide() {
            if (this.data.touch) {
                this.triggerEvent("setTarget");
                this.setData({
                    touch: false
                })
            }
        },
        _cancel() {
            this.hide();
            this.triggerEvent("cancel");
        },
        _confirm() {
            this.hide();
            this.triggerEvent("success");
        },
        _catchTap() {
            //this.hide();
        }
        /*opacityStatus() {
            let top = this.data.scrollTop;
            let val = top > this.data.sys_navBar ? 1 : top * 0.01;
            this.setData({
                opacityVal: val
            })
        },
        _navBack() {
            if (this.stopBack) {
                this.triggerEvent("navback");
            } else {
                app.cu_tools._backPage();
            }
        },
        _navHome() {
            app.cu_tools._toHome();
        },*/
    }
})