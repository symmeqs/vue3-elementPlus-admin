<script lang="ts" setup>
import { ElMenu, ElMenuItem, ElMenuItemGroup } from 'element-plus'
import { ref } from 'vue'

const isCollapse = ref(true)
function handleOpen() {
//   console.log('12')
}

function handleClose() {
//   console.log('12')
}
</script>

<template>
  <div v-show="false" class="bg-white h-full w-[180px]">
    <div class="h-55px text-center border-b-solid border-b-gray-1">
      <div class="font-bold text-lg pt-3">
        Symme Admin
      </div>
    </div>

    <ElMenu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <ElMenuItem index="3">
        <span class="i-ant-design-dashboard-filled mr-2" />
        <span>项目空间</span>
      </ElMenuItem>
      <ElMenuItemGroup title="任务空间">
        <ElMenuItem index="3">
          <span class="i-ant-design-dashboard-filled mr-2" />
          <span>任务管理</span>
        </ElMenuItem>
      </ElMenuItemGroup>
    </ElMenu>
  </div>
</template>
