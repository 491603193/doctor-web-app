import Vue from 'vue'
import App from './index.vue'


import VueRouter from 'vue-router'
import routers from './routers'

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routers
});



Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
