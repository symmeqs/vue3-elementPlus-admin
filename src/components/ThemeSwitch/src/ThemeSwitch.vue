<script lang="ts" setup>
import { useIcon } from '@/hooks/web/useIcon';
import { ElSwitch } from 'element-plus'
import { ref } from 'vue';
import { useDesign } from '@/hooks/web/useDesign';

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('theme-switch')

const sun = useIcon({ icon: 'emojione-monotone:sun', color: '#fde047' })
const crescentMoon = useIcon({ icon: 'emojione-monotone:crescent-moon', color: '#fde047' })

// const appStore = useAppStore()

// 初始化获取是否是暗黑主题
// const isDark = ref(appStore.getIsDark)
const isDark = ref(false)


// 设置switch的背景颜色
const blackColor = 'var(--el-color-black)'

const themeChange = (val: boolean) => {
  // appStore.setIsDark(val)
  isDark.value = val
}
</script>
<template>
  <ElSwitch
    :class="prefixCls"
    v-model="isDark"
    inline-prompt
    :border-color="blackColor"
    :inactive-color="blackColor"
    :active-color="blackColor"
    :active-icon="sun"
    :inactive-icon="crescentMoon"
    @change="themeChange"
  />
</template>
