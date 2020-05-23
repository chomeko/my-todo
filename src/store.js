import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fruits: {
      name: 'りんご'
    },
    price: 150,
    basket: [],
    totalprice: 0
  },
  getters: {
    getFruits(state){
      return state.fruits.name
    },
    getPrice(state){
      return state.price
    },

    //basketの中身の数
    getBasketCount(state) {
      return state.basket.length
    },
    //合計金額
    getTotalPrice(state) {
      return state.totalprice
    }
  },
  mutations: {
    //りんごをbasketにpush
    setCount: state => {
      state.basket.push(state.fruits)
    },
    //バスケットの数 * 150円 * 消費税
    setPrice: state => {
      state.totalprice = Math.floor(state.basket.length * state.price * 1.08)
    }
  },
  actions: {
    doUpcount(context) {
      context.commit('setCount')
    },
    doUptotal(context) {
      context.commit('setPrice')
    }
  }
})

export default store

