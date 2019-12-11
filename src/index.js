import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style/index.scss'
import 'babel-polyfill'

import * as OfflinePluginRuntime from 'offline-plugin/runtime'

OfflinePluginRuntime.install()

ReactDOM.render(<App />, document.getElementById('root'))
