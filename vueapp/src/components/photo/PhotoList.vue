<template>
    <div>
        <ul class="photolist clearfix">
            <li v-for="(item, index) in photoList" :key="index">
                <router-link :to="'/photo/photodetail/'+index">
                    <img :src="item.src" alt="">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      photoList: []
    };
  },
  mounted() {
    let url = "/static/data/photodata.json";
    Axios.get(url)
      .then(res => {
        this.photoList = res.data.photoData;
        // console.log(this.photoList)
        // 将数据存入vuex
        this.$store.dispatch("actionPhotoList", this.photoList)
      })
      .catch();
  }
};
</script>

<style scoped>
@import url(../../assets/css/common.css);
.photolist li {
  width: 50%;
  float: left;
}
.photolist li img {
  width: 100%;
}
</style>
