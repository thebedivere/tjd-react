
// import { createBlogFunctions } from '../components/blog/blogFunctions'
// import { watchDocument, requestDocument } from './database'
// // import { BehaviorSubject, Observable } from 'rxjs'
// import { compose, lifecycle, withHandlers, withState, withProps, mapPropsStreamWithConfig } from 'recompose'
// // import rxjsConfig from 'recompose/rxjsObservableConfig'

// // const mapPropsStream = mapPropsStreamWithConfig(rxjsConfig)

// export const withBlogPost = view => compose(
//     lifecycle({
//       componentDidMount () {

//       }
//         //   componentDidUpdate () {
//         //     props.handleSubmit()
//         //   }
//     }),
//     withProps(
//         ownerProps => {
//           return {
//             'test': 567
//           }
//         }
//     ),
//     mapPropsStream(
//         props$ => {
//           props$.subscribe({
//             next (value) {
//               console.log(value.id)
//               const document$ = watchDocument('blog', value.id)
//               return props$.combineLatest(document$, (props, document) => {
//                 console.log({ document })
//                 if (document.exists) {
//                   console.log('blog exists!')
//                   return {
//                     ...props,
//                     document: document.data()
//                   }
//                 }
//                 return {
//                   ...props,
//                   document
//                 }
//               })
//             }
//           })

//           return props$
//         }
//     ),
//     // mapPropsStream(
//     //     ownerProps => {
//     //       console.log(ownerProps)
//     //       const x = ownerProps.subscribe()
//     //     //   watchDocument('blog', ownerProps.id)
//     //       return ownerProps

//     //     //   console.log(x)
//     //     }
//     //     // ownerProps => {
//     //     //   const funcs = createBlogFunctions(ownerProps.firestore)

//     //     //   funcs.checkIfPostExists(ownerProps.id).then(res => {
//     //     //     if (res) {
//     //     //       return { redirect: res }
//     //     //     }
//     //     //     return { redirect: false }
//     //     //   })
//     //     // }
//     // ),
//     withState('author', 'updateAuthor', props => props.author),
//     withState('title', 'updateTitle', props => props.title),
//     withState('body', 'updateBody', props => props.body),
//     withState('tags', 'updateTags', props => props.tags),
//     withState('published', 'updatePublished', props => props.published),
//     withHandlers({
//       handleSubmit: props => event => {
//         const post = {
//           author: props.author || 'Josh Derocher',
//           title: props.title || '',
//           date: props.date || new Date().toString(),
//           body: props.body || '',
//           tags: props.tags || ''
//                 //   published: this.state.published || false
//         }
//         props.firestore.collection('blog')
//                 .doc(props.id)
//                 .set(post)
//       },
//       handleAuthorChange: props => event => {
//         props.updateAuthor(event.target.value)
//       },
//       handleTitleChange: props => event => {
//         props.updateTitle(event.target.value)
//       },
//       handleBodyChange: props => event => {
//         props.updateBody(event.target.value)
//       },
//       handleTagsChange: props => event => {
//         props.updateTags(event.target.value)
//       },
//       handlePublishedChange: props => event => {
//         props.updatePublished(event.target.value)
//       }
//     })
// )(view)
