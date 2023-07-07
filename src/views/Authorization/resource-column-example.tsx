import type { ParentMenu } from './resource'
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
    title: '菜单名',
    width: 100,
  },
  {
    key: 'path',
    dataKey: 'path',
    title: 'Router 路径',
    width: 220,
  },
  {
    key: 'component',
    dataKey: 'component',
    title: '组件名称',
    width: 120,
  },
  {
    key: 'level',
    dataKey: 'level',
    title: '视图层级',
    width: 120,
    filterOption: {
      isMulti: false,
      options: ['主菜单', '子菜单', '子菜单组'],
    },
  },
  {
    key: 'icon',
    dataKey: 'icon',
    title: '图标',
    width: 80,
    cellRenderer: ({ cellData: icon }: { cellData: string }) => (<div class={icon}/>),
  },
  {
    key: 'belong',
    dataKey: 'belong',
    title: '归属',
    width: 80,
    cellRenderer: ({ cellData: belong }: { cellData: ParentMenu }) => <span>{ belong?.name }</span>,
  },
]

export function getExampleColumns() {
  return tableV2ExampleColumns
}
