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
}

export type TableV2Filter = {
    selected: Array
}