<template>
    <div>
        <ul>
            <van-icon @click="back" class="icon" name="arrow-left" />
            <li v-for="(item,index) in imglist" :key="index">
                <router-link :to="'/photo/photodetailbig/'+index">
                    <img :src="item.href" alt="">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { Icon } from 'vant'
import Axios from 'axios'
export default {
    data(){
        return {
            imglist:[]
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        }
    },
    created(){
        Axios.get("/static/data/imglist"+this.$route.params.index+".json").then(res=>{
            this.imglist = res.data.data;

            // 将数据存入vuex 必须
            this.$store.dispatch("actionPhotoList", this.imglist)
        }).catch()
    },
    components:{
        Icon,
    }
}
</script>

<style scoped>
ul{position:relative;}
li{
    padding:2%;
}
li img{
    border-radius: 2%;
}
.icon{
    position:absolute;
    left:10px;
    top:10px;
    color:#999;
    font-size: .6rem;
}
</style>
