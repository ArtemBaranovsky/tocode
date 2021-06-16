import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import notes from './notes'
// import users from './users'
// import auth from './auth'

export default new Vuex.Store({
	modules: {
		notes,
		// users,
		// auth
	},
	mutations: {
		getPosts () {

		}
	}
})