export type FilterOption = {
    isMulti: boolean
    options: Array<string>
}

export type TableV2Column = {
    key: string
    dataKey: string
    title: string
    width?: number
    align?: Alignment
    filterOption?: FilterOption
    sortable?: boolean
    selection?: boolean
    cellRenderer?: CellRenderer<T>
    headerCellRenderer? : HeaderCellRenderer<T>
}

interface FilterStateProps {
    selected: Array
  }

export type TableRow = {
    id: string
    checked?: boolean
}