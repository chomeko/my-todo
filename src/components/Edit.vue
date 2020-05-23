<template>
  <div id="app">
    <h2>タスクの追加</h2>
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
      var coment = this.$refs.coment
      if(coment.value === '' ){
        return
      }
      this.$store.dispatch('doAdd', {coment: coment})
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
</style>