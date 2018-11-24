// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由
import router from './router'
// 引入vuex
import store from '@/vuex/store.js'
// 引入css全局样式
import './assets/css/reset.css'
import './assets/js/rem.js'
// 引入touch
import VueTouch from 'vue-touch'
Vue.use(VueTouch, { name: 'v-touch'})

Vue.config.productionTip = false

global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
