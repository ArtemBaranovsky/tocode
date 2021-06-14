// vue.config.js
module.exports = {
    // options ...
    // publicPath: process.env.NODE_ENV === 'production' ?
    //     '/modals/' : '/',
    assetsDir: 'src/assets',
    // assetsDir: '',
    productionSourceMap: false,
    // css: {
    //     loaderOptions: {
    //         css: {
    //             // эти настройки будут переданы в css-loader
    //         },
    //         postcss: {
    //             // эти настройки будут переданы в postcss-loader
    //         }
    //     }
    // }
/*    chainWebpack: config => {
        config.module
          // .rule('vue')
          .test(/\.s[ac]ss$/i)
          .use('style-loader')
              .loader('style-loader')
              .end()
          .use('css-loader')
              .loader('css-loader')
              .end()
          .use('sass-loader')
              .loader('sass-loader')
              .end()
          .use('vue-style-loader')
              .loader('vue-style-loader')
              .end()
    }*/
    // module: {
    //     rules: [{
    //         test: /\.s[ac]ss$/i,
    //         use: [
    //             // Creates `style` nodes from JS strings
    //             "style-loader",
    //             // Translates CSS into CommonJS
    //             "css-loader",
    //             // Compiles Sass to CSS
    //             "sass-loader",
    //             'vue-style-loader'
    //         ]
    //     }]
    // }
}