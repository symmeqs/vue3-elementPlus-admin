<script lang="ts" setup>
import { ElMenu, ElMenuItem } from 'element-plus'
import { computed, ref, watch } from 'vue'
import type { Ref, StyleValue } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/modules/app'
import { useMenuStore } from '@/layout/store/menu'

const menuStrore = useMenuStore()
const menuPath = computed(() => menuStrore.menuPath)
const isCollapse = computed(() => menuStrore.layoutSubMenuIsCollapse)

const appStore = useAppStore()
const layoutHeaderHeight = appStore.layoutHeaderHeight
const logoHeightStyleValue = { height: layoutHeaderHeight } as StyleValue

interface MenuItemType {
  routePath: string
  icon: string
  label: string
}

const subMenuTree: Map<String, Array<MenuItemType>> = new Map([
  [
    'home', [
      {
        routePath: '/home/worksapce',
        icon: 'i-ant-design-dashboard-filled',
        label: '工作台',
      },
      {
        routePath: '/home/analysis',
        icon: 'i-ant-design-dashboard-filled',
        label: '分析页',
      },
    ],
  ],
  [
    'document', [
      {
        routePath: '/document/document',
        icon: 'i-ant-design-dashboard-filled',
        label: 'GitHub',
      },
    ],
  ],
  [
    'settings', [
      {
        routePath: '/settings/icons',
        icon: 'i-ant-design-dashboard-filled',
        label: '图标库',
      },
    ],
  ],
])

const route = useRoute()

const subMenuList: Ref<MenuItemType[]> = ref(subMenuTree.get(menuPath.value) || [])
watch(
  () => menuPath.value,
  (path: String) => {
    subMenuList.value = subMenuTree.get(path) || []
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
      :default-active="route.path"
      class="!bg-transparent !border-r-none"
    >
      <ElMenuItem
        v-for="item in subMenuList"
        :key="item.routePath"
        :index="item.routePath"
      >
        <span :class="item.icon" class="mr-2" />
        <span>{{ item.label }}</span>
      </ElMenuItem>
    </ElMenu>
  </div>
</template>
