import React from 'react'
import ReactMarkdown from 'react-markdown'

function BlogBody(props) {
    if (props.body) {
        return (
                <ReactMarkdown source={props.body} />
        )
    }
    return <section/>
}

export default BlogBody