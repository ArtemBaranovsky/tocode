// JS
import './js/'

// SCSS
import './assets/scss/main.scss'
// import './scss/main.scss'

// CSS (example)
import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

import store from '../store/index.js'

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default)

const app = new Vue({
  data() {
    return {
      component: false,
    }
  },
  store,
  el: '#app'
})
