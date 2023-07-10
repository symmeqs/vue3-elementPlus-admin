<script lang="ts" setup>
import { ElContainer } from 'element-plus'
import { AppView, HeaderToolBar, Sidebar } from './components'
</script>

<template>
  <ElContainer class="h-full bg-gray-1">
    <Sidebar />

    <ElContainer class="!block">
      <HeaderToolBar />
      <AppView />
    </ElContainer>
  </ElContainer>
</template>
