Component({
    data: {
        name: '',
    },
    options: {
        addGlobalClass: true
    },
    properties: {
        data: {
            type: Object,
            optionalTypes: String,
            value: {}
        },
        index: {
            type: Number,
            value: 0
        },
        cur: {
            type: Number,
            value: 0
        },
        tpl: {
            type: String,
            value: 'line'
        },
        curColor: {
            type: String,
            value: 'ui-TC'
        },
    },
    lifetimes: {
        ready() {
            this.getName();
        },
    },
    observers: {
        'data'() {
            this.getName();
        }
    },
    methods: {
        getName() {
            let data = this.data.data;
            let isObj = Object.prototype.toString.call(data) === '[object Object]';
            if (isObj) {
                this.setData({
                    name: data.name
                })
            } else {
                this.setData({
                    name: data
                })
            }
        }
    }
})