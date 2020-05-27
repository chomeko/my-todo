<template>
  <div id="app">
    <h2>タスクの編集{{$route.params.id}}</h2>
    <input v-model="getComent.coment">
    <button @click="routePush">戻る</button>
    <p>入力：{{ getComent.coment }}</p>
    <p>stateの値：{{ getComent.coment }}</p>
  </div>
</template>

<script>
export default {
  name: 'edit',
  computed: {
    getComent:{
      get(){
      //const index = this.$route.params.id
      return this.$store.getters.getTodoById(1)
      },
      set(value) {
        this.$store.commit('Update',{id: 1, value})
        //this.$router.push("/");
      }
    }
  },
  methods:{
    routePush(){
      this.$router.push("/")
    }
  }
}
</script>