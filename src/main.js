import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/rem'
import '@/assets/style/base.css'
import '@/assets/style/flex.css'
// import elementUI from 'element-ui'
// Vue.use(elementUI)
// import 'element-ui/lib/theme-chalk/index.css'
//按需引入ele
import element from '@/utils/element'
console.log('element::::::::::::::::', element)
Vue.use(element)
import Storage from '@/utils/storage'
import Ui from '@/utils/ui'
import * as methods from '@/utils/methods'
import http from '@/api/index'
import '@comps/global/index'
import '@comps/jsComponent/index'


window.$ui = Vue.prototype.$ui = new Ui(Vue)
window.$storage = Vue.prototype.$storage = new Storage()
window.$methods = Vue.prototype.$methods = methods
window.$http = Vue.prototype.$http = http



Vue.config.productionTip = false

let app = new Vue({router, store, data: {Bus: new Vue()}, render: h => h(App)}).$mount('#app')
