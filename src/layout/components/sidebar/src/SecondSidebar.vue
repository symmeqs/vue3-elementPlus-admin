<script lang="ts" setup>
import { ElMenu, ElMenuItem } from 'element-plus'
import { type StyleValue, computed, reactive, watch } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { useMenuStore } from '@/layout/store/menu'

const appStore = useAppStore()
const isCollapse = computed(() => appStore.layoutBreadCrumbIsCollapse)

const menuPath = computed(() => useMenuStore().menuPath)

const layoutHeaderHeight = appStore.layoutHeaderHeight
const logoHeightStyleValue = { height: layoutHeaderHeight } as StyleValue

const secondMenu = {
  routePath: '/dashboard/worksapce',
  icon: 'i-ant-design-dashboard-filled',
  label: '工作台',
}

const secondMenu2 = {
  routePath: '/dashboard/home',
  icon: 'i-ant-design-dashboard-filled',
  label: '分析页',
}

const secondMenuList = reactive([
  secondMenu,
])

watch(
  () => useMenuStore().menuPath,
  (meunPath) => {
    secondMenuList.push(secondMenu)
    if (menuPath.value)
      secondMenuList.push(secondMenu2)
  },
)
</script>

<template>
  <div v-show="!isCollapse" class="bg-white h-full w-[200px]">
    <div
      :style="logoHeightStyleValue"
      class="text-center border-b-solid border-b-gray-1"
    >
      <div class="fw500 text-lg pt-3 text-gray-600">
        Symme Admin
      </div>
    </div>

    <ElMenu
      router
      default-active="2"
      class="!bg-transparent !border-r-none"
    >
      <ElMenuItem
        v-for="item in secondMenuList"
        :key="item.routePath"
        :index="item.routePath"
      >
        <span :class="item.icon" class="mr-2" />
        <span>{{ item.label }}</span>
      </ElMenuItem>
      <!-- <ElMenuItem index="/dashboard/worksapce">
        <span class="i-ant-design-dashboard-filled mr-2" />
        <span>工作台</span>
      </ElMenuItem>
      <ElMenuItem index="/dashboard/home">
        <span class="i-ant-design-dashboard-filled mr-2" />
        <span>分析页</span>
      </ElMenuItem> -->
      <!-- <ElMenuItemGroup title="我的收藏">
        <ElMenuItem index="/404">
          <span class="i-ant-design-dashboard-filled mr-2" />
          <span>项目空间</span>
        </ElMenuItem>
      </ElMenuItemGroup> -->
    </ElMenu>
  </div>
</template>
