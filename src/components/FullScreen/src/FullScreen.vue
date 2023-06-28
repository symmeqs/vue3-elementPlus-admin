<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'

const { toggle, isFullscreen } = useFullscreen()
</script>

<template>
  <div
    :class="isFullscreen ? 'i-zmdi-fullscreen-exit' : 'i-zmdi-fullscreen'"
    class="hover:(bg-blue-500 cursor-pointer) text-lg"
    @click="toggle()"
  />
</template>
