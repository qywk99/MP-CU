//引入框架的方法函数库
import ColorUI from './mp-cu/ui'
var ColorUi = new ColorUI({
    // 配置，使用的默认的配置项时，可以不在这里配置
    theme: 'auto',       // 设置默认主题(light 浅色，dark 深色，auto 自动跟随系统)，默认 浅色
    //main: 'blue',       // 设置默认强调色（参考背景色），默认 blue
    //text: '1',          // 设置默认字号等级(0-4)，默认 1
    //footer: true,       // 显示底部colorUI版权(如果属于开源作品，请带上ColorUI版权！！！)，默认 显示
    //homePath: '',       // 设置首页路径(一些组件会用到跳回主页，请每个项目设置好！)，配置内容请参考 /mp-cu/ui.js 文件
    //tabBar: [],         // 配置系统tabBar，如果使用小程序自带的，可不配置此项，配置内容请参考 /mp-cu/ui.js 文件
    
})

App({  
    ColorUi,        //挂载到app上
    onLaunch() {
        
    },
    onShow() {
        
    }
})
