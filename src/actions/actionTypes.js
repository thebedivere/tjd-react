export const SET_USER = 'SET_USER'
export const SET_INFO = 'SET_INFO'
export const SET_LINKS = 'SET_LINKS'
export const SET_BLOG_POSTS = 'SET_BLOG_POSTS'

export const actions = {
  SET_USER,
  SET_INFO,
  SET_LINKS,
  SET_BLOG_POSTS
}

export function setUser (user, token) {
  return { type: SET_USER, user, token }
}

export function setInfo (info) {
  return { type: SET_INFO, info }
}

export function setLinks (links) {
  return { type: SET_LINKS, links }
}

export function setBlogPosts (blogPosts) {
  return { type: SET_BLOG_POSTS, blogPosts }
}
