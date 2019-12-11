import firebase from 'firebase/app'
import _ from 'lodash'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection, useDocumentData } from 'react-firebase-hooks/firestore'
import Blog from '../components/blog/Blog'
import Header from '../components/Header/'
import Links from '../components/Links/'

function filterPosts (posts, auth) {
  const _posts = cleanPosts(posts)
  if (auth && auth.email === 'joshua.aarond@gmail.com') return _.values(_posts)
  return _.values(_.filter(_posts, post => post.published))
}

function cleanPosts (posts) {
  return _.sortBy(
    _.values(
      _.mapValues(posts, (val, key) => {
        const data = val.data()
        const id = val.id
        return Object.assign({}, { id }, { ...data })
      })
    ),
    p => p.date
  ).reverse()
}

const IndexPage = ({ firestore }) => {
  const [user] = useAuthState(firebase.auth())

  const [blog] = useCollection(
    firebase.firestore().collection('blog')
  )

  const [site] = useDocumentData(
    firebase.firestore().doc('info/site')
  )

  const [links] = useDocumentData(
    firebase.firestore().doc('info/links')
  )

  return (
    <>
      {site && <Header title={site.title} tagline={site.tagline} />}
      {links && <Links links={links} />}
      {blog &&
        <Blog blogPosts={filterPosts(blog.docs, user)} />}
    </>
  )
}

export default IndexPage
