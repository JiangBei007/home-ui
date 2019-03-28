process.env.NODE_ENV = 'production';
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpackBaseConf = require("./webpack.base.config")
const config = require("./config")


module.exports = {
	mode: "production",
	entry:path.resolve(__dirname, './src/main.js'),
	output:{
		filename: config.build.filename,
		path: config.build.path,
		publicPath:config.build.publicPath,
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
		new MiniCssExtractPlugin({filename: "./static/css/style.css"}),
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