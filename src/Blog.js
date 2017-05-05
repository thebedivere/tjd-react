import React from 'react'
import Async from 'react-promise'
import database from './database'
import ReactMarkdown from 'react-markdown'

const blogRef = database.ref('blog/')

function Blog(props) {
    let instance = Object.create(React.Component.prototype)
    blogRef.on('value', function (snapshot) {
        instance.setState((prevProps, props) => {
            let posts = snapshot.exportVal()
            return {
                posts: Object
                    .keys(posts)
                    .map((post) => {
                        return (
                            <article key={posts[post]}>
                                <h3>{posts[post].title}</h3>
                                <small>{posts[post].date}</small>
                                <section>
                                    <ReactMarkdown source={posts[post].body} />
                                </section>
                            </article>
                        )
                    })
            }
        })
    })
    instance.props = props
    instance.state = {
        blog: ''
    }

    instance.render = () => {
        return (
            <div>
                {instance.state.posts}
            </div>
        )
    }
    return instance

}

export default Blog
