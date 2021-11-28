Component({
    data: {
        colorName: ''
    },
    options: {
        addGlobalClass: true
    },
    properties: {
        data: {
            type: Object,
            optionalTypes: Array,
            value: {}
        }
    },
    lifetimes: {
        attached() {
            this.setData({
                colorName: getApp().ColorUi.tools.getColor()
            });
        }
    },
})