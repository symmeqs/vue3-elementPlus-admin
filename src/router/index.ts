import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import Login from '@/views/Login/Login.vue'
import Home from '@/views/Home/Home.vue'
import Layout from '@/layout/Layout.vue'
import Error404 from '@/views/ErrorPage/Error404.vue'
import Workspace from '@/views/Dashboard/Workspace.vue'
import IconRepo from '@/views/IconRepo/Index.vue'
import User from '@/views/Authorization/User.vue'
import Role from '@/views/Authorization/Role.vue'
import Resource from '@/views/Authorization/Resource.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home/worksapce',
    name: 'Root',
    children: [
      {
        path: '/home/analysis',
        component: Home,
      },
      {
        path: '/home/worksapce',
        component: Workspace,
      },
      {
        path: '/settings/icons',
        component: IconRepo,
      },
      {
        path: '/404',
        component: Error404,
      },
      {
        path: '/authorization/user',
        component: User,
      },
      {
        path: '/authorization/role',
        component: Role,
      },
      {
        path: '/authorization/resource',
        component: Resource,
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
