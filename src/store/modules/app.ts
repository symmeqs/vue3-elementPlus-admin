import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isDark = ref<boolean>(false)
  const setIsDark = (isDarkVal: boolean) => isDark.value = isDarkVal

  const layoutHeaderHeight = ref<String>('55px')

  const layoutBreadCrumbIsCollapse = ref<boolean>(false)
  const setLayoutBreadCrumbIsCollapse = (isCollapse: boolean) => layoutBreadCrumbIsCollapse.value = isCollapse

  return {
    isDark,
    setIsDark,
    layoutHeaderHeight,
    layoutBreadCrumbIsCollapse,
    setLayoutBreadCrumbIsCollapse,
  }
})
