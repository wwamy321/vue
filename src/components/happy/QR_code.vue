<template>
    <div>
        <!-- 二维码页面 -->
        <div class="wrap">
            <h2>在下方输入二维码的内容:</h2>
            <textarea v-model="textarea" cols="30" rows="10"></textarea>
            <div class="wrap-size">
                二维码大小:
                <input type="text" v-model="size" class="size"/>1-400</div>
            <input type="button" @click="upload" class="btn" value="生成二维码">
        </div>
        <popup v-model="show">
            <img :src="src" alt="">
        </popup>    
    </div>
    
</template>

<script>
import Axios from 'axios'
import { Popup } from 'vant'
export default {
    components:{
        Popup
    },
    data(){
        return {
            textarea:'',
            size:'',
            src:'',
            show: false,
        }
    },
    methods:{
        upload(){
            let url = API_PROXY + `http://apis.juhe.cn/qrcode/api?text=${this.textarea}&el=&bgcolor=&fgcolor=&logo=&w=${this.size}&m=&lw=&type=1&key=bd4419ce7626f2bc16741725e2441b63`
            Axios.get(url).then(res=>{
                 console.log(res)
                 this.show=true;
                // 解码base64
                this.src="data:image/jpg;base64," + res.data.result.base64_image;
            }
            ).catch()
        },
    },
}
</script>

<style scoped>
.wrap{
    display: flex;
    flex-direction: column;
    padding:2%;
    margin: 4%;
}
textarea{
    border:1px solid #ccc;
}
.wrap h2{
    font-size: 20px;
}
.wrap-size{
    margin-top:4%;
    font-size: .3rem;
}
.size{
    width: 20%;
    border:1px solid #ccc;
    background:none;
}
.btn{
    margin-top:4%;
    width: 98%;
    height: 1rem;
    font-size: .5rem;
    border:1px solid #ccc;
    box-sizing: border-box;
    background:none;
    color:#ccc;
}
</style>
