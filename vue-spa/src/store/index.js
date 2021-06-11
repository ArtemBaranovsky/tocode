import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		message: 'Hello Vuex'
	},
	mutations: {
		setMessage (state/*, payload*/) {
			state.message = 'hello again'
			// state.message = payload
		}
	},
	actions: {
		setMessage({commit/*, getters*/}) {
			commit('setMessage')
			// let mes = API
			// commit('setMessage', mes)
		}
	},
	getters: {
		getMessage (state) {
			return state.message
		}
	},
})