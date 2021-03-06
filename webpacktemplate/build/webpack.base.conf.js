const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets/'
}

module.exports = {
	externals : {
		path: PATHS
	},

	entry: {
		app: PATHS.src,
		lk: `${PATHS.assets}js/lk.js`
	},
	output: {
		filename: `${PATHS.assets}js/[name].[hash].js`,
		path: PATHS.dist,
		publicPath: '/'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loader: {
						scss: 'vue-style-loader!css-loader!sass-loader'
					}
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
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
							config: { path:  `${PATHS.src}/js/postcss.config.js`  }
/*							'postcssOptions': {
								// 'config': path.resolve(__dirname, 'postcss.config.js')
								'config': path.resolve(`${PATHS.src}/js', 'postcss.config.js`)
							}*/
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
							config: { path:  `${PATHS.src}/js/postcss.config.js`  }
/*
							'postcssOptions': {
								// 'config': path.resolve(__dirname, 'postcss.config.js')
								'config': path.resolve(`${PATHS.src}/js', 'postcss.config.js`)
							}
*/
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			vue$ : 'vue/dist/vue.js'
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			// filename: '[name].css',
			filename: `${PATHS.assets}css/[name].[hash].css`,
			chunkFilename: '[id].css',
		}),
		new HtmlWebpackPlugin({
			hash: false,
			template: `${PATHS.src}/index.html`,
			filename: './index.html'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: `${PATHS.src}/img`, to: `${PATHS.assets}img` },
				{ from: `${PATHS.src}/assets`, to: '' },
		]}),
	],
}