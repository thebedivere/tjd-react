import React, { useEffect, useState } from 'react'

import BlogPost from '../components/blog/BlogPost'
import ErrorMessage from '../components/Error'
import Navbar from '../components/Navbar'
import app from '../data/flamelink'

const PostPage = ({ firestore, info, match }) => {
  const postId = match.params.id
  
  const [site, setSite] = useState()
  const [error, setError] = useState()
  const [post, setPost] = useState()

  useEffect(() => {
    app.content.get({ 
      schemaKey: 'site',
       fields: ['title', 'tagline']
       })
      .then(setSite)
      .catch(setError)
  }, [])

      useEffect(() => {
      app.content.get({ 
        schemaKey: 'blogPost',
        entryId: postId,
        fields: ['title', 'date', 'body', 'published', 'id']
        })
        .then(setPost)
        .catch(setError)
    }, [postId])


  return (
    <div className='nav-margin'>
      {error && <ErrorMessage error={error}/>}
      {site && <Navbar title={site.title} />}
      <BlogPost id={postId} {...post} />
    </div>
  )
}

export default PostPage
