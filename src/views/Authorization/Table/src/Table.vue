<script lang="tsx" setup>
import { ElTableV2 } from 'element-plus'
import { ref, watch } from 'vue'
import type { TableV2Column } from './column'
import { renderColumns } from './useTableV2Rander'

const props = defineProps({
  columns: Array<TableV2Column>,
  data: Array<any>,
})

const { tableColumns, filterState } = renderColumns(props.columns!)

watch(
  () => filterState,
  (value) => {
    console.log(value)
  },
  {
    deep: true,
  },
)

const tableData = ref(props.data as any[])

function test() {
  console.log(filterState)
}
</script>

<template>
  <button @click="test">
    测试
  </button>
  <ElTableV2
    fixed
    :columns="tableColumns"
    :data="tableData"
    :width="700"
    :height="400"
  />
</template>
