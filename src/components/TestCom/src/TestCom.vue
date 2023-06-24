<script lang="ts" setup>
const props = defineProps({
  name: String,
})
</script>

<template>
  <div>Hello TestCom: {{ props.name }} </div>
</template>
