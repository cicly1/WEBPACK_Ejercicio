const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
plugins: [
    new BundleAnalyzerPlugin({reportFilename:"prueba.html"}),
],
});

