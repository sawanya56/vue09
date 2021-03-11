import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCnWyAQSLo_p9g32e7Yg9jmN5dSB0vTKUk",
    authDomain: "vue09-250e4.firebaseapp.com",
    projectId: "vue09-250e4",
    storageBucket: "vue09-250e4.appspot.com",
    messagingSenderId: "999603741523",
    appId: "1:999603741523:web:65e401f482f06acab5b7a6"
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')