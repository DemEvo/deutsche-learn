import '@/assets/main.css'
import '@/scss/styles.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// import { Tooltip, Toast, Popover } from 'bootstrap';

import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import VueAxios from 'vue-axios'
import axios from 'axios'

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyBhGZ8XQdOhfC10Yk0BVnrqEEejgORcWxc",
  authDomain: "flash-cards-2f16f.firebaseapp.com",
  databaseURL: "https://flash-cards-2f16f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "flash-cards-2f16f",
  storageBucket: "flash-cards-2f16f.appspot.com",
  messagingSenderId: "844403418891",
  appId: "1:844403418891:web:c56a55ffff1c9b8d70240e",
  measurementId: "G-6JS7238PQG"
});

var appVue;
firebase.auth().onAuthStateChanged(() => {
  if (!appVue) {
    appVue = createApp(App)
      .use(router)
      .use(store)
      .use(VueAxios, axios)
      .mount("#app");
  }
});