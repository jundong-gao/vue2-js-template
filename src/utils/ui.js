/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/30/21
 * Time: 1:31 PM
 */

import { Message, Loading } from 'element-ui'


class Ui {
    loadInstance

    constructor(vue) {
        this.vue = vue
    }

    showLoading(text = '加载中') {
        this.loadInstance = Loading.service({
            text,
            background: 'rgba(0,0,0,.8)',
            lock: true
        })
    }

    hideLoading() {
        this.loadInstance.close()
    }

    showToast(content, type = 'success'){
        Message({
            type,
            duration: 2000,
            message: content
        })
    }

    /**
     * 重置data声明的数据
     * @param key 重置的字段， 如果为空， 则全部重置
     * @param self
     */
    resetData(key, self){
        if(!key) return Object.assign(self.$data, self.$options.data())

        let _key_arr = key.split('.')
        if(_key_arr.length === 1)  return Object.assign(self.$data[key], self.$options.data()[key])

        let result = this.getData(self.$data, _key_arr)
        if(typeof result == 'object' || typeof result == 'function') return Object.assign(this.getData(self.$data, _key_arr), this.getData(self.$options.data(), _key_arr))
        console.warn('reset-log::::::::::::::::', '数据为基本数据类型，请手动重置')
    }
    getData(data, arr){
        let val = data
        arr.forEach(item => {
            val = val[item]
        })
        return val
    }
}


export default Ui
