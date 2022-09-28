import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/Messages',
    name: 'Messages',
    component: () => import('../views/MessagesView.vue')
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: () => import('../views/SettingsView.vue')
  },
  {
    path: '/Help',
    name: 'Help',
    component: () => import('../views/HelpView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
