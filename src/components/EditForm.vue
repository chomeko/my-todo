<template>
  <div class="edit-form">
    <label for="coment">入力</label>
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
  input
    width: 300px
    margin: 20px 0
  button
    margin-left: 10px
    border: 1px solid #000
    border-radius: 5px
    padding: 5px
</style>

