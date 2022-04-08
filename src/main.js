import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/app.css'

createApp(App).use(store).use(Unsplash, {
  accessKey: '9i6gZ0RMJr235tpYq5JXbbbGJnPRGDaWnhR_4nBuUpw'
}).use(router).mount('#app')
