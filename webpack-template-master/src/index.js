// JS
import './js/'

// SCSS
import './assets/scss/main.scss'
// import './scss/main.scss'

// CSS (example)
import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')
// vuex
import store from './store'

// Plugins
import Vuelidate from 'vuelidate'
import Vue from "vue";


Vue.use(Vuelidate)

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default)
Vue.component('modal-component', require('./components/Modal.vue').default)

// UI
Vue.component('notify-component', require('./components/UI/Notify.vue').default)

// controls
Vue.component('login-button', require('./components/UI/controls/buttons/Login.vue').default)

const app = new Vue({
  // Generally data section shouldn't be there
  data() {
    return {
      modalView: false,
      // component: false,
    }
  },
  store,
  el: '#app'
})
