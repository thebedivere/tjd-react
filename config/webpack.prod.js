const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BabelWebpackPlugin = require('babel-minify-webpack-plugin')

module.exports = merge(common, {
  output: {
    filename: '[name]-bundle-[hash].js',
    path: path.resolve(__dirname, '..', 'dist'),
    chunkFilename: '[name]-bundle-[hash].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      // image loader
      // optimize images
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                quality: '65-80',
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 8
              },
              pngquant: {
                quality: '65-80',
                speed: 3
              }
            }
          }
        ]
      },
      // scss loader
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('postcss-discard-duplicates'),
                  require('cssnano')({
                    presets: 'advanced'
                  })
                ]
              }
            },
            'sass-loader'
          ]
        })
      }

    ]
  },
  performance: {
    hints: 'warning', // 'error' or false are valid too
    maxEntrypointSize: 100000, // in bytes
    maxAssetSize: 450000 // in bytes
  },
  plugins: [
    // set node enviroment to production
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // clean build path
    new CleanWebpackPlugin([ 'dist' ], {
      root: path.resolve(__dirname, '../')
    }),
    // compress with webpack minify
    new BabelWebpackPlugin({
      removeConsole: true
    },
      {
        comments: false
      }),

    // settings for extracting css from js
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module /*, count */) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1
      }
    })
  ]
})
