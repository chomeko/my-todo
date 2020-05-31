<template>
  <div class="edit-form">
    <input type="text" id="coment" v-model="UpdateComent">
    <button @click="$emit('submit')">{{buttonText}}</button>
  </div>
</template>


<script>
export default {
  props: {
    coment: {
      type: String,
      required: true
    },
    edit: {
      // 真偽値
      type: Boolean,
      default: false
    }
  },
  computed: {
    UpdateComent: {
      get() {
        return this.coment
      },
      set(value) {
        // update:プロパティネーム, 新しい値
        this.$emit("update:coment", value)
      }
    },
    buttonText() {
      return this.edit ? "編集" : "追加"
    }
  }
}
</script>

<style lang="sass" scoped>
  .edit-form
    text-align: center
  input
    width: 300px
    border: 3px solid #333
    margin: 20px 0
    @media screen and (max-width: 480px)
      margin: 10px 0
  input[type=text]
    &:focus
      background: #F9CDAD
  button
    margin-left: 10px
    border: 3px solid #333
    padding: 5px
    &:hover
      background: #F9CDAD
    @media screen and (max-width: 350px)
      margin-left: 0
</style>

