export default {
	state: {
		message: 'Hello Vuex',
	},
	mutations: {
		setMessage (state, message) {
			state.message = message
		}
	},
	actions: {
		setMessage({commit /*, getters*/}, payload) {
			commit('setMessage', payload)
		}
	},
	getters: {
		getMessage (state) {
			return state.message
		}
	}
}