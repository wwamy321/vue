<template>
    <div>
        <ul class="nav clearfix">
            <li><router-link to='/recommend/recommendlist'>推荐</router-link></li>
            <li><router-link to='/novel'>小说</router-link></li>
            <li><router-link to='/news'>新闻</router-link></li>
            <li><router-link to='/photo'>壁纸</router-link></li>
            <li><router-link to='/happy'>娱乐</router-link></li>
        </ul>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
@import url(../../assets/css/common.css);
.nav{
    height: 1rem;
    text-align: center;
    margin-top:-1px;
    display: flex;
    /* justify-content: space-evenly; */
    line-height: 1rem;
    background:#FF3F82; 
}
.nav li{
    float: left;
    width: 20%;
    text-align: center;
    overflow: hidden;
}
 .nav li a{
    color:#fff;
    outline:none;
    display: inline-block;
    width: 100%;
    height: 1rem;
    box-sizing: border-box;
    font-size:0.3rem;
}
.nav li a.router-link-active{
    color:rgb(60, 16, 255);
    border-bottom:2px solid rgb(60, 16, 255);
}


</style>
