import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Storage from '@/utils/storage'
import Proto from '@/utils/proto'
import http from '@/api/index'
Vue.use(elementUI)
Vue.prototype.$methods = new Proto(Vue)
Vue.prototype.$storage = new Storage()
Vue.prototype.$http = http


Vue.config.productionTip = false

let app = new Vue({router, store, render: h => h(App)}).$mount('#app')



