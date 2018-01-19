import { actions } from './actionTypes'
export const initialState = {
  title: 'loading...'
}

export default function appReducers (state = initialState, action) {
  switch (action.type) {
    case actions.SET_INFO:
      return Object.assign({}, state, {
        info: action.info
      })
    case actions.SET_USER:
      return Object.assign({}, state, {
        user: action.user,
        token: action.token
      })
    case actions.SET_LINKS:
      return Object.assign({}, state, {
        links: action.links
      })
    case actions.SET_BLOG_POSTS:
      return Object.assign({}, state, {
        blogPosts: action.blogPosts
      })
    default:
      return state
  }
}
