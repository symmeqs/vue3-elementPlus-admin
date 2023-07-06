import { type HeaderCellSlotProps } from 'element-plus'
import type { AnyColumn } from 'element-plus/es/components/table-v2/src/common'
import type { Ref } from 'vue'
import { reactive } from 'vue'
import type { TableRow, TableV2Column, TableV2Filter } from '../types/tableV2'
import TableFilterCheckBoxVue from './TableFilterCheckBox.vue'
import { useSelection } from './useSelection'

/**
 * 将业务 Column 转换为 TableV2 Column，并组装 Header
 *
 * @param columns
 * @returns
 */
export function renderColumns(columns: Array<TableV2Column>, tableData: Ref<TableRow[]>) {
  const filterState: Map<string, TableV2Filter> = reactive(new Map())

  const tableV2Columns: AnyColumn[] = columns.map((column: TableV2Column) => {
    const tableColumn: AnyColumn = {
      key: column.dataKey,
      dataKey: column.dataKey,
      title: column.title,
      width: column.width ?? 100,
      align: column.align,
      headerCellRenderer: column.headerCellRenderer,
      cellRenderer: column.cellRenderer,
    }

    if (column.filterOption) {
      const filterModel: TableV2Filter = reactive({ selected: [] })

      tableColumn.headerCellRenderer = (_props: HeaderCellSlotProps) => {
        return (
          <div class="flex items-center justify-center">
            <span class="mr-2">{column.title}</span>
            <TableFilterCheckBoxVue v-model={filterModel.selected} options={column.filterOption!.options}/>
          </div>
        )
      }

      filterState.set(column.dataKey, filterModel)
    }

    if (column.dataKey === 'selection')
      useSelection(tableColumn, tableData)

    return tableColumn
  })

  return { tableV2Columns, filterState }
}
