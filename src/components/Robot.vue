<template lang="pug">
g.robot
  rect.robot-body(
    :x="data.x"
    :y="data.y"
    :width="data.size"
    :height="data.size"
    :transform="transform")
  circle(
    :cx="data.x"
    :cy="data.y"
    :r="data.size")

</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue"
const props = defineProps(["data"])
ref: transform = `translate(-${props.data.size/2} -${props.data.size/2})`
</script>

<style lang="stylus" scoped>
rect.robot-body
  fill rgba(0,0,0,.5)
g.robot
  circle
    fill transparent
    stroke teal
    stroke-width 1px
</style>