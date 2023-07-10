<script lang="ts" setup>
import { reactive, ref } from 'vue'

import { useRouter } from 'vue-router'

const emit = defineEmits(['toRegister'])
const { push } = useRouter()
const loginForm = reactive({
  username: 'admin',
  password: '123456',
})

const remember = ref(false)

function toRegister() {
  emit('toRegister')
}

async function signIn() {
  // TODO 校验表单
  push({ path: '/' })
}
</script>

<template>
  <el-form
    :model="loginForm"
    size="large"
    label-position="top"
    class="w-[90%] bg-white"
  >
    <el-form-item>
      <h2 class="text-2xl font-bold text-center w-[100%]">
        登录
      </h2>
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="loginForm.username" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="loginForm.password" type="password" show-password />
    </el-form-item>
    <el-form-item>
      <div class="flex justify-between items-center w-[100%]">
        <el-checkbox v-model="remember" label="记住我" size="small" />
        <el-link type="primary" :underline="false" class="text-xs">
          忘记密码?
        </el-link>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="w-[100%]" @click="signIn">
        登录
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button class="w-[100%]" @click="toRegister">
        注册
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-divider><span class="text-blueGray">其它登录方式</span></el-divider>
    </el-form-item>
    <el-form-item>
      <div class="flex justify-between w-[100%]">
        <div
          class="i-ant-design-github-filled other-login-icon"
        />
        <div class="i-ant-design-wechat-filled other-login-icon" />
        <div class="i-ant-design-alipay-circle-filled other-login-icon" />
        <div class="i-ant-design-weibo-circle-filled other-login-icon" />
      </div>
    </el-form-item>
  </el-form>
</template>

<style lang="less" scoped>
.other-login-icon {
  @apply text-3xl cursor-pointer bg-gray-700 hover:bg-[var(--el-color-primary)];
}
</style>
