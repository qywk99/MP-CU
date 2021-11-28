Component({
    data: {
        currentValue: null
    },
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
        unbg: {
            type: String,
            value: 'borderss'
        },
        src: {
            type: String,
            value: ''
        },
        clearable: {
            type: Boolean,
            value: false
        },
        none: {
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
            console.log(res)
        }
    },
    methods: {
        _onRadioClick() {
            if (!this.data.isDisabled) {
                //this._choose();
            }
        },
        /*clickSwitch() {
            let val = !this.data.tempChecked;
            this.setData({
                tempChecked: val
            });
            this.triggerEvent('change', val);
        }*/
    }
})