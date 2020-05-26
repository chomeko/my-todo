<template>
  <div id="app">
    <h2>タスクの編集{{$route.params.id}}</h2>
    <form class="add-form" v-on:submit.prevent="edit()">
      <input type="text" ref="coment">
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'edit',
  methods: {
    edit() {
      let todo = {
        id: Number(this.$route.params.id),
        coment: this.$refs.coment
      };
      this.$store.dispatch("doUpdate", todo);
      this.$router.push("/");
    }
  }
}
</script>