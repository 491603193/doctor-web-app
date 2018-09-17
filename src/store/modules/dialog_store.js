export default {
    state: {
        show: false,
        size: {
            high: 1,
            width: 0
        }
    },
    getters:{
        not_show(state){//这里的state对应着上面这个state
            return !state.show;
        }
    },
    mutations:{
        width_dialog(state,width){//这里的state对应着上面这个state
            state.size.width = width;
            //你还可以在这里执行其他的操作改变state
        },
        switch_dialog(state){//这里的state对应着上面这个state
            state.show = !state.show;
            //你还可以在这里执行其他的操作改变state
        },
        change_dialog(state,size){//这里的state对应着上面这个state
            state.size.high = size.high;
            //你还可以在这里执行其他的操作改变state
        }
    },
    actions:{
        switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法
            context.commit('switch_dialog');
            //你还可以在这里触发其他的mutations方法
        },
    }
}