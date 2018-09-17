<template>
    <div>
        <button v-on:click="goBack">aaa</button>
        <!--　　　　动态绑定路由动画，根据路由状态的不同绑定不同的路由动画分别为  ：‘slide-left’  和 'slide-right'-->
        <!--<transition :name="transitionName">-->
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
            <router-view class="Router"></router-view>
        <!--</transition>-->
    </div>
</template>

<script>
    export default {
        name: 'parent',
        data() {
            return {
                transitionName: 'slide-right'  // 默认动态路由变化为slide-right
            }
        },
        watch: {
            '$route'(to, from) {
                let isBack = this.$router.isBack;  //  监听路由变化时的状态为前进还是后退
                if (isBack) {
                    this.transitionName = 'slide-right'
                } else {
                    this.transitionName = 'slide-left'
                }
                this.$router.isBack = false
            }
        },
        methods: {
            goBack() {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        }
    }
</script>
<style scoped>
    .Router {
        position: absolute;
        width: 100%;
        transition: all .8s ease;
        top: 40px;
    }
    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(100%, 0);
        transform: translate(100%, 0);
    }
    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-100%, 0);
        transform: translate(-100% 0);
    }
</style>