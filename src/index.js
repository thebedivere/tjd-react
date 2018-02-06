import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import createStore from './data/createStore'
import './style/index.scss'
import 'babel-polyfill'

import * as OfflinePluginRuntime from 'offline-plugin/runtime'
OfflinePluginRuntime.install()

const store = createStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

require('offline-plugin/runtime').install()

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
