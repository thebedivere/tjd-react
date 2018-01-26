const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
const OfflinePlugin = require('offline-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const exclude = [
  /node_modules/,
  /spec\.js$/,
  /bower_components/,
  /register-service-worker\.js$/,
  /manifest.json$/
]

module.exports = {
  entry: {
    index: path.join(__dirname, '../src', 'index.js'),
    vendor: [
      'recompose',
      'underscore',
      'react',
      'react-redux',
      'redux',
      'lodash',
      'date-fns',
      'react-dom',
      'react-markdown'
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: ['lodash'],
          presets: [['env', { 'modules': false, 'targets': { 'node': 4 } }]]
        }
      },

      // font loaders
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, exclude, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, exclude, use: 'file-loader' },
      // icon loader
      { test: /\.ico?$/, use: 'file-loader' },
      {
        test: /manifest.json$/,
        // include: [ /assets\//, /img\// ],
        use: [
          'file-loader?name=manifest.json',
          'web-app-manifest-loader'
        ]
      }
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin({
      currying: true,
      shorthands: false,
      coercions: true,
      chaining: false,
      unicode: false,
      deburring: false,
      metadata: false,
      guards: false,
      paths: true,
      memoizing: false,
      collections: false,
      exotics: false,
      flattening: false,
      caching: false,
      cloning: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource !== undefined &&
        resource.indexOf('node_modules') !== -1
      )
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, '../src/layouts/index.ejs'),
      hash: true
    })
  ]
}
