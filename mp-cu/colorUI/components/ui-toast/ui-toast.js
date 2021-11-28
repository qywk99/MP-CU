Component({
    data: {
        touch: false,
        sys_navBar: getApp().ColorUi.tools.sys_navBar,
    },
    options: {
        addGlobalClass: true,
        //multipleSlots: true
    },
    properties: {
        title: {
            type: String,
            value: ''
        },
        icon: {
            type: String,
            value: ''
        },
        position: {
            type: String,
            value: ''
        },
        duration: {
            type: Number,
            value: 1500
        },
        mask: {
            type: Boolean,
            optionalTypes: String,
            value: false
        },
        isLoading: {
            type: Boolean,
            optionalTypes: String,
            value: false
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
    /*observers: {
        'scrollTop'(res) {
            this.opacityStatus();
        },
    },*/
    methods: {

    }
})