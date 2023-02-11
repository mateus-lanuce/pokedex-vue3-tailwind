import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/base.css'

import { createMetaManager } from 'vue-meta'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createMetaManager())

app.mount('#app')
