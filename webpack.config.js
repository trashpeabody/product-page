const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require ('path')

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
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build/')
  },
  module: {
    rules: [jsRules, styleRules, imageRules]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  devServer: {
    open: true,
  }
}