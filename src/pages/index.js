import React from 'react'
import _ from 'underscore'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, firebaseConnect, withFirestore } from 'react-redux-firebase'
import Header from '../components/Header/'
import Links from '../components/Links/'
import Blog from '../components/blog/Blog'

const IndexPage = ({firestore, info, blog, auth}) => (
  <div>
    {info && <Header title={info.site.title} tagline={info.site.tagline} />}
    {info && <Links links={info.links} />}
    {blog && <Blog blogPosts={filterPosts(blog, auth)} />}
  </div>
)

export default compose(
  withFirestore,
  firebaseConnect(),
  connect(({firebase: { auth }}) => ({auth})),
  firestoreConnect(['info', 'blog']), // or { collection: 'todos' }
  connect((state) => ({
    info: state.firestore.data.info,
    blog: state.firestore.data.blog
  }))
 )(IndexPage)

function filterPosts (posts, auth) {
  if (auth.email === 'joshua.aarond@gmail.com') return posts
  return _.filter(posts, post => post.published)
}
