import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fruits: [
      { id: 1, name: 'りんご', price: 150 }
    ],
    count: 0
  },
  getters: {
    getFruits(state){
      return state.fruits
    },
    getCount(state) {
      return state.count
    },
  },
  mutations: {
    //税込価格表示 配列の中のpriceを税込価格にしたいがこれだとできてない
    setPrice(state) {
      state.fruits.price = state.fruits.price * 1.08
    },
    //これだとただカウント数増やしてるだけ
    setCount(state) {
      state.count += 1
    }
  },
  actions: {
    doUpdate(context) {
      context.commit('setPrice')
    },
    doUpcount(context) {
      context.commit('setCount')
    }
  }
})

export default store


