'use strict'

const path = require('path')

module.exports = {
  dev: {
	filename: '[name].[hash].bundle.js',
	path: path.resolve(__dirname, './dist'),
	contentBase: path.join(__dirname, "./dist"),
	port: 9000,
    proxyTable: {
	  	'/api': {
			target: '127.0.0.1:7001',
			ws: true,
			changeOrigin: true
	  	},
	},
    host: 'localhost', // can be overwritten by process.env.HOST
  },
  build: {
    filename: 'static/js/[name].[hash].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath:"./"
  }
}
		