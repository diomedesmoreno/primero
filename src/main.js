import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import 'bootstrap/dist/css/bootstrap.css';

// Vue.use(BootstrapVue);

createApp(App).use(router).mount('#app')
