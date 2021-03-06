import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import BlogPost from '../components/blog/BlogPost'
import ErrorMessage from '../components/Error'
import LoadingSpinner from '../components/Loading/LoadingSpinner'
import Navbar from '../components/Navbar'
import app from '../data/flamelink'

const PostPage = ({ match }) => {
  const postId = match.params.id

  const [ site, setSite ] = useState()
  const [ error, setError ] = useState()
  const [ post, setPost ] = useState()

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
      schemaKey: 'blogPost',
      entryId: postId,
      fields: [ 'title', 'date', 'body', 'published', 'id' ]
    })
      .then(setPost)
      .catch(setError)
  }, [ postId ])

  return (
    <div className='nav-margin'>
      {error && <ErrorMessage error={error}/>}
      {site && <Navbar title={site.title} />}
      {post ? <BlogPost id={postId} {...post} /> : <LoadingSpinner/>}
    </div>
  )
}

PostPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
}

export default PostPage
