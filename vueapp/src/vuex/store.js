// 引入vue 和 vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 4件套标准写法
const state = {
    //创建全局可用变量
    photoList : [],
}

const mutations = {
    // 同步
    setPhotolist(state, status){
        state.photoList = status
    }
}

//相当于computed
const getters = {}

const actions = {
    //异步
    actionPhotoList({commit}, status){
        //参数{commit}: 是ES6中的函数参数解构赋值
        commit("setPhotolist",status)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})