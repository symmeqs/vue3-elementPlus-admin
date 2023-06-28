<script lang="ts" setup>
import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'

function toDocument() {
  window.open('https://github.com/symmeqs/vue3-elementPlus-admin')
}

function loginOut() {
  // TODO
}
</script>

<template>
  <ElDropdown trigger="click" class="hover:cursor-pointer">
    <div class="flex items-center">
      <img
        src="@/assets/imgs/avatar.jpg"
        alt=""
        class="w-[27px] rounded-[50%]"
      >
      <span class="lt-lg:hidden text-14px pl-[5px] text-[inherit]">Symme</span>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem>
          <div @click="toDocument">
            个人资料
          </div>
        </ElDropdownItem>
        <ElDropdownItem divided>
          <div @click="loginOut">
            关于
          </div>
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>
