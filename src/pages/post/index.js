import React from 'react'
import EditBlog from '../../components/blog/EditBlog'
import BlogPost from '../../components/blog/BlogPost'
import Auth from '../../components/Auth/Auth'
import Link from 'gatsby-link'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { withProps } from 'recompose'

const EditPage = ({firestore, blog, postId}) => {
  return <div>
    <Link to='/'>Return home</Link>
    <BlogPost
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
)(EditPage)
