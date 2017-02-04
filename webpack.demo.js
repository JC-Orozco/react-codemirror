const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './demo'),
  entry: {
    demo: './index.jsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  }
};

