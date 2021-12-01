
import ColorUI from './mp-cu/ui'
export const ColorUi = new ColorUI({
  config: {
    sys_theme: 'auto',
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