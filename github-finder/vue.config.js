// vue.config.js
module.exports = {
    // options ...
    publicPath: process.env.NODE_ENV === 'production' ?
        '/modals/' : '/',
    // assetsDir: 'assets',
    assetsDir: '',
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
    //         ],
    //     }, ],
    // },
}