<template>
    <div class="wrap">
        <!-- 详细信息 -->
        <tabs v-model="active">
            <tab title="今 天">
                <div class="today">
                    <p class="today-title">{{today.name}}今日运势</p>
                    <p class="today-time" >有效日期:{{today.datetime}}
                        
                    </p>
                    <ul>
                        <li class="today-index">
                            <span>情感 :</span>
                            <div class="jd">
                                <span class="star-after"></span>
                                <span :style="title.qg"  class="star-before qg"></span>
                            </div>
                            <span>{{today.love}}</span>
                        </li>
                        <li class="today-index">
                            <span>健康 :</span>
                            <div class="jd">
                                <span class="star-after"></span>
                                <span :style="title.jk" class="star-before jk"></span>
                            </div>
                            <span>{{today.health}}</span>
                        </li>
                        <li class="today-index">
                            <span>财运 :</span>
                            <div class="jd">
                                <span class="star-after"></span>
                                <span :style="title.cy"  class="star-before cy"></span>
                            </div>
                            <span>{{today.money}}</span>
                        </li>
                        <li class="today-index">
                            <span>工作 :</span>
                            <div class="jd">
                                <span class="star-after"></span>
                                <span :style="title.gz"  class="star-before gz"></span>
                            </div>
                            <span>{{today.work}}</span>
                        </li>
                        <li class="today-index">
                            <span>综合 :</span>
                            <div class="jd">
                                <span class="star-after"></span>
                                <span :style="title.zh"  class="star-before zh"></span>
                            </div>
                            <span>{{today.all}}</span>
                        </li>
                    </ul>
                    <div class="today-lucky">
                        <div class="today-color bs">
                            {{today.color}}
                            <p>幸运色</p>  
                            </div>
                        <div class="today-num bs">
                            {{today.number}}
                            <p>幸运数字</p>
                        </div>
                        <div class="today-fate bs">
                            {{today.QFriend}}
                            <p>速配星座</p>
                        </div>
                    </div>
                    <div class="today-summary">
                        {{today.summary}}
                    </div>
                </div>
            </tab>
            <tab title="明 天">
                <div class="today">
                    <p class="today-title">{{tomorrow.name}}明日运势</p>
                    <p class="today-time" >有效日期:{{tomorrow.datetime}}     
                    </p>
                    <ul>
                        <li class="today-index">
                            <span>情感 :</span>
                            <div class="jd">
                                <span class="star-after"></span>
                                <span :style="tomorrowtitle.qg"  class="star-before qg"></span>
                            </div>
                            <span>{{tomorrow.love}}</span>
                        </li>
                        <li class="today-index">
                            <span>健康 :</span>
                            <div class="jd">
                                <span class="star-after"></span>
                                <span :style="tomorrowtitle.jk" class="star-before jk"></span>
                            </div>
                            <span>{{tomorrow.health}}</span>
                        </li>
                        <li class="today-index">
                            <span>财运 :</span>
                            <div class="jd">
                                <span class="star-after"></span>
                                <span :style="tomorrowtitle.cy"  class="star-before cy"></span>
                            </div>
                            <span>{{tomorrow.money}}</span>
                        </li>
                        <li class="today-index">
                            <span>工作 :</span>
                            <div class="jd">
                                <span class="star-after"></span>
                                <span :style="tomorrowtitle.gz"  class="star-before gz"></span>
                            </div>
                            <span>{{tomorrow.work}}</span>
                        </li>
                        <li class="today-index">
                            <span>综合 :</span>
                            <div class="jd">
                                <span class="star-after"></span>
                                <span :style="tomorrowtitle.zh"  class="star-before zh"></span>
                            </div>
                            <span>{{tomorrow.all}}</span>
                        </li>
                    </ul>
                    <div class="today-lucky">
                        <div class="today-color bs">
                            {{tomorrow.color}}
                            <p>幸运色</p>  
                            </div>
                        <div class="today-num bs">
                            {{tomorrow.number}}
                            <p>幸运数字</p>
                        </div>
                        <div class="today-fate bs">
                            {{tomorrow.QFriend}}
                            <p>速配星座</p>
                        </div>
                    </div>
                    <div class="today-summary">
                        {{tomorrow.summary}}
                    </div>
                </div>
            </tab>
            <tab title="本 周">
                <div>
                    <h2 class="today-title">{{week.name}}本周运势</h2>
                    <p class="today-time">有效日期:{{week.date}}</p>
                    <p class="template" style="color:#FF8362">{{week.love}}</p>
                    <p class="template" style="color:#bbf6ff">{{week.money}}</p>
                    <p class="template" style="color:#666">{{week.work}}</p>
                </div>
            </tab>
            <tab title="今 年">
                <div class="year">
                    <h2 class="today-title">{{year.name}}今年运势</h2>
                    <p class="today-time">有效日期:{{year.date}}</p>
                    <ul>
  
                        <li @click="aq">爱情运势</li>
                        <li @click="cy">财运运势</li>
                        <li @click="gz">工作运势</li>
                        <li @click="jk">健康运势</li>
                        <li @click="zh">综合运势</li>
                        <popup
                            v-model="show" 
                            position="top"
                            style="color:#fff;height:100%;width:100%;font-size:18px;text-indent:.8rem;background:url(/static/image/timg.jpg);background-size:100%;"
                        >
                        <button @click="on" class="back">返回</button>
                            <span class="span" v-show="love">{{year.love[0]}}</span>
                            <span class="span" v-show="finance">{{year.finance[0]}}</span>
                            <span class="span" v-show="career">{{year.career[0]}}</span>
                            <span class="span" v-show="health">{{year.health[0]}}</span>
                            <span class="span" v-show="mima">{{year.mima.text[0]}}</span>
                        </popup>
                    </ul>
                    
                </div>
            </tab>
            <!-- <tab title="今 年">内容 5</tab> -->
        </tabs>
    </div>    
