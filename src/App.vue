<template>
  <div id="app">
    <h1>俺のMYとぅーどぅー</h1>
    <Edit />
    <Todolist />
  </div>
</template>

<style lang="sass" scoped>
  h1
    font-size: 32px
    text-align: center
    margin: 40px 0
</style>

<script>
import Todolist from './components/Todolist'
import Edit from './components/Edit'

export default {
  name: 'App',
  components: {
    Edit,
    Todolist
  }
}
</script>