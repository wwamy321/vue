<template>
    <div >
        <common-header>
            <span slot="title">推荐</span>
        </common-header>
        <common-nav></common-nav>
        <router-view></router-view>
    </div>
</template>


<script>
import commonHeader from '@/components/common/Header.vue'
import commonNav from '@/components/common/Nav.vue'
export default {
    components:{
        commonHeader,
        commonNav,
    } 
}
</script>

<style scoped>


</style>
