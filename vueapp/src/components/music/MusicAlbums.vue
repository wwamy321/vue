<template>
    <div>

        <!-- <h2>{{$route.params.musicId}}</h2>
        <h2>{{$route.params.musicId}}</h2> -->
        <aplayer class="aplayer"  :list="songs" :showLrc='islrc' :music="musiclist" />

    </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import Axios from 'axios'
export default{
    components: {
        Aplayer
    },
    data(){
        return {
            musiclist:{
                title: 'secret base~未闻花名',
                artist: 'Silent Siren',
                src: 'http://b.hy233.tv/fed85d86-6dd5-486a-b8fe-c0b4e72a1497.aac?sign=414cb3715b3bf2abe513c7d85ca88f07&t=5bea981e',
                pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg',
                lrc: 'https://api.bzqll.com/music/netease/lrc?key=579621905&id=526307800',
            },
            songs:[],
            islrc:false,
        }
    },
    mounted(){
        let url = '/static/data/musicdata.json';
        let list = [];
        Axios.get(url).then(res=>{
            list = res.data.musicData;
            console.log(this.songs)
            list.forEach( val =>{
               this.songs.push({
                    title:val.title,
                    artist:val.author,
                    src:val.src,
                    pic:val.pic,
                    lrc:val.lrc,
               });
            this.islrc=true;
            })
        }).catch()
    }
}
</script>

<style scoped>
.aplayer{
    margin-top:1rem;
}
.aplayer-list-index{
    color: #666;
    margin-right: 12px;
    display: inline-block;
    width: 12px;
}
</style>
