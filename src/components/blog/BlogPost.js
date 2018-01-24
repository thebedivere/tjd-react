import React from 'react'
import BlogBody from './BlogBody'
import format from 'date-fns/format'
import { Link } from 'react-router-dom'

const BlogPost = ({ title, id, date, author, body }) =>
  <article>
    <header>
      {title && <h2><Link to={`/post/${id}`}>{title}</Link></h2>}
      {date && <p>{format(date, 'MM-DD-YYYY')}</p>}
      {author && <p>By {author}</p>}
    </header>
    {body &&
      <main>
        <BlogBody body={body} />
      </main>
    }
  </article>

export default BlogPost
