import React from 'react'
import moment from 'moment'
import BlogBody from './BlogBody'
function BlogPost (props) {
  return (
    <article>
      <header>
        <h2><a href={`/edit/${props.id}`}>{props.title}</a></h2>
        <p>{moment(props.date).format('MM-DD-YYYY')}</p>
        <p>By {props.author}</p>
      </header>
      <main>
        <BlogBody body={props.body} />
      </main>
      <footer>
        <ul>
          <li>tags:</li>
          {props.tags && props.tags.split(',').map(tag => (
            <li key={tag}><a href={`/tag/${tag}`}>{tag}</a></li>
        ))}
        </ul>
      </footer>
    </article>
  )
}

export default BlogPost
