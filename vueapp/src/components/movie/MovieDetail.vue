<template>
    <div >
        <div class="detail">
            <div class="detail-img">
                <img :src="movieDetail.img" alt="">
            </div>
            <div class="detail-info">
                <p class="tit">{{movieDetail.nm}}</p>
                <p v-text="movieDetail.sc+'分'"></p>
                <p>{{movieDetail.src}}</p>
                <p>{{movieDetail.cat}}</p>
                <p>{{movieDetail.rt}}</p>
            </div>
        </div>
        <div class="jieshao">
            <h3>介绍:</h3>
            <p>{{movieDetail.dra}}</p>
        </div>
        <div class="zy">
            <h3>主演:</h3>
            <p>{{movieDetail.star}}</p>
        </div>
    </div>    
</template>

<script>
import Axios from 'axios'

export default {
    data(){
        return {
            movieDetail:[],
        }
    },
    mounted(){
        
    //   let url1 = API_PROXY + "http://route.showapi.com/958-1.json";
        
        // let url2 = '/static/data/moviedetail'+this.$router.params.movieId+'.json'
        let url2 = '/static/data/moviedetail.json'
        Axios.get(url2).then( res=>{
            console.log(res)
            this.movieDetail = res.data.data.MovieDetailModel;
        }).catch( ()=>{alert("数据接收失败")} )
    },
}
</script>

<style scoped>
.detail{
    margin: 1rem 0 0 0;
    padding:0.2rem;
    display: flex;
    border-bottom: 1px solid #ccc;
}
.detail-img{
    flex:1 1 0;
}
.detail-info{
    flex:2 1 0;
    margin-left: 0.2rem;
}
.tit{
    font-weight: 800;
}
h3{
    text-indent: .3rem;
    font-family: "全新硬笔行书简";
    border-bottom:1px solid #ccc;
}
.jieshao,
.zy{
    text-indent: .4rem;
}
 

</style>
