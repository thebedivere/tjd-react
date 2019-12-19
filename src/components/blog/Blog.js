import React from 'react'
import BlogPost from './BlogPost'

const Blog = ({ blogPosts }) =>
  <div>
    {blogPosts &&
        blogPosts.map(post => (
          <BlogPost {...post} key={`${post.title}${post.date}`} />
        ))}
  </div>

export default Blog
