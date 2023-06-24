<script lang="ts" setup>
import FixedSideBar from './components/FixedSidebar.vue'
import Sidebar from './components/Sidebar.vue'
import HeaderToolBar from './components/HeaderToolBar.vue'
</script>

<template>
  <div class="flex h-full bg-green">
    <FixedSideBar />
    <Sidebar />
    <HeaderToolBar />
  </div>
</template>
