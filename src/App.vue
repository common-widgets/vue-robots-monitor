<template lang="pug">
Monitor(:data="data")
</template>

<script lang="ts" setup>
import Monitor from "./components/Monitor.vue"
// import Monitor from "vue-robots-monitor/vue-robots-monitor.es.js"
// import "vue-robots-monitor/style.css"

ref: data = {
  points: [
    { id: "1", x: 220, y: 230, size: 20 },
    { id: "2", x: 300, y: 132, size: 20 },
  ],
  paths: [
    { srcPoint: "1", distPoint: "2" },
    { srcPoint: "2", distPoint: "1" },
  ],
  robots: [
    { x: 120, y: 454, size: 20 },
    { x: 120, y: 20, size: 20 },
  ]
}
</script>

<style lang="stylus">
body
  margin 0
  padding 0
*
  box-sizing border-box
#app
  height 100vh
  
</style>
