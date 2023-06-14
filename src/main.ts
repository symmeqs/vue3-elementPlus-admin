import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import './plugins/tailwind/tailwind.css'

import { setupElementPlus } from '@/plugins/elementPlus'


const setupAll = async () => {
    const app = createApp(App)

    setupElementPlus(app)

    app.mount('#app')
}

setupAll()
