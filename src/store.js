import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fruits: [
      { id: 1, name: 'りんご', price: 150 }
    ],
    basket: [],
  },
  getters: {
    getFruits(state){
      return state.fruits
    },
    getCount(state) {
      return state.basket.count
    },
    //basketの中身
    getBasket(state) {
      return state.basket.length
    }
  },
  mutations: {
    //税込価格表示 配列の中のpriceを税込価格にしたいがこれだとできてない
    setPrice(state) {
      state.fruits.price = state.fruits.price * 1.08
    },
    //配列をフィルターしてその中のnameをbasketにpush??
    setCount: state => {
      state.basket.push((state) => {
        return state.fruits.filter(fruit => fruit.name)
      })
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

//配列をフィルターしてその中のnameをbasketにpush
