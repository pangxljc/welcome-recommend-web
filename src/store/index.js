/*
 vuex最核心的管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

// 声明使用插件
Vue.use(Vuex)

// 向外暴露store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
})
