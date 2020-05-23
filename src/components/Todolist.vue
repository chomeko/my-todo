<template>
  <div id="app">
    <h2>することリスト</h2>
    <table>
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="coment">すること</th>
          <th class="state">状態</th>
          <th class="button">-</th>
        </tr>
      </thead>
      <tbody v-for="todo in this.$store.getters.getTodolist" :key="todo.id">
        <tr>
          <th class="id">{{ todo.id }}</th>
          <td class="coment">{{ todo.coment }}</td>
          <td class="state">
            <button>未</button>
          </td>
          <td>
            <button>削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Todolist'
}
</script>

<style lang="sass" scoped>
  #app
    max-width: 640px
    margin: 0 auto
  h2
    text-align: center
  table
    width: 100%
    border-collapse: collapse
  thead th
    border-bottom: 2px solid #0c19ce
    color: #0c19ce
  th
    padding: 0 8px
    line-height: 40px
  thead th.id
    width: 50px
  thead th.state
    width: 100px
  thead th.button
    width: 60px

  tbody
    text-align: center
  tbody tr td,
  tbody tr th
    border-bottom: 1px solid #ccc
    transition: all 0.4s
  tbody tr:hover td,
  tbody tr:hover th
    background: #f4fbff

  button
    border: none
    border-radius: 20px
    line-height: 24px
    padding: 0 8px
    background: #0c19ce
    color: #fff
    cursor: pointer

</style>