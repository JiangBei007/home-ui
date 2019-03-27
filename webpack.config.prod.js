const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
	mode: 'production',
	entry:'./src/main.js',
	output:{
		filename: 'static/js/[name].[hash].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath:"./"
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
					MiniCssExtractPlugin.loader,
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
				MiniCssExtractPlugin.loader,
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
					name: path.posix.join("static",'img/[name].[hash:7].[ext]')
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
		new MiniCssExtractPlugin({filename: "static/css/style.css"}),
		new CleanWebpackPlugin(["dist"]),
		new CopyWebpackPlugin([
		  {
		    from: path.resolve(__dirname, './static'),
		    to: path.resolve(__dirname, './dist/static'),
		    ignore: ['.*']
		  }
		]),
	]
}