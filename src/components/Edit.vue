<template>
  <div id="app">
    <h2>タスク{{$route.params.id}}の編集</h2>
    <!-- EditFormからupdate:プロパティネームを受け取ってローカルデータを更新できる -->
    <edit-form :coment.sync="coment" @submit="edit" edit/>
    <dl>
      <dt>編集内容</dt>
      <dd>{{ coment }}</dd>
    </dl>
  </div>
</template>

<script>
import EditForm from "./EditForm"

export default {
  components: {
    EditForm,
  },
  data(){
    return {
      // ローカルデータ
      coment: this.$store.getters.getTodoById(Number(this.$route.params.id)).coment
    }
  },
  methods:{
    edit() {
      let todo = {
        id: Number(this.$route.params.id),
        coment: this.coment,
      }
      if (this.coment === ''){
        return
      }
      this.$store.dispatch("doUpdate", todo)
      this.$router.push("/")
    },
    created() {
      const todo = this.$store.getters.getTodoById(Number(this.$route.params.id))
      if (todo === undefined) {
        return
      }
      this.coment = todo.coment
    }
  }
}
</script>

<style lang="sass" scoped>
  dl
    margin-top: 10px
    dt
      text-align: center
      width: 100px
      border: 2px solid #333
      background: yellow
      color: #333
    dd
      margin-top: 10px
      line-height: 40px
      width: 350px
      border-bottom: 2px solid #000000
</style>