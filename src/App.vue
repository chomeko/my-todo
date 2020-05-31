<template>
  <div id="app">
    <h1>MY Todo List</h1>
    <router-view />
  </div>
</template>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Miltonian+Tattoo&display=swap')

  h1
    font-family: 'Miltonian Tattoo', cursive
    font-size: 40px
    text-align: center
    margin: 40px 0
    color: #C8C8A9
    text-shadow: 2px 1px #333
    @media screen and (max-width: 480px)
      font-size: 30px
      margin:  20px 0
</style>
