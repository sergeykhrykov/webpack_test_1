'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {

  entry: './js/main.js',

  output: {
    path: './dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?optional[]=runtime'
    }]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'js/vendor']
  },

  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ]

};
