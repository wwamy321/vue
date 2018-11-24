// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入全局css js
import './assets/css/reset.css'
import './assets/js/rem.js'
// 引入vuex
import store from '@/vuex/store.js'
// 引入vant
import Vant from 'vant';    
import 'vant/lib/index.css';
Vue.use(Vant);
// 引入touch
import VueTouch from 'vue-touch'
Vue.use(VueTouch, { name: 'v-touch' })

Vue.config.productionTip = false

// 域名代理 跨域时有可能会用到
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
