Component({
    data: {
        position: '', animationVal: '',
    },
    options: {
        addGlobalClass: true
    },
    properties: {
        ui: {
            type: String,
            value: ''
        },
        bg: {
            type: String,
            value: ''
        },
        //名称
        name: {
            type: String,
            value: ''
        },
        //点在上面
        top: {
            type: Boolean,
            value: false
        },
        //点在左边
        left: {
            type: Boolean,
            value: false
        },
        //点在右边
        right: {
            type: Boolean,
            value: false
        },
        //点在下面
        bottom: {
            type: Boolean,
            value: false
        },
        //点动画效果
        animation: {
            type: Boolean,
            value: false
        }
    },
    lifetimes: {
        ready() {
            this.setPosition();
        },
    },
    observers: {
        'top'() {
            this.setPosition();
        },
        'left'() {
            this.setPosition();
        },
        'right'() {
            this.setPosition();
        },
        'bottom'() {
            this.setPosition();
        },
        'animation'() {
            this.setPosition();
        },
    },
    methods: {
        setPosition() {
            let { top, left, right, bottom, animation } = this.data;
            let val = 'ui-dot-tag-left', vars = '';
            if (top) {
                val = 'ui-dot-tag-top';
            }
            if (left) {
                val = 'ui-dot-tag-left';
            }
            if (right) {
                val = 'ui-dot-tag-right';
            }
            if (bottom) {
                val = 'ui-dot-tag-bottom';
            }
            if (animation) {
                vars = 'ui-dot-tag-animation';
            }
            //更新数据
            this.setData({
                position: val,
                animationVal: vars
            })
        },
        //滚动到顶部
        tapScrollTop() {
            //this.triggerEvent('tapScrollTop');
        },
    },


})