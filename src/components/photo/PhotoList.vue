<template>
    <div>
        <ul>
            <li class="list" @click="goDetail(index)" v-for="(item, index) in imgList" :key="index">
                <div>
                    <img :src="item.small_url" alt="">
                </div>
                <div class="title" v-text="item.title" ></div>
                <div class="detail">
                    <div class="lf" v-text="item.time"></div>
                    <div class="ri">
                        <img src="../../assets/img/love.png" alt="">
                        {{item.love}}
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            imgList:[],
        }
    },
    methods:{
        goDetail(index){
            console.log(index)
            this.$router.push("/photo/photodetail/"+index)
        }
    },
    mounted(){
        // let url = API_PROXY + 'http://image.baidu.com/channel/listjson?pn=0&rn=30&tag1=动漫&tag2=全部&ie=utf8';
            let url = '/static/data/imgType.json'
        Axios.get(url).then(res=>{
            console.log(res)
            this.imgList = res.data.data;
            console.log(this.imgList)
        }).catch()

    }
}
</script>

<style scoped>
.list{
    width: 92%;
    padding:4%;
    text-align: center;
    
}
.list div img{
    width: 100%;
    border-radius: 2%;
}
.title{
    font-size: 20px;
    margin-top: 2%;
    background: linear-gradient(to right, red, blue);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -ms-background-clip: text;
    -o-background-clip: text;
    background-clip: text;
    color: transparent;
}
.detail{
    display: flex;
    height: .6rem;
    line-height: .6rem;
    border-bottom:1px dashed #ccc;
}
.detail .lf{
    width: 50%;
    text-align: left;
    font-size: 16px;
    color:#999;
    padding-left: 4%;
}
.detail .ri{
    width: 50%;
    text-align: right;
    padding-right: 4%;
    font-size: 16px;
    color:#999;
}
.detail .ri img{
    width: 16px;
    height: 16px;
    vertical-align:middle;
    margin-top: -5px;
}
</style>
