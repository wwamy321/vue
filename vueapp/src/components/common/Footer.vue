<template>
    <div>
        <ul class="footer" :style="{ background:bg }">
            <li>
                <router-link to="/movie/movieList">电影</router-link>
            </li>
            <li>
                <router-link to="/music">音乐</router-link>
            </li>
            <li>
                <router-link to="/book">书籍</router-link>
            </li>
            <li>
                <router-link to="/photo">图片</router-link>
            </li>
        </ul>     
    </div>    
</template>

<script>
export default {
    props:['bg']
}
</script>

<style scoped>
.footer{
    position:fixed;
    bottom:0px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height:1rem;
    line-height: 1rem;
    background:-webkit-linear-gradient(left,rgb(144, 104, 238), rgb(250, 119, 200));
}
.footer li a{
    color:#ccc;
    outline:none;
}
.footer li a.router-link-active{
    color:#fff;
}


</style>
