const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
module.exports = {
	mode: 'development',
	entry:'./src/main.js',
	output:{
		filename: '[name].[hash].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				/* 排除模块安装目录的文件 */
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
				  process.env.NODE_ENV !== 'production'
					? 'vue-style-loader'
					: MiniCssExtractPlugin.loader,
				  {
				  loader: 'css-loader',
				  options: {
						// 开启 CSS Modules
						//modules: true,
						// 自定义生成的类名
						localIdentName: '[local]_[hash:base64:8]'
					  }
				  }
				]
			},
			{
			  test: /\.less$/,
			  use: [
				'vue-style-loader',
				{
				  loader: 'css-loader',
				  //options: { modules: true }
				},
				'less-loader'
			  ]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: './index.html',
			  template: './index.html',
			  inject: true,
			}),
		new VueLoaderPlugin(),
		new FriendlyErrorsWebpackPlugin({
			 compilationSuccessInfo: {
				messages: ['You application is running here http://localhost:9000'],
			  },
		}),
	],
	devServer: {
	  contentBase: path.join(__dirname, "dist"),
	  compress: true,
	  overlay: true, // 编译出现错误时，将错误直接显示在页面上
	  quiet: true,
	  port: 9000,
	  proxy: {
	  	'/api': {
	  	target: '127.0.0.1:7001',
	  	ws: true,
	  	changeOrigin: true
	  	},
	  },
	  disableHostCheck: true
	}
}