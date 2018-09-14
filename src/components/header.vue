<template>
    <div>
        <header class="header" id="header-test"> <button @click="goBack">返回</button>首页</header>
    </div>

</template>

<script>

    export default {
        name: 'appHeader',
        methods:{
            goBack () {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        },
    }


</script>

<style scoped>

</style>
