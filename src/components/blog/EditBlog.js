import React from 'react'
import { compose, withHandlers, defaultProps } from 'recompose'

const EditBlog = props =>
  <section>
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
      props.firestore.set(`blog/${props.postId}`,
        Object.assign({}, defaultPost, {author, body, title, date}, { [event.target.id]: event.target.value }))
    }
  }),
  defaultProps({
    date: Date.now(),
    fake: 'news'
  })
)(EditBlog)

const defaultPost = {
  title: '',
  date: Date.now(),
  author: 'Josh Derocher',
  body: '',
  published: true
}
