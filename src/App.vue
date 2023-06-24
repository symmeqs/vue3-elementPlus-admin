<script lang="ts" setup>
import { ref } from 'vue'
import { getPrefixCls } from './hooks/web/useDesign'
import { ConfigGlobal } from './components/ConfigGlobal'

const prefixCls = getPrefixCls('app')

const greyMode = ref(false) // TODO App Store
</script>

<template>
  <ConfigGlobal>
    <router-view :class="greyMode ? `${prefixCls}-grey-mode` : ''" />
  </ConfigGlobal>
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
