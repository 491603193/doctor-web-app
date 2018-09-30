<template>
    <div>
        <header class="my-header" id="header-test">
            <div class="header my-title-header">
                <span class="iconfont bfx-icon-fanhui" onclick="api.closeWin()"></span>个人中心</div>
        </header>

        <section class="my-section">
            <ul class="my-options">
                <li class="my-option">
                    <img src="../../../static/img/amendpwd.png">
                    <span class="my-left">修改密码</span>
                    <span class="iconfont bfx-icon-goto"></span>
                </li>
                <li class="my-option">
                    <img src="../../../static/img/idea.png">
                    <span class="my-left">意见反馈</span>
                    <span class="iconfont bfx-icon-goto"></span>
                </li>
                <li class="my-option">
                    <img src="../../../static/img/asregards.png">
                    <span class="my-left">关于我们</span>
                    <span class="iconfont bfx-icon-goto"></span>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    // 引入header.vue组件
    export default {

    }


</script>

<style scoped>
</style>