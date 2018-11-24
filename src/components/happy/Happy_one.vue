<template>
    <div>
        <van-notice-bar mode="link">
            最近更新了二维码生成和星座查询等娱乐功能,请多多使用。
        </van-notice-bar>

        <router-link  to="/happy/qrcode"  class="menu">二维码生成</router-link >
        <router-link  to="/happy/constellation"  class="menu">星座运势查询</router-link >
    </div>
</template>

<script>
import { NoticeBar } from 'vant';
export default {
    components:{
       NoticeBar
    }
    
}
</script>

<style scoped>
.menu{
    width:92%;
    height: 3rem;
    /* padding:4%; */
    margin:40px auto;
    /* display: block; */
    border-radius: 2%;
    border:1px solid #f00;
    font-size: .8rem;
    font-family: "华文彩云";
    background: linear-gradient(to right, rgb(133, 81, 253), rgb(42, 247, 52));  
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -ms-background-clip: text;
    -o-background-clip: text;
    background-clip: text;
    color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>
