'use strict';

require('dotenv').config();

const production = process.env.NODE_ENV === 'production';

const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const ExtractWebpackPlugin = require('extract-text-webpack-plugin');
const env = process.env.NODE_ENV;

let plugins = [
  new EnvironmentPlugin(['NODE_ENV']),
  new ExtractWebpackPlugin('bundle-[hash].css'),
  new HTMLWebpackPlugin({template: `${__dirname}/src/index.html`}),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
    __API_URL__: JSON.stringify(process.env.API_URL),
    '__ROVERVIEW_API__': JSON.stringify(process.env.ROVERVIEW_API),
    '__API_PHOTO_URL__': JSON.stringify(process.env.API_PHOTO_URL),
    '__API_MANIFEST_URL__': JSON.stringify(process.env.API_MANIFEST_URL),
    '__API_KEY__': JSON.stringify(process.env.API_KEY),
  }),
];

if (process.env.NODE_ENV === 'production')
  plugins = plugins.concat([ 
    new CleanWebpackPlugin(), 
    new UglifyWebpackPlugin(), 
  ]);

module.exports = {
  plugins,
  entry: `${__dirname}/src/index.js`,
  devServer: {
    historyApiFallback: true,
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
        exclude: /\.icon.svg$/,
        use: [
          {
            loader: 'url-loader',
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