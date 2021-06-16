export default {
	state: {
		notes: [
			{
				title: 'First Note',
				descr: 'Description for first note',
				date: new Date(Date.now()).toLocaleString(),
				priority: 'important'
			},
			{
				title: 'Second Note',
				descr: 'Description for second note',
				date: new Date(Date.now()).toLocaleString(),
				priority: 'very important'
			},
			{
				title: 'Third Note',
				descr: 'Description for third note',
				date: new Date(Date.now()).toLocaleString(),
				priority: 'simple'
			}
		]
	},
	mutations: {
		addNote(state, payload) {
			state.notes.push(payload)
		}
	},
	actions: {
		addNote({ commit }, payload) {
			commit('addNote', payload)
		}
	},
	getters: {
		getNotes (state) {
			return state.notes
		},
		getNote: (state) => (id) => {
			return state.notes.find(note => note.id == id)
		}
	},
}