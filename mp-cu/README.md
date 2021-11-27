# MP CU

本项目为 `colorui3.x` 微信小程序原生版。

`colorui3.x` 默认只支持 `uni-app`，本项目中 `colorui` 框架为移植修改版。

`colorui3.x` 地址： [https://github.com/weilanwl/coloruiBeta](https://github.com/Color-UI/MP-CU)

本项目地址：[https://github.com/Color-UI/MP-CU](https://github.com/Color-UI/MP-CU)

<hr/>

### 准备配置

需要先升级小程序开发工具到 `2021-10-11` 之后的版本,
然后，检查根目录下，`project.config.json` 配置文件内的 `"setting"` 节点下，是否配置了：

``` 
"useCompilerPlugins": [
    "sass"
]
```

如果没有配置，需要手动配置一下

由于小程序默认开启了 `v2` 的样式，在v2模式下，`colorUI` 部分样式会失效。
完整 `colorUI` 样式，需要在 `app.json` 文件内，删除 `v2` 即可

``` 
"style": "v2", //删掉这段
```


### 框架配置

在根目录的 `app.js` 文件里引入相关配置：

``` 

import colorUI from '/mp-cu/ui';

App({
    //挂载到app上
    colorUI: colorUI,
    
    //小程序启动
    onLaunch() {

    },
	.....
	.....
})

```

然后在根目录的 `app.scss` 文件里引入相关框架的css文件。

``` 

@import './mp-cu/colorUI/scss/ui';


// 实际项目中，可删除下面的相关文件和引用，因为图标太多，体积较大，可能你项目里并不需要这么多图标，建议自行添加需要的扩展icon图标引用。
// @import './mp-cu/icon/doc';

```


相关文件路径：

``` 

/mp-cu/config/index.js'  // 框架的默认配置项

```


### 组件使用方式

挂载组件，在 `app.json` 或 `xxx.json` 文件里配置

``` 

"usingComponents": {
	"ui-sys": "mp-cu/colorUI/components/ui-sys/ui-sys"
}

```


`custom-tab-bar` 文件夹是不需要的，只是本框架演示demo用的自定义tabBar，实际项目中，自行考虑整合。
