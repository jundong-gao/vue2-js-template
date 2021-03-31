/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/31/21
 * Time: 2:23 PM
 */

import axios from './config'

class Server {
    constructor() {
        this.axios = axios
    }

    parseRoute(apiName, apiJson) {
        let obj = this[apiName] = {}
        Object.keys(apiJson).forEach(urlName => {
            obj[urlName] = this.sendRequest.bind(this, apiName, urlName, apiJson[urlName])
        })
    }


    sendRequest(apiName, urlName, url, params) {

        let requestUrl = ''
        requestUrl = typeof url == 'string' ? url : url.url


        function beforeFn(res) {
            return res.data
        }
        let requestType = {
            get: () => {
                return this.axios.get(requestUrl, {params}).then(beforeFn)
            },
            post: () => {
                return this.axios.post(requestUrl, params).then(beforeFn)
            }
        }

        return requestType[url?.type || 'get']()
    }

}


export default Server

