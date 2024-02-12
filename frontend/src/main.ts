import './assets/css/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/app';
axios.defaults.withCredentials = true;

const app = createApp(App)

app.use(router)
app.mount('#app')
