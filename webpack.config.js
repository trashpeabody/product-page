const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const path = require('path')

const jsRules = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ]
    ]
  }
}

const styleRules = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
}

const imageRules = {
  test: /\.(png|jpg|jpeg|gif)$/i,
  type: 'asset/resource'
}

const svgRules = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: [{ loader: '@svgr/webpack', options: { icon: true } }]
}

module.exports = (env, argv) => {
  const { mode } = argv
  const isProduction = mode === 'production'
  return {
    entry: './src/index.js',
    output: {
      filename: isProduction
        ? '[name].[contenthash].js'
        : 'main.js',
      path: path.resolve(__dirname, 'build/')
    },
    module: {
      rules: [jsRules, styleRules, imageRules, svgRules]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
      new FaviconsWebpackPlugin('src/assets/favicon-32x32.png')
    ],
    devServer: {
      open: true
    },
    devtool: isProduction ? '' : 'source-map'
  }
}
