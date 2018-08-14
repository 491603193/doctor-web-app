<template>
   <div>
       <app_header></app_header>
       <app_index></app_index>
   </div>
</template>

<script>
    import app_header from '../components/header.vue';
    import app_index from '../page/index/index.vue';
    export default {
        name: 'index',
        props: {
        },
        components: {
            app_header,
            app_index
        }
    }


</script>

<style scoped>
</style>