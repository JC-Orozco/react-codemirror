var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: 
    APP_DIR + '/Codemirror.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'react-codemirror.js',
    library: 'ReactCodemirror',
    libraryTarget: 'umd' // 'var' // 'umd'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;