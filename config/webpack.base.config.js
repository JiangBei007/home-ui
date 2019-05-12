'use strict'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require("path")
const loader = process.env.NODE_ENV === 'production'? MiniCssExtractPlugin.loader:'vue-style-loader';
console.log(process.env.NODE_ENV)
module.exports = {
	alias: {
	  "@": path.resolve(__dirname, '../src'),
	  "root-directory": path.resolve(__dirname, '../hometown/index.js'),
	},
	rules: [
		{
			test: /\.vue$/,
			loader: 'vue-loader',
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		},
		{
			test: /\.css$/,
			use: [
				loader,
			  {
			  loader: 'css-loader',
			  options: {
					// 开启 CSS Modules
					//modules: true,
					// 自定义生成的类名
					localIdentName: '[local]_[hash:base64:8]'
				  }
			  },
			//"postcss-loader"
			]
		},
		{
		  test: /\.less$/,
		  use: [
			'vue-style-loader',
			loader,
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
				name: process.env.NODE_ENV === 'production'?path.posix.join("static",'img/[name].[hash:7].[ext]'):"",
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
}