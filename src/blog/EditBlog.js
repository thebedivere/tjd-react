import React from 'react'
import BlogPost from './BlogPost'
import { createBlogFunctions } from './blogFunctions'
import { watchDocument } from '../database'

const EditBlog = (props) => {
  const componentDidMount = () => {
    console.log(instance.props.id)
    watchDocument('blog', instance.props.id, doc => {
      instance.setState(doc)
    })

    const funcs = createBlogFunctions(instance.props.firestore)
    funcs.checkIfPostExists('84PkFsOTr7XxZJfqcOEM', doc => instance.setState({ redirect: false }))
        // funcs.createNewPost().then(post => instance.setState({ id: `/edit/${post.id}` }))
  }

  const componentDidUpdate = () => {
    handleSubmit()
  }

  const instance = Object.assign({
    state: {},
    props,
    render,
    componentDidMount,
    componentDidUpdate
  }, React.Component.prototype)

  function handleSubmit () {
    const post = {
      author: instance.state.author || 'Josh Derocher',
      title: instance.state.title || '',
      date: instance.state.date || new Date().toString(),
      body: instance.state.body || '',
      tags: instance.state.tags || [],
      published: instance.state.published || false
    }
    instance.props.database
      .ref('blog/' + instance.props.id)
      .set(post)
  }
  function handleChange (event) {
    instance.setState({
      [event.target.id]: event.target.value
    })
  }

  function render () {
    return (
      <main>
        <a href='/'>Return home</a>

        {instance.state &&
          <BlogPost
            {...instance.state}
          />
        }
        <section>
          <form>
            <div>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                id='title'
                value={instance.state.title || ''}
                onChange={handleChange} />
            </div>
            <div>
              <label htmlFor='body'>Body</label>
              <textarea
                id='body'
                value={instance.state.body || ''}
                onChange={handleChange} />
            </div>
            <div>
              <label htmlFor='tags'>Tags</label>
              <input
                type='text'
                id='tags'
                value={instance.state.tags || ''}
                onChange={handleChange} />
            </div>
          </form>
        </section>
      </main>
    )
  }

  return instance
}

export default EditBlog
