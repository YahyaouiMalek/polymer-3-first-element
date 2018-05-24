const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    // 'custom-elements-es5-adapter': ['@webcomponents/webcomponentsjs/custom-elements-es5-adapter'],
    // 'webcomponents-loader': ['@webcomponents/webcomponentsjs/webcomponents-loader'],
    // vendor: ['./src/vendor'],
    app: [
        'webpack-dev-server/client?http://localhost:8080', // live reload
        './demo/demo-element'
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dist'),
    hot: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { verbose: true, root: path.resolve(__dirname, '..') }),
    // new CommonsChunkPlugin({
    //   // The order of this array matters
    //   names: ['vendor'],
    //   minChunks: Infinity
    // }),
    new HtmlWebpackPlugin({
      template: './demo/index.html'
    }),
  ]
};