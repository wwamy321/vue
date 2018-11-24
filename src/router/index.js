import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 引入推荐部分组件
import Recommend from '@/components/index/Recommend'
import RecommendList from '@/components/index/RecommendList'
// 引入小说部分组件
import Novel from '@/components/novel/Novel'
import NovelList from '@/components/novel/NovelList'
import NovelDetail from '@/components/novel/NovelDetail'
import NovelSearch from '@/components/novel/NovelSearch'
// 引入新闻组件
import News from '@/components/news/News'
import NewsList from '@/components/news/NewsList'
// 引入图片组件
import Photo from '@/components/photo/Photo'
import PhotoList from '@/components/photo/PhotoList'
import PhotoDetail from '@/components/photo/PhotoDetail'
import PhotoDetailBig from '@/components/photo/PhotoDetailBig'
// 引入娱乐组件
import Happy from '@/components/happy/Happy'
import Happy_one from '@/components/happy/Happy_one'
import QRcode from '@/components/happy/QR_code'
import Constellation from '@/components/happy/Constellation'
import FateDetaiil from '@/components/happy/Fatedetail'
// error
import Error from '@/components/common/Error'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/recommend/recommendlist'
    },{//推荐
      path:'/recommend',
      name:'recommend',
      component: Recommend,
      children:[
        {
          path:'recommendlist',
          name:'RecommendList',
          component: RecommendList,
        },
      ],
    },{//小说
      path:'/novel',
      name:'Novel',
      component: Novel,
      children:[
        {
          path:'novellist',
          name:'NovelList',
          component: NovelList,
        },
        {
          path: 'noveldetail/:name',
          name:'NovelDetail',
          component: NovelDetail,
        },
        {
          path: 'novelsearch/:name',
          name: 'NovelSearch',
          component: NovelSearch,
        }

      ],
      redirect: '/novel/novellist'
    },{//新闻
      path:'/news',
      name:'News',
      component: News,
      children:[
        {
          path:'newslist',
          name:'NewsList',
          component:NewsList,
        },
      ],
      redirect: '/news/newslist',
    },{//图片
      path:'/photo',
      name:'Photo',
      component: Photo,
      children:[
        {
          path:'photolist',
          component: PhotoList,
        },{
          path:'photodetail/:index',
          component: PhotoDetail,
        },{
          path:'photodetailbig/:index',
          component:PhotoDetailBig,
        }
      ],
      redirect: '/photo/photolist'
    },{//娱乐
      path:'/happy',
      name:'Happy',
      component:Happy,
      children:[
          { //二维码星座入口
            path:'happyone',
            name:'Happy_one',
            component: Happy_one,
          },
          {
            path: 'qrcode',
            component: QRcode,
          },{
            path: 'constellation',
            component: Constellation,
          },{
            path: 'fatedetail/:title',
            component:FateDetaiil,
          }
      ],
      redirect: '/happy/happyone'
    },{//error
      path:"*",
      component:Error,
    }
  ]
})
