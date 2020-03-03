import Vue from 'vue'
import firebase from 'firebase'

import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/style.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyDmkfYQLYT-iEsHHTITAJwoTHBfuH253pE',
  authDomain: 'pegasus-c75b7.firebaseapp.com',
  databaseURL: 'https://pegasus-c75b7.firebaseio.com',
  projectId: 'pegasus-c75b7',
  storageBucket: 'pegasus-c75b7.appspot.com',
  messagingSenderId: '188991330933',
  appId: '1:188991330933:web:3e3f22a3ed534b893eb63c',
  measurementId: 'G-MK40MX475B'
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
