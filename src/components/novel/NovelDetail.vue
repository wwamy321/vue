<template>
    <div class="novelInfo">
        <ul>
            <li class="block" v-for="(item, index) in NovelInfo" :key="index">
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
            </li>
        </ul>
        <div class="back" @click="goBack">后退</div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            NovelInfo:[],
        }
    },
    methods:{
        goBack(){
            this.$router.push("/novel/novellist")
        }
    },
    mounted() {
        // console.log(this.$route.params.name)  //获取上一页传值
        let NovelName = this.$route.params.name;
        let url = `https://www.apiopen.top/novelInfoApi?name=${NovelName}`
        Axios.get(url).then(res=>{
            // console.log(res) 
            this.NovelInfo = res.data.data.data
            // console.log(this.NovelInfo)
            // this.NovelInfo.forEach(element => {
            //     console.log(element.title)
            // });
        }).catch()

    },
}
</script>

<style scoped>
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

/*后退*/
.back{
    font-size:14px;
    color:#fff;
    position:absolute;
    top:16px;
    right:10px;
    z-index: 999;
}
</style>
