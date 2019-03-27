const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
  module.exports = {
    entry:'./src/main.js',
    output:{
    	path:path.resolve(__dirname,'dist'),
    	filename:'bundle.js'
    },
   plugins: [
	 new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
   ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };