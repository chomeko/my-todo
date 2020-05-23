<template>
  <div id="app">
    <h2>買い物かご</h2>
    <div class="basket">
      <p>りんご{{ count }}個</p>
    </div>
    <p>合計金額{{ price }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Basket',
    computed: {
      price () {
        //return this.$store.dispatch('doUpdate')
        return this.$store.getters.getPrice
      },
      count () {
        return this.$store.getters.getBasket
      }
    }
  }
</script>

<style lang="sass" scoped>
  h2
    font-size: 24px
    text-align: center
  .basket
    margin: auto
    width: 200px
    height: 200px
    border: 1px solid #333
</style>
