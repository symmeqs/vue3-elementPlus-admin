import { usePagination } from './src/usePagination'
import { renderColumns } from './src/useTableV2Render'
import type { TableV2Column } from './types/tableV2'

export function useTableV2(columns: Array<TableV2Column>) {
  const { tableV2Columns, filterState } = renderColumns(columns)
  return {
    usePagination,
    tableV2Columns,
    filterState,
  }
}
