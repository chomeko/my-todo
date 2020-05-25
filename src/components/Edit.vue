<template>
  <div id="app">
    <h2>タスクの追加</h2>
    <!-- .preventで消えないようにする -->
    <!-- 何かしらのアラートを追加する予定 -->
    <form class="add-form" v-on:submit.prevent="doAdd">
      <input type="text" ref="coment">
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  methods: {
    doAdd(){
      //ref属性を変数に入れる
      var coment = this.$refs.coment
      //空入力ならそのまま返す
      if(coment.value === '' ){
        return
      }
      //actionにコメントを送る
      this.$store.dispatch('doAdd', {coment: coment})
      //最後に空にする
      coment.value = ''
    }
  }
}
</script>

<style lang="sass" scoped>
  #app
    text-align: center
  h2
    text-align: center
  input
    width: 300px
    margin: 20px 0
  button
    margin-left: 10px
</style>