/* global it describe expect */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import appReducers from './reducers/appReducers'
const store = createStore(appReducers)

describe('app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App store={store} />, div)
  })
  it('should be defined', () => {
    expect(App).toBeDefined()
  })
})
