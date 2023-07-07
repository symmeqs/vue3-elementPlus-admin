import { type HeaderCellSlotProps } from 'element-plus'
import type { AnyColumn } from 'element-plus/es/components/table-v2/src/common'
import type { Ref } from 'vue'
import { ref } from 'vue'
import type { FilterStateProps, TableV2Column, TableV2Row } from '../types/tableV2'
import TableFilterCheckBoxVue from './TableFilterCheckBox.vue'
import { useSelection } from './useSelection'

/**
 * 将业务 Column 转换为 TableV2 Column，并组装 Header
 *
 * @param columns
 * @returns
 */
export function renderColumns(columns: Array<TableV2Column>, tableData: Ref<TableV2Row[]>) {
  const filterGroupState: Ref<Map<string, FilterStateProps>> = ref(new Map())

  const tableV2Columns: AnyColumn[] = columns.map((column: TableV2Column) => {
    const tableColumn: AnyColumn = {
      key: column.dataKey,
      dataKey: column.dataKey,
      title: column.title,
      width: column.width ?? 100,
      align: column.align,
      hidden: column.hidden,
      headerCellRenderer: column.headerCellRenderer,
      cellRenderer: column.cellRenderer,
    }

    if (column.filterOption) {
      filterGroupState.value.set(column.dataKey, { selected: [] })

      tableColumn.headerCellRenderer = (_props: HeaderCellSlotProps) => {
        return (
          <div class="flex items-center justify-center">
            <span class="mr-2">{column.title}</span>
            <TableFilterCheckBoxVue v-model={filterGroupState.value.get(column.dataKey)!.selected} options={column.filterOption!.options}/>
          </div>
        )
      }
    }

    if (column.dataKey === 'selection')
      useSelection(tableColumn, tableData)

    return tableColumn
  })

  return { tableV2Columns, filterGroupState }
}
