import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/css/main.css'

import en from './locales/en.json'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en
    }
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.mount('#app')
