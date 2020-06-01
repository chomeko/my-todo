<template>
  <div id="list">
    <label v-for="label in getOptions" :key="label.value">
      <input type="radio"
        v-model="current"
        v-bind:value="label.value">{{ label.label }}
    </label>
    <div class="todolist">
      <transition-group>
        <!-- getTodolistから絞り込み用にcomputedTodosに変えた -->
        <dl v-for="todo in computedTodos" :key="todo.id" :class="{'isActive': todo.isActive}">
          <dt class="chagecolor" @click="doChange(todo.id)" @mouseover="mouseOverAction(todo.id)" @mouseleave="mouseLemoveAction(todo.id)"></dt>
          <transition>
            <p class="mouseHover" v-show="hoverComent && todo.id === hoverIndex"></p>
          </transition>
          <dt class="day">{{ todo.day | moment }}</dt>
          <dt class="coment">{{ todo.coment }}</dt>
          <dt class="list__footer">
            <p class="timelimit--day" v-if="todo.timelimit === ''">期限なし</p>
            <p class="timelimit--day" v-else>期限は{{ todo.timelimit }}</p>
            <div class="btn__wrapper">
              <button class="btn update" @click.stop="$router.push(`/edit/${todo.id}`)">編集</button>
              <button class="btn delete" @click="doRemove(todo.id)">削除</button>
            </div>
          </dt>
        </dl>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'Todolist',
  data(){
    return{
      timelimit: false,
      hoverComent: false,
      hoverIndex: null

    }
  },
  //momentのフォーマット設定
  filters: {
    moment: function (date) {
      return moment(date).format('YYYY/MM/DD');
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
    //  //{ value: -1, label: '全て' },
    //  //{ value: 0, label: '作業中' },
    //  //{ value: 1, label: '完了' },
    //  return this.$store.getters.getOptions.reduce((a,b) => {
    //    // {0: '作業中', 1: '完了', -1: 'すべて'}
    //    return Object.assign(a, {[b.value] : b.label})
    //  },{})
    //}
  },
  methods:{
    ...mapActions([
      "doChange",
      "doRemove",
      "doUpdate"
    ]),
    mouseOverAction(id){
      this.hoverComent = true
      this.hoverIndex = id
    },
    mouseLemoveAction(id){
      this.hoverComent = false
      this.hoverIndex = id
    }
  }
}
</script>

<style lang="sass" scoped>
  #list
    max-width: 1080px
    margin: 0 auto
    text-align: center
    margin-top: 20px
  label
    font-size: 18px
    font-weight: bold
    color: #333
    cursor: pointer
    border: 3px solid #333
    margin: 10px
    &:nth-of-type(2)
      background: #83AF9B
    &:nth-of-type(3)
      background: #FE4365
    &:hover
      color: #fff
      background: #333
    input[type="radio" i]
      display: none
    input[type=text]
      &:focus
        background: #F9CDAD
  .todolist span
    width: 100%
    margin-bottom: 20px
    justify-content: center
    flex-wrap: wrap
    display: flex
  dl
    width: 330px
    height: 150px
    border: 3px solid #333
    background: #83AF9B
    margin: 8px
    cursor: pointer
    position: relative
  .isActive
    background: #FE4365
  .mouseHover
    position: absolute
    bottom: -30%
    left: 70%
    transform: translate(-70%, 0%)
    background-image: url(/指差し.png)
    background-position: center
    background-size: cover
    width: 80px
    height: 80px
    z-index: 10
  .day
    font-family: 'Miltonian Tattoo', cursive
    color: #FFFFFB
    font-size: 20px
  .coment
    display: flex
    align-items: center
    justify-content: center
    font-weight: bold
    line-height: 30px
    height: 80px
    padding: 5px
  .chagecolor
    width: 300px
    height: 150px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  .list__footer
    position: absolute
    bottom: 2%
    left: 50%
    transform: translate(-50%, -2%)
    z-index: 10
    display: flex
    align-items: bottom
    justify-content: space-between
    width: 100%
  .timelimit--day
    margin-left: 8px
    height: 20px
    text-decoration: underline
    color: #ca324d
    font-family: 'Miltonian Tattoo', cursive
  .btn
    border: none
    padding: 0 8px
    cursor: pointer
    font-size: 12px
    font-weight: bold
    border: 3px solid #333
    padding: 1px
    color: #333
    &.update
      background: #F9CDAD
      &:hover
        background: none
    &.delete
      background: #FC9D9A
      margin: 0 8px
      &:hover
        background: none

  /* 表示・非表示アニメーション中 */
  .v-enter-active, .v-leave-active
    transition: all 500ms

  /* 表示アニメーション開始時 ・ 非表示アニメーション後 */
  .v-enter, .v-leave-to
    opacity: 0

</style>