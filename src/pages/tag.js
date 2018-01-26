import React from 'react'
import { withProps } from 'recompose'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, withFirestore } from 'react-redux-firebase'
import Header from '../components/Header/'
import Blog from '../components/blog/Blog'

const TagPage = ({firestore, tag, info, blog}) => (
  <div>
    {info && <Header title={info.site.title} />}
    <h2 style={{textAlign: 'center'}}>Viewing posts tagged with {tag}</h2>
    {blog && <Blog blogPosts={blog} />}
  </div>
)

export default compose(
  withFirestore,
  withProps(props => {
    return {
      tag: props.location.pathname.split('/')[2]
    }
  }),
  firestoreConnect(props => ['info', {'collection': 'blog', 'where': [`tags.firebase`, '==', true]}]),
  connect((state) => ({
    info: state.firestore.data.info,
    blog: state.firestore.data.blog
  }))
 )(TagPage)
