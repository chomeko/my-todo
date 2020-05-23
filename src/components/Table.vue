<template>
  <div id="app">
    <div>
      <table>
        <dl>
          <dt>果物</dt>
          <dt>値段</dt>
        </dl>
        <dl>
          <dd>{{ fruit }}</dd>
          <dd>{{ price }}</dd>
        </dl>
      </table>
    </div>
    <button @click="doUpcount">買い物かごに入れる</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

  export default {
    name: 'Table',
    computed: {
      fruit () {
        return this.$store.getters.getFruits
      },
      price () {
        return this.$store.getters.getPrice
      },
    },
    methods: {
      //ヘルパーメソッドmapActions
      ...mapActions([
        'doUpcount'
      ])
    }
  }
</script>

<style lang="sass" scoped>
  table
    max-width: 100%
    margin: auto
    text-align: center
    background: deepskyblue
    border: solid 1px #333
  dl
    display: flex
  dt, dd
    width: 200px
    text-align: left
    margin: 0
    margin-bottom: 10px
    border: solid 1px #333
  button
    border: 1px solid #333
    background: #999
    width: 200px
</style>