</template>

<script>
import { Tab, Tabs } from 'vant'
import { Popup } from 'vant'
import Axios from 'axios'
export default {
    components:{
        Tab,
        Tabs,
        Popup
    },
    data(){
        return {
            today:[], //今天
            tomorrow:[], //明天
            week:[], //本周
            month:[], //本月
            year:[], //今年
            active:0,
            title:null,//今日进度条
            tomorrowtitle:null,//明日进度条
            show: false,
            love:true,
            finance:false,
            career:false,
            health:false,
            mima:false,
        }
    },
    methods:{
        on(){this.show=false;},
        aq(){
            this.show = true;
            this.love = true
            this.finance = false
            this.career = false
            this.health = false
            this.mima = false
        },
        cy(){
            this.show = true;
            this.love = false
            this.finance = true
            this.career = false
            this.health = false
            this.mima = false
        },
        gz(){
            this.show = true;
            this.love = false
            this.finance = false
            this.career = true
            this.health = false
            this.mima = false
        },
        jk(){
            this.show = true;
            this.love = false
            this.finance = false
            this.career = false
            this.health = true
            this.mima = false
        },
        zh(){
            this.show = true;
            this.love = false
            this.finance = false
            this.career = false
            this.health = false
            this.mima = true
        },
    },
    created() {
        let name = this.$route.params.title;
        let today_url = API_PROXY + `http://web.juhe.cn:8080/constellation/getAll?consName=${name}&type=today&key=9e230b65bcb5c758ea5af32840d1353d`
        let tomorrow_url = API_PROXY + `http://web.juhe.cn:8080/constellation/getAll?consName=${name}&type=tomorrow&key=9e230b65bcb5c758ea5af32840d1353d`
        let week_url = API_PROXY + `http://web.juhe.cn:8080/constellation/getAll?consName=${name}&type=week&key=9e230b65bcb5c758ea5af32840d1353d`
        let year_url = API_PROXY + `http://web.juhe.cn:8080/constellation/getAll?consName=${name}&type=year&key=9e230b65bcb5c758ea5af32840d1353d`
        Axios.get(today_url).then(res=>{
            this.today = res.data;
            this.title = {
                qg:`width:${this.today.love}`,
                jk:`width:${this.today.health}`,
                cy:`width:${this.today.money}`,
                gz:`width:${this.today.work}`,
                zh:`width:${this.today.all}`
                }
        }).catch()
       Axios.get(tomorrow_url).then(res=>{
            this.tomorrow = res.data;
            this.tomorrowtitle = {
                qg:`width:${this.tomorrow.love}`,
                jk:`width:${this.tomorrow.health}`,
                cy:`width:${this.tomorrow.money}`,
                gz:`width:${this.tomorrow.work}`,
                zh:`width:${this.tomorrow.all}`
                }
        }).catch()
        Axios.get(week_url).then(res=>{
            this.week = res.data;
        }).catch()
        Axios.get(year_url).then(res=>{
            this.year = res.data;
            console.log(res);
        }).catch() 
    }   
}
</script>

