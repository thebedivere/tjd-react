import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import Blog from '../components/blog/Blog'
import ErrorMessage from '../components/Error'
import Header from '../components/Header/'
import Links from '../components/Links/'
import LoadingSpinner from '../components/Loading/LoadingSpinner'
import app from '../data/flamelink'

const IndexPage = () => {
  const [ site, setSite ] = useState()
  const [ links, setLinks ] = useState()
  const [ blog, setBlog ] = useState()
  const [ error, setError ] = useState()

  useEffect(() => {
    app.content.get({
      schemaKey: 'site',
      fields: [ 'title', 'tagline' ]
    })
      .then(setSite)
      .catch(setError)
  }, [])

  useEffect(() => {
    app.content.get({
      schemaKey: 'links',
      fields: [ 'title', 'icon', 'url' ]
    })
      .then(setLinks)
      .catch(setError)
  }, [])

  useEffect(() => {
    app.content.get({
      schemaKey: 'blogPost',
      fields: [ 'title', 'date', 'body', 'published', 'id' ]
    })
      .then(setBlog)
      .catch(setError)
  }, [])

  return (
    <>
      {error && <ErrorMessage error={error}/>}
      {site && <Header title={site.title} tagline={site.tagline} />}
      {links && <Links links={links} />}
      {blog ? <Blog blogPosts={blog} /> : <LoadingSpinner/>}
    </>
  )
}

export default IndexPage
