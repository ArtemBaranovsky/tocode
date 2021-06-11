import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		message: 'Hello Vuex'
	},
	mutations: {
		setMessage (state, message) {
			// state.message = 'hello again'
			// state.message = payload
			state.message = message
		}
	},
	actions: {
		setMessage({commit /*, getters*/}, payload) {
			commit('setMessage', payload)
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