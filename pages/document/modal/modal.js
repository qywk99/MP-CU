Page({
    data: {
        target :''
    },
    show() {
        this.$showDialog({
            //title : 'colorui弹窗',
            content: '这是一个模态弹窗',
            success: res => {
                console.log(res)
                if(res.confirm){
                    this.$success({
                        title : '点击了确定'
                    })
                }else{
                    wx.showToast({
                        title: '点击了取消',
                        icon : 'none'
                    })
                }
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