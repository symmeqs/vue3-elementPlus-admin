import type { HeaderCellSlotProps } from 'element-plus'
import type { AnyColumn } from 'element-plus/es/components/table-v2/src/common'
import { reactive } from 'vue'
import type { TableV2Column } from './column'
import TableFilterCheckBoxVue from './TableFilterCheckBox.vue'

/**
 * 将业务 Column 转换为 TableV2 Column，并组装 Header
 *
 * @param columns
 * @returns
 */
export function renderColumns(columns: Array<TableV2Column>) {
  const filterState: Map<string, object> = reactive(new Map())
  const tableColumns: AnyColumn[] = columns.map((column: TableV2Column) => {
    const tableColumn: AnyColumn = {
      key: column.dataKey,
      dataKey: column.dataKey,
      title: column.title,
      width: column.width ?? 100,
      align: column.align,
    }

    if (column.filterOption) {
      const filterModel = reactive({ selected: [] })

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
    return tableColumn
  })

  return { tableColumns, filterState }
}
