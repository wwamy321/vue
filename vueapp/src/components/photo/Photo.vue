<template>
    <div class="photo">   
        <common-header bg='-webkit-linear-gradient(left,#00f, #0ff)'>
            <span slot="title">Photo</span>
        </common-header>
        <router-view></router-view>
        <common-footer bg='-webkit-linear-gradient(left,#00f, #0ff)'></common-footer>
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
.photo{
    margin:1rem 0;
}
</style>
