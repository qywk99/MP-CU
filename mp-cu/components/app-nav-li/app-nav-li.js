Component({
    data: {
        colorName: ''
    },
    options: {
        addGlobalClass: true
    },
    methods:{
        log(){
            console.log("123")
        }
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
                colorName: this.getColor()
            });
        }
    },
})