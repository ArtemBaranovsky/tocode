import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // module: {},
  state: {
    modalVue: 'Login',
  },
  mutations: {},
  actions: {},
  getters: {
    getModalView (state) {
      return state.modalView
    }
  },
})
