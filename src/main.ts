import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// 引入全局样式
import '@/styles/index.less'

// Pinia
import { setupPiniaStore } from './store'

// UnoCSS
import '@/plugins/unocss'

// Element Plus Components
import { setupElementPlus } from '@/plugins/elementplus'

const setupAll = async () => {
    const app = createApp(App)

    setupPiniaStore(app)
    
    setupElementPlus(app)

    app.mount('#app')
}

setupAll()
