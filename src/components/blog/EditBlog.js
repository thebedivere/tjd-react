import React, { useCallback } from 'react'
import NewPost from './NewPost'
import firebase from 'firebase/app'
import { useDocumentData } from 'react-firebase-hooks/firestore'

function updatePost (newPost, oldPost) {
  const updatedPost = Object.assign({}, oldPost, newPost)
  return {
    author: updatedPost.author || defaultPost.author,
    body: updatedPost.body || defaultPost.body,
    date: updatedPost.date || defaultPost.date,
    published: publishedBoolean(updatedPost.published),
    title: updatedPost.title || defaultPost.title
  }
}

function publishedBoolean (val) {
  if (val === 'on' || val === true) {
    return true
  }
  return false
}

const defaultPost = {
  title: '',
  date: Date.now(),
  author: 'Josh Derocher',
  body: '',
  published: true
}

const EditBlog = ({ postId }) => {
  const [blog] = useDocumentData(
    firebase.firestore().doc(`blog/${postId}`)
  )
  const { published, title, body, date, author } = blog || {}

  const handleChange = useCallback(event => {
    const documentRef = firebase.firestore().doc(`blog/${postId}`)

    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const post = updatePost({ [event.target.id]: value }, { author, body, title, date })
    documentRef.set(post)
  }, [author, body, date, title, postId])

  return (
    <section>
      <div className='right-menu'>
        <NewPost />
        <div className='checkbox'>
          <label>Published</label>
          <input type='checkbox' id='published' checked={published || false} onChange={handleChange} />
        </div>
      </div>
      <form>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={title || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='body'>Body</label>
          <textarea
            id='body'
            value={body || ''}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  )
}

export default EditBlog
