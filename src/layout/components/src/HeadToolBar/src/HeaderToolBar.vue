<script lang="ts" setup>
import { computed } from 'vue'
import { ElHeader } from 'element-plus'
import UserInfo from './UserInfo.vue'
import FullScreen from './FullScreen.vue'
import Bell from './Bell.vue'

import { useMenuStore } from '@/layout/store/menu'
import { ThemeSwitch } from '@/components/ThemeSwitch'

const menuStore = useMenuStore()
const isCollapse = computed(() => menuStore.layoutSubMenuIsCollapse)
function toggleIsCollapse() {
  menuStore.setLayoutSubMenuIsCollapse(!isCollapse.value)
}
</script>

<template>
  <ElHeader
    class="flex justify-between w-full bg-white border-l-solid border-l-gray-100"
  >
    <div class="flex items-center">
      <div class="w-[35px]">
        <div
          :class="isCollapse ? 'i-ep-expand' : 'i-ep-fold'"
          class="text-xl text-gray-500 hover:bg-blue-500"
          @click="toggleIsCollapse"
        />
      </div>
      <div class="w-[100px] text-sm text-gray-500">
        首页  /  分析页
      </div>
    </div>
    <div class="flex mr-5 gap-5 items-center text-gray-600">
      <ThemeSwitch />
      <FullScreen />
      <Bell />
      <UserInfo />
    </div>
  </ElHeader>
</template>
