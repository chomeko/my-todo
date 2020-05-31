import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from './components/Add.vue'
import Edit from './components/Edit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: 'my-todo',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Add
    },
    {
      path: '/edit/:id',
      component: Edit
    }
  ]
})

export default router