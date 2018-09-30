import center from '../page/center/center_index.vue'
import domeVuex from '../page/dome/dome_vuex.vue'
import validate from '../page/dome/vee-validate.vue'
import transition from '../page/dome/vee-transition.vue'
import axios from '../page/dome/axios.vue'
import index from '../page/index.vue'
import domeParent from '../page/dome/dome_parent'
import routerPage from '../page/dome/router_page'
import barPage from '../page/other/bar_page'
import fooPage from '../page/other/foo_page'

const routers = [
    {
        path: '/',
        component: index
    },
    {
        path: '/center',
        redirect: '/centerIndex'
    },
    {
        path: '/vuex',
        redirect: '/vuexIndex'
    },
    {
        path: '/validate',
        redirect: '/veeValidate'
    },
    {
        path: '/axios',
        redirect: '/veeAxios'
    },
    {
        path: '/centerIndex',
        component: center
    },
    {
        path: '/vuexIndex',
        component: domeVuex
    },
    {
        path: '/veeValidate',
        component: validate
    },
    {
        path: '/veeAxios',
        component: axios
    },
    { path: '/transition', name: 'transition', component: transition },
    { path: '/parent', component: domeParent },
    { path: '/foo',name:"foo",  component: fooPage },
    { path: '/bar',name:"bar",  component: barPage },
    { path: '/routerPage', name:"routerPage", component: routerPage }
];
export default routers














