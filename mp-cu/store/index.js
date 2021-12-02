// 此处参考 https://github.com/xiaoyao96/wxMiniStore
/***
 * @author  bypanghu@163.com (https://github.com/bypanghu)
 * @author iZaizai (https://github.com/iZaiZaiA)
 */
import diff from '../utils/diff'
import { _typeOf, TYPE_ARRAY, TYPE_OBJECT, _deepClone } from "../utils/tools";

const setData = function (obj, data) {
    let result = _deepClone(data);
    let origin = _deepClone(obj);
    Object.keys(origin).forEach((key) => {
        dataHandler(key, origin[key], result);
    });
    return result;
};
const dataHandler = function (key, result, data) {
    let arr = pathHandler(key);
    let d = data;
    for (let i = 0; i < arr.length - 1; i++) {
        keyToData(arr[i], arr[i + 1], d);
        d = d[arr[i]];
    }
    d[arr[arr.length - 1]] = result;
};

const pathHandler = function (key) {
    let current = "",
        keyArr = [];
    for (let i = 0, len = key.length; i < len; i++) {
        if (key[0] === "[") {
            throw new Error("key值不能以[]开头");
        }
        if (key[i].match(/\.|\[/g)) {
            cleanAndPush(current, keyArr);
            current = "";
        }
        current += key[i];
    }
    cleanAndPush(current, keyArr);
    return keyArr;
};

const cleanAndPush = function (key, arr) {
    let r = cleanKey(key);
    if (r !== "") {
        arr.push(r);
    }
};

const keyToData = function (prev, current, data) {
    if (prev === "") {
        return;
    }
    const type = _typeOf(data[prev]);
    if (typeof current === "number" && type !== TYPE_ARRAY) {
        data[prev] = [];
    } else if (typeof current === "string" && type !== TYPE_OBJECT) {
        data[prev] = {};
    }
};

const cleanKey = function (key) {
    if (key.match(/\[\S+\]/g)) {
        let result = key.replace(/\[|\]/g, "");
        if (!Number.isNaN(parseInt(result))) {
            return +result;
        } else {
            throw new Error(`[]中必须为数字`);
        }
    }
    return key.replace(/\[|\.|\]| /g, "");
};

export const CUStoreInit = (config) => {
    let $store = {
        state: {},
        $p: [],
        setState(obj, fn = () => { }) {
            if (_typeOf(obj) !== TYPE_OBJECT) {
                throw new Error("setState的第一个参数须为object!");
            }
            let prev = $store.state;
            let current = setData(obj, prev);
            $store.state = current;
            //如果有组件
            if ($store.$p.length > 0) {
                let diffObj = diff(current, prev);
                let keys = Object.keys(diffObj);
                if (keys.length > 0) {
                    const newObj = {};
                    keys.forEach((key) => {
                        newObj["$cuStore." + key] = diffObj[key];
                    });
                    let pros = $store.$p.map((r) => {
                        if (r.$cuStore.hasOwnProperty("useProp")) {
                            let useprops = _filterKey(
                                newObj,
                                r.$cuStore.useProp,
                                (key, useKey) =>
                                    key === "$cuStore." + useKey ||
                                    !!key.match(new RegExp("^[$]cuStore." + useKey + "[.|[]", "g"))
                            );
                            if (Object.keys(useprops).length > 0) {
                                return new Promise((resolve) => {
                                    r.setData(useprops, resolve);
                                });
                            } else {
                                return Promise.resolve();
                            }
                        }
                        return new Promise((resolve) => {
                            r.setData(newObj, resolve);
                        });
                    });
                    Promise.all(pros).then(fn);
                } else {
                    fn();
                }
            } else {
                fn();
            }
        }
    }
    $store.state.sys_theme = wx.getStorageSync('sys_theme') ? wx.getStorageSync('sys_theme') : config.theme
    $store.state.sys_main = wx.getStorageSync('sys_main') ? wx.getStorageSync('sys_main') : config.main
    $store.state.sys_text = wx.getStorageSync('sys_text') ? wx.getStorageSync('sys_text') : config.text
    return $store

}
