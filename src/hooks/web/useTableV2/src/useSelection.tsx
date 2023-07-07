import { ElCheckbox } from 'element-plus'
import type { CheckboxValueType, HeaderCellSlotProps } from 'element-plus'
import { type FunctionalComponent, type Ref, unref } from 'vue'
import type { AnyColumn } from 'element-plus/es/components/table-v2/src/common'
import type { TableV2Row } from '../types/tableV2'

interface SelectionCellProps {
  value: boolean
  intermediate?: boolean
  onChange: (value: CheckboxValueType) => void
}

export const SelectionCell: FunctionalComponent<SelectionCellProps> = ({
  value,
  intermediate = false,
  onChange,
}) => {
  return (
      <ElCheckbox
        onChange={onChange}
        modelValue={value}
        indeterminate={intermediate}
      />
  )
}

export function useSelection(tableColumn: AnyColumn, tableData: Ref<TableV2Row[]>) {
  tableColumn.cellRenderer = ({ rowData }: { rowData: any }) => {
    const onChange = (value: CheckboxValueType) => (rowData.checked = value)
    return <SelectionCell value={rowData.checked} onChange={onChange} />
  }

  tableColumn.headerCellRenderer = (_props: HeaderCellSlotProps) => {
    const _tableData = unref(tableData)

    const onChange = (value: boolean) => {
      tableData.value = _tableData.map((row: TableV2Row) => {
        row.checked = value
        return row
      })
    }

    const allSelected = _tableData.every(row => row.checked)

    const containsChecked = _tableData.some(row => row.checked)

    return (
          <SelectionCell
            value={allSelected}
            intermediate={containsChecked && !allSelected}
            onChange={onChange}
          />
    )
  }
}
