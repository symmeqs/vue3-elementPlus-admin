<script lang="ts" setup>
import { ElButton, ElInput, ElOption, ElSelect } from 'element-plus'
import { reactive } from 'vue'

interface SelectOption {
  label: string
  value: string
}

const props = defineProps({
  selectOptions: Array<SelectOption>,
  defaultOption: String,
})

const emit = defineEmits(['handleSearch'])

let defaultSelectOption = props.defaultOption
if (!defaultSelectOption && props.selectOptions && props.selectOptions.length > 0)
  defaultSelectOption = props.selectOptions[0].value

const searchState = reactive({
  value: '',
  select: defaultSelectOption,
})

function handleSearch() {
  emit('handleSearch', searchState)
}
</script>

<template>
  <div>
    <ElInput
      v-model="searchState.value"
      placeholder="请输入"
      clearable
      class="!w-[300px]"
    >
      <template #prepend>
        <ElSelect v-model="searchState.select" class="w-[100px]">
          <ElOption v-for="item in props.selectOptions" :key="item.value" :label="item.label" :value="item.value" />
        </ElSelect>
      </template>
      <template #append>
        <ElButton @click="handleSearch">
          <template #icon>
            <div class="i-emojione-monotone-sun" />
          </template>
        </ElButton>
      </template>
    </ElInput>
  </div>
</template>
