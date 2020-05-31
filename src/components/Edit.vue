<template>
  <div id="app">
    <!-- EditFormからupdate:プロパティネームを受け取ってローカルデータを更新できる -->
    <p class="error">{{ Validation.error }}</p>
    <edit-form :coment.sync="coment" @submit="edit" edit/>
    <h2>内容を編集する</h2>
    <dl>
      <dt class="coment">{{ coment }}</dt>
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
      coment: this.$store.getters.getTodoById(Number(this.$route.params.id)).coment,
      Validation: {
        error: ""
      }
    }
  },
  methods:{
    edit() {
      let todo = {
        id: Number(this.$route.params.id),
        coment: this.coment,
      }
      if(this.coment === ''){
        this.Validation.error = "空白は追加できません"
        return
      }else if(this.coment.length > 40){
        this.Validation.error = "４０文字以下にしてください"
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
  h2
    text-align: center
    margin-bottom: 20px
  dl
    width: 330px
    height: 150px
    margin-top: 10px
    border: 3px solid #333
    margin: auto
    background: #83AF9B
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 20px
    .coment
      display: flex
      align-items: center
      justify-content: center
      font-weight: bold
      line-height: 30px
      height: 80px
      padding: 5px
</style>