import React from 'react'
import { compose, withHandlers } from 'recompose'
import NewPost from './NewPost'

const EditBlog = props =>
  <section>
    <div className='right-menu'>
      <NewPost />
      <div className='checkbox'>
        <label>Published</label>
        <input type='checkbox' id='published' checked={props.published || false} onChange={props.handleChange} />
      </div>
    </div>
    <form>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          value={props.title || ''}
          onChange={props.handleChange} />
      </div>
      <div>
        <label htmlFor='body'>Body</label>
        <textarea
          id='body'
          value={props.body || ''}
          onChange={props.handleChange} />
      </div>
    </form>
  </section>

export default compose(
  withHandlers({
    handleChange: props => event => {
      const { author, body, title, date } = props
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
      const post = updatePost({ [event.target.id]: value }, {author, body, title, date})
      console.log(post)
      props.firestore.set(`blog/${props.postId}`, post)
    }
  })
)(EditBlog)

const defaultPost = {
  title: '',
  date: Date.now(),
  author: 'Josh Derocher',
  body: '',
  published: true
}

// Object.assign({}, defaultPost, )
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
