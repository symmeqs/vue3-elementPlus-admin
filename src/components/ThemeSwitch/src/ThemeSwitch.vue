<script setup lang="ts">
import { useAppStore } from '@/store/modules/app'
import { ElSwitch } from 'element-plus'
import { useDesign } from '@/hooks/web/useDesign'
import { useIcon } from '@/hooks/web/useIcon';
import { ref } from 'vue';

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('theme-switch')

// 设置switch的背景颜色
const blackColor = 'var(--el-color-black)'

const appStore = useAppStore()
// 初始化获取是否是暗黑主题
const isDark = ref(appStore.isDark)

const themeChange = (val: boolean) => {
  appStore.setIsDark(val)
}

// 主题选择 Icon VNode
const sunIcon = useIcon('i-emojione-monotone-sun text-yellow-300')
const crescentMoonIcon = useIcon('i-emojione-monotone-crescent-moon text-yellow-300')
</script>

<template>
  <ElSwitch
    :class="prefixCls"
    v-model="isDark"
    inline-prompt
    :border-color="blackColor"
    :inactive-color="blackColor"
    :active-color="blackColor"
    :active-icon="sunIcon"
    :inactive-icon="crescentMoonIcon"
    @change="themeChange"
  />
</template>
