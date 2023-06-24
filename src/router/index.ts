import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import Login from '@/views/Login/Login.vue'
import Home from '@/views/Home/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  }]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
