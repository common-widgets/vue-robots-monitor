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

import { computed, defineProps } from "vue"
const props = defineProps({
  data: Object as () => MonitorProps.MonitorData
})

const paths = computed(() => {
  const paths = []
  props.data.paths?.forEach((p) => {
    const sp = props.data.points?.find(r => r.id === p.srcPoint)
    const dp = props.data.points?.find(r => r.id === p.distPoint)
    if (!sp || !dp) return
    if (sp === dp) return
    p.sp = sp
    p.dp = dp
    return paths.push({ ...p })
  })
  return paths
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