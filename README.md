# MP CU Beta V3.2.6

#### 介绍

本项目为 `colorui3.x` 微信小程序原生版。

`colorui3.x` 默认只支持 `uni-app`，本项目中 `colorui` 框架为移植修改版。

`colorui3.x` 地址： [https://github.com/weilanwl/coloruiBeta](https://github.com/Color-UI/MP-CU)
内置的vuex 渲染引擎感谢 [https://github.com/xiaoyao96/wxMiniStore](https://github.com/xiaoyao96/wxMiniStore)

<hr/>

### 准备配置

需要先升级小程序开发工具到 `2021-10-11` 之后的版本,
然后，检查根目录下，`project.config.json` 配置文件内的 `"setting"` 节点下，是否配置了：

``` json

"useCompilerPlugins": [
    "sass"
]

```

如果没有配置，需要手动配置一下

由于小程序默认开启了 `v2` 的样式，在v2模式下，`colorUI` 部分样式会失效。
完整 `colorUI` 样式，需要在 `app.json` 文件内，删除 `v2` 即可

``` json

"style": "v2", //删掉这段

```

<hr/>

### 框架配置

在根目录的 `app.js` 文件里引入相关配置：

``` js

//引入框架的方法函数库
import ColorUI from './mp-cu/ui'
var ColorUi = new ColorUI({
    theme: 'light',     // 设置默认主题(light 浅色，dark 深色，auto 自动跟随系统)，默认 浅色
// 具体配置可前往源文件 /mp-cu/ui中查看
})

App({  
    ColorUi,        //将colorui主文件挂载到app上
    onLaunch() {

    },
    onShow() {

    }
})


```

然后在根目录的 `app.scss` 文件里引入相关框架的css文件。

``` css

@import './mp-cu/colorUI/scss/ui';

/* 实际项目中，可删除下面的相关文件和引用，因为图标太多，体积较大，可能你项目里并不需要这么多图标，建议自行添加需要的扩展icon图标引用。*/
/* @import './icon/doc'; */

```


相关文件路径：

``` js

/mp-cu/ui.js'   // 框架的默认配置项，不建议修改框架内置的配置，以免后续更新升级被覆盖

```

<hr/>

### 组件使用方式

挂载组件，在 `app.json` 或 `xxx.json` 文件里配置

``` json

"usingComponents": {
  "ui-sys": "mp-cu/colorUI/components/ui-sys/ui-sys"
}

```

<hr/>

### 其它说明

`custom-tab-bar` 文件夹是不需要的，只是本框架演示demo用的自定义tabBar，实际项目中，自行考虑整合。

自动跟随系统主题，切换主题功能，在 `app.json` 文件里配置

``` json

"darkmode": true'

```

开启自动跟随后，在安卓机端切换主题时，会重载小程序，具体原因，参考微信官方说明：[https://developers.weixin.qq.com/community/develop/doc/000a88c66f00183d414c9879451400](https://developers.weixin.qq.com/community/develop/doc/000a88c66f00183d414c9879451400)


<hr/>

## 内置方法
- [x] 内置 store		[使用方法参考](#ColorUi.store)
- [x] 内置 log	 	[使用方法参考](#ColorUi.log)

<hr/>

### 已有组件和功能
- [x] sys
- [x] avatar
- [x] card
- [x] theme
- [x] code
- [x] fixed
- [x] loading
- [x] menu
- [x] modal
- [x] navbar
- [x] radio
- [x] swiper
- [x] switch
- [x] tabbar
- [x] title
- [x] toast
- [x] button
- [x] background
- [x] icon
- [ ] checkbox
- [ ] drawer
- [ ] input
- [ ] list
- [ ] input



## 内置方法详解

<span style='color : red' >使用内置方法必须在页面中引入app.js ，即 `const app = getApp()` </span> 

### <span id='ColorUi.store'>ColorUi.store</span>

> 在vue中存在vuex，但由于微信小程序官方的缘故，不开放vuex方法，colorui 有关功能需要用到vuex，不得不在微信小程序中采用该方法，同时为了方便接下来的开发者，colorui内置了相关方法供你存储，查询，清空。 渲染引擎感谢 [https://github.com/xiaoyao96/wxMiniStore](https://github.com/xiaoyao96/wxMiniStore)

```javascript

//存值
this.setCuData('name' , '234234')
//取值
this.getCuData("name")
//清空
this.clearCuData()

```

### <span id='ColorUi.log'>ColorUi.log </span>

> 在实际开发中，会存在开发log 不想在线上版本展示的效果，很明显我们熟知的 `console.log()` 满足不了你的需求，为了满足这个需求，colorui wxmapp 特地为你添加了一个方法，其中参数和 `console.log()` 一模一样

```javascript

app.ColorUi.log( ...message) //注意，此段log 在线上时就不会展示！

```

### ColorUi.request
> 微信小程序为了检查安全域名，所以封装了wx.request这个方法，为了方便大家全局去配置参数，并且为了方便大家使用promise方法调用，ColorUI 为你封装好了一套request 方法，使用起来如下图所示

```javascript

/// 配置好 request ,建议将此文件拷贝到你的代码顶层，防止后续Colorui 主文件升级导致你的特定的拦截参数被修改。

///在B.js文件里面引用

B.js:

import { request } from 'request.js'

export const login = (data) =>{
	return request('login' , 'post' , data , false ) //具体传参请看文件内部说明
}


```



