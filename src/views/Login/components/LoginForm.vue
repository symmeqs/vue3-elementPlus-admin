<script lang="ts" setup>
import { reactive, ref } from 'vue'
import {
  ElButton,
  ElCheckbox,
  ElDivider,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
} from 'element-plus'

const loginForm = reactive({
  username: 'admin',
  password: '123456',
})

const remember = ref(false)
</script>

<template>
  <ElForm
    :model="loginForm"
    size="large"
    label-position="top"
    class="w-[90%] bg-white"
  >
    <ElFormItem>
      <h2 class="text-2xl font-bold text-center w-[100%]">
        登录
      </h2>
    </ElFormItem>
    <ElFormItem label="用户名">
      <ElInput v-model="loginForm.username" />
    </ElFormItem>
    <ElFormItem label="密码">
      <ElInput v-model="loginForm.password" type="password" show-password />
    </ElFormItem>
    <ElFormItem>
      <div class="flex justify-between items-center w-[100%]">
        <ElCheckbox v-model="remember" label="记住我" size="small" />
        <ElLink type="primary" :underline="false" class="text-xs">
          忘记密码?
        </ElLink>
      </div>
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" class="w-[100%]">
        登录
      </ElButton>
    </ElFormItem>
    <ElFormItem>
      <ElButton class="w-[100%]">
        注册
      </ElButton>
    </ElFormItem>
    <ElFormItem>
      <ElDivider><span class="text-blueGray">其它登录方式</span></ElDivider>
    </ElFormItem>
    <ElFormItem>
      <div class="flex justify-between w-[100%]">
        <div
          class="i-ant-design-github-filled other-login-icon"
        />
        <div class="i-ant-design-wechat-filled other-login-icon" />
        <div class="i-ant-design-alipay-circle-filled other-login-icon" />
        <div class="i-ant-design-weibo-circle-filled other-login-icon" />
      </div>
    </ElFormItem>
  </ElForm>
</template>

<style lang="less" scoped>
.other-login-icon {
  @apply text-3xl cursor-pointer bg-gray hover:bg-[var(--el-color-primary)];
}
</style>
