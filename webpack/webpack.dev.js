const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new Dotenv({
      path: `.env.production`,
      systemvars: true
    }),
  ]
});
