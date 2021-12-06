import ColorUI from './mp-cu/main'
export const colorUI = new ColorUI({
    config: {
        theme: 'auto',
        main: 'blue',
        text: 1,
        footer: true,
        homePath: '/pages/home/home',
        tabBar: [{
            title: '文档',
            icon: '/static/tab_icon/document.png',
            curIcon: '/static/tab_icon/document_cur.png',
            url: '/pages/home/home',
            type: 'tab'
        },
            {
                title: '模板',
                icon: '/static/tab_icon/tpl.png',
                curIcon: '/static/tab_icon/tpl_cur.png',
                url: '/pages/template/home',
                type: 'tab'
            },
            {
                title: '定制',
                icon: '/static/tab_icon/custom.png',
                curIcon: '/static/tab_icon/custom_cur.png',
                url: '/pages/custom/home',
                type: 'tab'
            },
            {
                title: '实验',
                icon: '/static/tab_icon/test.png',
                curIcon: '/static/tab_icon/test_cur.png',
                url: '/pages/test/home',
                type: 'tab'
            },
            {
                title: '我的',
                icon: '/static/tab_icon/my.png',
                curIcon: '/static/tab_icon/my_cur.png',
                url: '/pages/my/home',
                type: 'tab'
            }],
    },
    data: {
        name: 'hello'
    },
    methods: {
        culog (message, ...optionalParams) {
            if (wx.getAccountInfoSync().miniProgram.envVersion === 'develop' && message) {
                console.log(message, ...optionalParams)
            } else {
                return
            }
        }
    }
})