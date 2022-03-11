const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')

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

const sassRules = {
  test: /\.s[ac]ss$/i,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
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

const plugins = (isProduction) => {
  return (
    isProduction
      ? [
          new HtmlWebpackPlugin({ template: 'src/index.html' })
        ]
      : [
          new HtmlWebpackPlugin({ template: 'src/index.html' }),
          new Dotenv()
        ]
  )
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
      rules: [jsRules, styleRules, sassRules, imageRules, svgRules]
    },
    plugins: plugins(isProduction),
    devServer: {
      open: true,
      historyApiFallback: true
    }
  }
}
