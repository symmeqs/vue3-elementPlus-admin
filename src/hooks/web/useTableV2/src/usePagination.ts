import { reactive } from 'vue'

const pageState = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 0,
})

const pageConfig = {
  pageSizes: [10, 50, 100, 200],
  layout: 'sizes, prev, pager, next',
  small: false,
  disablesd: false,
}

function handleSizeChange(size: number) {
  pageState.pageSize = size
}

function handleCurrentChange() {
  // TODO
}

export function usePagination() {
  return {
    pageState,
    pageConfig,
    handleSizeChange,
    handleCurrentChange,
  }
}
