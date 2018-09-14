import center from '../page/center/center_index.vue'
import domeVuex from '../page/dome/dome_vuex.vue'
import validate from '../page/dome/vee-validate.vue'
import axios from '../page/dome/axios.vue'
import index from '../page/index.vue'


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
    }

];
export default routers














