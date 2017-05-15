import React from 'react'
import Async from 'react-promise'
import database from '../database'
import BlogPost from './BlogPost'

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

    blogRef
        .on('value', function (snapshot) {
            instance.setState((prevProps, props) => {
                let posts = snapshot.exportVal()
                return {
                    posts: Object
                        .keys(posts)
                        .map((post) => {
                            return (
                                    <BlogPost key={posts[post].title}
                                        author={posts[post].author}
                                        title={posts[post].title}
                                        date={posts[post].date}
                                        body={posts[post].body}
                                        tags={posts[post].tags}
                                        published={posts[post].published}/>
                            )
                        })
                }
            })
        })
    return instance
}

export default Blog