<style scoped>
.wrap{
    width: 100%;
    height: 500px;
    background:url(https://3g.d1xz.net/statics/d1xz/wap/images/bg_yunshi.png?v=20181120103408) no-repeat center center;
}
.today-title{
    font-size:.7rem;
    text-align: center;
    color:#fff;
    font-family: "华文彩云"
}
.today-time{
    color:#fff;
    font-size: .3rem;
    text-align: center;
}
.today-index{
    width: 80%;
    height: 0.3rem;
    position: relative;
    font-size: .3rem;
    margin:3% auto;
    display: flex;
    justify-content: space-between;
    line-height:.3rem;
    color:#fff;
}
.star-after{
    position: absolute;
    width: 100%;
    height: .3rem;
    border-radius: 2px;
    background:#FFFFFF;
}
.star-before{
    position: absolute;
    width: 100%;
    height: .3rem;
    border-radius: 2px;
    background: #ff0000;
}
.jd{
    position: relative;
    width: 70%;
}
.today-lucky{
    display: flex;
    padding:2%;
    width: 96%;
    font-size: .2rem;
    justify-content: space-around;
    color:#7499D6;
    text-align:center;
}
.today-summary{
    color:#666666;
    padding:2%;
    font-size: 16px;
}
/*圆球功能*/
.bs{
    position: relative;
    overflow: hidden;
    width: 80px;
    height: 70px;
    border-radius: 50%;
    background: #fff;
    border:1px solid #98B3E0;
    padding-top:10px;
}
.bs p{
    position: absolute;
    z-index: 10;
    height: 40px;
    line-height: 40px;
    width: 100%;
    background: #7499D6;
    bottom:0px;
    color:#fff;
}
.qg{background:#FF8362}
.jk{background:#C1F19A}
.cy{background:#F1E29A}
.gz{background:#BBF6FF}
.zh{background:#FECBFF}

/*--------------------------------------------------*/
.template{
    font-size:16px;
    padding:4%;
    color:#fff;
    border-bottom:1px solid #e2e2e2;
    box-shadow: 0px 2px 3px #ccc;
}
/*--------------------------------------------------*/

.year ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 4%;
}
.year ul li{
    color:#fff;
    width:100px;
    height: 100px;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius: 50%;
    font-size: 16px;
    margin-top: 2%;
}
.year ul li:nth-child(1){
    color:#FF8362;
    border:2px solid #FF8362;
}
.year ul li:nth-child(2){
    color:#C1F19A;
    border:2px solid #C1F19A;
}
.year ul li:nth-child(3){
    color:#F1E29A;
    border:2px solid #F1E29A;
}
.year ul li:nth-child(4){
    color:rgb(158, 243, 253);
    border:2px solid rgb(158, 242, 255);
}
.year ul li:nth-child(5){
    color:#f0f;
    border:2px solid #f0f;
}
.back{
    display: block;
    width: 25%;
    height: 40px;
    color:#000;
    background:#fff;
    border-radius: 4px;
    outline: none;
    border:none;
    border:1px solid #ccc;
    font-size:12px;
    margin:2%;
}
.span{
    padding:2%;
}
</style>
