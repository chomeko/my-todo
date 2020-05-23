<template>
  <div id="app">
    <h1>俺のMYとぅーどぅー</h1>
    <Table />
    <Basket />
    <div class="class">ここからtodo</div>
    <Edit />
    <Todolist />
  </div>
</template>

<style lang="sass" scoped>
  h1
    font-size: 30px
    text-align: center
</style>

<script>

import Table from "./components/Table"
import Basket from "./components/Basket"
import Todolist from './components/Todolist'
import Edit from './components/Edit'

export default {
  name: 'App',
  components: {
    Table,
    Basket,
    Edit,
    Todolist
  }
}
</script>