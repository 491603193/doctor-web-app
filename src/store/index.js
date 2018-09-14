import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import dialog_store from './modules/dialog_store.js';//引入某个store对象

export default new vuex.Store({
    modules: {
        dialog: dialog_store
    },
    strict: process.env.NODE_ENV !== 'production' //要在发布环境下启用严格模式！
})