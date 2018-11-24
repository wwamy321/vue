<template>
    <div class="musictop">
        <common-header bg='-webkit-linear-gradient(left,#ff0, #0ff)'>
            <span slot="title">Music</span>
        </common-header>
        <router-view></router-view>
        <common-footer bg='-webkit-linear-gradient(left,#ff0, #0ff)'></common-footer>
    </div>
</template>

<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
export default {
    components:{
        CommonHeader,
        CommonFooter,
    },
}
</script>

<style scoped>
.musictop{
    margin:1rem 0px;
}
</style>
