const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'graphlib.js',
    library: {
      name: 'graphlib',
      type: 'assign'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

module.exports = config;
