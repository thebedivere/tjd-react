
// import { connect } from 'react-redux'
// import { setInfo, setLinks, setBlogPosts, setUser} from '../actions/actionTypes'
// // import { requestDocument, watchDocument, firestore } from './database'
// import { compose, lifecycle } from 'recompose'
// import { mapObject, values, sortBy, filter } from 'underscore'

// const mapDispatchToProps = (dispatch, ownProps = {}) => {
//   return {
//     onInfo: info => {
//       dispatch(setInfo(info))
//     },
//     onLinks: links => {
//       dispatch(setLinks(links))
//     },
//     onBlogPosts: blogPosts => {
//       dispatch(setBlogPosts(blogPosts))
//     },
//     onUser: user => {
//       dispatch(setUser(user))
//     },
//     ...ownProps
//   }
// }

// const mapStateToProps = (state, ownProps = {}) => {
//   return {
//     ...state,
//     ...ownProps
//   }
// }

// export const withData = (view) => compose(
//     connect(
//         mapStateToProps,
//         mapDispatchToProps
//     )
// )(view)
