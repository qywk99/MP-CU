Component({
    data: {
        popover: false,
        BoxStyle: '',
        contentStyle: '',
        arrowStyle: '',
        button: {},
        content: {}
    },
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        ui: {
            type: String,
            value: ''
        },
        tips: {
            type: String,
            value: ''
        },
        bg: {
            type: String,
            value: 'ui-BG'
        },
        mask: {
            type: Boolean,
            value: false
        },
        show: {
            type: Boolean,
            optionalTypes: String,
            value: 'change'
        },
        hover: {
            type: Boolean,
            value: false
        },
        index: {
            type: Number,
            value: 0
        },
        time: {
            type: Number,
            value: 0
        },
        bottom: {
            type: Boolean,
            value: false
        },
        isChange: {
            type: Boolean,
            value: false
        },
        zIndex: {
            type: Number,
            optionalTypes: String,
            value: 0
        },
    },
    lifetimes: {
        attached() {

        },
        ready() {

        },
    },
    observers: {
        'scrollTop'(res) {

        },
    },
    methods: {
        _navHome() {

        },
    }
})