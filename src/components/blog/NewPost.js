import React from 'react'
import { withFirestore } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'

const NewPost = withRouter(({ firestore: { add }, history }) =>
  <div className='new-post'>
    <button onClick={() => add('blog', {
      date: Date.now()
    }).then(docRef => history.push(`/post/${docRef.id}`))}>
        Create new post
    </button>
  </div>
)

export default withFirestore(NewPost)
