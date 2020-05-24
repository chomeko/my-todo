import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
    ],
    options: [
      { value: -1, label: '全て' },
      { value: 0, label: '作業中' },
      { value: 1, label: '完了' },
    ]
  },
  getters: {
    getTodolist(state) {
      return state.todos
    },
    getOptions(state) {
      return state.options
    }
  },
  mutations: {
    //タスクを追加
    setAdd(state, coment) {
      var todo = {
        id: 1,
        coment: coment.value,
        status: 0
      }
      if (state.todos.length !== 0) {
        todo.id = state.todos[state.todos.length -1].id + 1
      }
      state.todos.push(todo)
    },
    //状態を切り替える
    setStatus(state, id) {
      //Index番号が一致するものを配列から探す
      const index = state.todos.findIndex(todo => todo.id === id)
      state.todos[index].status = state.todos[index].status ? 0 : 1
    },
    //一致したIndex番号を削除
    Delete(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id)
      state.todos.splice(index, 1)
    }
  },
  actions: {
    //タスクの追加
    doAdd(context, todo) {
      context.commit('setAdd',todo.coment)
    },
    //状態の変化
    doChange(context, id) {
      context.commit('setStatus', id)
    },
    //削除
    doRemove(context, id) {
      context.commit('Delete', id)
    }
  }
})

export default store

