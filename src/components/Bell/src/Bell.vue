<script lang="ts" setup>
import { ElBadge, ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
import { ref } from 'vue'

const isDot = ref(true)

function toDocument() {
  window.open('https://github.com/symmeqs/vue3-elementPlus-admin')
}
</script>

<template>
  <ElDropdown trigger="click" class="hover:cursor-pointer">
    <ElBadge :is-dot="isDot">
      <div class="i-ep-bell text-lg hover:(bg-blue-500 cursor-pointer) border-solid" />
    </ElBadge>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem>
          <div @click="toDocument">
            个人资料
          </div>
        </ElDropdownItem>
        <ElDropdownItem divided>
          <div>
            关于
          </div>
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>
