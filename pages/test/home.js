const app = getApp();

Page({
    data: {

    },
    onLoad() {
        
    },
    goToFictitiousList(){
        wx.navigateTo({
          url: '/pages/test-page/list/fictitious-list/index',
        })
    },
    goToOldList(){
        wx.navigateTo({
          url: '/pages/test-page/list/old-list/index',
        })
    }
})
