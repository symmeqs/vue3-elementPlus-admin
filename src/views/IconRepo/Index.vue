<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { useClipboard } from '@vueuse/core'
import { iconList } from './iconRepo'

const { copy } = useClipboard()

function copyIcon(icon: string) {
  copy(icon)
  ElMessage.success(`Copyed!${icon}`)
}
</script>

<template>
  <div class="bg-white h-full p-3 rounded-md">
    <div>
      <div
        class="w-[100%] grid grid-cols-3 lg-md:grid-cols-12 overflow-hidden
              border-t-solid border-l-solid border-1 border-gray-300 rounded-md text-gray-500"
      >
        <div
          v-for="item in iconList" :key="item.icon"
          class="h-120px flex items-center hover:(bg-gray-1 cursor-pointer)
                border-r-solid border-b-solid border-1 border-gray-300"
          @click="copyIcon(item.icon)"
        >
          <div class="mx-auto overflow-hidden">
            <div :class="item.icon" class="w-26px h-26px mx-auto" />
            <div class="text-sm line-height-12 w-[100%] whitespace-nowrap overflow-hidden text-ellipsis">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
