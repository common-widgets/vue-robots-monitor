<template lang="pug">

path.path(:d="line" :id="id")
text
  textPath(:href="'#' + id" startOffset="50%" text-anchor="middle") →
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue"
const props = defineProps(["data"])

const id = "path" + (Math.random() * 1000000000).toString(16).split(".")[0]

const line = computed(() => {
  return `M ${props.data.sp.x} ${props.data.sp.y} L ${props.data.dp.x} ${props.data.dp.y}`
})
</script>

<style lang="stylus" scoped>
.path
  stroke red
  stroke-width 2px

text
  fill teal
</style>