var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  externals : {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  entry: [
    'react-hot-loader/patch',
    './src/index.tsx',
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devtool: false,

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'react-hot-loader/webpack',
          'ts-loader'
        ],
        exclude: /node-modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              localIdentName: '[local]',
              namedExport: true,
              camelCase: true
            }
          }
        ]
      }
    ]
  },

  devServer: {
    hot: true
  }
};
