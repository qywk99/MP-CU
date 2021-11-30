import Store from '../utils/store'

const ColorUIStore  = (config) =>{
    const store = new Store({
        debug: false, // 内部日志的输出。
        state: {
            sys_theme: wx.getStorageSync('sys_theme')?wx.getStorageSync('sys_theme'):config.theme,
            sys_main: wx.getStorageSync('sys_main')?wx.getStorageSync('sys_main'):config.main,
            sys_text: wx.getStorageSync('sys_text')?wx.getStorageSync('sys_text'):config.text,
            colorUI_data : {}
        },
        methods: {
            //存储 数据
            setCuData(key , data){
                let colorUI_data = store.$state.colorUI_data
                colorUI_data[key] = data
                store.setState({
                    colorUI_data
                })
            },
            // 读取数据
            getCuData(key){
                let colorUI_data = store.$state.colorUI_data
                let isExitData = colorUI_data.hasOwnProperty(key)
                if(isExitData){
                    return store.$state.colorUI_data[key]
                }else{
                    console.error(key,"没有缓存！请先缓存")
                    return null
                }
            },
            //清空数据
            clearCuData(){
                store.setState({
                    colorUI_data : {}
                })
            },
            //设置主题
            setTheme(data) {
                store.setState({ sys_theme: data });
                wx.setStorageSync('sys_theme', data);
                //跟随系统
                if (data === 'auto') {
                    config.setStatusStyle(wx.getSystemInfoSync().theme === 'light' ? 'dark' : 'light');
                } else {
                    config.setStatusStyle(data === 'light' ? 'dark' : 'light');
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
                    url: config.homePath,
                    fail(res) {
                        console.log(res);
                    }
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
            //获取store 实例
            getStore$r(){
                console.log(store)
            }
        }
    });
    return store;
}

module.exports = {
    ColorUIStore 
};