Component({
    relations: {
        '../ui-checkbox-group/ui-checkbox-group': {
            type: 'parent'
        }
    },
    data: {
        currentValue: null,
        isIndeterminate:false,
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
        indeterminate: {
            type: Boolean,
            value: false
        },
        all: {
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
        _nodesSetValue() {
            let radioNodes = this.getRelationNodes('../ui-checkbox-group/ui-checkbox-group');
            if (Array.isArray(radioNodes) && radioNodes.length > 0) {
                return radioNodes[0];
            } else {
                return false;
            }
        },
        isComputed() {
            let parent = this._nodesSetValue();
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
        _onRadioClick() {
            let {isGroup, isDisabled, label} = this.data;
            if (isGroup && !isDisabled) {
                this._choose();
            }
            if (!isGroup && !isDisabled) {
                this.triggerEvent('input', label);
                this.triggerEvent('change', label);
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