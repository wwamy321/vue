<template>
    <div>
        <ul class="movielist">
            <li class="movie" @click="goDetail(movie.id)" v-for="movie in movieList" :key="movie.id">
                <div class="movie-img"><img :src="movie.img" ></div>
                <div class="movie-info">
                    <p class="movie-title">{{movie.nm}}</p>
                    <p>{{movie.ver}}</p>
                    <p>主演:{{movie.star}}</p>
                    <p>{{movie.showInfo}}</p>
                </div>
            </li>
        </ul>
        <div class="loading" v-show="loadingshow">
            <img src="@/assets/img/loading.gif" alt="">
        </div>
        <div class="tip" v-show="tip">
            <p>已经到达世界尽头</p>
        </div>
    </div>    
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            movieList:[],
            loadingshow:false,
            tip:false,
        }
    },
    methods:{
        // 加载数据方法
        loadData(){
            // let url1 = API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=" +
            //     this.moveList.length
            let url2 = "/static/data/moviedata.json"
            Axios.get(url2).then((res)=>{
            let list = res.data.data.movies;
            let data = list.slice(this.movieList.length, this.movieList.length + 5)
            if( data.length < 5 ){
                this.tip = true
            }
            this.movieList = this.movieList.concat(data)
            }).catch( ()=>{alert("数据接收失败")} )
        },
        goDetail(movieId){
             this.$router.push('/movie/moviedetail/'+movieId)
           
        }
    },
    // 自动执行的钩子函数
    mounted() { //初始化完成
        this.loadData(); //放在初始化的过程获取数据
        window.onscroll = ()=>{
            let clientHeight = document.documentElement.clientHeight;
            let scrollTop = document.documentElement.scrollTop;
            let scrollHeight = document.documentElement.scrollHeight;
            if( clientHeight + scrollTop >= scrollHeight ){
                this.loadingshow = true;
                if( !this.tip ){
                    this.loadData()
                }else{
                    this.loadingshow = false;
                }
            }

        }
    },
   
}
</script>

<style scoped>
.movielist{
    margin-top:1rem;
    margin-bottom: 0.6rem;
}
.movie{
    display: flex;
    padding:0.2rem;
    border-bottom:1px solid #ccc;
}
.movie-img{
    flex:1 1 0;
    margin-right:0.2rem;
    /* flex-grow: 1; */
    /* width: 0; */
}
.movie-info{
    flex: 2 1 0;
    /* flex-grow: 2;
    width: 0; */
}
.movie-title{
    font-weight: 800;
}
.loading{
    text-align: center;
    margin-bottom: 1.6rem;
}
.tip{
    margin-bottom: 1rem;
    text-align: center;
}
</style>
