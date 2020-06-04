import React from 'react'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

SyntaxHighlighter.registerLanguage('jsx', jsx)

const renderCode = ({language, value}) => <SyntaxHighlighter language={language} style={okaidia}>{value}</SyntaxHighlighter>

const BlogBody = ({ body }) =>
    <ReactMarkdown 
        source={body}
        renderers={{
            code: renderCode
        }}
        />

export default BlogBody
