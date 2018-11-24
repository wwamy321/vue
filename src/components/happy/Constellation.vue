<template>
    <div>
        <!-- 星座查询 -->
        <ul class="fate">
            <li @click="fatedetail(item.title)"  class="fate-list" v-for="(item, index) in star" :key="index">
                    <img :src="item.src" alt="">
                    <p v-text="item.title"></p>
                    <span v-text="item.date"></span>
            </li>
        </ul>
    </div>    
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            star:[],
        }
    },
    methods:{
        fatedetail(title){
            this.$router.push("/happy/fatedetail/"+title)
            console.log(title)
        }
    },
    mounted () {
        let url = "/static/data/fatelist.json"
        Axios.get(url).then(res=>{
            console.log(res)
            this.star = res.data.data
        }).catch()
    }   
}
</script>

<style scoped>
.fate{
    display: flex;
    flex-wrap: wrap;
    padding:2%;
}
.fate-list{
    width: 33%;
    border:1px solid #ccc;
    margin-left: -1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -1px;
    margin-right: -1px;
    box-sizing: border-box;
    margin:0px auto;
}
.fate-list>p{
    font-size: 16px;
}
.fate-list>span{
    font-size: 14px;
    color:rgb(196, 167, 167);
}
.fate-list img{
    width: 100%;
}

</style>
