import { type Ref, ref } from 'vue'
import { usePagination } from './src/usePagination'
import { renderColumns } from './src/useTableV2Render'
import type { TableRow, TableV2Column } from './types/tableV2'

export function useTableV2(columns: Array<TableV2Column>) {
  const tableData: Ref<TableRow[]> = ref([])
  const { tableV2Columns, filterGroupState } = renderColumns(columns, tableData)
  return {
    usePagination,
    tableV2Columns,
    filterGroupState,
    tableData,
  }
}
