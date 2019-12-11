import React from 'react'
import EditBlog from '../components/blog/EditBlog'
import Auth from '../components/Auth/Auth'
import BlogPost from '../components/blog/BlogPost'
import Navbar from '../components/Navbar'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/app'

const PostPage = ({ firestore, info, match }) => {
  const postId = match.params.id
  const [site] = useDocumentData(
    firebase.firestore().doc('info/site')
  )
  const [blog] = useDocumentData(
    firebase.firestore().doc(`blog/${postId}`)
  )

  return (
    <div className='nav-margin'>
      {site && <Navbar title={site.title} />}
      <BlogPost id={postId} {...blog} />
      <Auth>
        <EditBlog {...blog} postId={postId} firestore={firestore} />
      </Auth>
    </div>
  )
}

export default PostPage
