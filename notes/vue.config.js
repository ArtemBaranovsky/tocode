// vue.config.js
module.exports = {
    // options ...
    publicPath: process.env.NODE_ENV === 'production'
        ? '/modals/'
        : '/',
    // assetsDir: 'assets',
    assetsDir: '',
    productionSourceMap: false
}