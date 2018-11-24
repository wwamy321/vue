<template>
    <div class="recommendlist">
        <div class="wrap" v-for="(item, index) in recommendlist" :key="index">
               <div class="top">
                   <div class="left_img">
                       <img :src="item.profile_image">
                   </div>
                   <div class="name">
                       <p class="title">{{item.name}}</p>
                       <p class="time">{{item.created_at}}</p>
                   </div>
               </div>
               <div class="content">
                   <div class="title">{{item.text}}</div>
                   <div class="main_img">
                        <video :src="item.videouri"  controls ></video>
                   </div>
               </div> 
               <div class="gongneng">
                   <ul>
                       <li class="list1">
                           <i></i>
                           <span>{{item.love}}</span>
                       </li>
                       <li class="list2">
                           <i></i>
                           <span>{{item.hate}}</span>
                       </li>
                       <li class="list3">
                           <i></i>
                           <span>分享</span>
                       </li>
                       <li class="list4">
                           <i></i>
                           <span>{{item.comment}}</span>
                       </li>
                   </ul>
               </div>
        </div>
        <!-- <div class="brush" @click="brush"></div> -->
        <pull-refresh v-model="isLoading" @refresh="onRefresh"></pull-refresh>




        <div class="loading" v-show="onshow">
            <img src="../../assets/img/loading.gif" alt="">
        </div>
    </div>
</template>


<script>
import { PullRefresh } from 'vant'
import Axios from 'axios'
export default {
    data(){
        return {
            recommendlist:[],
            page:0,
            isLoading: false,
            onshow:false,
        }
    },
    methods:{
        brush(){
            this.onshow = true;
            this.page = Math.floor(Math.random()*10);
            let url= API_PROXY + "https://www.apiopen.top/satinApi?type=1&page="+this.page;
            // console.log(this.page)
            // console.log(url)
            // this.$router.go(0)
            Axios.get(url).then(res=>{
                this.recommendlist = res.data.data;
                // console.log(this.recommendlist)
                this.onshow = false;
            }).catch()
        },
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                this.brush();
            }, 500);
        }
    },
    // 钩子函数
    created(){
        this.brush();
    },
    components:{
        PullRefresh,
    }

}
</script>

<style scoped>
.recommendlist{
    overflow: auto;
}
.wrap{
    padding:2%;
    width: 96%;
   border-bottom:1px solid #ccc
}
.recommendlist .wrap .top{
    display: flex;
    justify-content: space-between;
}
.recommendlist .wrap .top .left_img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
}
.recommendlist .wrap .top .left_img img{
    width: 1rem;
    height: 1rem;;
    width: 100%;
    border-radius: 50%;
}
.recommendlist .wrap .top .name{
    width: 80%;
    height: 1rem;
    
}
.recommendlist .wrap .top .name .title{
    font-size:18px;
    color:#151372
}
.recommendlist .wrap .top .name .time{
    font-size: 14px;
    color:#D1D1D3;
}

.recommendlist .wrap .content{
    width: 100%;
    margin-top:0.2rem;
}
.recommendlist .wrap .content .title{
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.recommendlist .wrap .content .main_img{
    margin-top:0.1rem;
}
.recommendlist .wrap .content .main_img video{
    width: 100%;
    height: 4rem;
}
.recommendlist .wrap .gongneng{margin-top:0.2rem;}
.recommendlist .wrap .gongneng  ul{
    display: flex;
    /* justify-content: space-evenly; */
}
.recommendlist .wrap .gongneng  ul li{
    flex: 1 1 0;
    text-align: center
}
.recommendlist .wrap .gongneng  ul li span{
    color:#747174;
    margin-left: 0.1rem;
}
.recommendlist .wrap .gongneng  ul li i{
    display: inline-block;
    width: 20px;
    height:20px;
    background:#f00;
    vertical-align: middle;
}
.recommendlist .wrap .gongneng  ul .list1 i{
    background:url(../../assets/img/love.jpg);
    background-size:100%;
}
.recommendlist .wrap .gongneng  ul .list2 i{
    background:url(../../assets/img/hate.jpg);
    background-size:100%;
}
.recommendlist .wrap .gongneng  ul .list3 i{
    background:url(../../assets/img/fenxiang.jpg);
    background-size:100%;
}
.recommendlist .wrap .gongneng  ul .list4 i{
    background:url(../../assets/img/comment.jpg);
    background-size:100%;
}
.brush{
    position:fixed;
    bottom:0.6rem;
    right:0.4rem;
    width: 0.8rem;
    height: 0.8rem;
    background: url(../../assets/img/shua.png);
    background-size:100%;
}

.loading{
    position:fixed;
    top:2rem;
    bottom:0px;
    left:0px;
    right:0px;
    background:#fff;
    line-height: 100px;
    font-size:100px;
    z-index: 100;
}
.loading img{
    position: absolute;
    top:25%;
    left:50%;
    transform: translateX(-50%)
}
</style>
