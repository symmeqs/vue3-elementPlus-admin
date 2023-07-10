<script lang="ts" setup>
import { ref, useAttrs, useSlots } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, defautl: '' },
})

function getBindValue() {
  return {
    ...useAttrs(),
    modelValue: props.modelValue,
  }
}

const isFullScreen = ref(false)
</script>

<template>
  <div>
    <ElDialog
      v-bind="getBindValue()"
      :close-on-click-modal="false"
      destroy-on-close
      :fullscreen="isFullScreen"
    >
      <template #header>
        <div class="flex justify-between">
          <div>
            <slot name="title">
              {{ title }}
            </slot>
          </div>
          <div
            class="w-[35px] pt-[3px] mr-6 text-gray-4 hover:text-blue-500 cursor-pointer text-md z-10"
            @click="isFullScreen = !isFullScreen"
          >
            <div :class="isFullScreen ? 'i-zmdi-fullscreen-exit' : 'i-zmdi-fullscreen'" class="m-auto" />
          </div>
        </div>
      </template>

      <el-scrollbar>
        <slot />
      </el-scrollbar>

      <template v-if="useSlots().footer" #footer>
        <slot name="footer" />
      </template>
    </ElDialog>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-dialog__header) {
  @apply border-b-solid border-b-1 border-b-gray-1 mr-0 ;
}
</style>
