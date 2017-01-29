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
    library: 'react-codemirror',
    libraryTarget: 'umd' // 'var' // 'umd'
  },
  module : {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          //presets: ['react', 'es2015', 'stage-0'],
          //plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]

//    loaders : [
//      {
//        test : /\.jsx?/,
//        include : APP_DIR,
//        loader : 'babel'
//      }
//    ]
  }
};

module.exports = config;