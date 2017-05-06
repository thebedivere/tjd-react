import React from 'react'
import Async from 'react-promise'
import database from '../database'
import BlogBody from './BlogBody'



function Blog(props) {
    const blogRef = database.ref('blog/'),
        instance = Object.assign({
            props,
            state: {
                posts: ''
            },
            render
        }, React.Component.prototype)
    function render() {
        return (
            <div>
                {instance.state.posts}
            </div>
        )
    }

    blogRef.on('value', function (snapshot) {
        instance.setState((prevProps, props) => {
            let posts = snapshot.exportVal()
            return {
                posts: Object
                    .keys(posts)
                    .map((post) => {
                        return (
                            <article key={posts[post].title}>
                                <h2>{posts[post].title}</h2>
                                <header>{posts[post].date}</header>
                                <BlogBody body={posts[post].body} />
                            </article>
                        )
                    })
            }
        })
    })
    return instance
}

export default Blog
