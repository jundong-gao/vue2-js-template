/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/30/21
 * Time: 1:31 PM
 */



class Ui {
    loadInstance

    constructor(vue) {
        this.vue = vue
    }

    showLoading(text = '') {
        this.loadInstance = this.vue.prototype.$loading({
            text,
            background: 'rgba(0,0,0,.8)',
            lock: false
        })
    }

    hideLoading() {
        this.loadInstance.close()
    }

    showToast(content, type = 'success'){
        this.vue.prototype.$message({
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
        if(!key) return Object.assign(self.$data[key], self.$options.data()[key])
        return Object.assign(self.$data, self.$options.data())
    }
}


export default Ui
