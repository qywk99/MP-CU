import colorUI from '../../../colorui'

Component({
    data: {
        isLoading: false,
		app_footer: colorUI.config.app_footer,
        sys_theme: colorUI.tools.sys_theme,
        sys_main: colorUI.tools.sys_main,
        sys_text: colorUI.tools.sys_text,
    },
    options: {
        // 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
        addGlobalClass: true,
        //multipleSlots: true  //多插槽
    },
    properties: {
        styles: {   //样式
            type: String,
            value: ''
        },
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
        navBg: {
            type: String,
            value: 'bg-blur'
        },
        loading: {  //是否加载
            type: String,
            optionalTypes: Boolean,
            default: 'auto'
        },
        title: {
            type: String,
            value: ''
        },
        tabbar: {
            type: Boolean,
            value: false
        },
        tabbarData: {
            type: Array,
            value: []
        },
        setTheme: {
            type: String,
            value: ''
        },
        setMain: {
            type: String,
            value: ''
        },
        setText: {
            type: String,
            value: ''
        },
    },
    lifetimes: {
        created() {

        },
        attached() {

        },
        ready() {

        },
    },
    observers: {
        'setTheme'(res) {
            if (res) {
                this.setData({
                    sys_theme: res
                })
            }
        },
        'setMain'(res) {
            if (res) {
                this.setData({
                    sys_main: res
                })
            }
        },
        'setText'(res) {
            if (res) {
                this.setData({
                    sys_text: res
                })
            }
        },
    },
    methods: {
        /*get_sys_data() {
            this.setData({
                app_footer: app.cu_config.app_footer,
                sys_theme: app.cu_tools.sys_theme,
                sys_main: app.cu_tools.sys_main,
                sys_text: app.cu_tools.sys_text
            });
        },*/
    }
})