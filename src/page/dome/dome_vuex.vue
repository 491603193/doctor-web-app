<template>
    <div>
        <app_header/>
        <button @click="goBack">返回</button>
        <input  v-model="high"/><br/>
        <button @click="$store.commit('change_dialog',{high:10})">high大小=10</button><br/>
        <button @click="$store.state.dialog.show = !$store.state.dialog.show ">点击1</button>
        <button @click="$store.commit('switch_dialog')">点击2</button>
        <button @click="$store.dispatch('switch_dialog')">点击3</button>
        <!--<button @click="add">点击4</button> &lt;!&ndash;未实现&ndash;&gt;-->

        <div>
            {{$store.state.dialog.size.high}}
        </div>
        <div>
            {{$store.state.dialog.show}}
        </div>
        <div>
            {{$store.getters.not_show}}
        </div>
        <div>
            {{show}}
        </div>

        <t-dialog/>
    </div>
</template>

<script>
    import dialog from '../../components/dialog.vue'
    import {mapState,mapActions} from 'vuex';
    import app_header from '../../components/header.vue';
    export default {
        methods:{
            goBack () {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        },
        components:{
            "t-dialog":dialog,
            app_header
        },
        computed:{
            high: {
                get () {
                    return this.$store.state.dialog.size.high
                },
                set (value) {
                    this.$store.commit('change_dialog',{high:value})
                }
            },
            //这里的三点叫做 : 扩展运算符
            ...mapState({
                show:state=>state.dialog.show
            }),
            // ...mapActions({
            //     add:'switch_dialog', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
            // })
        }
    }
</script>

<style scoped>
    button{
        margin: 1px 20px ;
    }
</style>