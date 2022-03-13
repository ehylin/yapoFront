import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bandas',
    name: 'bandas',
    component: () => import('../views/BansView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
