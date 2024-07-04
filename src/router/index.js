import { createRouter, createWebHistory } from 'vue-router'
import HomeV from '../components/Home.vue'
import MenuView from '../components/LeftMenu.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/menu',
    component: MenuView,
  },
  {
    path: '/',
    component: HomeV
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
