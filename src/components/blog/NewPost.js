import React, { useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import firebase from 'firebase/app'
const blogCollection = firebase.firestore().collection('blog')

const NewPost = withRouter(({ history }) => {
  const onClick = useCallback(() => blogCollection.add({
    date: Date.now().valueOf()
  }).then(docRef => history.push(`/post/${docRef.id}`)), [history])

  return (
    <div className='new-post'>
      <button onClick={onClick}>
        Create new post
      </button>
    </div>
  )
})

export default NewPost
