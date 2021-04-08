<template lang="pug">
rect.point(
  :x="data.x"
  :y="data.y"
  :width="data.size"
  :height="data.size")

</template>

<script lang="ts" setup>
import { defineProps } from "vue"
const props = defineProps(["data"])
</script>

<style lang="stylus" scoped>
.point
  fill teal
</style>