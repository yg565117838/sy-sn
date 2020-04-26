import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopList:[]
  },
  mutations: {
    addData(state,obj){
      state.shopList.push(obj);
    }

  },
  actions: {
  },
  modules: {
  }
})
