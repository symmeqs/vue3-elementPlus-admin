<script lang="ts" setup>
import type { StyleValue } from 'vue'
import { computed } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { UserInfo } from '@/components/UserInfo'
import { Bell } from '@/components/Bell'

const appStore = useAppStore()
const isCollapse = computed(() => appStore.layoutBreadCrumbIsCollapse)

const layoutHeaderHeight = appStore.layoutHeaderHeight
const logoHeightStyleValue = { height: layoutHeaderHeight } as StyleValue

function toggleIsCollapse() {
  appStore.setLayoutBreadCrumbIsCollapse(!isCollapse.value)
}
</script>

<template>
  <div
    :style="logoHeightStyleValue"
    class="flex justify-between w-full bg-white border-l-solid border-l-gray-100"
  >
    <div class="flex items-center">
      <div class="w-[55px]">
        <div v-if="isCollapse" class="i-ep-expand nav-collapse" @click="toggleIsCollapse" />
        <div v-else class="i-ep-fold nav-collapse" @click="toggleIsCollapse" />
      </div>
      <div class="w-[100px] text-sm text-gray-500">
        首页  /  分析页
      </div>
    </div>
    <div class="flex mr-5 gap-5 items-center">
      <ThemeSwitch />
      <div class="i-ep-full-screen hover:(bg-blue-500 cursor-pointer) border-solid" />
      <Bell />
      <UserInfo />
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav-collapse {
    @apply mx-auto text-xl text-gray-500 hover:bg-blue-500;
}
</style>
