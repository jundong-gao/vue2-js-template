/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/31/21
 * Time: 1:24 PM
 */


class Storage {
    /**
     * 设置缓存
     * @param key
     * @param data
     * @param expire 过期时间 以秒为单位
     */
    setItem(key, data, expire) {
        expire = isNaN(expire) ?  46800 : parseInt(expire)
        if(!key) throw new Error('set key is required')
        window.localStorage.setItem(key, JSON.stringify(data))
        if(expire)  window.localStorage.setItem(`${key}__expire__`, Date.now() + expire * 1000)
    }
    getItem(key) {
        if(!key) throw new Error('get key is required')
        let expire = window.localStorage.getItem(`${key}__expire__`) || Date.now() + 46800000
        if(expire < Date.now()) return this.removeItem(key)
        let data = window.localStorage.getItem(key) || ''
        if(!data) return null
        try{
            return  JSON.parse(data)
        }catch (e) {
            throw new Error(e)
        }
    }
    removeItem(key) {
        window.localStorage.removeItem(key)
        window.localStorage.removeItem(`${key}__expire__`)
    }
}

export default Storage
