const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.min.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'brilliant-tools',
      template: path.join(__dirname, 'src/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  resolve: {
    alias: {
      components: path.join(__dirname, 'src/components/'),
      constants: path.join(__dirname, 'src/constants.js'),
      services: path.join(__dirname, 'src/services/'),
      themes: path.join(__dirname, 'src/themes/'),
    },
  },
};
