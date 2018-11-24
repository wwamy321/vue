<template>
    <div class="novellist">
        <ul>
            <li class="search">
                <input type="text" v-model="novelsearch" placeholder="请输入要查询的小说" class="input">
                <input type="button" value="搜索" @click="goSearch(novelsearch)" class="btn">
            </li>
            <li class="block" @click="goDetail(item.bookname)"  v-for="(item, index) in novelList" :key="index" >
                <div>
                    <div class="img">
                        <img :src="item.book_cover" alt="">
                    </div>
                    <div class="content">
                        <ul>
                            <li class="title"><h2>{{item.bookname}}</h2></li>
                            <li class="detail">{{item.introduction}}</li>
                            <li class="gx">更新至:{{item.topic}}</li>
                            <li class="author">
                                <svg id="icon-human" viewBox="0 0 10 12" height="50%"><path d="M6.375 6.683C7.053 5.873 7.5 4.649 7.5 3.6 7.5 2.023 6.462 1 5 1S2.5 2.023 2.5 3.6c0 1.05.447 2.274 1.125 3.083a1 1 0 0 1-.463 1.595C1.79 8.715 1 9.537 1 10.5c0-.106-.036-.165-.012-.147.136.1.39.21.743.308C2.52 10.88 3.675 11 5 11c1.325 0 2.48-.12 3.27-.339.352-.097.606-.208.742-.308.024-.018-.012.04-.012.147 0-.963-.789-1.785-2.162-2.222a1 1 0 0 1-.463-1.595zm1.18.071a5.23 5.23 0 0 1-.414.571c.226.072.444.155.653.25l.306.15C9.222 8.32 10 9.268 10 10.5c0 1-2.239 1.5-5 1.5s-5-.5-5-1.5c0-1.232.778-2.179 1.9-2.775l.306-.15c-.306.15.427-.178.653-.25a5.23 5.23 0 0 1-.414-.57l-.17-.287C1.79 5.59 1.5 4.55 1.5 3.6 1.5 1.39 3.067 0 5 0s3.5 1.39 3.5 3.6c0 .951-.29 1.991-.775 2.868l-.17.286z"></path></svg>
                                {{item.author_name}}<span>{{item.stat_name}}</span></li>
                        </ul>
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
            novelList:[],
            novelsearch:'',
        }
    },
    methods:{
        goDetail(name){
            this.$router.push('/novel/noveldetail/'+name)
            // console.log(name)
        },
        goSearch(name){
            this.$router.push('/novel/novelsearch/'+name)
        }
    },


    // 钩子函数
   created(){
        let url = 'https://www.apiopen.top/novelApi'
        // let url ="/static/data/novellist.json"
       Axios.get(url).then(res=>{
           this.novelList = res.data.data
        //    console.log(this.novelList)
       }).catch()
   }
}
</script>

<style scoped>
.novellist{
    position:fixed;
    bottom:0;
    right:0;
    left:0;
    top:2rem;
    overflow: auto;

}

.search{
    position:fixed;
    left:50%;
    transform: translateX(-50%);
    bottom:5%;
    z-index: 1;
    height: 0.8rem;
    width: 80%;
    margin:0px auto;
    box-shadow: 0px 2px 5px #ccc;
    background:#fff;
    border-radius: 0.4rem;
}
.search .input{
    outline: none;
    border:none;
    height: 0.7rem;
    width: 76%;
    padding-left:4%;
    border-bottom-left-radius: 0.4rem;
    border-top-left-radius: 0.4rem;
}
.search .btn{
    outline: none;
    border:none;
    height: 0.8rem;
    width: 20%;
    /* background:-webkit-linear-gradient(left, rgb(241, 236, 236), rgb(156, 156, 158)); */
    background: #fff;
    margin-left:-4px;
    border-bottom-right-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    border-left: 1px solid #ccc;

}
.block div{
    display: flex;
    /* justify-content: space-around; */
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
    font-size:14px;
    height: 1.7rem;
    color:#999;
    overflow: hidden;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.block div .content .author{
    width: 100%;
    padding-left:2%;
    font-size:14px;
    height: 24px;
    line-height: 24px;
}
.block div .content .gx{
    height: 24px;
   font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.block div .content .author span{
    float:right;
    margin-right: 2%;
    width: 20%;
    text-align: center;
    font-size:14px;
}
</style>
