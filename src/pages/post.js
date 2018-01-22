import React from 'react'
import EditBlog from '../components/blog/EditBlog'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import { withProps } from 'recompose'
import Auth from '../components/Auth/Auth'
import BlogPost from '../components/blog/BlogPost'

const PostPage = ({firestore, blog, postId}) => {
  return <div>
    <Link to='/'>Return home</Link>
    <BlogPost
      id={postId}
      {...blog}
      />
    <Auth firebase={firestore}>
      <EditBlog {...blog} postId={postId} firestore={firestore} />
    </Auth>
  </div>
}
// <EditBlog id={postId} firestore={firestore} />
export default compose(
  withProps(props => {
    return {
      postId: props.location.pathname.split('/')[2]
    }
  }),
  firestoreConnect(props => [
    { collection: 'blog', doc: props.postId }
  ]),
  connect((state, props) => ({
    blog: state.firestore.data.blog && state.firestore.data.blog[props.postId]
  }))
)(PostPage)
