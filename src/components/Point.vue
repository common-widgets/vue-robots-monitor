<template lang="pug">
rect.point(
  :x="data.x"
  :y="data.y"
  :width="data.size"
  :height="data.size"
  :transform="transform")

</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue"
const props = defineProps(["data"])
ref: transform = `translate(-${props.data.size/2} -${props.data.size/2})`
</script>

<style lang="stylus" scoped>
.point
  fill teal
</style>