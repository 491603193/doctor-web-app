import center from '../page/center/center_index.vue'
import domeVuex from '../page/dome/dome_vuex.vue'
import validate from '../page/dome/vee-validate.vue'
import transition from '../page/dome/vee-transition.vue'
import axios from '../page/dome/axios.vue'
import index from '../page/index.vue'
import domeParent from '../page/dome/dome_parent'
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
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
    { path: '/transition', name: 'transition',component: transition},
    { path: '/parent', component: domeParent},
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];
export default routers














