// /**
//  * Created by yqr on 2018/3/26.
//  */
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// /*测试数据*/
// const date = 'Mon Mar 24 2018 00:00:00 GMT+0800 (中国标准时间)'
// const data = [
//   {
//     id: '1111',
//     name: 'Allen',
//     type: '员工',
//     status: '已离职'
//   },{
//     id: '2222',
//     name: 'Thomas',
//     type: '司机',
//     status: '在职'
//   }
// ]

// const state = {
//   collapsed: false,
//   topNavState: 'enterprise',
//   leftNavState: 'enterprise'
// }

// /*从本地存储读取数据*/
// for(var item in state) {
//   localStorage.getItem(item)? state[item] = JSON.parse(localStorage.getItem(item)): false;
// }

// export default new Vuex.Store({
//   state
// })


export default {
  state: {
    collapsed: false,
    topNavState: 'enterprise',
    leftNavState: 'enterprise'
  },
  getters: {

  },
  mutations: {
    // 触发方法 $store.commit('', data)


    // 清空用户信息

  },
  actions: {
    // 触发方法 $store.dispatch('', data)

  }
}
