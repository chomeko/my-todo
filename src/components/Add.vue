<template>
  <div id="app">
    <p class="error">{{ Validation.error }}</p>
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
      coment: '',
      Validation: {
        error: ""
      }
    }
  },
  methods: {
    add(){
      let todo = {
        coment: this.coment
      }
      if(this.coment === ''){
        this.Validation.error = "空白は追加できません"
        return
      }else if(this.coment.length > 40){
        this.Validation.error = "４０文字以下にしてください"
        return
      }
      this.$store.dispatch('doAdd', todo)
      this.coment = ''
      this.Validation.error = ""
    }
  }
}
</script>

<style lang="sass">
  .error
    text-align: center
    margin: 10px 0
    color: #C7243A
</style>