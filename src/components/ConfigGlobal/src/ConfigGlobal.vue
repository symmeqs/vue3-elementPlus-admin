<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import type { PropType } from 'vue'

const props = defineProps({
  size: {
    type: String as PropType<'default' | 'small' | 'large'>,
    default: 'default',
  },
  maxMessageHint: {
    type: Number,
    default: 2,
  },
})
</script>

<template>
  <ElConfigProvider
    :message="{ max: maxMessageHint }"
    :size="props.size"
  >
    <slot />
  </ElConfigProvider>
</template>
