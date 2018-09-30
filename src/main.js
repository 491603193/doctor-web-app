import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import routers from './config/routers'
import VeeValidate from 'vee-validate';
// import axios from 'axios' // 1、在这里引入axios

// Vue.prototype.$axios = axios;   // 2、在vue中使用axios
Vue.use(VeeValidate);
// const config = {
//     errorBagName: 'errors',
//     fieldsBagName: 'fields',
//     delay: 100,
//     locale: 'zh_CN',
//     strict: true,
//     enableAutoClasses: true,
//     events: 'blur',
//     inject: true
// };
// Vue.use(VeeValidate, config); //一般插件都要use一下
Vue.use(VueRouter);

VueRouter.prototype.goBack = function () {
    this.isBack = true;
    window.history.go(-1)
}

const router = new VueRouter({
    mode: 'history',
    routes: routers
});
Vue.config.productionTip = false;

//全家过滤器  转成大写
Vue.filter('updateCapital', function (value) {
    if (!value) return '无';
    value = value.toString();
    return value.toUpperCase();
});



new Vue({
    render: h => h(App),
    router,
    store,//使用store
}).$mount('#app');



