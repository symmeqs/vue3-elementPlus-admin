<script lang="ts" setup>
import FixedSideBar from './components/FixedSidebar.vue'
import Sidebar from './components/Sidebar.vue'
import HeaderToolBar from './components/HeaderToolBar.vue'
</script>

<template>
  <div class="flex h-full bg-gray-1">
    <div class="flex">
      <FixedSideBar />
      <Sidebar />
    </div>
    <div class="w-full">
      <HeaderToolBar />
      <div class="w-full h-full m-2 bg-inherit">
        <RouterView />
      </div>
    </div>
  </div>
</template>
