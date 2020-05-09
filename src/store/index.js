import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations' //修改状态的方法
import actions from './action'
import getters from './getters'
import state from './state'   //单一状态树
Vue.use(Vuex)



export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
