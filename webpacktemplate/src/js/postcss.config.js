// npm i postcss-loader autoprefixer cssnano css-mqpacker --save-dev

module.exports = {
	plugins: [
		require('autoprefixer'),
		require('css-mqpacker'),
		require('cssnano')({
			preset: [
				'default', {
					'discardComments': {
						removeAll: true
					}
				}
			]
		})
	]
}