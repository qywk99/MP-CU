import { isDataType } from "../tools";

/**
 * diff库
 * @author Leisure
 * @update 2019.11.27
 * @param {object} current - 当前状态
 * @param {object} prev - 之前状态
 */
const diff = function diff(current = {}, prev = {}) {
    let result = {};
    updateDiff(current, prev, "", result);
    nullDiff(current, prev, "", result);
    return result;
};

const updateDiff = function updateDiff(
    current = {},
    prev = {},
    root = "",
    result = {}
) {
    if(isDataType.ifArray(current) && ((isDataType.ifArray(prev) && current.length !== prev.length) || !isDataType.ifArray(prev))){
        result[root] = current
        return;
    }
    Object.entries(current).forEach(item => {
        let key = item[0],
            value = item[1],
            path = root === "" ? key : root + "." + key;
        if (isDataType.ifArray(current)) {
            path = root === "" ? key : root + "[" + key + "]";
        }
        if (!prev.hasOwnProperty(key)) {
            result[path] = value;
        } else if (
            (isDataType.ifObject(prev[key]) && isDataType.ifObject(current[key])) ||
            (isDataType.ifArray(prev[key]) && isDataType.ifArray(current[key]))
        ) {
            updateDiff(current[key], prev[key], path, result);
        } else if (prev[key] !== current[key]) {
            result[path] = value;
        }
    });
    return result;
};

const nullDiff = function nullDiff(
    current = {},
    prev = {},
    root = "",
    result = {}
) {
    if(isDataType.ifArray(current) && ((isDataType.ifArray(prev) && current.length !== prev.length) || !isDataType.ifArray(prev))){
        return;
    }
    Object.entries(prev).forEach(item => {
        let key = item[0],
            path = root === "" ? key : root + "." + key;
        if (isDataType.ifArray(current)) {
            path = root === "" ? key : root + "[" + key + "]";
        }

        if (!current.hasOwnProperty(key)) {
            result[path] = null;
        } else if (
            (isDataType.ifObject(prev[key]) && isDataType.ifObject(current[key])) ||
            (isDataType.ifArray(prev[key]) && isDataType.ifArray(current[key]))
        ) {
            nullDiff(current[key], prev[key], path, result);
        }
    });
    return result;
};

export default diff;