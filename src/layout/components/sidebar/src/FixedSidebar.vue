<script lang="ts" setup>
import type { StyleValue } from 'vue'
import { reactive } from 'vue'
import LogoBar from './LogoBar.vue'
import { useAppStore } from '@/store/modules/app'

const layoutHeaderHeight = useAppStore().layoutHeaderHeight
const logoHeightStyleValue = { height: layoutHeaderHeight } as StyleValue

const mockMenuList = reactive([
  {
    icon: 'i-ant-design-dashboard-filled',
    name: '首页',
  },
  {
    icon: 'i-clarity-document-solid',
    name: '文档',
  },
  {
    icon: 'i-cib-telegram-plane',
    name: '引导',
  },
  {
    icon: 'i-heroicons-cog-6-tooth-solid',
    name: '设置',
  },
  {
    icon: 'i-cib-nintendo-gamecube',
    name: '项目管理',
  },
])
</script>

<template>
  <div class="w-65px h-full bg-v-darkBule text-gray-1">
    <div :style="logoHeightStyleValue">
      <LogoBar />
    </div>
    <div class="relative h-full">
      <div class="w-full">
        <div
          v-for="item in mockMenuList" :key="item.name"
          class="h-50px pt-2 hover:bg-blue-4"
        >
          <div :class="item.icon" class="text-xl mx-auto" />
          <div class="text-center text-gray-4">
            <span class="text-1">{{ item.name }}</span>
          </div>
        </div>
      </div>

      <div class="absolute bottom-20 w-full">
        <LogoBar />
      </div>
    </div>
  </div>
</template>
