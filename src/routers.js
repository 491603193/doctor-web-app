import Home from './components/home.vue'
import Other from './components/other.vue'
import HelloWorld from './components/HelloWorld.vue'

const routers = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/other',
        component: Other
    },
    {
        path: '/HelloWorld',
        component: HelloWorld
    }
]
export default routers














