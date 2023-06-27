import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const menuPath = ref('home')
  const setMenuPath = (path: string) => menuPath.value = path

  return {
    menuPath, setMenuPath,
  }
})
