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
    totalprice: 0,
    //ここからTODO
    todos: [
      { id: 1, coment: 'テキストテスト', done: false},
      { id: 2, coment: '2個目のテキストテスト', done: false},
      { id: 3, coment: '3個目のテキストテスト', done: false}
    ],
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
    },
    //ここからTODOのgetters
    getTodolist(state) {
      return state.todos
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
    },
    //ここからTODOリスト
    setAdd(state, coment) {
      var todo = {
        id: 0,
        coment: coment.value,
        done: false
      }
      if (state.todos.length !== 0) {
        todo.id = state.todos[state.todos.length -1].id + 1
      }
      state.todos.push(todo)
    }
  },
  actions: {
    doUpcount(context) {
      context.commit('setCount')
    },
    doUptotal(context) {
      context.commit('setPrice')
    },
    //ここからTODOリスト
    doAdd(context, todo) {
      context.commit('setAdd',todo.coment)
    }
  }
})

export default store

