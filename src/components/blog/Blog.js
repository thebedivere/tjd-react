import React from 'react'
import { mapObject, values } from 'underscore'
import BlogPost from './BlogPost'

const Blog = props => {
  const posts = cleanPosts(props.blogPosts)
  return (
    <div>
      {posts &&
          posts.map(post => (
            <BlogPost {...post} key={post.title} />
          ))}
    </div>
  )
}

function cleanPosts (posts) {
  return values(mapObject(posts, (val, key) => {
    return Object.assign({}, {id: key}, {...val})
  }))
}

export default Blog
