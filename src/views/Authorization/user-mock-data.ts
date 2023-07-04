const userData = [
  {
    avatar: '1234',
    name: '赵兴君',
    username: '15521071030',
    email: '1099322935@qq.com',
    role: '管理员',
  },
  {
    avatar: '1234',
    name: '赵兴',
    username: '15521071030',
    email: '1099322935@qq.com',
    role: '普通用户',
  },
  {
    avatar: '1234',
    name: '兴君',
    username: '15521071030',
    email: '1099322935@qq.com',
    role: '超级管理员',
  },
  {
    avatar: '1234',
    name: '赵君',
    username: '15521071030',
    email: '1099322935@qq.com',
    role: '业务员',
  },
]

const tableDataBackup = [
  {
    avatar: '1234',
    name: '赵赵赵',
    username: '15521071030',
    email: '1099322935@qq.com',
    role: '管理员',
  },
  {
    avatar: '1234',
    name: '兴兴兴',
    username: '15521071030',
    email: '1099322935@qq.com',
    role: '普通用户',
  },
  {
    avatar: '1234',
    name: '君君君',
    username: '15521071030',
    email: '1099322935@qq.com',
    role: '超级管理员',
  },
]

export function getUserData(isBackup: boolean) {
  if (isBackup)
    return tableDataBackup

  return userData
}
