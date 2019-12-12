import React, { useMemo } from 'react'
import BlogBody from './BlogBody'
import format from 'date-fns/format'
import { Link } from 'react-router-dom'
import { isValid } from 'date-fns'

const formatDate = timestamp => isValid(timestamp) ? format(timestamp, 'MM-dd-yyyy') : null

const BlogPost = ({ title, id, date, author, body }) => {
  const formattedDate = useMemo(() => formatDate(date)
    , [date])
  return (
    <article>
      <header>
        {title && <h2><Link to={`/post/${id}`}>{title}</Link></h2>}
        <p>{formattedDate}</p>
        {author && <p>By {author}</p>}
      </header>
      {body &&
        <main>
          <BlogBody body={body} />
        </main>}
    </article>)
}

export default BlogPost
