<template>
  <div id="app">
    <h2>作業を追加する</h2>
    <!-- .preventで消えないようにする -->
    <!-- 何かしらのアラートを追加する予定 -->
    <EditForm :coment.sync="coment" @submit="add"/>
    <Todolist />
  </div>
</template>

<script>
import EditForm from './EditForm'
import Todolist from './Todolist'

export default {
  name: 'Edit',
  components: {
    EditForm,
    Todolist
  },
  data(){
    return{
      coment: ''
    }
  },
  methods: {
    add(){
      let todo = {
        coment: this.coment
      }
      if(this.coment === ''){
        return
      }
      this.$store.dispatch('doAdd', todo)
      this.coment = ''
    }
  }
}
</script>

<style lang="sass" scoped>
  #app
    text-align: center
  h2
    text-align: center
</style>