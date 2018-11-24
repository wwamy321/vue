<template>
    <div class="header" :style="{background:bg}">
        <span class="home" @click="goHome">首页</span>
        <h2 class="title">
            <slot class="slot" name="title">append</slot>
        </h2>
    </div>    
</template>

<script>
export default {
    methods:{
        goHome(){
            this.$router.push("/");
        },
    },
    props:['bg'],
}
</script>

<style scoped>
.header{
    position:relative;
    width:100%;
    height:1rem;
    line-height:1rem;
    background:#FF3F82;  
}
.home{
    color:#fff;
    margin-left:0.2rem;
}
.title{
    color:#fff;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
}
</style>
