import React from 'react'
import _ from 'lodash'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, firebaseConnect, withFirestore } from 'react-redux-firebase'
import Header from '../components/Header/'
import Links from '../components/Links/'
import Blog from '../components/blog/Blog'
import add from 'ramda/src/add'

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
  firestoreConnect(['info', 'blog']),
  connect((state) => ({
    info: state.firestore.data.info,
    blog: state.firestore.data.blog
  }))
 )(IndexPage)

function filterPosts (posts, auth) {
  console.log(add(1)(1))
  const _posts = cleanPosts(posts)
  if (auth.email === 'joshua.aarond@gmail.com') return _.values(_posts)
  return _.values(_.filter(_posts, post => post.published))
}

function cleanPosts (posts) {
  return _.sortBy(_.values(_.mapValues(posts, (val, key) => {
    console.log(val.date)
    return Object.assign({}, {id: key}, {...val})
  })), p => p.date).reverse()
}
