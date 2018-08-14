import center from '../page/center/center_index.vue'
import index from '../page/index.vue'
// import Index from '../page/index.vue'

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
        path: '/centerIndex',
        component: center
    }

];
export default routers














