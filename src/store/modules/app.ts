import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isDark = ref<boolean>(false)
  const setIsDark = (isDarkVal: boolean) => isDark.value = isDarkVal

  return { isDark, setIsDark }
})
