process.env.NODE_ENV = "development"
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpackBaseConf = require("./webpack.base.config")
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const config = require("./config")
module.exports = {
	mode: process.env.NODE_ENV,
	entry:'./src/main.js',
	output:{
		filename: config.dev.filename,
		path:config.dev.path,
	},
	module: {
		rules: webpackBaseConf.rules,
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
				messages: [`You application is running here http://localhost:${config.dev.port}`],
			  },
		}),
	],
	devServer: {
	  contentBase: config.dev.contentBase,
	  compress: true,
	  overlay: true, // 编译出现错误时，将错误直接显示在页面上
	  quiet: true,
	  port: config.dev.port,
	  proxy:config.dev.proxyTable,
	  disableHostCheck: true
	}
}