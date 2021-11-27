Component({
    data: {
        color: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown', 'grey'],
    },
    options: {
        addGlobalClass: true,
        multipleSlots: true,
    },
    properties: {
        ui: {
            type: String,
            value: ''
        },
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
        /*'scrollTop'(res) {
            this.opacityStatus();
        },*/
    },
    methods: {
        tapThemeChange(e) {
            this.setTheme(e.currentTarget.dataset.value);
        },
        /*chooseColor(val) {
            this.triggerEvent('setMain', val);
        }*/
    }
})