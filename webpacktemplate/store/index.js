import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import example from './exapmle'

export default new Vuex.$store({
  modules: {
    example
  }
})