// pages/document/modal/modal.js
Page({

  data: {
    target :''
  },
  show() {
    this.showDialog({
      content: '这是一个模态弹窗',
      success: res => {
        console.log(res)
      }
    })
  },
  success(res){
    const { detail} = res
    console.log(detail);
  },
  showCustomizeModal(e){
    this.setData({
      target : e.currentTarget.dataset.key
    })
  }
})