<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    import app_header from './components/header.vue';
    import app_index from './page/index/index.vue';
    export default {
        // 声明组件，之后便可以使用组件标签
        components: {
            app_header,
            app_index
        }
    }
</script>
<style>
    @import './style/unify.css';
</style>








