import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import { adminRoutes } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/dashboard/admin',
    name: 'Dashboard',
    component: () => import('../views/dashboard/admin/Layout'),
    children: adminRoutes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
