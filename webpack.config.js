'use strict';

const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const ExtractWebpackPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV;
const production = process.env.NODE_ENV === 'production';

if (production)
  plugins = plugins.concat([ new CleanWebpackPlugin(), new UglifyWebpackPlugin() ]);

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: process.env.CDN_URL,
  },
  plugins: [
    new EnvironmentPlugin(['NODE_ENV']),
    new ExtractWebpackPlugin('bundle-[hash].css'),
    new HTMLWebpackPlugin({template: `${__dirname}/src/index.html`}),
  ],
  devServer: {
    historyApiFallback: true,
  },
  devtool: production ? undefined : 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 60000,
              name: 'image/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /react-icons\/(.)*(.js)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },      
    ],
  },
};