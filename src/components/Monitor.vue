<template lang="pug">
svg.canvas
  PathNode(
    v-for="p in paths"
    :data="p")

  PointNode(
    v-for="p in data.points" 
    :data="p")

  RobotNode(
    v-for="p in data.robots" 
    :data="p")

</template>

<script lang="ts" setup>
import PointNode from "./Point.vue"
import PathNode from "./Path.vue"
import RobotNode from "./Robot.vue"
import * as MonitorProps from "./monitor-props"

import { defineProps, ref } from "vue"
const props = defineProps({
  data: Object as () => MonitorProps.MonitorData
})

ref: paths = props.data.paths.map((p) => {
  p.sp = props.data.points.find(r => r.id === p.srcPoint)
  p.dp = props.data.points.find(r => r.id === p.distPoint)
  return p
})

</script>

<style lang="stylus" scoped>
#app
  height 100%

.canvas
  width 100%
  height 100%
  
.point
  fill teal
  
</style>