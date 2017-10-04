/* global it describe expect */

import { requestDocument } from './database'

describe('requestDocument', () => {
  it('returns a document', () => {
    const requestTest = requestDocument('test', 'test')
    requestTest().then(doc => expect(doc).toNotBe(true))
  })
  it('should be defined', () => {
    expect(requestDocument).toBeDefined()
  })
})
