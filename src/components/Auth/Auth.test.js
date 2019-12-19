/* eslint-env jest */

import React from 'react'
import Auth from './Auth'
import { shallow } from 'enzyme'
import 'firebase/app'

describe('Auth', () => {
  let auth
  beforeEach(() => {
    auth = shallow(<Auth />)
  })
  it('renders without crashing', () => {
    expect(() => <auth />).not.toThrow()
  })
})
