import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import Login from '@/views/Login/Login.vue'
import Home from '@/views/Home/Home.vue'
import Layout from '@/layout/Layout.vue'
import Error404 from '@/views/ErrorPage/Error404.vue'
import Workspace from '@/views/Dashboard/Workspace.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/home',
    name: 'Root',
    children: [
      {
        path: '/dashboard/home',
        component: Home,
      },
      {
        path: '/dashboard/worksapce',
        component: Workspace,
      },
      {
        path: '/404',
        component: Error404,
      },
    ],
  },
  {
    path: '/login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
