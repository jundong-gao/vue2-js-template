/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 4/15/21
 * Time: 3:29 PM
 */
import Vue from 'vue'
import modal from './modal.vue'

const constructor = Vue.extend(modal)

const instance = new constructor()

instance.$mount()

document.body.appendChild(instance.$el)

export default instance
