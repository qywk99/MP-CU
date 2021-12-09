const app = getApp();

Page({
    data: {

    },
    onLoad() {
        
    },
    goToFictitiousList(){
        wx.navigateTo({
          url: '/packageB/list/fictitious-list/index',
        })
    },
    goToOldList(){
        wx.navigateTo({
          url: '/packageB/list/old-list/index',
        })
    }
})
