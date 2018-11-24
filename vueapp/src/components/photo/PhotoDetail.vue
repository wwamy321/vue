<template>
    <v-touch
         tag="a" 
         class="detail" 
         :style="objstyle" 
         @swipeleft="swipeleft" 
         @swiperight="swiperight" 
         @swipeup="swipeup"
         @tap="tap">Swipe me!</v-touch>
         <!-- tag更改默认标签 -->
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
            this.indexlist++;
            if(this.indexlist == this.$store.state.photoList.length){
                this.indexlist = 0;
            }
            console.log("left")
        },
        swiperight(){
            this.indexlist--;
            if(this.indexlist < 0){
                this.indexlist = this.$store.state.photoList.length - 1 
            }
            console.log("right")
        },
        swipeup(){
            console.log("上")
        },
        tap(){
            this.$router.go(-1);
        },
    },
    computed:{ //计算属性 监听自定义存储变量 一旦发生改变 则实时发生变化
        objstyle(){
            return {
                background:`#000 url(${this.$store.state.photoList[this.indexlist].src}) no-repeat center center / contain `
            }
        }
    },
    // 钩子函数区域
    mounted(){
        //获取点击的下标付给自己定义的变量达到可操纵的目的
        this.indexlist = this.$route.params.index;

        // console.log(this.indexlist)
        console.log(this.$store.state.photoList);
        // console.log(this.$route.params.index);
        // console.log(this.$store.state.photoList[this.$route.params.index]);
        // console.log(this.$store.state.photoList[this.$route.params.index].src);

    }

}
</script>

<style scoped>
.detail{
    position:absolute;
    top:1rem;
    left:0px;
    bottom:0px;
    right:0px;
}
</style>
