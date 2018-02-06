import React from 'react'

import App from './src/App'
import createStore from './data/createStore'
import './style/index.scss'
import 'babel-polyfill'

import * as OfflinePluginRuntime from 'offline-plugin/runtime'
OfflinePluginRuntime.install()

const store = createStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

require('offline-plugin/runtime').install()

const express = require('express')

const app = express()

const ReactDOMServer = require('react-dom/server')
const logger = require('morgan')

const path = require('path')
const fs = require('fs')

logger('tiny')

app.use('*', (req, res, next) => {
  const filePath = path.resolve(__dirname, './dist/index.html')

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error(err)
      return res.status(404).end()
    }

    const html = ReactDOMServer.renderToString(<App store={store} />)

    return res.send(htmlData.replace(
            '<div id="root"></div>',
            `<div id="root">${html}</div>`
        ))
  })
})

app.use('/test', (req, res) => res.json({ hello: 'world' }))

app.use(express.static('dist'))

app.listen(2134, () => console.log(2134))
