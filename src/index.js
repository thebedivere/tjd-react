import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import appReducers from './reducers/appReducers'
import { createStore } from 'redux'
import './index.scss'

const store = createStore(appReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

require('offline-plugin/runtime').install()

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
