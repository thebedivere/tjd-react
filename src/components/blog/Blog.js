import React from 'react'
import { mapObject, values } from 'underscore'
import BlogPost from './BlogPost'
import PropTypes from 'prop-types'

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

Blog.propTypes = {
  blogPosts: PropTypes.object
}

Blog.defaultProps = {
  blogPosts: {}
}

export default Blog
