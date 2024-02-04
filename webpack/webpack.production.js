const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    // Development server config
  },
  plugins: [
    new Dotenv({
      path: `.env.dev`,
      systemvars: true
    }),
  ]
});
