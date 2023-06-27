import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const menuPath = ref('home')
  const setMenuPath = (path: string) => menuPath.value = path

  const layoutSubMenuIsCollapse = ref<boolean>(false)
  const setLayoutSubMenuIsCollapse = (isCollapse: boolean) => layoutSubMenuIsCollapse.value = isCollapse
  return {
    menuPath,
    setMenuPath,
    layoutSubMenuIsCollapse,
    setLayoutSubMenuIsCollapse,
  }
})
