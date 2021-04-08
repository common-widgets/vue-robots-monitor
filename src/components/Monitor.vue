<template lang="pug">
svg.canvas
  PointNode(
    v-for="p in points" 
    :data="p")

  PathNode(
    v-for="p in paths"
    :data="p")

  RobotNode(
    v-for="p in robots" 
    :data="p")

</template>

<script lang="ts" setup>
import PointNode from "./Point.vue"
import PathNode from "./Path.vue"
import RobotNode from "./Robot.vue"

import { ref } from "vue"

ref: points = [
  { x: 10, y: 10, size: 20 },
  { x: 100, y: 10, size: 20 },
]
ref: paths = [
  { x: 230, y: 120, cx: 670, cy: 420, size: 20 },
  { x: 403, y: 222, cx: 30, cy: 320, size: 20 }
]
ref: robots = [
  { x: 120, y: 454, size: 20 },
  { x: 120, y: 20, size: 20 },
]

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