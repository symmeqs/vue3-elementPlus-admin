<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue'])

const isShowEdit = ref(false)

watch(() => props.modelValue,
  (val: boolean) => isShowEdit.value = val)

watch(() => isShowEdit.value, (val: boolean) => {
  emit('update:modelValue', val)
})
</script>

<template>
  <ElDialog v-model="isShowEdit" :close-on-click-modal="false">
    <template #header>
      编辑
    </template>
    <slot />

    <template #foooter>
      123
    </template>
  </ElDialog>
</template>
