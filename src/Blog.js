import React from 'react'
import Async from 'react-promise'
import database from './database'
import ReactMarkdown from 'react-markdown'

const blogRef = database.ref('blog/')

function showBody(body) {
    if (body) {
        return (
            <section>
                <ReactMarkdown source={body} />
            </section>
        )
    }
    return ''
}
function Blog(props) {
    let instance = Object.assign({
        props,
        state: {
            blog: ''
        },
        render: () => {
            return (
                <div>
                    {instance.state.posts}
                </div>
            )
        }
    }, React.Component.prototype)

    blogRef.on('value', function (snapshot) {
        instance.setState((prevProps, props) => {
            let posts = snapshot.exportVal()
            return {
                posts: Object
                    .keys(posts)
                    .map((post) => {
                        return (
                            <article key={posts[post].title}>
                                <h3>{posts[post].title}</h3>
                                <small>{posts[post].date}</small>
                                {showBody(posts[post].body)}
                            </article>
                        )
                    })
            }
        })
    })


    return instance

}

export default Blog
