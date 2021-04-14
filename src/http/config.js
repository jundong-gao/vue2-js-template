/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/31/21
 * Time: 2:23 PM
 */


import axios from 'axios'
import Vue from 'vue'
import router from '@/router/index'

let axiosInstance = axios.create({
    timeout: 10000
})

const CancelToken = axios.CancelToken
let source = CancelToken.source()


/**
 * 请求拦截
 */
axiosInstance.interceptors.request.use(config => {
    return config;
})

/**
 * axios响应拦截
 */
axiosInstance.interceptors.response.use(config => {
    

	/* 登录判断

	if(没有登录){
		source.cancel() // 取消其他正在进行的请求
	    source = CancelToken.source() // 重新赋值给source
		
		router.replace('/login')		
	}

	*/


	/* 错误判断

	if(response.data.code !== 0) {
        Vue.prototype.$methods.shwoToast(response.data.message, 'error')
        return Promise.reject(response.data)
    }

    */

    return config
}, err => {
    if(axios.isCancel)  return new Promise(() => {})
    return Promise.reject(error)
})




export default axiosInstance
