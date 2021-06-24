const webpack = require('webpack')
const merge = require('webpack-merge').merge
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	// devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: baseWebpackConfig.externals.path.dist,
		// contentBase: baseWebpackConfig.externals.paths.dist,
		port: 8082,
		overlay: {
			warnings: true,
			errors: true
		}
	},
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map'
		})
	]
})

module.exports = new Promise((resolve, reject) => {
	resolve(devWebpackConfig)
})