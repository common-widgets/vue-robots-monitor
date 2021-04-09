const path = require('path')
import vue from '@vitejs/plugin-vue'

module.exports = {
  plugins: [vue()],
  resolve: {
    alias: {
      "vue-robots-monitor": path.resolve(__dirname, "./dist"),
    }
  },
  build: {
    minify: false,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'VueRobotsMonitor',
      formats: ['es','cjs','umd', 'iife']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}