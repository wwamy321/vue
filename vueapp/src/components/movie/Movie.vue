<template>
    <div>
        <common-header>
            <span slot="title">Movie</span>
        </common-header>
        <router-view></router-view>
        <common-footer></common-footer>
    </div>    
</template>

<script>
// 引入头部底部组件
import CommonHeader from "../common/Header"
import CommonFooter from "../common/Footer"
export default {
    components: {
        CommonHeader,
        CommonFooter,
    }
}
</script>

<style scoped>

</style>
