import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // module: {},
  state: {
    // modalView: 'login',
    modalView: null,
  },
  mutations: {
    setModalView (state, view) {
      state.modalView = view
    }
  },
  actions: {
    setModalView ({commit}, view) {
      commit('setModalView', view)
    }
  },
  getters: {
    getModalView (state) {
      return state.modalView
    }
  },
})
