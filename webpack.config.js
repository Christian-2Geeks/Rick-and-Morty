const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.html',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    }
  ]
  },
  plugin: [
    new HTMLWebpackPlugin([
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ])
  ]
}