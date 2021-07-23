import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import example from './example'
// import users from './users'
// import auth from './auth'

export default new Vuex.Store({
	modules: {
		example,
		// users,
		// auth
	},
	mutations: {
		getPosts () {

		}
	}
})