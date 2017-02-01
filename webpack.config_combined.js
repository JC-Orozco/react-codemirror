var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: 
    //APP_DIR + '/CodeMirror.jsx',
    APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'react-codemirror1.js',
//    library: 'react-codemirror',
//    libraryTarget: 'umd' // 'var' // 'umd'
  },
  module : {
    loaders: [
      {
        test: /\.jsx?$/,
//        exclude: /(node_modules|bower_components)/,
//		externals: {
//			'react': {
//			  root: 'React',
//			  commonjs2: 'react',
//			  commonjs: 'react',
//			  amd: 'react'
//			},
//			'react-dom': {
//			  root: 'ReactDOM',
//			  commonjs2: 'react-dom',
//			  commonjs: 'react-dom',
//			  amd: 'react-dom'
//			}
//		  },
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