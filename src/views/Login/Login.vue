<script lang="ts" setup>
import { ref } from 'vue'
import LogoDesign from './components/LogoDesign.vue'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'
import { ThemeSwitch } from '@/components/ThemeSwitch/index'
import { getPrefixCls } from '@/hooks/web/useDesign'

const prefixCls = getPrefixCls('login')

const isLogin = ref(true)

function toLogin() {
  isLogin.value = true
}

function toRegister() {
  isLogin.value = false
}
</script>

<template>
  <div class="relative h-full lt-xl:(bg-v-dark px-10px) lt-sm:px-10px lt-md:px-10px">
    <div class="relative h-full mx-auto flex">
      <div
        :class="`${prefixCls}__left`"
        class="flex-1 bg-gray-500 bg-opacity-20 relative p-30px lt-xl:hidden"
      >
        <div class="flex items-center relative text-white">
          <LogoDesign />
        </div>
        <div class="flex justify-center items-center h-[calc(100%-60px)]">
          <TransitionGroup
            appear
            tag="div"
            enter-active-class="animate__animated animate__bounceInLeft"
          >
            <img key="1" src="@/assets/svgs/login-box-bg.svg" alt="" class="w-350px">
            <div key="2" class="text-3xl text-white">
              欢迎使用 Symme Admin
            </div>
            <div key="3" class="mt-5 font-normal text-white text-14px">
              解决方案提供者，效率提升、流程标准化；私域流量管理、数据可视化与营销
            </div>
          </TransitionGroup>
        </div>
      </div>
      <div class="flex-1 p-30px lt-sm:p-10px dark:bg-dark relative">
        <div
          class="flex justify-between items-center text-white at-2xl:justify-end at-xl:justify-end"
        >
          <div class="flex items-center at-2xl:hidden at-xl:hidden">
            <LogoDesign />
          </div>

          <div class="flex justify-end items-center space-x-10px">
            <ThemeSwitch />
          </div>
        </div>
        <Transition appear enter-active-class="animate__animated animate__bounceInRight">
          <div
            class="h-full flex items-center m-auto w-[100%] at-2xl:max-w-500px at-xl:max-w-500px at-md:max-w-500px at-lg:max-w-500px"
          >
            <LoginForm
              v-if="isLogin"
              class="p-20px h-auto m-auto lt-xl:(rounded-3xl light:bg-white)"
              @to-register="toRegister"
            />
            <RegisterForm
              v-else
              class="p-20px h-auto m-auto lt-xl:(rounded-3xl light:bg-white)"
              @to-login="toLogin"
            />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@prefix-cls: ~"@{namespace}-login";

.@{prefix-cls} {
  &__left {
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-image: url("@/assets/svgs/login-bg.svg");
      background-position: center;
      background-repeat: no-repeat;
      content: "";
    }
  }
}
</style>
