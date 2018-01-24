import React from 'react'
import BlogPost from './BlogPost'

const Blog = ({blogPosts}) => {
  return (
    <div>
      {blogPosts &&
        blogPosts.map(post => (
          <BlogPost {...post} key={post.title} />
          ))}
    </div>
  )
}

export default Blog
