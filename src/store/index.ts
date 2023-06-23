import { createPinia } from 'pinia'
import type { App } from 'vue'

const store = createPinia()

export function setupPiniaStore(app: App<Element>) {
  app.use(store)
}
