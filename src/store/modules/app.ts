import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const appTitle = ref('Symme')

  const isDark = ref<boolean>(false)
  const setIsDark = (isDarkVal: boolean) => isDark.value = isDarkVal

  return {
    appTitle,
    isDark,
    setIsDark,
  }
})
