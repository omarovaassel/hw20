import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Auth from '../components/Auth.vue'
import Reg from '../components/Reg.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
