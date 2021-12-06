Component({
    data: {
        _uid: '',
        isLoad: true,
        error: false,
        detail: {},
        imgW: '',
        imgH: ''
    },
    options: {
        addGlobalClass: true
    },
    properties: {
        src: {
            type: String,
            value: ''
        },
        ui: {
            type: String,
            value: ''
        },
        mode: {
            type: String,
            value: 'cover' //width cover self
        },
        width: {
            type: String,
            value: ''
        },
        height: {
            type: String,
            value: ''
        },
        preview: {
            type: Boolean,
            value: false
        },
        urls: {
            type: Array,
            value: []
        },
        current: {
            type: Number,
            value: -1
        },
    },
    lifetimes: {
        ready() {
            let _uid = this.isRandom.getRandom(8);
            this.setData({_uid: _uid})
            this._computed(this.data.detail);
        },
    },
    observers: {
        'width'(val) {
            this.setData({imgW: val})
        },
        'height'(val) {
            this.setData({imgH: val})
        }
    },
    methods: {
        _load(e) {
            this.setData({
                detail: e.detail,
                isLoad: false
            })
            this._computed(e.detail);
        },
        _computed({ width, height }) {
            let _this = this, is_width = this.data.width, is_height = this.data.height;
            if (is_width=='' && is_height=='') {
                wx.createSelectorQuery()
                    .in(this)
                    .select('#image-' + _this.data._uid)
                    .boundingClientRect(data => {
                        if (data != null) {
                            let imgH = (data.width * height) / width + 'px';
                            _this.setData({imgH: imgH})
                        } else {
                            console.log('image-' + _this.data._uid + ' data error');
                        }
                    })
                    .exec();
                return false;
            }
            if (is_width!='' && is_height=='') {
                let imgH = (is_width * height) / width + 'px';
                _this.setData({imgH: imgH})
                return false;
            }
            if (is_width=='' && is_height!='') {
                let imgW = (is_height * width) / height + 'px';
                _this.setData({imgW: imgW})
                return false;
            }
        },
        _computedWidth(width) {
            return width + 'px';
        },
        _computedHeight(height) {
            return height + 'px';
        },
        _error(e) {
            this.setData({error: true})
        },
        _preview() {
            if (!this.data.preview) {
                return false;
            }
            wx.previewImage({
                urls: this.data.urls.length<1?[this.data.src]:this.data.urls,
                current:this.data.current,
                longPressActions: {
                    itemList: ['发送给朋友', '保存图片', '收藏'],
                    success: function(data) {
                        console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
                    },
                    fail: function(err) {
                        console.log(err.errMsg);
                    }
                }
            });
        },
    }
})