<script lang="ts" setup>
import { reactive, ref } from "vue";
import {
  ElDivider,
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
} from "element-plus";

const loginForm = reactive({
  username: "admin",
  password: "123456",
});

const remember = ref(false);
</script>
<template>
  <el-form
    :model="loginForm"
    :size="'large'"
    :label-position="'top'"
    class="w-[90%] bg-white"
  >
    <el-form-item>
      <h2 class="text-2xl font-bold text-center w-[100%]">登录</h2>
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="loginForm.username" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" show-password v-model="loginForm.password" />
    </el-form-item>
    <el-form-item>
      <div class="flex justify-between items-center w-[100%]">
        <ElCheckbox v-model="remember" :label="'记住我'" size="small" />
        <ElLink type="primary" :underline="false" class="text-xs">忘记密码?</ElLink>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="w-[100%]">登录</el-button>
    </el-form-item>
    <el-form-item>
      <el-button class="w-[100%]">注册</el-button>
    </el-form-item>
    <el-form-item>
      <el-divider><span class="text-blueGray">其它登录方式</span></el-divider>
    </el-form-item>
    <el-form-item>
      <div class="flex justify-between w-[100%]">
        <div
          class="i-ant-design-github-filled other-login-icon"
        ></div>
        <div class="i-ant-design-wechat-filled other-login-icon"></div>
        <div class="i-ant-design-alipay-circle-filled other-login-icon"></div>
        <div class="i-ant-design-weibo-circle-filled other-login-icon"></div>
      </div>
    </el-form-item>
  </el-form>
</template>

<style lang="less" scoped>
.other-login-icon {
  @apply text-3xl cursor-pointer bg-gray hover:bg-[var(--el-color-primary)];
}
</style>
