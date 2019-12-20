/* eslint-env jest */

import Blog from './Blog'
import React from 'react'
import { shallow } from 'enzyme'

describe('Blog', () => {
  let blog
  beforeEach(() => {
    blog = shallow(<Blog />)
  })
  it('renders without crashing', () => {
    expect(blog).toBeDefined()
  })
})
