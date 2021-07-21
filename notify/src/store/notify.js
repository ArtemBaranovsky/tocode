import loadMore from "../assets/js/loadMore";
import axios from "axios";

export default {
  state: {
    messages: [],
    messagesMain: [],
    loading: false,
    error: null
  },
  mutations: {
    setMessage(state, payload) {
      state.messages = payload
    },
    setMessageMain(state, payload) {
      state.messagesMain = payload
    },
    loadMessages(state, payload) {
      // logic
      state.messagesMain = [...state.messagesMain, ...payload]
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
  },
  actions: {
    setMessage({ commit }, payload) {
      commit('setMessage', payload)
    },
    setMessageMain({ commit }, payload) {
      commit('setMessageMain', payload)
    },
    loadMessages({ commit, getters }) {
      let res = getters.getMessageFilter
      commit('loadMessages', loadMore(res))
    },
    setNotify({ commit}) {
      commit('setLoading', true)
      axios
          .get("https://tocode.ru/static/_secret/courses/1/notifyApi.php")
          .then(response => {
            let res = response.data.notify,
                messages = [],
                messagesMain = [];

            // filter
            for (let i = 0; i < res.length; i++) {
              if (res[i].main) { messagesMain.push(res[i]) }
              else { messages.push(res[i]) }
            }
            commit('setMessage', messages)
            commit('setMessageMain', messagesMain)
          })
          .catch(error => {
            commit('setError', 'Error: Network error')
          })
          .finally( () =>  { commit('setLoading', false) })
    },
    setNotifyLazy({ commit, state }) {
      commit('setLoading', true)
      setTimeout(() => {
        state.dispatch('setNotify')
      }, 2000)
    },
  },
  getters: {
    getLoading(state) {
      return state.loading
    },
    getErrors(state) {
      return state.errors
    },
    getMessage(state) {
      return state.messages
    },
    getMessageFilter(state) {
      return state.messages.filter(mes => {
        return mes.main === false
      })
    },
    getMessageMain(state) {
      return state.messagesMain
    }
  }
}