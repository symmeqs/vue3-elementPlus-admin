export interface FilterOption {
    isMulti: boolean
    options: Array<string>
}

export interface TableV2Column {
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

export interface TableV2Row {
    id: string
    checked?: boolean
}