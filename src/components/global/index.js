/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 4/15/21
 * Time: 9:48 AM
 */
import Vue from 'vue'
let files = require.context('./', false, /\.vue$/)


files.keys().forEach(file => {
   let module = files(file).default
    Vue.component(`qz-${module.name}`, module)
})
