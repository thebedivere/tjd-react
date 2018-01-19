import React from 'react'
import _ from 'underscore'
import BlogBody from './BlogBody'
import format from 'date-fns/format'
import { Link } from 'react-router-dom'

const BlogPost = props =>
  <article>
    <header>
      {props.title && <h2><Link to={`/post/${props.id}`}>{props.title}</Link></h2>}
      {props.date && <p>{format(props.date, 'MM-DD-YYYY')}</p>}
      {props.author && <p>By {props.author}</p>}
    </header>
    {props.body &&
      <main>
        <BlogBody body={props.body} />
      </main>
    }
  </article>

export default BlogPost
