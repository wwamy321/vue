<template>
    <v-touch
         tag="a" 
         class="detail" 
         :style="objstyle"
         @swipeleft="swipeleft"
         @swiperight="swiperight"
         @tap="tap"
        >Swipe me!</v-touch>
</template>

<script>

export default {
    data(){
        return {
            indexlist:0,
        }
    },
    methods:{
        swipeleft(){
            this.indexlist ++;
            if(this.indexlist >= this.$store.state.photoList.length ){
                this.indexlist = 0;
            }
        },
        swiperight(){
            this.indexlist --;
            if(this.indexlist == 0){
                this.indexlist = this.$store.state.photoList.length - 1
            }
        },
        tap(){
            this.$router.go(-1);
        }
    },
    computed:{ //计算属性 监听自定义存储变量 一旦发生改变 则实时发生变化
        objstyle(){
            return {
                background:`#000 url(${this.$store.state.photoList[this.indexlist].href}) no-repeat center center / contain `
            }
        }
    },
    mounted(){
        //获取点击的下标付给自己定义的变量达到可操纵的目的
        this.indexlist = this.$route.params.index;
        // console.log(this.$route.params.index);
        // this.$store.state.photoList要想好用必须先把数据存入vuex
        // console.log(this.$store.state.photoList);
        // console.log(this.$store.state.photoList[this.$route.params.index]);
        // console.log(this.$store.state.photoList[this.$route.params.index].href);
    },
}
</script>

<style scoped>
.detail{
    position:absolute;
    top:0px;
    left:0px;
    bottom:0px;
    right:0px;
    background:#000;
}
</style>
