const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: '../src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        exclude: /node_modules/,
        use: 'file-loader?name=./images/[name].[ext]'
      },
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "../src/favicon.ico", to: ""}, 
        { from: "../src/manifest.json", to: ""}, 
        { from: "../src/logo192.png", to: ""}, 
        { from: "../src/logo512.png", to: ""}, 
      ]
    }),
    // both added in dev and prod. but should not. will leave it right now like this.
    new InjectManifest({
      swSrc: '../src/src-sw.js',
      swDest: 'sw.js',

      maximumFileSizeToCacheInBytes: 5000000,
    }),
  ]
};
