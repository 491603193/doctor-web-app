<template>

    <div v-cloak>
        <header class="main-head"></header>
        <section class="main-head-line">
            <div class="main-portrait" v-on:click="openCenter">
                <div class="main-img">
                    <img :src="headimg || defaultimg">
                </div>
                <p class="main-name">{{name}}</p>
                <p class="main-position">{{position}}</p>
            </div>
        </section>
        <section class="main-option">
            <div class="main-else">
                <img src="../../../static/img/mainicon1.png">
                <router-link to='/HelloWorld'>
                <p class="main-message">我的客户</p>
                </router-link>
            </div>
            <div class="main-else">
                <img src="../../../static/img/mainicon2.png">
                <router-link to='/HelloWorld'>
                    <p class="main-message">客户咨询</p>
                </router-link>
            </div>
            <div class="main-else" >
                <img src="../../../static/img/mainicon3.png">
                <router-link to='/HelloWorld'>
                    <p class="main-message">个人中心</p>
                </router-link>
            </div>
        </section>
        <footer class="main-footer"></footer>
    </div>
</template>

<script>
    import {getlocalStorage} from '../../components/ht.js';
    // 引入header.vue组件
    export default {
        name: 'index',
        props: {
        },
        data: function () {
            return {
                headimg: false,
                defaultimg: require('../../../static/img/head.png'),
                name: '张晓明',
                position: '内科医师'
            }
        },
        methods: {
            openCenter () {
                this.$router.push({path:'/center'});//其中login是你定义的一个路由模块
            }
        }
    }
    function story() {
        var  key = 'doctorId';
        var storage = window.localStorage;
        if (!key) {
            console.warn('key is empty');
        }
        if (storage) {
            var v = storage.getItem(key);
            if (!v) {
                return;
            }
            if (v.indexOf('obj-') === 0) {
                v = v.slice(4);
                return JSON.parse(v);
            } else if (v.indexOf('str-') === 0) {
                return v.slice(4);
            }
        }
    }

</script>

<style scoped>
</style>