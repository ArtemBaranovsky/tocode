import './js/'
// import './css/main.css'
// import './assets/scss/main.scss'
import './scss/main.scss'


// import 'bootstrap/dist/css/bootstrap.min.css'
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

// 1-st option to use vue
// import 'vue'

// 2-st option to use vue
// import Vue from 'vue'
// Vue.use()

// 3-st option to use vue
// window.Vue = require('vue/dist/vue')
window.Vue = require('vue')
import store from './store/index.js'

Vue.component('example-component', require('./components/Example.vue').default)

const app = new Vue({
  data() {
    return {
	  component: false
	}
  },
  store,
  el: '#app'
})