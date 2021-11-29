import tools from '/utils/tools'
import {ColorUIStore} from '/store/index'

/**
 *  ColorUi 主Js文件
 * @param   theme               设置默认主题
 * @param   main                设置默认强调色
 * @param   text                设置默认字号等级(0-4)
 * @param   footer              显示底部colorUI版权(如果属于开源作品，请带上ColorUI版权！！！)
 * @param   homePath            设置首页路径(一些组件会用到跳回主页，请每个项目设置好！)
 * @param   tabBar              配置系统tabBar
 */

export default class ColorUI {
    constructor({
        theme = 'light',					
        main = 'blue',						
        text = 1,
        footer = true,
        homePath = '/pages/home/home',
        tabBar = [{
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
            title: '社区',
            icon: '/static/tab_icon/comment.png',
            curIcon: '/static/tab_icon/comment_cur.png',
            url: '/pages/community/home',
            type: 'tab'
        },
        {
            title: '发现',
            icon: '/static/tab_icon/find.png',
            curIcon: '/static/tab_icon/find_cur.png',
            url: '/pages/find/home',
            type: 'tab'
        },
        {
            title: '我的',
            icon: '/static/tab_icon/my.png',
            curIcon: '/static/tab_icon/my_cur.png',
            url: '/pages/my/home',
            type: 'tab'
        }],
    }) {
        this.theme = theme
        this.main = main
        this.text = text
        this.footer = footer
        this.homePath = homePath
        this.tabBar = tabBar
        this.tools = tools
        console.log(
            `%c colorUi 主文件启动成功 %c 当前版本V3.2.6 wechat Apache%c`,
            'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
            'background:#0081ff ;padding: 1px 5px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;',
            'background:transparent'
        )
        this.store = ColorUIStore(this)
        if (theme === 'auto') {
            wx.onThemeChange((res)=>{
                this.store.setState({sys_theme: 'auto'});
                wx.setStorageSync('sys_theme', 'auto');
                this.setStatusStyle(wx.getSystemInfoSync().theme === 'light' ? 'dark' : 'light')
            })
        } else {
            wx.setStorageSync('sys_theme', theme)
            this.setStatusStyle(theme === 'light' ? 'dark' : 'light');
        }
    }
    getColorUiStore() {
        return this.store
    }
    getColorUiTools() {
        return this.tools
    }
    getColorUiTabBar() {
        return this.tabBar
    }
    //设置系统颜色
    setStatusStyle(status) {
        if (status === 'light') {
            wx.setNavigationBarColor({
                frontColor: '#ffffff',
                backgroundColor: '#000000',
                animation: {
                    duration: 200,
                    timingFunc: 'easeIn'
                }
            });
        } else {
            wx.setNavigationBarColor({
                frontColor: '#000000',
                backgroundColor: '#ffffff',
                animation: {
                    duration: 200,
                    timingFunc: 'easeIn'
                }
            });
        }
    }
}