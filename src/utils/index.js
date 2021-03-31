/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/30/21
 * Time: 1:26 PM
 */
const getObjType = obj => {
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    }
    return map[toString.call(obj)]
}

const deepClone = data => {
    var type = getObjType(data);
    var obj;
    if (type === 'array') {
        obj = [];
    } else if (type === 'object') {
        obj = {};
    } else {
        // 不再具有下一层次
        return data;
    }
    if (type === 'array') {
        for (var i = 0, len = data.length; i < len; i++) {
            data[i] = (() => {
                if (data[i] === 0) {
                    return data[i];
                }
                return data[i];
            })();
            if (data[i]) {
                delete data[i].$parent;
            }
            obj.push(deepClone(data[i]));
        }
    } else if (type === 'object') {
        for (var key in data) {
            if (data) {
                delete data.$parent;
            }
            obj[key] = deepClone(data[key]);
        }
    }
    return obj;
};

/**
 * uuid
 * @returns {string}
 */
const createUUID = function() {
    var d = Date.parse(new Date());
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now();
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

/**
 * 日期格式化
 * @param {v} v 值
 * @param {format} format 格式
 */
const formatDate = (v, format) => {
    format = format || 'yyyy-MM-dd';
    if (!v) return '';
    if (!(v instanceof Date)) {
        v = new Date(v);
    }
    const year = v.getFullYear();
    let month = v.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let date = v.getDate();
    if (date < 10) date = '0' + date;
    let hour = v.getHours();
    if (hour < 10) hour = '0' + hour;
    let minute = v.getMinutes();
    if (minute < 10) minute = '0' + minute;
    let second = v.getSeconds();
    if (second < 10) second = '0' + second;

    return format.replace('yyyy', year).replace('MM', month).replace('dd', date).replace('HH', hour).replace('mm', minute).replace('ss', second);
}

export {
    deepClone,
    createUUID,
    formatDate
}
