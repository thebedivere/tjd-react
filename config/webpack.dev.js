const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'tmp'),
    chunkFilename: '[name]-bundle.js',
    publicPath: '/'
  },
  devServer: {
    compress: false, // enables gzip
    contentBase: '../src',
    disableHostCheck: true, // allows you to access the dev server from another machine
    host: '0.0.0.0',
    hot: true, // allows webpack to refresh js modules without doing a rebuild or a page refresh
    hotOnly: false, // set this to only do hot swapping. If a module can't be hot swapped you'll need to manually refresh the page.
    https: false, // enable https
    inline: true, // setting this to false will load the dev server in an iframe.
    open: false, // Open a webpage to the dev server.
    overlay: true, // Show an error page in the browser when the code fails to compile.
    port: 3939, // the port for the dev server
    stats: { colors: true },
    historyApiFallback: true
  },
  devtool: 'source-map',
  module: {

    rules: [
      // image loaders
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      },
      // scss loader
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    // set node environment to development
    new webpack.DefinePlugin({
      'NODE_ENV': process.env.NODE_ENV || 'development'
    }),

    // Adds webpack HMR support. It act's like livereload,
    // reloading page after webpack rebuilt modules.
    // It also updates stylesheets and inline assets without page reloading.
    new webpack.HotModuleReplacementPlugin(),

        // settings for extracting css from js
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })

  ]
})
