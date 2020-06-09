/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'

import Blog from './Blog'

describe('Blog', () => {
  let blog

  beforeEach(() => {
    blog = shallow(<Blog />)
  })

  it('renders without crashing', () => {
    expect(blog).toBeDefined()
  })
})
