<template>
    <div>
        <swipe  :autoplay="3000">
            <swipe-item>
                <img src="https://b.bdstatic.com/boxlib/20181117/2018111715500415061499830.jpg" alt="">
            </swipe-item>
            <swipe-item>
                <img src="https://b.bdstatic.com/boxlib/20181117/2018111716002260920357331.jpg" alt="">
            </swipe-item>
            <swipe-item>
                <img src="https://b.bdstatic.com/boxlib/20181117/2018111716002215299877012.jpg" alt="">
            </swipe-item>
            <swipe-item>
                <img src="https://b.bdstatic.com/boxlib/20181117/2018111716002215299877012.jpg" alt="">
            </swipe-item>
            
        </swipe>
            <ul> 
                <li @click="go(item.url)"  class="main" v-for="item in newsList" :key="item.uniquekey" >
                <div class="title">
                    <h2>{{item.title}}</h2>
                    <p class="time">{{item.date}}</p>
                </div>
                <div class="main_img">
                    <ul>
                        <li>
                            <img :src="item.thumbnail_pic_s" alt="">
                        </li>
                        <li>
                            <img :src="item.thumbnail_pic_s02" alt="">
                        </li>
                        <li>
                            <img :src="item.thumbnail_pic_s03" alt="">
                        </li>
                    </ul>
                </div>
                <div class="type">
                    <div>类型:{{item.category}}</div>
                    <div>来源:{{item.author_name}}</div>
                </div>
            </li>
        </ul>
        
    </div>  
</template>

<script>
// 引入vant 部分插件
import { Swipe, SwipeItem } from 'vant';
import { Toast } from 'vant'
// 引入Axios
import Axios from 'axios'
export default {
    data(){
        return {
            newsList:[],
        }
    },
    methods:{
        go(Itemurl){
            console.log(Itemurl)
            window.location.href=Itemurl;
        },
    },
    components:{
        Swipe,
        SwipeItem,
    },
    created(){
        Toast.loading({
            mask: true,
            message: '加载中...',
            duration:1000
        });
    },
    mounted(){
        
        let url = API_PROXY + "http://v.juhe.cn/toutiao/index?type=top&key=6c8fb289fc6bd698e5578f65762638c0"
        Axios.get(url).then(res=>{
            console.log(res)
            this.newsList = res.data.result.data
            // console.log(this.newsList)
        }).catch();
        
    }
}
</script>

<style scoped>
.main{
    padding:2%;
    width: 96%;
    border-bottom:1px solid #eee;
}
.main_img ul{
    display: flex;
    justify-content: space-around;
    margin-bottom: 2%;
}
.main_img ul li{
    width: 30%;
}
.main_img ul li img{
    width: 100%;
}
.title h2{
    font-size: 20px;
}
.title p{
    padding-left: 2%;
    color:#ccc;
}
.type{
    display:flex;
    justify-content: space-around;
}
.type div{
    width: 50%;
}

</style>
