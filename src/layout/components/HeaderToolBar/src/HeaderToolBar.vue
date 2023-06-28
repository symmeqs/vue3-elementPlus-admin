<script lang="ts" setup>
import type { StyleValue } from 'vue'
import { computed } from 'vue'
import { useAppStore } from '@/store/modules/app'

import { useMenuStore } from '@/layout/store/menu'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { UserInfo } from '@/components/UserInfo'
import { Bell } from '@/components/Bell'
import { FullScreen } from '@/components/FullScreen'

const layoutHeaderHeight = useAppStore().layoutHeaderHeight
const logoHeightStyleValue = { height: layoutHeaderHeight } as StyleValue

const menuStore = useMenuStore()
const isCollapse = computed(() => menuStore.layoutSubMenuIsCollapse)
function toggleIsCollapse() {
  menuStore.setLayoutSubMenuIsCollapse(!isCollapse.value)
}
</script>

<template>
  <div
    :style="logoHeightStyleValue"
    class="flex justify-between w-full bg-white border-l-solid border-l-gray-100"
  >
    <div class="flex items-center">
      <div class="w-[55px]">
        <div
          :class="isCollapse ? 'i-ep-expand' : 'i-ep-fold'"
          class="mx-auto text-xl text-gray-500 hover:bg-blue-500"
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
  </div>
</template>
