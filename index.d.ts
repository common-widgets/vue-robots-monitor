import { App } from 'vue'

interface Monitor {
  install: (app: App) => void
}
declare var monitor: Monitor
export default monitor;
