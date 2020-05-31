import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState({key: 'todolist'})],
  state: {
    todos: [],
    //状態用
    options: [
      { value: -1, label: '全て' },
      { value: 0, label: '未完了' },
      { value: 1, label: '完了' },
    ],
    current: -1
  },
  getters: {
    getTodolist(state) {
      return state.todos
    },
    //label用
    getOptions(state) {
      return state.options
    },
    //current用
    getCurrent(state) {
      return state.current
    },
    //引数idを受け取って検索
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }

  },
  mutations: {
    //タスクを追加
    setAdd(state, {coment, timelimit}) {
      var todo = {
        id: 1,
        coment: coment,
        status: 0,
        isActive: false,
        day: moment().format(),
        timelimit: timelimit
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
      state.todos[index].isActive = !state.todos[index].isActive
    },
    //双方向バインディングでcurrentを書き換える
    setCurrent(state, value) {
      state.current = value
    },
    //一致したIndex番号を削除
    Delete(state, id) {
      if (confirm('削除しますか？')) {
        const index = state.todos.findIndex(todo => todo.id === id)
        state.todos.splice(index, 1)
      }else { return }
    },
    //一致したIndex番号を編集
    Update(state, { id, coment, timelimit}) {
      const index = state.todos.findIndex(todo => todo.id === id)
      if (index >= 0) {
        state.todos[index].coment = coment
        state.todos[index].timelimit = timelimit
      }
    }
  },
  actions: {
    //タスクの追加
    doAdd(context, todo) {
      context.commit('setAdd',todo)
    },
    //状態の変化
    doChange(context, id) {
      context.commit('setStatus', id)
    },
    //削除
    doRemove(context, id) {
      context.commit('Delete', id)
    },
    //編集
    doUpdate(context, todo) {
      context.commit('Update', todo)
    }
  }
})

export default store

