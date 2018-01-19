import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, withFirestore } from 'react-redux-firebase'
import Header from '../components/Header/'
import Links from '../components/Links/'
import Blog from '../components/blog/Blog'

const IndexPage = ({firestore, info, blog}) => (
  <div>
    {info && <Header title={info.site.title} tagline={info.site.tagline} />}
    {info && <Links links={info.links} />}
    {blog && <Blog blogPosts={blog} />}
  </div>
)

export default compose(
  withFirestore,
  firestoreConnect(['info', 'blog']), // or { collection: 'todos' }
  connect((state) => ({
    info: state.firestore.data.info,
    blog: state.firestore.data.blog
  }))
 )(IndexPage)
