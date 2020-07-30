const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpritePlugin = require('extract-svg-sprite-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    appJs: './src/js/app.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: SpritePlugin.cssLoader
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: SpritePlugin.loader
          }
        ],
      }
    ]
  },

  output: {
    filename: 'js/app.js',
    path: resolve(__dirname, 'dist')
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    }),
    new SpritePlugin({
      filename: 'svg/sprite.svg',
      spriteType: 'stack',
      publicPath: '../'
    }),
    new HtmlWebpackPlugin()
  ]
};
