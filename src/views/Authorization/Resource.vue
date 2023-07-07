<script lang="ts" setup>
import { getExampleColumns } from './resource-column-example'
import { getResourceData, getSearchOptions } from './resource-mock-data'
import { TableSearch } from '@/components/TableSearch'
import { useTableV2 } from '@/hooks/web/useTableV2'

const { usePagination, tableV2Columns, tableData } = useTableV2(getExampleColumns())
const { pageState, pageConfig, handleSizeChange, handleCurrentChange } = usePagination()

tableData.value = getResourceData()

function handleSearch(_searchState: object) {
  // TODO
}

function test() {
  // console.log(tableData.value)
}
</script>

<template>
  <el-card>
    <div class="flex justify-between flex-row-reverse mb-6 w-full">
      <TableSearch :select-options="getSearchOptions()" @handle-search="handleSearch" />
      <div class="flex">
        <el-button type="primary" @click="test">
          新增
        </el-button>
        <el-button type="danger">
          删除
        </el-button>
      </div>
    </div>

    <div class="h-[700px]">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            :columns="tableV2Columns"
            :data="tableData"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
    <el-pagination
      v-model:current-page="pageState.currentPage"
      v-model:page-size="pageState.pageSize"
      :page-sizes="pageConfig.pageSizes"
      :layout="pageConfig.layout"
      :total="pageState.total"
      class="mt-3"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>
