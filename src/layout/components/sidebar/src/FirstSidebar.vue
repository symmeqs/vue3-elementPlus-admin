<script lang="ts" setup>
import type { StyleValue } from 'vue'
import { reactive } from 'vue'
import { ElMenu, ElMenuItem } from 'element-plus'
import LogoBar from './LogoBar.vue'
import { useMenuStore } from '@/layout/store/menu'
import { useAppStore } from '@/store/modules/app'

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
    path: 'setting',
    name: '设置',
  },
  {
    icon: 'i-cib-nintendo-gamecube',
    path: 'projectmanagement',
    name: '项目管理',
  },
])

function renderSecondMenu(index: string) {
  useMenuStore().setMenuPath(index)
}
</script>

<template>
  <div class="w-65px h-full bg-v-darkBule text-gray-1">
    <div :style="logoHeightStyleValue">
      <LogoBar />
    </div>
    <div class="relative h-full">
      <div class="w-full">
        <ElMenu class="!bg-transparent !border-r-hidden">
          <ElMenuItem
            v-for="item in mockMenuList"
            :key="item.path"
            :index="item.path"
            class="!px-0 !hover:bg-blue"
            @click="renderSecondMenu(item.path)"
          >
            <div class="line-height-none !pl-0 mx-auto">
              <div :class="item.icon" class="text-lg mx-auto text-white" />
              <div class="text-gray-3 pt-[6px]">
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
