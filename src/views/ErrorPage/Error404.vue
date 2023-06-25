<script lang="ts" setup>
import { useRouter } from 'vue-router'

const { push } = useRouter()

function goHome() {
  push('/')
}
</script>

<template>
  <button @click="goHome">
    内容错误，点击返回首页
  </button>
</template>
