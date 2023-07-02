<script lang="ts" setup>
import { ElMain } from 'element-plus'
import Footer from './Footer.vue'
</script>

<template>
  <ElMain class="!p-3 !p-b-0 h-[calc(100%-var(--layout-header-height))]">
    <section class="min-h-[calc(100%-var(--layout-footer-height)-20px)]">
      <RouterView />
    </section>
    <Footer />
  </ElMain>
</template>
