<script lang="ts" setup>
import { ElInput } from 'element-plus'
import { computed, ref, unref, useAttrs } from 'vue'
import type { ZxcvbnResult } from '@zxcvbn-ts/core'
import { zxcvbn } from '@zxcvbn-ts/core'
import { getPrefixCls } from '@/hooks/web/useDesign'

const props = defineProps({
  modelValue: String,
  showStrength: Boolean,
})

const prefixCls = getPrefixCls('input-password')

const password = ref(props.modelValue)

// 更新密码强度状态
const getPasswordStrength = computed(() => {
  const passwordVal = unref(password)
  if (!passwordVal)
    return -1

  const zxcvbnRef = zxcvbn(passwordVal) as ZxcvbnResult
  return zxcvbnRef.score
})
</script>

<template>
  <div :class="prefixCls" class="w-[100%]">
    <ElInput v-model="password" v-bind="useAttrs()" type="password" show-password />
    <div
      v-if="props.showStrength"
      :class="`${prefixCls}__bar`" class="relative h-6px mt-10px mb-6px mx-auto"
    >
      <div :class="`${prefixCls}__bar--fill`" :data-score="getPasswordStrength" />
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
      z-index: 10;
      display: block;
      width: 19%;
      height: inherit;
      background-color: transparent;
      border-color: var(--el-color-white);
      border-style: solid;
      border-width: 0 5px;
      content: "";
    }

    &::before {
      left: 19%;
    }

    &::after {
      right: 19%;
    }

    &--fill {
      position: absolute;
      width: 0;
      height: inherit;
      background-color: transparent;
      border-radius: inherit;
      transition: width 0.5s ease-in-out, background-color 0.25s;

      &[data-score='0'] {
        width: 20%;
        background-color: var(--el-color-danger);
      }

      &[data-score='1'] {
        width: 40%;
        background-color: var(--el-color-danger);
      }

      &[data-score='2'] {
        width: 60%;
        background-color: var(--el-color-warning);
      }

      &[data-score='3'] {
        width: 80%;
        background-color: var(--el-color-success);
      }

      &[data-score='4'] {
        width: 100%;
        background-color: var(--el-color-success);
      }
    }
  }

  &--mini > &__bar {
    border-radius: var(--el-border-radius-small);
  }
}
</style>
