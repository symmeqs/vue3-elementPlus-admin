<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/store/modules/app.ts'

const appStore = useAppStore()

const title = ref(appStore.appTitle)
</script>

<template>
  <div class="text-center leading-[60px] h-[var(--layout-footer-height)]">
    Copyright ©2021-present {{ title }}
  </div>
</template>
