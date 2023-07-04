<script lang="ts" setup>
import { ElButton, ElCard, ElPagination } from 'element-plus'
import Table from './Table/src/Table.vue'
import { getExampleColumns } from './Table/src/table-column-example'
import { getUserData } from './user-mock-data'
import { usePagination } from '@/hooks/web/usePagination.ts'
import { TableSearch } from '@/components/TableSearch'

const { pageState, pageConfig, handleSizeChange, handleCurrentChange } = usePagination()

const searchOptions = [{
  label: '姓名',
  value: 'name',
}, {
  label: '账号',
  value: 'username',
}]

function handleSearch(searchState: object) {
  console.log(searchState)
}
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

    <Table :columns="getExampleColumns()" :data="getUserData(true)" />

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
