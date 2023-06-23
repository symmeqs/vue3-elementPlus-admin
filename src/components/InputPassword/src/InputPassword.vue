<script lang="ts" setup>
import { ElInput } from 'element-plus'
import { ref } from 'vue'
import { getPrefixCls } from '@/hooks/web/useDesign'
import { propTypes } from '@/utils/propTypes'

const props = defineProps({
  modelValue: propTypes.string,
  showStrength: propTypes.bool,
})

const prefixCls = getPrefixCls('input-password')

const getPasswordStrength = ref(0)
</script>

<template>
  <div :class="prefixCls">
    <ElInput type="password" show-password />
    <div
      v-if="props.showStrength"
      :class="`${prefixCls}__bar`"
      class="relative h-6px mt-10px mb-6px mr-auto ml-auto"
    >
      <div :class="`${prefixCls}__bar--fill`" :data-socre="getPasswordStrength" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@prefix-cls: ~"@{namespace}-input-password";

.@{prefix-cls} {
  &__bar {
    background-color: var(--el-text-color-disabled);
    border-radius: var(--el-border-radius-base);

    &::before,
    &::after {
      position: absolute;
      z-index: 10px;
      display: block;
      width: 20%;
      height: inherit;
      background-color: transparent;
      border-color: var(--el-color-white);
      border-style: solid;
      border-width: 0 5px;
      content: "";
    }

    &::before {
      left: 20%;
    }

    &::after {
      right: 20%;
    }

    &--fill {
      position: absolute;
      width: 0;
      height: inherit;
      background-color: transparent;
      border-radius: inherit;
      transition: width 0.5s ease-in-out, background-color 0.25s;
    }

    &[data-score="0"] {
      width: 20%;
      background-color: var(--el-color-danger);
    }

    &[data-score="1"] {
      width: 40%;
      background-color: var(--el-color-danger);
    }

    &[data-score="2"] {
      width: 60%;
      background-color: var(--el-color-danger);
    }

    &[data-score="3"] {
      width: 80%;
      background-color: var(--el-color-danger);
    }

    &[data-score="4"] {
      width: 100%;
      background-color: var(--el-color-danger);
    }
  }
}
</style>
