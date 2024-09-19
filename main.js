
import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'
import './assets/main.css'
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BootstrapVue3 } from 'bootstrap-vue-3';


const app = createApp(App)

app.use(BootstrapVue3)

app.use(router)
app.use(Toast)

app.mount('#app')
