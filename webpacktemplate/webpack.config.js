const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				// scss
				test: /\.scss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							// config: { path: `./postcss.config.js` }
							'postcssOptions': {
								// 'config': path.resolve(__dirname, 'postcss.config.js')
								'config': path.resolve('src/js', 'postcss.config.js')
							}
						}
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					}
				]
			},
			{
				// css
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							// config: { path: `./postcss.config.js` }
							'postcssOptions': {
								// 'config': path.resolve(__dirname, 'postcss.config.js')
								'config': path.resolve('src/js', 'postcss.config.js')
							}
						}
					}
				]
			}
/*			{
				test: /\.scss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'postcss-loader',
						// options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
						// All postcss options is now under `postcssOptions`
						options: {
							'postcssOptions': {
								// 'config': path.resolve(__dirname, 'postcss.config.js')
								'config': path.resolve('src/js', 'postcss.config.js')
							}
						}
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true }
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader',
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					}, {
						loader: 'postcss-loader',
						// options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
						options: {
							'postcssOptions': {
								// 'config': path.resolve(__dirname, 'postcss.config.js')
								'config': path.resolve('src/js', 'postcss.config.js')
							}
						}
					}
				]
			}*/
		]
	},
	devServer: {
		overlay: true
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
}