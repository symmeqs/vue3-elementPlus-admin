import type { TableV2Column } from '@/hooks/web/useTableV2/types/tableV2'

const tableV2ExampleColumns: Array<TableV2Column> = [
  {
    key: 'selection',
    title: '',
    dataKey: 'selection',
    width: 50,
  },
  {
    key: 'id',
    dataKey: 'id',
    title: '',
    width: 60,
    hidden: true,
  },
  {
    key: 'name',
    dataKey: 'name',
    title: '角色名',
    width: 120,
  },
]

export function getExampleColumns() {
  return tableV2ExampleColumns
}
