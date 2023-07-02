<script lang="ts" setup>
import { ElContainer } from 'element-plus'
import { AppView, HeaderToolBar, Sidebar } from './components'

// const prefixCls = getPrefixCls('layout')
</script>

<template>
  <!-- <div :class="`${prefixCls}-layout`" class="flex h-full bg-gray-1">
    <Sidebar />
    <div class="w-full">
      <HeaderToolBar />
      <ElScrollbar class="h-full m-2 bg-inherit">
        <AppView />
      </ElScrollbar>
    </div>
  </div> -->

  <ElContainer class="h-full bg-gray-1">
    <Sidebar />

    <ElContainer class="!block">
      <HeaderToolBar />
      <AppView />
    </ElContainer>
  </ElContainer>
</template>

<style lang="scss" scoped>
// @prefix-cls: ~'@{namespace}-layout';

// /deep/ .el_scrollbar__view {
//   height: 100% !important;
// }
</style>
