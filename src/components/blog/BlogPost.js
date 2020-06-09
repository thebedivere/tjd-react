import { isValid } from 'date-fns'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

import BlogBody from './BlogBody'

const formatDate = timestamp => isValid(timestamp) ? format(timestamp, 'MM-dd-yyyy') : null

const BlogPost = ({ title, id, date, author, body, published }) => {
  const formattedDate = useMemo(() => formatDate(new Date(date))
    , [ date ])
  return (
    <article>
      <header>
        {title &&
          <h2>
            <Link to={`/post/${id}`}>{title}</Link>
            {
              !published && <i className='fa fa-pencil' />
            }
          </h2>}
        <p>{formattedDate}</p>
        {author && <p>By {author}</p>}
      </header>
      {body &&
        <main>
          <BlogBody body={body} />
        </main>}
    </article>)
}

BlogPost.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
  published: PropTypes.bool
}

export default BlogPost
