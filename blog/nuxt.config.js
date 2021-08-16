import axios from "axios"
import pkg from './package'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: pkg.name,
    title: 'My SSR Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' },
      { name: 'yandex-verification', content: 'bb3c48655843122' },  // add real key
      { name: 'google-site-verification', content: 'jas9128428428-2409-218' },  // add real key
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/app-components.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      // ['@nuxtjs/google-analytics', {
      //   id: 'UA-key'
      // }],
      // ['@nuxtjs/yandex-metrika', {
      //   id: 'key',
      //   webvisor: false,
      //   clickmap: true,
      //   trackLinks: true
      // }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      'vue',
      'axios'
    ]
  },
  generate: {
    routes: function () {
      return axios.get('https://blog-nuxt-f5235-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
        .then((res) => {

          // Get id
          const postsArray = []
          for (let key in res.data) {
            postsArray.push({ ...res.data[key], id: key })
          }

          // Routes
          return postsArray.map((post) => {
            return '/blog/' + post.id
          })
        })
    }
  }
}
