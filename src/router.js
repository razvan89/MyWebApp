import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Todos from './views/Todos.vue'
import AddTodo from './views/AddTodo.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos
    },
    {
      path: '/add',
      name: 'addtodo',
      component: AddTodo
    }
  ]
})
