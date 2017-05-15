import React from 'react'
import database from '../database'
import BlogPost from './BlogPost'

function EditBlog(props) {
    const instance = Object.assign({
        props,
        state: {
            author: 'Josh Derocher',
            date: new Date(),
            tags: [],
            body: '',
            published: false,
            title: 'Hello world!'
            
        },
        render
    }, React.Component.prototype)


    function handleSubmit(event) {
        event.preventDefault()

        database
            .ref('testing/')
            .push({
                author: instance.state.author,
                title: instance.state.title,
                date: instance.state.date,
                body: instance.state.body,
                tags: instance.state.tags,
                published: instance.state.published
            })
    }
    function handleChange(event) {
        instance.setState({
            [event.target.id]: event.target.value
        })
    }

   
    

    function render() {
        return (
            <main>
                <h1>Hello {JSON.stringify(instance.props)}</h1>
                <BlogPost
                    author={instance.state.author}
                    title={instance.state.title}
                    date={instance.state.date}
                    body={instance.state.body}
                    tags={instance.state.tags}
                    published={instance.state.published}/>
                <section>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={instance.state.title}
                            onChange={handleChange}/>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </main>
        )
    }
    return instance
}

export default EditBlog