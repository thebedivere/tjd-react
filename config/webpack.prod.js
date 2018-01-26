const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BabelWebpackPlugin = require('babel-minify-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, '..', 'dist'),
    chunkFilename: '[name]-bundle-[hash].js'
  },
  devtool: false,
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
  resolve: {
    alias: {
      // Avoid Lodash variant duplication
      // https://www.contentful.com/blog/2017/10/27/put-your-webpack-bundle-on-a-diet-part-3/
      'lodash-es': 'lodash',
      'lodash.some': 'lodash/some',
      'lodash.isplainobject': 'lodash/isplainobject',
      'lodash.memoize': 'lodash/memoize',
      'lodash.uniq': 'lodash/uniq',
      'lodash.get': 'lodash/get',
      'lodash.camelcase': 'lodash/camelcase',
      'lodash.assign': 'lodash/assign',
      'lodash.clonedeep': 'lodash/clonedeep',
      'lodash.meregewith': 'lodash/mergewith',
      'lodash.pad': 'lodash/pad',
      'lodash.padend': 'lodash/padend',
      'lodash.padstart': 'lodash/padstart',
      'lodash.cond': 'lodash/cond'
    }
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 8444
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      }
    }),
    // set node enviroment to production
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
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
    })
  ]
})
