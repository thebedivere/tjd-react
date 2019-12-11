import React, { useMemo } from 'react'
import BlogBody from './BlogBody'
import format from 'date-fns/format'
import { Link } from 'react-router-dom'

const BlogPost = ({ title, id, date, author, body }) => {
  const formattedDate = useMemo(() =>
    format(date, 'MM-dd-yyy')
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
