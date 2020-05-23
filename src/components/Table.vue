<template>
  <div id="app">
    <!-- <div v-for="item in this.$store.getters.getFruits" :key="item.id"> -->
    <table>
      <dl>
        <dt>果物</dt>
        <dt>値段</dt>
      </dl>
      <dl>
        <dd>{{ getName }}</dd>
        <dd>{{ getPrice }}</dd>
      </dl>
    </table>
    <button @click="doUpcount">買い物かごに入れる</button>
  </div>
</template>

<script>
// mapActions mapGetters
import { mapGetters } from 'vuex'

  export default {
    name: 'Table',
    computed: {
      //fruits () {
      //  return this.$store.getters.getFruits
      //}
      //ヘルパーメソッドmapGetters
      ...mapGetters([
      'getName',
      'getPrice',
      'getCount'
      ]),
    },
    methods: {
      //doUpdate(){
      //  this.$store.dispatch('doUpdate')
      //},
      doUpcount(){
        this.$store.dispatch('doUpcount')
      }
      //ヘルパーメソッドmapActions
      //...mapActions([
      //  'doUpdate',
      //  'doUpcount'
      //])
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