import _ from 'lodash'
import React, { useMemo } from 'react'

import BlogPost from './BlogPost'

const isPublished = x => x.published
const sortByDate = x => _.sortBy(x, y => y.date)


const Blog = ({ blogPosts }) => {
  const sortedPosts = useMemo(() => {
    const publishedPosts = Object.values(blogPosts).filter(isPublished)
    return sortByDate(publishedPosts)
  }, [blogPosts])

  return <div>
    {blogPosts && 
        sortedPosts.map(post => (
          <BlogPost {...post} key={`${post.title}${post.date}`} />
      ))}
  </div>
}

export default Blog
