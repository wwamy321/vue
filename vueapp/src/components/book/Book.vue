<template>
   <div class="booktop">
        <common-header bg='-webkit-linear-gradient(left,rgb(255, 239, 100), rgb(253, 143, 40)'>
            <span slot="title">Book</span>
        </common-header>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
            <swipe-item class="slide4"></swipe-item>
        </swipe>       
        <common-footer bg='-webkit-linear-gradient(left,rgb(255, 239, 100), rgb(253, 143, 40)'></common-footer>
   </div>
</template>

<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
import { Swipe, SwipeItem } from 'vue-swipe'
import 'vue-swipe/dist/vue-swipe.css'

export default {
    components:{
        CommonHeader,
        CommonFooter,
        'swipe': Swipe,
        'swipe-item': SwipeItem,
    },
}
</script>

<style scoped>
.booktop{
  margin-top:1rem;
}
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-image:url(/static/img/1.jpg);
  background-size:100%;
  color: #fff;
}

.slide2 {
  background-image:url(/static/img/2.jpg);
  background-size:100%;
  color: #000;
}

.slide3 {
  background-image:url(/static/img/3.jpg);
  background-size:100%;
  color: #fff;
}
.slide4 {
  background-image:url(http://images.migudm.cn/group1/M00/22/DF/CjB8E1ta8sCAbsHCAAEvG4yjBqw904.jpg);
  background-size:100%;
  color:#fff;
}


</style>
