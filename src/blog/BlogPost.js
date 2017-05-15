import React from 'react'
import moment from 'moment'
import BlogBody from './BlogBody'
function BlogPost(props){
        return (
            <article>
                <header>
                    <h2>{props.title}</h2>
                    <p>{moment(props.date).format("MM-DD-YYYY")}</p>
                    <p>By {props.author}</p>
                </header>
                <main>
                    <BlogBody body={props.body}/>
                </main>
                <footer>

                </footer>
            </article>
        )
}

export default BlogPost