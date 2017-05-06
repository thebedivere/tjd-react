import React from 'react'
import ReactMarkdown from 'react-markdown'

function BlogBody(props) {
    if (props.body) {
        return (
            <section>
                <ReactMarkdown source={props.body} />
            </section>
        )
    }
    return <section/>
}

export default BlogBody