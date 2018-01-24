import React from 'react'
import EditBlog from '../components/blog/EditBlog'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { withProps } from 'recompose'
import Auth from '../components/Auth/Auth'
import BlogPost from '../components/blog/BlogPost'
import Navbar from '../components/Navbar'

const PostPage = ({firestore, blog, postId, info}) => {
  return <div className='nav-margin'>
    {info && <Navbar title={info.site.title} /> }
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
    { collection: 'blog', doc: props.postId },
    'info'
  ]),
  connect((state, props) => ({
    info: state.firestore.data.info,
    blog: state.firestore.data.blog && state.firestore.data.blog[props.postId]
  }))
)(PostPage)
