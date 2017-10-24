var path = require('path');
var webpack = require('webpack');

var libraryName = 'react-redrag';

module.exports = {
  entry: {
    'react-redrag': './src/react-redrag.ts',
    'react-redrag.min': './src/react-redrag.ts'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'ReactRedrag',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/
    })
  ],

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    }
  }
};
