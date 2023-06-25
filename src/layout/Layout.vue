<script lang="ts" setup>
import Sidebar from './components/sidebar/Sidebar.vue'
import HeaderToolBar from './components/HeaderToolBar.vue'
</script>

<template>
  <div class="flex h-full bg-gray-1">
    <Sidebar />
    <div class="w-full">
      <HeaderToolBar />
      <div class="w-full h-full m-2 bg-inherit">
        <RouterView />
      </div>
    </div>
  </div>
</template>
