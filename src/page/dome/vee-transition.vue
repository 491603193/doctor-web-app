<template>
    <div>
        <div id="app">
            <h1>Transitions</h1>
            <ul>
                <li><router-link to="/">/</router-link></li>
                <li><router-link to="/parent">/parent</router-link></li>
                <li><router-link to="/parent/foo">/parent/foo</router-link></li>
                <li><router-link to="/parent/bar">/parent/bar</router-link></li>
            </ul>
            <transition name="fade" mode="out-in">
                <router-view class="view"></router-view>
            </transition>
        </div>

        <button v-on:click="popShow = !popShow">
            show-pop
        </button>
        <p v-if="popShow">hello</p>
        <div class="pop" >
            <transition name="bgfade">
            <div class="pop-bg" v-show="popShow" @click="popShow = false"></div>
            </transition>
            <transition name="fade">
            <div class="pop-content" v-if="popShow">
                content
            </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vee-transition",
        data () {
            return {
                popShow: false

            }
        }
    }
</script>

<style scoped>
    .bgfade-enter-active, .bgfade-leave-active {
        transition: opacity .5s;
    }
    .bgfade-enter, .bgfade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .fade-enter-active {
        animation: bounce-in .5s;
    }
    .fade-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            top: 100%;
        }
        50% {
            top: 27%;
        }
        100% {
            top: 30%;
        }
    }
    .pop-bg{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .pop-content{
        background-color: #fff;
        position: absolute;
        top: 30%;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 11;
    }




</style>