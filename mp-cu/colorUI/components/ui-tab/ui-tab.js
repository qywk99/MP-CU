Component({
    relations: {
        '../ui-tab-item/ui-tab-item': {
            type: 'child', // 关联的目标节点应为子节点
            linked(target) {
                // 每次有子组件被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
            },
            linkChanged(target) {
                // 每次有子组件被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
            },
            unlinked(target) {
                // 每次有子组件被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
            }
        }
    },
    data: {
        _uid: '',
        curValue: 0,
        tabNodeList: [],
        scrollLeft: 0,
        markLeft: 0,
        markWidth: 0,
        content: {
            width: 100
        },
        over: false,
    },
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        value: {
            type: Number,
            value: 0
        },
        ui: {
            type: String,
            value: ''
        },
        bg: {
            type: String,
            value: 'ui-BG'
        },
        tab: {
            type: Array,
            value: []
        },
        // line dot long
        tpl: {
            type: String,
            value: 'line'
        },
        mark: {
            type: String,
            value: ''
        },
        align: {
            type: String,
            value: ''
        },
        curColor: {
            type: String,
            value: 'ui-TC'
        },
        scroll: {
            type: Boolean,
            value: false
        },
        inline: {
            type: Boolean,
            value: false
        }
    },
    lifetimes: {
        attached() {
            let _uid = this.getRandom(8);
            this.setData({_uid: _uid})
        },
        ready() {
            this._computedQuery();
        },
    },
    observers: {
        'value'(val) {
            if (val == this.data.curValue) return;
            this._setCurValue(val);
        },
    },
    methods: {
        //生成随机字符串
        getRandom(num) {
            let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            let maxPos = chars.length, value = '';
            for (let i = 0; i < num; i++) {
                value += chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return value;
        },
        _computedQuery() {
            let _this = this, _uid = this.data._uid;
            wx.createSelectorQuery().in(this).select('#tab-' + _uid).boundingClientRect(data => {
                console.log(data)
                if (data != null) {
                    if (data.left == 0 && data.right == 0) {
                        _this._computedQuery();
                    } else {
                        _this.setData({content: data})
                        //_this._computedChildQuery();
                        setTimeout(() => {
                            _this.setData({over: true})
                        }, 300);
                    }
                } else {
                    console.log('tab-' + _uid + ' data error');
                }
            }).exec();
        },
        _setCurValue(value) {
            let curValue = this.data.curValue;
            //if (value == ) return;
            this.setData({curValue: value})
            if (value == curValue) {
                this._computedMark();
            }
            //this._computedMark();
        },
        _click(e) {
            let {index, item} = e.currentTarget.dataset;
            this._setCurValue(index);
            this.triggerEvent('input', index);
            this.triggerEvent('change', { index: index, data: item });
        },
        _upItem(e) {
            console.log(e)
            /*let {tabNodeList, curValue} = this.data;
            tabNodeList[index] = e;
            this.setData({
                tabNodeList: tabNodeList
            })
            if (index == curValue) {
                this._computedMark();
            }*/
        },
        _computedMark() {
            console.log(11)
            let {tabNodeList, curValue, content} = this.data;
            if (tabNodeList.length === 0) return;
            //let left = 0;
            let list = tabNodeList;
            let cur = curValue;
            let markLeft = list[cur].left - content.left;
            //console.log(list[cur].left, this.data.content.left);
            let markWidth = list[cur].width;
            this.setData({
                markLeft: markLeft,
                markWidth: markWidth
            })
        },
        _computedScroll() {
            let {tabNodeList, curValue} = this.data;
            if (curValue == 0 || curValue == tabNodeList.length - 1) {
                return false;
            }
            let i = 0;
            let left = 0;
            let list = tabNodeList;
            for (i in list) {
                if (i == curValue && i != 0) {
                    left = left - list[i - 1].width;
                    break;
                }
                left = left + list[i].width;
            }
            this.setData({
                scrollLeft: left
            })
        }
    }
})