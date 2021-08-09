import axios from "axios";

// nuxt для большей производительности предлагает экспортировать не все, а только то что нужно: export const ...
// export default {
//   state: {},
//   getters: {}
// }

export const state = () => ({
  postsLoaded: []
})

export const mutations = {
  addPost(state, post) {
    console.log(post);
    state.postsLoaded.push(post)
    // return Promise.resolve(undefined);
  }
}

export const actions = {
  addPost ({commit}, post) {
    // console.log(post);
    // register and create Realtime Database at firebase.google.com
    return axios.post('https://blog-nuxt-f5235-default-rtdb.europe-west1.firebasedatabase.app/posts.json', post)
      .then(res => {
        // console.log(res);
        commit('addPost', { ...post, id: res.data.name })
      })
      .catch(e=> console.log(e))
  }
}

export const getters = {

}
