import './style/index.scss'

import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

OfflinePluginRuntime.install()

ReactDOM.render(<App />, document.getElementById('root'))
