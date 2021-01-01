import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home.vue'
// import Details from '../views/details/details.vue'
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/details',
    name: 'details',
    component: ()=>import('../views/details/details.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
