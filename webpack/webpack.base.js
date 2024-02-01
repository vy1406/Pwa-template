const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');
const environment = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
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
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new Dotenv({
        path: `.env.${environment}`,
    }),
    new InjectManifest({
      swSrc: './public/sw.js',
      swDest: 'service-worker.js',
      
      maximumFileSizeToCacheInBytes: 5000000,
    }),
  ]
};
