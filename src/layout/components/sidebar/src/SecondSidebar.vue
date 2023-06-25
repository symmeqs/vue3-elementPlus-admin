<script lang="ts" setup>
import { ElMenu, ElMenuItem, ElMenuItemGroup } from 'element-plus'
import { type StyleValue, computed } from 'vue'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
const isCollapse = computed(() => appStore.layoutBreadCrumbIsCollapse)

const layoutHeaderHeight = appStore.layoutHeaderHeight
const logoHeightStyleValue = { height: layoutHeaderHeight } as StyleValue
</script>

<template>
  <div v-show="!isCollapse" class="bg-white h-full w-[200px]">
    <div
      :style="logoHeightStyleValue"
      class="text-center border-b-solid border-b-gray-1 border-r-solid border-r-gray-1"
    >
      <div class="font-bold text-lg pt-3 text-gray-600">
        Symme Admin
      </div>
    </div>

    <ElMenu
      default-active="2"
    >
      <ElMenuItem index="3">
        <span class="i-ant-design-dashboard-filled mr-2" />
        <span>项目空间</span>
      </ElMenuItem>
      <ElMenuItemGroup title="任务空间">
        <ElMenuItem index="3">
          <span class="i-ant-design-dashboard-filled mr-2" />
          <span>任务管理</span>
        </ElMenuItem>
      </ElMenuItemGroup>
    </ElMenu>
  </div>
</template>
