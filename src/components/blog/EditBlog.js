import { format, isValid } from 'date-fns'
import firebase from 'firebase/app'
import React, { useCallback, useEffect, useState } from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import ReactMde from 'react-mde'
import 'react-mde/lib/styles/css/react-mde-all.css'

const defaultPost = {
  title: '',
  date: Date.now().valueOf(),
  author: 'Josh Derocher',
  body: '',
  published: false
}

const _getDocument = postId => useDocumentData(
  firebase.firestore().doc(`blog/${postId}`)
)

const _setDocument = (postId, updatedPost) =>
  firebase.firestore().doc(`blog/${postId}`).set(updatedPost)

const EditBlog = ({ postId, getDocument = _getDocument, setDocument = _setDocument }) => {
  const [blog] = getDocument(postId)
  const { published, title, body, date, author } = blog || {}

  const [localBody, setLocalBody] = useState(defaultPost.body)
  const [localPublished, setLocalPublished] = useState(defaultPost.published)
  const [localTitle, setLocalTitle] = useState(defaultPost.title)
  const [localDate, setLocalDate] = useState(format(defaultPost.date, 'yyyy-MM-dd'))
  const [localAuthor, setLocalAuthor] = useState(defaultPost.author)

  const safelySetLocalDate = newDate => {
    if (isValid(newDate)) {
      setLocalDate(format(newDate, 'yyyy-MM-dd'))
    }
  }

  const pushUpdate = useCallback(newValue => {
    const updatedPost = { ...defaultPost, ...blog, ...newValue }
    setDocument(postId, updatedPost)
  }, [blog, postId, setDocument])

  // update the local values if the data changes
  // this happens after loading or if another user makes a change
  useEffect(() => setLocalBody(body), [body])
  useEffect(() => setLocalTitle(title), [title])
  useEffect(() => setLocalPublished(published), [published])
  useEffect(() => safelySetLocalDate(date), [date])
  useEffect(() => setLocalAuthor(author), [author])

  const handleTitleChange = useCallback(event => {
    const newTitle = event.target.value
    setLocalTitle(newTitle)
    pushUpdate({ title: newTitle })
  }, [pushUpdate])

  const handleBodyChange = useCallback(newBody => {
    setLocalBody(newBody)
    pushUpdate({ body: newBody })
  }, [pushUpdate])

  const handlePublishedChange = useCallback(event => {
    const newPublished = event.target.checked
    setLocalPublished(event.target.checked)
    pushUpdate({ published: newPublished })
  }, [pushUpdate])

  const handleDateChange = useCallback(event => {
    const newDate = event.target.value
    const timestamp = new Date(newDate).valueOf()
    setLocalDate(newDate)
    pushUpdate({ date: timestamp })
  }, [pushUpdate])

  const handleAuthorChange = useCallback(event => {
    const newAuthor = event.target.value
    setLocalAuthor(newAuthor)
    pushUpdate({ author: newAuthor })
  }, [pushUpdate])

  return (
    <section>
      <form>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={localTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            id='date'
            value={localDate}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            id='author'
            value={localAuthor}
            onChange={handleAuthorChange}
          />
        </div>
        <div className='checkbox'>
          <label htmlFor='published'>Published</label>
          <input
            type='checkbox' id='published' checked={localPublished}
            onChange={handlePublishedChange}
          />
        </div>
        <div>
          <label htmlFor='body'>Body</label>
          <ReactMde value={localBody} id='body' onChange={handleBodyChange} />
        </div>
      </form>
    </section>
  )
}

export default EditBlog
