import type { TableV2Filter } from '@/hooks/web/useTableV2/types/tableV2'

interface User {
  avatar: string
  name: string
  username: string
  email: string
  department: string
  role: string
}

const userData: Array<User> = [
  {
    avatar: 'src/assets/imgs/avatar.jpg',
    name: '赵兴君',
    username: '15521071030',
    email: '1099322935@qq.com',
    department: '技术部',
    role: '超级管理员',
  },
  {
    avatar: 'src/assets/imgs/avatar.jpg',
    name: '赵兴',
    username: '15521071030',
    email: '1099322935@qq.com',
    department: '技术部',
    role: 'A类业务员',
  },
  {
    avatar: 'src/assets/imgs/avatar.jpg',
    name: '兴君',
    username: '15521071030',
    email: '1099322935@qq.com',
    department: '技术部',
    role: 'A类业务员',
  },
  {
    avatar: 'src/assets/imgs/avatar.jpg',
    name: '赵君',
    username: '15521071030',
    email: '1099322935@qq.com',
    department: '财务部',
    role: 'A类业务员',
  },
  {
    avatar: 'src/assets/imgs/avatar.jpg',
    name: '赵赵赵',
    username: '15521071030',
    email: '1099322935@qq.com',
    department: '财务部',
    role: 'B类业务员',
  },
  {
    avatar: 'src/assets/imgs/avatar.jpg',
    name: '兴兴兴',
    username: '15521071030',
    email: '1099322935@qq.com',
    department: '财务部',
    role: 'B类业务员',
  },
  {
    avatar: 'src/assets/imgs/avatar.jpg',
    name: '君君君',
    username: '15521071030',
    email: '1099322935@qq.com',
    department: 'HR部',
    role: '超级管理员',
  },
]

export function getUserData(tableV2FilterMap: Map<string, TableV2Filter>) {
  let hasFilter = false
  for (const tableV2FilterKey of tableV2FilterMap.keys())
    hasFilter ||= tableV2FilterMap.get(tableV2FilterKey)?.selected.length > 0

  if (!hasFilter)
    return userData

  return userData.filter((data: User) => {
    for (const tableV2FilterKey of tableV2FilterMap.keys()) {
      const tableV2FilterSelected: [] = tableV2FilterMap.get(tableV2FilterKey)?.selected

      // @ts-expect-error 索引的类型没有指明为 string
      if (tableV2FilterSelected.length !== 0 && !tableV2FilterMap.get(tableV2FilterKey)?.selected.includes(data[tableV2FilterKey]))
        return false
    }
    return true
  })
}
