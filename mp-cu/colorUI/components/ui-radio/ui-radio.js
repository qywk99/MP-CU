Component({
    relations: {
        '../ui-radio-group/ui-radio-group': {
            type: 'parent', // 关联的目标节点应为父节点
            linked(target) {
                // 每次被插入到父组件时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
            },
            linkChanged(target) {
                // 每次被移动后执行，target是父组件节点实例对象，触发在moved生命周期之后
            },
            unlinked(target) {
                // 每次被移除时执行，target是父组件节点实例对象，触发在detached生命周期之后
            }
        }
    },
    data: {
        currentValue: null,
        isGroup: null,
        isDisabled: null,
        isClearable: null,
        isChecked: null,
        hasUiCard: null
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
            optionalTypes: [Number, Boolean],
            value: ''
        },
        label: {
            type: String,
            optionalTypes: [Number, Boolean],
            value: ''
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
        ready() {
            let parent = this._nodesSetValue();
            if (parent) {
                this._setValue(parent.data.value);
            }
        },
    },
    observers: {
        'value'(val) {
            this._setValue(val);
        }
    },
    methods: {
        isComputed() {
            let parent = this._nodesSetValue();
            //isGroup
            let isGroup = !!parent;
            //isDisabled
            let isDisabled = isGroup?parent.data.disabled:this.data.disabled;
            //isClearable
            let isClearable = isGroup?parent.data.clearable:this.data.clearable;
            //isChecked
            let isChecked = (isGroup && parent.data.value == this.data.label) || (!isGroup && this.data.currentValue == this.data.label);
            //_has
            let hasUiCard = this.data.ui.indexOf('card') != -1;
            //设置数据
            this.setData({
                isGroup: isGroup,
                isDisabled: isDisabled,
                isClearable: isClearable,
                isChecked: isChecked,
                hasUiCard: hasUiCard
            });
        },
        _nodesSetValue() {
            let nodes = this.getRelationNodes('../ui-radio-group/ui-radio-group');
            if (Array.isArray(nodes) && nodes.length > 0) {
                return nodes[0];
            } else {
                return {}
            }
        },
        _onRadioClick() {
            if (!this.data.isDisabled) {
                this._choose();
            }
        },
        _choose() {
            let value = this.data.currentValue, label = this.data.label;
            let isGroup = this.data.isGroup, isClearable = this.data.isClearable;
            if (value != label) {
                this.setData({currentValue: label});
                this.triggerEvent('input', label);
                this.triggerEvent('change', label);
                if (isGroup) {
                    let parent = this._nodesSetValue();
                    parent._onRadioChange(label);
                }
            } else if (isClearable) {
                this.setData({currentValue: null});
                this.triggerEvent('input', null);
                this.triggerEvent('change', null);
                if (isGroup) {
                    let parent = this._nodesSetValue();
                    parent._onRadioChange(null);
                }
            }
        },
        _setValue(groupValue) {
            this.setData({
                currentValue: groupValue
            });
            this.isComputed();
        },
    }
})