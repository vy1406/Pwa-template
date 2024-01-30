const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // Development server config
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // Other development-specific plugins
  ]
});
