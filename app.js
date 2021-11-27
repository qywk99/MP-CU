//引入框架的方法函数库
const mp_cu_config = require('/MP-CU/app/config/index');
const mp_cu_tools = require('/MP-CU/utils/tools');

App({
    onLaunch(query) {

    },
    onShow() {

    },
    //挂载到app上
    cu_config: mp_cu_config,
    cu_tools: mp_cu_tools,
})
