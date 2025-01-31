import './assets/main.css'
import './assets/styles.scss'
import "bootstrap/dist/css/bootstrap.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'

const app = createApp(App)

app.use(router).use(store).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
