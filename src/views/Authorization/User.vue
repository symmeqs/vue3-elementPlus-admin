<script lang="ts" setup>
import { watch } from 'vue'
import { getExampleColumns } from './user-column-example'
import { getUserData } from './user-mock-data'
import { TableSearch } from '@/components/TableSearch'
import { useTableV2 } from '@/hooks/web/useTableV2'

const { usePagination, tableV2Columns, filterState, tableData } = useTableV2(getExampleColumns())
const { pageState, pageConfig, handleSizeChange, handleCurrentChange } = usePagination()

const searchOptions = [{
  label: '姓名',
  value: 'name',
}, {
  label: '账号',
  value: 'username',
}]

tableData.value = getUserData(filterState)

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

function test() {
  // console.log(tableData.value)
}
</script>

<template>
  <el-card>
    <button @click="test">
      测试
    </button>
    <div class="flex justify-between flex-row-reverse mb-6 w-full">
      <TableSearch :select-options="searchOptions" @handle-search="handleSearch" />
      <div class="flex">
        <el-button type="primary">
          新增
        </el-button>
        <el-button type="danger">
          删除
        </el-button>
        <el-button>提交审批</el-button>
        <el-button>批量编辑</el-button>
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
    <!-- <ElTableV2
      :columns="tableV2Columns"
      :data="tableData"
      :width="1200"
      :height="400"
    /> -->

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
