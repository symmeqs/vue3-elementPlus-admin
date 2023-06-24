import { createApp } from 'vue'

// import './style.css'
import App from './App.vue'

// 引入全局样式
import '@/styles/index.less'

// Pinia
import { setupPiniaStore } from './store'

// UnoCSS
import '@/plugins/unocss'

import { setupRouter } from './router'

// Element Plus Components
import { setupElementPlus } from '@/plugins/elementplus'

async function setupAll() {
  const app = createApp(App)

  setupPiniaStore(app)

  setupRouter(app)

  setupElementPlus(app)

  app.mount('#app')
}

setupAll()
