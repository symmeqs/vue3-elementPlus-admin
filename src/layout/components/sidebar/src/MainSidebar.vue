<script lang="ts" setup>
import type { StyleValue } from 'vue'
import { reactive, ref } from 'vue'
import { ElMenu, ElMenuItem } from 'element-plus'
import { useRoute } from 'vue-router'
import { LogoBar } from '@/layout/components/Logo'
import { useAppStore } from '@/store/modules/app'
import { useMenuStore } from '@/layout/store/menu'

const layoutHeaderHeight = useAppStore().layoutHeaderHeight
const logoHeightStyleValue = { height: layoutHeaderHeight } as StyleValue

const mockMenuList = reactive([
  {
    icon: 'i-ant-design-dashboard-filled',
    path: 'home',
    name: '首页',
  },
  {
    icon: 'i-clarity-document-solid',
    path: 'document',
    name: '文档',
  },
  {
    icon: 'i-cib-telegram-plane',
    path: 'guide',
    name: '引导',
  },
  {
    icon: 'i-heroicons-cog-6-tooth-solid',
    path: 'settings',
    name: '设置',
  },
  {
    icon: 'i-cib-nintendo-gamecube',
    path: 'projectmanagement',
    name: '项目管理',
  },
])

const route = useRoute()

// 从路由中获取当前选中的菜单
const currentMenuPath = route.path.match(/^\/.+\//)?.[0].replaceAll(/\//g, '') || ''
const currentMenuItemPath = ref(currentMenuPath)

function renderSubMenu(index: string) {
  currentMenuItemPath.value = index
  const menuStore = useMenuStore()
  menuStore.setMenuPath(index)
  menuStore.setLayoutSubMenuIsCollapse(false) // 点击主菜单后，次菜单展开
}

renderSubMenu(currentMenuItemPath.value)
</script>

<template>
  <div class="w-65px h-full bg-v-darkBule text-gray-1">
    <div :style="logoHeightStyleValue">
      <LogoBar />
    </div>
    <div class="relative h-full">
      <div class="w-full">
        <ElMenu class="!border-r-hidden" background-color="transparent" text-color="#d1d3d9">
          <ElMenuItem
            v-for="item in mockMenuList"
            :key="item.path"
            :index="item.path"
            class="!px-0 !hover:bg-blue"
            :class="{ 'emnu-item-bg': item.path === currentMenuItemPath }"
            @click="renderSubMenu(item.path)"
          >
            <div class="line-height-none !pl-0 mx-auto">
              <div :class="item.icon" class="text-lg mx-auto" />
              <div class="pt-[6px]">
                <span class="text-1">{{ item.name }}</span>
              </div>
            </div>
          </ElMenuItem>
        </ElMenu>
      </div>

      <div class="absolute bottom-20 w-full">
        <LogoBar />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.emnu-item-bg {
    @apply bg-blue-500 text-white
}
</style>
