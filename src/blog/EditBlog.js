import React from 'react'
import database from '../database'
import BlogPost from './BlogPost'

const EditBlog = (props) => {
  const componentDidMount = () => {
    const databaseRef = database.ref('blog/' + instance.props.id)
    databaseRef.on('value', (snapshot) => {
      const value = snapshot.val()
      console.log(value)
      if (value) {
        instance.setState(value)
      }
    })
  }

  const componentDidUpdate = () => {
    console.log('hello')
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
    database
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
        <BlogPost
          {...instance.state}
          />
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
