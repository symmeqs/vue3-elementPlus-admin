<script lang="ts" setup>
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'
import { reactive } from 'vue'

const registerForm = reactive({
  username: '',
  password: '',
  passwordConfirm: '',
  code: '',
})
</script>

<template>
  <ElForm
    :model="registerForm"
    label-position="top"
    size="large"
    class="w-[90%] bg-white"
  >
    <ElFormItem>
      <h1 class="w-[100%] text-center text-2xl font-bold">
        注册
      </h1>
    </ElFormItem>
    <ElFormItem label="用户名">
      <ElInput v-model="registerForm.username" />
    </ElFormItem>
    <ElFormItem label="密码">
      <ElInput v-model="registerForm.password" type="passwrod" show-password />
    </ElFormItem>
    <ElFormItem label="确认密码">
      <ElInput
        v-model="registerForm.password"
        type="passwrodComfirm"
        show-password
      />
    </ElFormItem>
    <ElFormItem label="验证码">
      <ElInput v-model="registerForm.code" />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" class="w-[100%]">
        注册
      </ElButton>
    </ElFormItem>
    <ElFormItem>
      <ElButton class="w-[100%]">
        已有账号？去登录
      </ElButton>
    </ElFormItem>
  </ElForm>
</template>
