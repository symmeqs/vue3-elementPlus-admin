<script lang="ts" setup>
import { propTypes } from '@/utils/propTypes.ts'

const props = defineProps({
    name: propTypes.string
})

</script>
<template>
    <div>Hello TestCom: {{ props.name }} </div>
</template>