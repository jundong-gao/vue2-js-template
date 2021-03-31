/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/30/21
 * Time: 1:31 PM
 */



class Proto {
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
}


export default Proto
