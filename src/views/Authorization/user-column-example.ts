import { Alignment } from 'element-plus/es/components/table-v2/src/constants'
import type { TableV2Column } from '@/hooks/web/useTableV2/types/tableV2'

const tableV2ExampleColumns: Array<TableV2Column> = [
  {
    key: 'avatar',
    dataKey: 'avatar',
    title: '',
    width: 100,
    align: Alignment.CENTER,
    sortable: true,
  },
  {
    key: 'name',
    dataKey: 'name',
    title: '姓名',
    width: 120,
  },
  {
    key: 'role',
    dataKey: 'role',
    title: '角色',
    width: 120,
    filterOption: {
      isMulti: false,
      options: ['超级管理员', 'A类业务员', 'B类业务员'],
    },
  },
  {
    key: 'department',
    dataKey: 'department',
    title: '部门',
    width: 120,
    filterOption: {
      isMulti: false,
      options: ['财务部', '技术部', 'HR部'],
    },
  },
  {
    key: 'username',
    dataKey: 'username',
    title: '账户',
    width: 150,
  },
  {
    key: 'email',
    dataKey: 'email',
    title: '邮箱',
    width: 200,
  },
]

export function getExampleColumns() {
  return tableV2ExampleColumns
}
