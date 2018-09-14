<template>
    <button @click="openCenter">提交</button>
</template>

<script>
    const axios = require('axios');
    axios.defaults.baseURL = 'http://wielder.5ishequ.com.cn/anbao-service';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    export default {
        name: "axios",
        data () {
            return {
                test: '内科医师',
            }
        },
        methods:  {
            openCenter () {
                axios.post('/mcommproudctAction/initProductList', {
                    page: 1,
                    limit: 20,
                    level: 1,
                    searchName: "",
                    productClass: "",
                    productBrand: ""
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }

</script>

<style scoped>

</style>