import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BansView from '../views/BansView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bandas',
    name: 'bandas',
    component: BansView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
