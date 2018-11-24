<template>
    <div class="novelInfo">
        <ul>
            <!-- <li class="block" v-for="(item, index) in SearchName" :key="index">
                <div>
                    <div class="img">
                        <img :src="item.cover" alt="">
                    </div>
                    <div class="content">
                        <ul>
                            <li class="title"><h2>{{item.title  }}</h2></li>
                            <li class="detail">{{item.desc}}</li>
                            <li class="gx">标签:{{item.tags}}</li>
                            <li class="gx">分类:{{item.category}}<span style="float:right;margin-right:2%;">{{item.author}}</span></li>

                        </ul>
                    </div>
                </div>
            </li> -->
            <router-link 
                tag="div"
                :to=" '/novel/noveldetail/'+item "
                class="list" 
                v-for="item in SearchName" 
                :key="item"
                @mouseover="mouseover"
                >{{item}}</router-link>
        </ul>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            SearchName:[],
        }
    },
    methods:{
        mouseover(){
            this.style.backgroundColor="#f00";
        }
    },
    mounted() {
        // console.log(this.$route.params.name)  //获取上一页传值
        let NovelSearchName = this.$route.params.name;
         let url = `https://www.apiopen.top/novelSearchApi?name=${NovelSearchName}` //搜索接口
        // let url = `https://www.apiopen.top/novelInfoApi?name=${NovelSearchName}`
        Axios.get(url).then(res=>{
            // this.SearchName = res.data.data.data
            this.SearchName = res.data.data
            // console.log(this.SearchName)
        }).catch()

    },
}
</script>

<style scoped>
/*.block div{
    display: flex;
    padding:2%;
    width: 96%;
}
.block div .img{
    flex: 1.5 1 0;
    height: 3.4rem;
    width: 0%;
}
.block div .img img{
    width: 100%;
    box-shadow: 0px 0px 8px #ccc;
}
.block div .content{
    flex: 2 1 0;
    height: 3.4rem;
    width: 0;
}
.block div .content ul{
    width:100%;
}
.block div .content .title h2{
    width: 99%;
    font-size:20px;
    color:#33373D;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.block div .content .detail{
    width: 100%;
    font-size:0.2rem;
    height: 1.8rem;
    color:#969BA3;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.block div .content .gx{
    height: 24px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
*/
.novelInfo{
    background:url(https://img2.woyaogexing.com/2018/02/27/0fc1ec22dee8fc14!500x500.jpghttps://img2.woyaogexing.com/2018/02/27/0fc1ec22dee8fc14!500x500.jpg) no-repeat center center;
    background-size:100%;
    /* margin-top:-2%; */
}
.list{
    width: 96%;
    height: 1rem;
    line-height: 1rem;
    font-size: 20px;
    padding-left:4%;
    box-shadow: 0px 2px 5px #ccc;
    margin-top: 0%;
    background:rgba(#fff,#fff,#fff,.5);
}
</style>
