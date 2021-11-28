# MP CU Beta V3.2.6

#### 介绍

本项目为 `colorui3.x` 微信小程序原生版。

`colorui3.x` 默认只支持 `uni-app`，本项目中 `colorui` 框架为移植修改版。

`colorui3.x` 地址： [https://github.com/weilanwl/coloruiBeta](https://github.com/Color-UI/MP-CU)

<hr/>

### 框架配置

在根目录的 `app.js` 文件里引入相关配置：

``` 

//引入框架的方法函数库
import ColorUI from './mp-cu/ui'
var ColorUi = new ColorUI({
    theme: 'light',     // 设置默认主题(light 浅色，dark 深色，auto 自动跟随系统)，默认 浅色
    //main: 'blue',       // 设置默认强调色（参考背景色），默认 blue
    //text: '1',          // 设置默认字号等级(0-4)，默认 1
    //footer: true,       // 显示底部colorUI版权(如果属于开源作品，请带上ColorUI版权！！！)，默认 显示
    //homePath: '',       // 设置首页路径(一些组件会用到跳回主页，请每个项目设置好！)，配置内容请参考 /mp-cu/ui.js 文件
    //tabBar: [],         // 配置系统tabBar，如果使用小程序自带的，可不配置此项，配置内容请参考 /mp-cu/ui.js 文件
})

App({  
    ColorUi,        //挂载到app上
    onLaunch() {
        ColorUi.setStore()
    },
    onShow() {

    }
})


```

然后在根目录的 `app.scss` 文件里引入相关框架的css文件。

``` 

@import './mp-cu/colorUI/scss/ui';


// 实际项目中，可删除下面的相关文件和引用，因为图标太多，体积较大，可能你项目里并不需要这么多图标，建议自行添加需要的扩展icon图标引用。
// @import './icon/doc';

```


相关文件路径：

``` 

/mp-cu/ui.js'   // 框架的默认配置项，不建议修改框架内置的配置，以免后续更新升级被覆盖

```


### 组件使用方式

挂载组件，在 `app.json` 或 `xxx.json` 文件里配置

``` 

"usingComponents": {
	"ui-sys": "mp-cu/colorUI/components/ui-sys/ui-sys"
}

```

`custom-tab-bar` 文件夹是不需要的，只是本框架演示demo用的自定义tabBar，实际项目中，自行考虑整合。