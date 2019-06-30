const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mode = process.env.NODE_ENV || "development";

const entry = {
  "app": ["./assets/js/app.ts", "./assets/sass/style.sass"]
}

const output = {
  path: path.resolve(__dirname, 'dist'),
  filename: "[name].js"
}     

const _module = {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },

    {
      test: /\.js$/,
      use: ["source-map-loader"],
      enforce: "pre"
    },

    {
      test: /\.sass$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }
  ]
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'style.css'
  }),

  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer()
      ]
    }
  })
]

module.exports = {
  entry,
  mode,
  output,
  module: _module,
  plugins
};