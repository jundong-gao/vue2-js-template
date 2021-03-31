/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/31/21
 * Time: 2:23 PM
 */


import axios from 'axios'
import Vue from 'vue'

let axiosInstance = axios.create({
    timeout: 1000
})


/**
 * 请求拦截
 */
axiosInstance.interceptors.request.use(config => {
    return config;
});

/**
 * axios响应拦截
 */
axiosInstance.interceptors.response.use(config => {
    const { data, status } = config
    // if (!data || data.code !== 0) {
    //     _errorHandle(config, data.code, true)
    //     return Promise.reject(data)
    // }

    // _errorHandle(data.code, 'asdasdasd')

    return config
}, err => {
    let response = err.response
    if (response) {
        _errorHandle(response.status, response.statusText)
    } else {
        _errorHandle(500, '服务器无响应')
    }
    return Promise.reject(err)
})


function _errorHandle (status, msg) {
    Vue.prototype.$methods.showToast(msg)
}



export default axiosInstance
