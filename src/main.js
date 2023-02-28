import { createApp } from 'vue'

// import i18n
import { createI18n } from "vue-i18n";
import { createPinia } from 'pinia'

// import plugin for locales compilation during build
import messages from "@intlify/unplugin-vue-i18n/messages";

import App from './App.vue'
import router from './router'

import './assets/styles.sass'

// create i18n instance with options
const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "pl",
    fallbackLocale: "en",
    availableLocales: ["en", "pl"],
    messages: messages,
  });

const app = createApp(App)

app.use(createPinia())

// install i18n instance
app.use(i18n)
app.use(router)

app.mount('#app')
