//引入框架的方法函数库
import ColorUI from './mp-cu/ui'
var ColorUi = new ColorUI({ // 此处可以配置相关
    theme  : 'light',
    autoChangeTheme : true
})

App({  
    ColorUi,        //挂载到app上
    onLaunch() {
        ColorUi.setStore()
    },
    onShow() {

    },
})
