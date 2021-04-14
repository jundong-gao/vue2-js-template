import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index'
import Storage from '@/utils/storage'
Vue.use(Vuex)
let $storage = new Storage()

export default new Vuex.Store({
    state: {
        user: $storage.getItem('user')
    },
    actions: {
        setUser({commit}, info) {
            commit('SET_USER', info)
        },
        clearUser({commit}){
            commit('CLEAR_USER')
        }
    },
    mutations: {
        SET_USER(state, info){
            state.user = info
            $storage.setItem('user', info, 86400)
        },
        CLEAR_USER(state){
            state.user = null
            $storage.removeItem('user')
        }
    },
    getters: {
        user: state => state.user
    },
    modules: {}
})
