<script lang="ts" setup>
import { reactive } from 'vue'
import { InputPassword } from '@/components/InputPassword'

const emit = defineEmits(['toLogin'])

const registerForm = reactive({
  username: '',
  password: '',
  passwordConfirm: '',
  code: '',
})

function toLogin() {
  emit('toLogin')
}
</script>

<template>
  <el-form
    :model="registerForm"
    label-position="top"
    size="large"
    class="w-[90%] bg-white"
  >
    <el-form-item>
      <h1 class="w-[100%] text-center text-2xl font-bold">
        注册
      </h1>
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="registerForm.username" />
    </el-form-item>
    <el-form-item label="密码">
      <InputPassword v-model="registerForm.password" :show-strength="true" />
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input
        v-model="registerForm.passwordConfirm"
        type="password"
        show-password
      />
    </el-form-item>
    <el-form-item label="验证码">
      <el-input v-model="registerForm.code" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="w-[100%]">
        注册
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button class="w-[100%]" @click="toLogin">
        已有账号？去登录
      </el-button>
    </el-form-item>
  </el-form>
</template>
