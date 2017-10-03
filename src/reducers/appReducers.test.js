/* global describe it expect */

import appReducers, { initialState } from './appReducers'
import * as actions from '../actions/actionTypes'

describe('reducers', () => {
  it('should have initial state', () => {
    expect(initialState).toBeDefined()
  })
  it('should return the initial state', () => {
    expect(appReducers(undefined, {})).toEqual(
      initialState)
  })
  it('should handle SET_INFO', () => {
    expect(appReducers(initialState, {})).toEqual({
      info: {
        title: 'loading...'
      }
    })
    expect(appReducers([], {
      type: actions.SET_INFO,
      info: {
        title: 'foo bar'
      }
    })).toEqual({
      info: {
        title: 'foo bar'
      }
    })
    expect(appReducers([], {
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
    expect(appReducers([], {
      type: actions.SET_LINKS,
      links: [
        'foo', 'bar'
      ]
    })).toEqual({
      links: [
        'foo', 'bar'
      ]
    })
    expect(appReducers([], {
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
