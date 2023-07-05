<script lang="ts" setup>
import { ElButton, ElCard, ElPagination, ElTableV2 } from 'element-plus'
import { ref, watch } from 'vue'
import { getExampleColumns } from './user-column-example'
import { getUserData } from './user-mock-data'
import { TableSearch } from '@/components/TableSearch'
import { useTableV2 } from '@/hooks/web/useTableV2'

const { usePagination, tableV2Columns, filterState } = useTableV2(getExampleColumns())
const { pageState, pageConfig, handleSizeChange, handleCurrentChange } = usePagination()

const searchOptions = [{
  label: '姓名',
  value: 'name',
}, {
  label: '账号',
  value: 'username',
}]

const tableData = ref(getUserData(filterState))

function handleSearch(_searchState: object) {
  // TODO
}

watch(
  () => filterState,
  (_currentFilterState) => {
    tableData.value = getUserData(filterState)
  },
  { deep: true },
)
</script>

<template>
  <ElCard>
    <div class="flex justify-between flex-row-reverse mb-6 w-full">
      <TableSearch :select-options="searchOptions" @handle-search="handleSearch" />
      <div class="flex">
        <ElButton type="primary">
          新增
        </ElButton>
        <ElButton type="danger">
          删除
        </ElButton>
        <ElButton>提交审批</ElButton>
        <ElButton>批量编辑</ElButton>
      </div>
    </div>

    <ElTableV2
      :columns="tableV2Columns"
      :data="tableData"
      :width="700"
      :height="400"
    />

    <ElPagination
      v-model:current-page="pageState.currentPage"
      v-model:page-size="pageState.pageSize"
      :page-sizes="pageConfig.pageSizes"
      :layout="pageConfig.layout"
      :total="pageState.total"
      class="mt-3"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </ElCard>
</template>
