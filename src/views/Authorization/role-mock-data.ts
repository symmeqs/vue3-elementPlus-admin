import type { Role } from './role'

const roleData: Array<Role> = [
  {
    id: '0',
    name: '超级管理员',
  },
  {
    id: '1',
    name: 'A类业务员',
  },
  {
    id: '2',
    name: 'A类业务员',
  },
]

export function getRoleData() {
  return roleData
}

const searchOptions = [{
  label: '角色名',
  value: 'name',
}]

export function getSearchOptions() {
  return searchOptions
}
