/***
 * @author  bypanghu@163.com (https://github.com/bypanghu)
 * @author iZaizai (https://github.com/iZaiZaiA)
 */

import tools from '/utils/tools'
import { CUStoreInit } from '/store/index'
import { _typeOf, _deepClone } from "./utils/tools";
let pageLife = [
    "data",
    "onLoad",
    "onShow",
    "onReady",
    "onHide",
    "onUnload",
    "onPullDownRefresh",
    "onReachBottom",
    "onShareAppMessage",
    "onPageScroll",
    "onTabItemTap",
    "setTheme",
    "setMain",
    "setText",
    "_toHome",
    "_backPage",
    "sys_isFirstPage"
]
let store = {}
//设置系统颜色
export const setStatusStyle = (status) => {
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

let baseMethod = {
    //设置主题
    setTheme(data) {
        store.setState({
            'sys_theme': data
        })
        wx.setStorageSync('sys_theme', data);
        //跟随系统
        if (data === 'auto') {
            setStatusStyle(wx.getSystemInfoSync().theme === 'light' ? 'dark' : 'light');
        } else {
            setStatusStyle(data === 'light' ? 'dark' : 'light');
        }
    },
    //设置主颜色
    setMain(data) {
        store.setState({
            sys_main: data,
        });
        wx.setStorageSync('sys_main', data);
    },
    //设置字号等级
    setText(data) {
        store.setState({
            sys_text: data,
        });
        wx.setStorageSync('sys_text', data);
    },
    _toHome() {
        wx.switchTab({
            url: this.data.$cuConfig.homePath,
            fail(res) {
                console.log(res);
            }
        });
    },
    $showDialog({
        title ,
        content ,
        showCancel ,
        cancelText,
        confirmText ,
        success
    }){
        store.$p.map(item =>{
            if(item.is.indexOf('components/ui-modal/ui-modal') > -1 ){
                item['successBack'] = success //强制更新所有页面的successBack 为设定的success
            }
        })
        store.setState({
            '$Modal.show': true,
            '$dialog.title' : title,
            '$dialog.content' : content,
            '$dialog.showCancel' : showCancel,
            '$dialog.cancelText' : cancelText,
            '$dialog.confirmText' : confirmText
        });
    },
    setToast( data) { 
        let key ={}
         Object.assign(key,data);
         console.log(key)
        // state.toast = Object.assign(state.toast,data);
    },
    $tips(title ,duration=1500){
        store.setState({
            '$toast.title' : title,
            '$toast.duration' : duration
        })
    },
    /**
     * 
     * @param title     标题
     * @param duration  显示时间
     */
    $success(_,title='成功',duration=1500){
        store.setState({
            '$toast.title' : title,
            '$toast.duration' : duration,
            '$toast.icon' : '_icon-check'
        })
    },
    /**
     * 
     * @param title     标题
     * @param duration  显示时间
     */
    $error(_,title='错误',duration=1500){
        store.setState({
            '$toast.title' : title,
            '$toast.duration' : duration,
            '$toast.icon' : '_icon-warn',
            
        })
    },
    /**
     * 
     * @param title     标题
     * @param duration  显示时间
     */
    $loading(title = '加载中' , duration = 1500){
        store.setState({
            '$toast.title' : title ,
            '$toast.duration' : duration,
            '$toast.icon' : '_icon-loading',
            '$toast.isLoading':true
        })
    },
    $hideLoading(){
        store.setState({
            '$toast.title' : '',
            '$toast.icon' : '',
            '$toast.isLoading':false
        })
    },
    closeModal(){
        store.setState({
            '$Modal.show': false,
        });
    },
    _backPage() {
        if (this.sys_isFirstPage) {
            this._toHome();
        } else {
            wx.navigateBack({
                delta: 1,
                fail(res) {
                    console.log(res);
                }
            });
        }
    },
    //实例是否为路由栈的第一个页面
    sys_isFirstPage() {
        return getCurrentPages().length === 1
    },
}

/**
 *  ColorUi 主Js文件
 * config 下
 * @param   theme               设置默认主题
 * @param   main                设置默认强调色
 * @param   text                设置默认字号等级(0-4)
 * @param   footer              显示底部colorUI版权(如果属于开源作品，请带上ColorUI版权！！！)
 * @param   homePath            设置首页路径(一些组件会用到跳回主页，请每个项目设置好！)
 * @param   tabBar              配置系统tabBar
 * 
 * 
 */

export default class ColorUI {
    constructor({
        config,
        data,
        state,
        methods
    }) {
        this.config = config
        this.data = data
        this.methods = methods
        this.state = state
        this.$cuState = {};
        this.colorUiInit()
    }
    //colorui 主框架初始化
    colorUiInit() {
        //创建时，添加组件
        const _create = function (r, o = {}) {
            r.$cuStore = {};
            const { useProp } = o;
            if (o.hasOwnProperty("useProp")) {
                if (
                    (useProp && typeof useProp === "string") ||
                    Object.prototype.toString.call(useProp) === "[object Array]"
                ) {
                    r.$cuStore.useProp = [].concat(useProp);
                } else {
                    r.$cuStore.useProp = [];
                }
            }
            store.$p.push(r);
            
            if (r.$cuStore.useProp) {
                r.setData({
                    $cuStore: _filterKey(
                        store.$cuStore,
                        r.$cuStore.useProp,
                        (key, usekey) => key === usekey
                    ),
                });
            } else {
                r.setData({
                    $cuStore: store.state,
                })
            }
        };
        //销毁时，移除组件
        const _destroy = function (r) {
            let index = store.$p.findIndex((item) => item === r);
            if (index > -1) {
                store.$p.splice(index, 1);
            }
        };
        store = CUStoreInit(this.config)

        if (this.config.theme === 'auto') {
            wx.onThemeChange((res) => {
                store.setState({
                    sys_theme: 'auto'
                })
                wx.setStorageSync('sys_theme', 'auto');
                setStatusStyle(wx.getSystemInfoSync().theme === 'light' ? 'dark' : 'light')
            })
        } else {
            wx.setStorageSync('sys_theme', this.config.theme)
            setStatusStyle(this.config.theme === 'light' ? 'dark' : 'light');
        }
        const originPage = Page
        const originComponent = Component;
        let that = this
        App.Page = function (o = {}, ...args) {
            //将config 和 data 组装进data 里面
            o.data = {
                ...(o.data || {}),
                sys_info: tools.sys_info,	// 获取系统信息
                sys_statusBar: tools.sys_statusBar,
                sys_navBar: tools.sys_navBar,
                sys_capsule: tools.sys_capsule(),
                $cuData: that.data,
                $cuConfig: that.config,
                $cuStore: store.state
            };
            //注入colorui 函数体
            Object.keys(baseMethod).forEach(key => {
                if (typeof baseMethod[key] === 'function') {
                    o[key] = baseMethod[key]
                }
            })
            o['setState'] = store.setState
             //注入用户设定的methods
            Object.keys(that.methods).forEach((key) => {
                if (
                typeof that.methods[key] === "function" &&
                !pageLife.some((item) => item === key)
                ) {
                o[key] = that.methods[key];
                }
            });

            const originCreate = o.onLoad;
            o.onLoad = function () {
                _create(this, o);
                originCreate && originCreate.apply(this, arguments);
            };
            
            const originonDestroy = o.onUnload;
            o.onUnload = function () {
                _destroy(this);
                originonDestroy && originonDestroy.apply(this, arguments);
            };
            originPage(o, ...args);
        }
        try {
            Page = App.Page
        } catch (e) { }
        //重写组件
        App.Component = function (o = {}, ...args) {
            o.data = {
                ...(o.data || {}),
                sys_info: tools.sys_info,	// 获取系统信息
                sys_statusBar: tools.sys_statusBar,
                sys_navBar: tools.sys_navBar,
                sys_capsule: tools.sys_capsule(),
                $cuData: that.data,
                $cuConfig: that.config,
                $cuStore: store.state
            };
            o.methods || (o.methods = {})
            o.methods['getColor'] = tools.getColor
            o.methods['setState'] = store.setState
            Object.keys(baseMethod).forEach(key => {
                if (typeof baseMethod[key] === 'function') {
                    o.methods[key] = baseMethod[key]
                }
            })
             //注入用户设定的methods
             Object.keys(that.methods).forEach((key) => {
                if (
                typeof that.methods[key] === "function" &&
                !pageLife.some((item) => item === key)
                ) {
                o.methods[key] = that.methods[key];
                }
            });
           
            const { lifetimes = {} } = o;
            let originCreate = lifetimes.attached || o.attached,
                originonDestroy = lifetimes.detached || o.detached;
            const attached = function () {
                _create(this, o);
                originCreate && originCreate.apply(this, arguments);
            };

            const detached = function () {
                _destroy(this);
                originonDestroy && originonDestroy.apply(this, arguments);
            };
            if (Object.prototype.toString.call(o.lifetimes) === "[object Object]") {
                o.lifetimes.attached = attached;
                o.lifetimes.detached = detached;
            } else {
                o.attached = attached;
                o.detached = detached;
            }
            originComponent(o, ...args);
        };
        try {
            Component = App.Component;
        } catch (e) { }
        console.log(
            `%c colorUi 主文件启动成功 %c 当前版本V3.2.6 wechat Apache%c`,
            'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
            'background:#0081ff ;padding: 1px 5px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;',
            'background:transparent'
        )
    }

}