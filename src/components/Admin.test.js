/* eslint-env jest */

import { Admin } from './Admin'
import { shallow } from 'enzyme'
import React from 'react'

describe('Admin', () => {
  let admin
  beforeEach(() => {
    admin = shallow(<Admin />)
  })
  it('should not be visible if there is no user', () => {
    expect(admin.text()).toBe('')
  })
  it('should not be visible if there a user and the email is not joshua.aarond@gmail.com', () => {
    admin.setProps({
      user: {
        email: 'testing@test.com'
      }
    })
    expect(admin.text()).toBe('')
  })
  it('should display email if user exists and email is joshua.aarond@gmail.com', () => {
    admin.setProps({
      user: {
        email: 'joshua.aarond@gmail.com'
      }
    })
    expect(admin.text()).toBe('Welcome joshua.aarond@gmail.com')
  })
})
