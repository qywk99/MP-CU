const app = getApp();

Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        img: {
            type: String
        },
        imgHeight: {
            type: String
        },
        title: {
            type: String
        },
        fixedTitle: {
            type: Boolean,
            value: false
        },
        desc: {
            type: String
        },
        ui: {
            type: String
        },
        imgUi: {
            type: String
        },
        isTitle: {
            type: Boolean,
            value: false
        },
        isTag: {
            type: Boolean,
            value: false
        },
    },
    methods: {

    }
})