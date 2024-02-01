const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');
const environment = process.env.NODE_ENV || 'development';

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
    new Dotenv({
      path: `.env.${environment}`,
    }),
    new InjectManifest({
      swSrc: '../public/sw.js',
      swDest: 'service-worker.js',

      maximumFileSizeToCacheInBytes: 5000000,
    }),
  ]
};
