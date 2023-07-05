<script lang="ts" setup>
import { ElButton, ElCheckbox, ElCheckboxGroup, ElPopover } from 'element-plus'
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: Array<string>,
  options: Array<string>,
})

const emit = defineEmits(['update:modelValue'])

const popoverRef = ref()
const selected = ref(props.modelValue)
const hasFilter = computed(() => selected!.value!.length > 0)

function onFilter() {
  popoverRef.value.hide()
  emit('update:modelValue', selected.value)
}

function onReset() {
  selected.value = []
  onFilter()
}
</script>

<template>
  <ElPopover ref="popoverRef" trigger="click" width="200px">
    <template #default>
      <div>
        <div class="py-3 px-2 bg-gray-100 my-1 rounded-md overflow-hidden">
          <ElCheckboxGroup v-model="selected">
            <ElCheckbox v-for="item in props.options" :key="item" :label="item" />
          </ElCheckboxGroup>
        </div>
        <div class="flex justify-between">
          <ElButton @click="onFilter">
            查询
          </ElButton>
          <ElButton @click="onReset">
            重置
          </ElButton>
        </div>
      </div>
    </template>

    <template #reference>
      <div class="hover:bg-gray-200 h-20px w-20px rounded-md" :class="hasFilter ? 'bg-blue-400 text-gray-100' : ''">
        <div class="i-tabler-filter-minus cursor-pointer text-[17px] mx-auto mt-[2px]" />
      </div>
    </template>
  </ElPopover>
</template>
