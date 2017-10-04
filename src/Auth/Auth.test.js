/* global it describe expect */

import React from 'react'
import ReactDOM from 'react-dom'
import auth from './Auth'

describe('Auth', () => {
  it('should be defined', () => {
    expect(auth).toBeDefined()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<auth />, div)
  })
})
