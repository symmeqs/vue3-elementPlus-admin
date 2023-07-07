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
    hidden?: boolean
    selection?: boolean
    cellRenderer?: CellRenderer<T>
    headerCellRenderer? : HeaderCellRenderer<T>
}

interface FilterStateProps {
    selected: Array
  }

export type TableV2Row = {
    id: string
    checked?: boolean
}