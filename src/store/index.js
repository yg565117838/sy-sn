import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopList: [],
    cityList: [],
    areaList: [],
    searchPlaceholder: '冰洗抢300元神券'
  },
  mutations: {
    addData(state, obj) {
      for(let i=0;i<state.shopList.length;i++){
        if(state.shopList[i].title==obj.title){
          state.shopList[i].num+=obj.num;
          return;
        }
      }
      state.shopList.push(obj);
    },
    selectCity(state, item) {
      state.cityList = item.city;
    },
    selectArea(state, item) {
      state.areaList = item.area;
    },
    deleteGood(state) {
      state.shopList = state.shopList.filter(function (item) {
        return item.status == false;
      });
    }

  },
  actions: {
  },
  modules: {
  }
})
