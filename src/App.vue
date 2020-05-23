<template>
  <div id="app">
    <h1>俺のMYとぅーどぅー</h1>
    <Table />
    <Basket />
  </div>
</template>

<style lang="sass" scoped>
  h1
    font-size: 30px
    text-align: center
</style>

<script>

import Table from "./components/Table";
import Basket from "./components/Basket"

export default {
  name: 'App',
  components: {
    Table,
    Basket
  }
}
</script>