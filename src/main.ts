import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/css/variables.css'

import en from './locales/en.json'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en
    }
})

createApp(App).use(i18n).mount('#app')
