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
          <th class="day">日付</th>
          <th class="coment">すること</th>
          <th class="state">状態</th>
          <th class="button">-</th>
        </tr>
      </thead>
      <tbody>
        <!-- getTodolistから絞り込み用にcomputedTodosに変えた -->
        <tr v-for="todo in computedTodos" :key="todo.id">
          <th class="day">{{ todo.day | moment }}</th>
          <td class="coment">{{ todo.coment }}</td>
          <td class="state">
            <!-- 状態を日本語に変えた -->
            <button class="btn status" @click='doChange(todo.id)'>{{labels[todo.status]}}</button>
          </td>
          <td>
            <router-link :to="`/edit/${todo.id}`">編集</router-link>
            <button class="btn delete" @click="doRemove(todo.id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
export default {
  props: { id: Number },
  name: 'Todolist',
  //momentのフォーマット設定
  filters: {
    moment: function (date) {
      return moment(date).format('YYYY年MM月DD日');
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
    },
    labels () {
      //reduceで合計値を出す
      //{ value: -1, label: '全て' },
      //{ value: 0, label: '作業中' },
      //{ value: 1, label: '完了' },
      return this.$store.getters.getOptions.reduce((a,b) => {
        // {0: '作業中', 1: '完了', -1: 'すべて'}
        return Object.assign(a, {[b.value] : b.label})
      },{})
    }
  },
  methods:{
    ...mapActions([
      "doChange",
      "doRemove",
      "doUpdate"
    ])
  },
}
</script>

<style lang="sass" scoped>
  #app
    max-width: 767px
    margin: 0 auto
  h2
    text-align: center
  table
    width: 100%
    border-collapse: collapse
  thead th
    border: 2px solid #333
    background: yellow
    color: #333
  th
    padding: 0 8px
    line-height: 40px
  thead th.day
    width: 140px
  thead th.state
    width: 90px
  thead th.button
    width: 80px

  tbody
    text-align: center
  tbody tr td,
  tbody tr th
    border: 2px solid #333
    transition: all 0.4s
  tbody tr:hover td,
  tbody tr:hover th
    background: #00ffff

  .btn
    border: none
    padding: 0 8px
    cursor: pointer
    &.status
      border-radius: 20px
      line-height: 24px
      color: #0000ff
      font-size: 18px
    &.update
      border-radius: 5px
      font-size: 12px
      padding: 1px
      background: #ff00ff
      color: #fff
      margin-right: 15px
    &.delete
      border-radius: 5px
      font-size: 12px
      padding: 1px
      background: #ff0000
      color: #fff

</style>