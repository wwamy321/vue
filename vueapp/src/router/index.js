import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 电影
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail' 
// 音乐
import Music from '@/components/music/Music'
import MusicList from '@/components/music/MusicList'
import MusicAlbums from '@/components/music/MusicAlbums'
// 书籍
import Book from '@/components/book/Book'
// 图片
import Photo from '@/components/photo/Photo'
import PhotoList from '@/components/photo/PhotoList'
import PhotoDetail from '@/components/photo/PhotoDetail'


Vue.use(Router)

export default new Router({
  mode: "history", //隐藏#
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: "/movie/movielist"
    },
    { //电影
      path: '/movie',
      name: 'Movie',
      component: Movie,
      children:[
        {
          path: 'movielist',
          name: 'MovieList',
          component:MovieList,
        },
        {
          path: 'moviedetail/:movieId',
          name: 'MovieDetail',
          component: MovieDetail,
        }
      ], 
    }, 
    { //音乐
      path: '/music',
      component: Music,
      children:[ {
        path:'MusicList',
        component: MusicList,
      },{
        path: 'MusicAlbums/:musicId',
        component: MusicAlbums,
      } ],
      redirect:'/music/musiclist',
    },
    { //书籍
      path: '/book',
      component: Book,
    },
    { //图片
      path: '/photo',
      component: Photo,
      children:[
        {
          path:'photolist',
          component: PhotoList,
        },
        {
          path:'photodetail/:index',
          component: PhotoDetail,
        },
      ],
      redirect:'/photo/photolist',
    }
  ]
})
