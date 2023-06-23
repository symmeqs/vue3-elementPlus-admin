<script lang="ts" setup>
import Login from './views/Login/Login.vue'
import { useDesign } from './hooks/web/useDesign'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('app')
</script>

<template>
  <Login />
</template>

<style lang="less">
@prefix-cls: ~"@{namespace}-app";

.size {
  width: 100%;
  height: 100%;
}

html,
body {
  padding: 0 !important;
  margin: 0;
  overflow: hidden;
  .size;

  #app {
    .size;
  }
}

.@{prefix-cls}-grey-mode {
  filter: grayscale(100%);
}
</style>
