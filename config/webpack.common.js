const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const OfflinePlugin = require('offline-plugin')
const webpack = require('webpack')
const exclude = [
  /node_modules/,
  /spec\.js$/,
  /bower_components/,
  /register-service-worker\.js$/,
  /manifest.json$/
]

module.exports = {
  entry: [
    path.join(__dirname, '../src', 'index.js')
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude,
        use:
        [
          'babel-loader'
        ]
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
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './public/index.ejs',
      hash: true
    }),
    new webpack.DefinePlugin({
      'NODE_ENV': process.env.NODE_ENV || 'development'
    })
  ],
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'src/assets'),
      Styles: path.resolve(__dirname, 'src/assets/styles'),
      Img: path.resolve(__dirname, 'src/img'),
      Mocks: path.resolve(__dirname, 'test/mocks'),
      app: path.resolve(__dirname, 'src/app'),
      /* eslint camelcase: 0 */
      node_modules: path.resolve(__dirname, './node_modules')
    }
  }
}
