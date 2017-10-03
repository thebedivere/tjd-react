/* global describe it expect */

import * as reducers from './appReducers'
import * as actions from '../actions/actionTypes'

describe('reducers', () => {
  it('should have initial state', () => {
    expect(reducers.initialState).toBeDefined()
  })
  it('should return the initial state', () => {
    expect(reducers.appReducers(undefined, {})).toEqual(
      reducers.initialState)
  })
  it('should handle SET_INFO', () => {
    expect(reducers.appReducers(reducers.initialState, {})).toEqual({
      info: {
        title: 'loading...'
      }
    })
    expect(reducers.appReducers([], {
      type: actions.SET_INFO,
      info: {
        title: 'foo bar'
      }
    })).toEqual({
      info: {
        title: 'foo bar'
      }
    })
    expect(reducers.appReducers([], {
      type: actions.SET_USER,
      user: {
        email: 'foo@bar.com'
      },
      token: 'foobar'
    })).toEqual({
      user: {
        email: 'foo@bar.com'
      },
      token: 'foobar'
    })
    expect(reducers.appReducers([], {
      type: actions.SET_LINKS,
      links: [
        'foo', 'bar'
      ]
    })).toEqual({
      links: [
        'foo', 'bar'
      ]
    })
    expect(reducers.appReducers([], {
      type: actions.SET_BLOG_POSTS,
      blogPosts: {
        foo: {},
        bar: {}
      }
    })).toEqual({
      blogPosts: {
        foo: {},
        bar: {}
      }
    })
  })
})
