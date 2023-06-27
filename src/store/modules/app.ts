import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isDark = ref<boolean>(false)
  const setIsDark = (isDarkVal: boolean) => isDark.value = isDarkVal

  const layoutHeaderHeight = ref<String>('55px')
  return {
    isDark,
    setIsDark,
    layoutHeaderHeight,
  }
})
