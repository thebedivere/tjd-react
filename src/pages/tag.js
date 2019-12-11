
import React from 'react'
import Blog from '../components/blog/Blog'
import Header from '../components/Header/'

const TagPage = ({ firestore, tag, info, blog }) => {
  // const [site] = useDocumentData(
  //   firebase.firestore().doc('info/site')
  // )
  return (
    <div>
      {info && <Header title={info.site.title} />}
      <h2 style={{ textAlign: 'center' }}>Viewing posts tagged with {tag}</h2>
      {blog && <Blog blogPosts={blog} />}
    </div>
  )
}

export default TagPage

// export default compose(
//   withFirestore,
//   withProps(props => {
//     return {
//       tag: props.location.pathname.split('/')[2]
//     }
//   }),
//   firestoreConnect(props => [
//     'info',
//     { collection: 'blog', where: ['tags.firebase', '==', true] }
//   ]),
//   connect(state => ({
//     info: state.firestore.data.info,
//     blog: state.firestore.data.blog
//   }))
// )(TagPage)
