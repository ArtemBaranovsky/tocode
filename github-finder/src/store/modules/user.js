import loadMore from "../../assets/js/loadMore";
import axios from "axios";

export default {
	namespaced: true,
	state: {
		user: null,
		repos: [],
		reposMain: [],
	},
	mutations: {
		setUser (state, user) {
			state.user = {}
			state.user.name = user.name
			state.user.avatar = user.avatar
		},
		setRepos (state, repos) {
			// state.user.repos = repos
			state.repos = repos
		},
		loadRepos (state, payload) {
			// logic
			state.reposMain = [...state.reposMain, ...payload]
			// console.log(state.reposMain)
		},
	},
	actions: {
		setUser({commit /*, getters*/}, payload) {
			commit('setUser', payload)
		},
		setRepos({commit /*, getters*/}, payload) {
			commit('setRepos', payload)
		},
		loadRepos({ commit, getters }) {
			let res = getters.getReposFilter
			// console.log(res)
			if (res) commit('loadRepos', loadMore(res))
		},
		// loadRepos({ commit, getters}) {
		// 	// commit('setLoading', true)
		// 	let repos = getters.getReposFilter,
		// 		reposMain = [];
		// 	console.log(repos)
		// 	commit('loadRepos', loadMore(repos))
		// },
	},
	getters: {
		getRepos (state) {
			return state.user.repos
		},
		getReposFilter (state) {
			// console.log('getReposFilter');
			// console.log(state.user.repos);
			if (state.user) {
				// console.log(state.user.repos.repos)
				// if (state.user.reposMain.reposMain) return state.user.reposMain.reposMain.filter(repo => {
				// 	// return state.repos.filter(repo => {
				// 	return repo.main === false
				// })
				if (state.user.reposMain) return state.user.reposMain.filter(repo => {
					// return state.repos.filter(repo => {
					return repo.main === false
				})
			}
		},
	}
}