<template>
  <div id="app">
    <h2>買い物かご</h2>
    <div class="basket">
      <p>{{ count }}個</p>
    </div>
    <p>合計金額{{ price }}</p>
  </div>
</template>

<script>

  export default {
    name: 'Basket',
    computed: {
      price () {
        return this.$store.getters.getTotalPrice
      },
      count () {
        return this.$store.getters.getBasketCount
      }
    },
    watch: {
      count() {
        this.$store.dispatch('doUptotal')
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
