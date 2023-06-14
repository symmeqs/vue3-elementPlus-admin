<script lang="ts" setup>
import { useDesign } from "@/hooks/web/useDesign";

import { propTypes } from "@/utils/propTypes";

import { ref, unref, computed, nextTick, watch } from "vue";

import Iconify from '@purge-icons/generated'

import { ElIcon } from "element-plus"

const { getPrefixCls } = useDesign();

const prefixCls = getPrefixCls("icon");

const props = defineProps({
  icon: propTypes.string,
  color: propTypes.string,
  size: propTypes.number.def(16),
});

const elRef = ref<ElRef>(null);

const isLocal = computed(() => props.icon.startsWith("svg-icon:"));

const symbolId = computed(() => {
  return unref(isLocal) ? `#icon-${props.icon.split("svg-icon:")[1]}` : props.icon;
});

const getIconifyStyle = computed(() => {
  const { color, size } = props;
  return {
    fontSize: `${size}px`,
    color,
  };
});

const updateIcon = async (icon: string) => {
  if (unref(isLocal)) return;

  const el = unref(elRef);
  if (!el) return;

  await nextTick();

  if (!icon) return;

  console.log('icon', icon)
  const svg = Iconify.renderSVG(icon, {});

  if (svg) {
    el.textContent = "";
    el.appendChild(svg);
  } else {
    const span = document.createElement("span");
    span.className = "iconify";
    span.dataset.icon = icon;
    el.textContent = "";
    el.appendChild(span);
  }
};

watch(
  () => props.icon,
  (icon: string) => {
    updateIcon(icon);
  }
);
</script>
<template>
  <ElIcon :class="prefixCls" :size="size" :color="color">
    <svg v-if="isLocal" aria-hidden="true">
      <use :xlink:href="symbolId"></use>
    </svg>

    <span v-else ref="elRef" :class="$attrs.class" :style="getIconifyStyle">
      <span class="iconify" :data-icon="symbolId"></span>
    </span>
  </ElIcon>
</template>
