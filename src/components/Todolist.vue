<template>
  <div id="app">
    <label v-for="label in getOptions" :key="label.value">
      <input type="radio"
        v-model="current"
        v-bind:value="label.value">{{ label.label }}
    </label>
    <h2>することリスト</h2>
    <table>
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="coment">すること</th>
          <th class="state">状態</th>
          <th class="button">-</th>
        </tr>
      </thead>
      <tbody>
        <!-- getTodolistから絞り込み用にcomputedTodosに変えた -->
        <tr v-for="todo in computedTodos" :key="todo.id">
          <th class="id">{{ todo.id }}</th>
          <td class="coment">{{ todo.coment }}</td>
          <td class="state">
            <button @click="doChange(todo.id)">{{todo.status}}</button>
          </td>
          <td>
            <button @click="doRemove(todo.id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Todolist',
  data(){
    return {
      disp: "-1"
    }
  },
  computed:{
    ...mapGetters([
      'getTodolist',
      'getOptions',
      'getCurrent'
    ]),
    //双方向バインディングでゲッターとセッターを指定
    //セッターは引数を直接ミューテーションにコミット
    current: {
      get(){
        return this.getCurrent
      },
      set(value){
        this.$store.commit('setCurrent', value)
      }
    },
    //絞り込み用のTODOリストを作成
    computedTodos(){
      //Todoをフィルターで検索しアロー関数でcurrentが
      //０より小さければすべてのタスクを表示
      //それ以外はcurrentとtodo.statusが等しいタスクを表示
      return this.getTodolist.filter((el) => {
        return this.getCurrent < 0 ? true : this.getCurrent === el.status
      },this)
    }
    //labels () {
    //  //reduceで合計値を出す
    //  return this.$store.getters.getOptions.reduce((a,b) => {
    //    return Object.assign(a, {[b.value] : b.label})
    //  },{})
    //}
  },
  methods:{
    ...mapActions([
      "doChange",
      "doRemove"
    ])
  },
}
</script>

<style lang="sass" scoped>
  #app
    max-width: 640px
    margin: 0 auto
  h2
    text-align: center
  table
    width: 100%
    border-collapse: collapse
  thead th
    border-bottom: 2px solid #0c19ce
    color: #0c19ce
  th
    padding: 0 8px
    line-height: 40px
  thead th.id
    width: 50px
  thead th.state
    width: 100px
  thead th.button
    width: 60px

  tbody
    text-align: center
  tbody tr td,
  tbody tr th
    border-bottom: 1px solid #ccc
    transition: all 0.4s
  tbody tr:hover td,
  tbody tr:hover th
    background: #f4fbff

  button
    border: none
    border-radius: 20px
    line-height: 24px
    padding: 0 8px
    background: #0c19ce
    color: #fff
    cursor: pointer

</style>