import Vue from 'vue'
import Router from 'vue-router'
import Table from './components/Table.vue'

Vue.use(Router)

const router = new Vue({
  base: 'my-toto',
  mode: history,
  routers: [
    {
      path: '/',
      component: Table
    }
  ]
})

export default router