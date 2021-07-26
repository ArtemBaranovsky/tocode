import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
// import users from './users'
// import auth from './auth'

export default new Vuex.Store({
	// state: {
	//
	// },
	modules: {
		user,
		// users,
		// auth
	},
	mutations: {
		getPosts () {

		}
	}
})