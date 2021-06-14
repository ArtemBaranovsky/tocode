import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shop from './shop'
// import users from './users'
// import auth from './auth'

export default new Vuex.Store({
	modules: {
		shop,
		// users,
		// auth
	},
	mutations: {
		getPosts () {

		}
	}
})