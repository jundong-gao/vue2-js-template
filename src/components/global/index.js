/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 4/15/21
 * Time: 9:48 AM
 */
import Vue from 'vue'
let files = require.context('./', false, /\.vue$/)

console.log('files::::::::::::::::', files)

files.keys().forEach(file => {
   let module = files(file).default
    Vue.component(`v-${module.name}`, module)
})
