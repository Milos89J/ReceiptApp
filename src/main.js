import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import "bootstrap/dist/css/bootstrap.min.css"
import router from './router/index'
import store from './store/index'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.use(store);
app.mount('#app')
