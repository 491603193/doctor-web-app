<template>
    <div>
        <label for="email">邮箱：</label>
        <input v-validate ="'required|email'" type="text" id="email" name="myEmail">
        <button  v-on:click="openFile">打开文件</button>
    </div>

</template>

<script>
    export default {
        name: "vee-validate",
        methods:{
            openFile() {
                let input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');

                input.onchange = event => {
                    let file = event.target.files[0];
                    console.log(file);
                }
                input.click()
            }
        }
    }

</script>

<style scoped>

</style>