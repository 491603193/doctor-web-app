<template>
    <div>
        <label for="email">邮箱：</label>
        <input v-validate ="'required|email'" type="text" id="email" name="myEmail">
    </div>
    <!--<span v-show="errors.has('myEmail')">{{ errors.first('myEmail')}}</span>-->
</template>

<script>
    export default {
        name: "vee-validate"
    }

</script>

<style scoped>

</style>