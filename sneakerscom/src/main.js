import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: 'AIzaSyCeAu2jRzsKwLXDUTPHwopNYNBoBrWe9Xc',
  authDomain: 'jwt-sneakers.firebaseapp.com',
  projectId: 'jwt-sneakers',
  storageBucket: 'jwt-sneakers.appspot.com',
  messagingSenderId: '43530989328',
  appId: '1:43530989328:web:cb2aa847d4970d411dbf95'
}
initializeApp(firebaseConfig)
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
