<template>
    <div>
        <ul class="list">
            <li v-for="music in musicList" :key="music.id">
                <router-link :to=" '/music/musicalbums/'+music.id ">
                    <img :src="music.bg" alt="">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Axios from 'axios'
export default{
    data(){
        return {
            musicList:[],
        }
    },
    mounted(){
        let url = '/static/data/musiclist.json'
        Axios.get(url).then( result => {
            this.musicList = result.data.albums
               
        }).catch()
    },
}
</script>

<style scoped>
.list{
    margin:0.8rem 0;
    display: flex;
    flex-wrap:wrap;
}
.list li{
    width: 50%;
}
.list li img{width: 100%;}

</style>
