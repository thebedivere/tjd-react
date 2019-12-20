/* eslint-env jest, jasmine */

import EditBlog from './EditBlog'
import { shallow } from 'enzyme'
import React from 'react'
import { format } from 'date-fns'

describe('EditBlog', () => {
  let editBlog
  let getDocument
  let setDocument
  beforeEach(() => {
    getDocument = jasmine.createSpy('getDocument').and.returnValue([{}])
    setDocument = jasmine.createSpy('setDocument')
    editBlog = shallow(
      <EditBlog
        postId='101'
        getDocument={getDocument}
        setDocument={setDocument}
      />
    )
  })
  it('should render default post if there is no other value', () => {
    const today = new Date().valueOf()

    const title = editBlog.find('#title')
    const date = editBlog.find('#date')
    const author = editBlog.find('#author')
    const body = editBlog.find('#body')
    const published = editBlog.find('#published')

    expect(author.prop('value')).toEqual('Josh Derocher')
    expect(title.prop('value')).toEqual('')
    expect(date.prop('value')).toEqual(format(today, 'yyyy-MM-dd'))
    expect(body.prop('value')).toEqual('')
    expect(published.prop('checked')).toEqual(false)
  })

  it('should update the title when the value changes', () => {
    const mockTitle = 'The Hobbit'
    const title = editBlog.find('#title')
    title.simulate('change', {
      target: {
        value: mockTitle
      }
    })
    expect(setDocument).toHaveBeenCalledWith('101', jasmine.objectContaining({ title: mockTitle }))
  })

  it('should update the date when the value changes', () => {
    const mockDate = '2019-12-19'
    const date = editBlog.find('#date')
    date.simulate('change', {
      target: {
        value: mockDate
      }
    })
    expect(setDocument).toHaveBeenCalledWith('101', jasmine.objectContaining({ date: 1576713600000 }))
  })

  it('should update the author when the value changes', () => {
    const mockAuthor = 'Frodo Baggins'
    const author = editBlog.find('#author')
    author.simulate('change', {
      target: {
        value: mockAuthor
      }
    })
    expect(setDocument).toHaveBeenCalledWith('101', jasmine.objectContaining({ author: mockAuthor }))
  })

  // we don't test the body (ReactMDE)
  // it's an external component that already has internal unit tests

  it('should update the published when the value changes', () => {
    const published = editBlog.find('#published')
    published.simulate('change', {
      target: {
        checked: true
      }
    })
    expect(setDocument).toHaveBeenCalledWith('101', jasmine.objectContaining({ published: true }))
  })
})
