/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 4/15/21
 * Time: 5:40 PM
 */

import Vue from 'vue'
import confirm from './index.vue'

const constructor = Vue.extend(confirm)

function comp(title, content, cb) {
    const instance = new constructor({
        data: {
            title,
            content
        },
        methods: {
            cb
        }
    })
    instance.$mount()
    document.body.appendChild(instance.$el)
    return instance
}

export default comp


