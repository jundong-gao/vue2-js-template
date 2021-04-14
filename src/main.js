import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/rem'
import '@/assets/style/base.css'
import elementUI from 'element-ui'
Vue.use(elementUI)
import 'element-ui/lib/theme-chalk/index.css'
import Storage from '@/utils/storage'
import Ui from '@/utils/ui'
import * as methods from '@/utils/methods'
import http from '@/api/index'

window.$ui = Vue.prototype.$ui = new Ui(Vue)
window.$storage = Vue.prototype.$storage = new Storage()
window.$methods = Vue.prototype.$methods = methods
window.$http = Vue.prototype.$http = http


Vue.config.productionTip = false

let app = new Vue({router, store, data: {Bus: new Vue()}, render: h => h(App)}).$mount('#app')
