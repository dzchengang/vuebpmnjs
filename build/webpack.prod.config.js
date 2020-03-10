const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		//  app: './src/index.js'
		// 解决 IE [vuex] vuex requires a Promise polyfill in this browser. 的问题
		app: ["babel-polyfill", "./src/index.js"]
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].[hash].js',
		publicPath: '/'
	},
	module: {
		rules: [{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/
			},
			{
				test: /\.less$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "vue-style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: '[name].[ext]?[hash]',
					outputPath: 'images'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
			favicon: path.resolve('static/assets/images/favicon.ico'),
		}),
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
			ignoreOrder: false
		}),
		new copyWebpackPlugin([{
			from: path.resolve(__dirname, '../static'),
			to: './static'
		}])
	],
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src'),
			'@assets': path.resolve(__dirname, '../static/assets'),
			'@api': path.resolve(__dirname, '../src/api'),
			'@components': path.resolve(__dirname, '../src/components')
		}
	},
	devServer: {
		historyApiFallback: {
			index: '/index.html'
		}
	}
}
