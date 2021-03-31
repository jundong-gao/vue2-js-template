/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/31/21
 * Time: 2:34 PM
 */

import Server from '@/http/server'
let http = new Server()

let files = require.context('./', false, /api\.js$/)
files.keys().forEach(file => {
    let api = files(file).api
    let apiName = file.replace(/.api.js|\.\//g, '')
    http.parseRoute(apiName, api)
})


export default  http

