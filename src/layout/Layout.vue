<script lang="ts" setup>
import { ElScrollbar } from 'element-plus'
import { Sidebar } from './components/Sidebar'
import { HeaderToolBar } from './components/HeaderToolBar'
</script>

<template>
  <div class="flex h-full bg-gray-1">
    <Sidebar />
    <div class="w-full">
      <HeaderToolBar />
      <ElScrollbar class="w-full h-full m-2 bg-inherit bg-white">
        <RouterView />
      </ElScrollbar>
    </div>
  </div>
</template>
