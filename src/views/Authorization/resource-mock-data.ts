import { MenuLevel, type Resource } from './resource.d'

const resourceData: Array<Resource> = [
  {
    id: '0',
    name: '首页',
    path: 'home',
    component: 'Layout',
    level: MenuLevel.MainMenu,
    icon: 'i-zmdi-fullscreen',
  },
  {
    id: '1',
    name: '用户权限',
    path: 'authorization',
    component: 'Layout',
    level: MenuLevel.MainMenu,
    icon: 'i-zmdi-fullscreen',
  },
  {
    id: '2',
    name: '设置',
    path: 'setting',
    component: 'Layout',
    level: MenuLevel.MainMenu,
    icon: 'i-zmdi-fullscreen',
  },
  {
    id: '11',
    name: '用户管理',
    path: '/authorization/user',
    component: 'User',
    level: MenuLevel.SubMenu,
    icon: 'i-zmdi-fullscreen',
    belong: {
      id: '1',
      name: '用户权限',
    },
  },
  {
    id: '12',
    name: '角色管理',
    path: '/authorization/role',
    component: 'Role',
    level: MenuLevel.SubMenu,
    icon: 'i-zmdi-fullscreen',
    belong: {
      id: '1',
      name: '用户权限',
    },
  },
  {
    id: '13',
    name: '资源管理',
    path: '/authorization/resource',
    component: 'Resource',
    level: MenuLevel.SubMenu,
    icon: 'i-zmdi-fullscreen',
    belong: {
      id: '1',
      name: '用户权限',
    },
  },
]

export function getResourceData() {
  return resourceData
}

const searchOptions = [{
  label: '资源名',
  value: 'name',
}]

export function getSearchOptions() {
  return searchOptions
}
