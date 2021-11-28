Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        ui: {
            type: String,
            value: ''
        },
        value: {
            type: String,
            optionalTypes: [Number, Boolean]
        },
        label: {
            type: String,
            optionalTypes: [Number, Boolean]
        },
        disabled: {
            type: Boolean,
            value: false
        },
        bg: {
            type: String,
            value: 'ui-BG-Main'
        },
        clearable: {
            type: Boolean,
            value: false
        }
    },
    lifetimes: {
        created() {

        },
        attached() {

        },
        ready() {

        },
    },
    observers: {
        'value'(res) {
            console.log(this.$children)
            console.log(this.$parent)
        }
    },
    methods: {
        /*clickSwitch() {
            let val = !this.data.tempChecked;
            this.setData({
                tempChecked: val
            });
            this.triggerEvent('change', val);
        }*/
    }
})