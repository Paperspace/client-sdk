const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const webpack = require('webpack');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');

const packageJson = require('./package.json');

const { ifProduction, ifNotProduction } = getIfUtils(process.env.NODE_ENV);
const destination = path.resolve(__dirname, 'dist');

module.exports = {
  mode: ifProduction('production', 'development'),
  watch: ifProduction(false, true),
  devtool: ifProduction('source-map', 'cheap-module-eval-source-map'),
  entry: {
    main: './src/index.js',
    ...ifNotProduction({ streams: './examples/streams.js' })
  },
  output: {
    path: destination,
    filename: '[name].js',
    library: packageJson.name,
    libraryTarget: 'umd',
    globalObject: '(self || this)'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        STREAM_HOST: JSON.stringify(process.env.STREAM_HOST)
      }
    }),
    new FileManagerPlugin({
      onEnd: {
        copy: removeEmpty([
          ifNotProduction({
            source: path.resolve(__dirname, 'examples', 'index.html'),
            destination
          })
        ])
      }
    })
  ]
};
