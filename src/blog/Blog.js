import React from 'react'
import _ from 'underscore'
import database from '../database'
import BlogPost from './BlogPost'
import { setBlogPosts, setUser } from '../actions/actionTypes'
import { connect } from 'react-redux'

const blog = ({ dispatch }) => {
  const blogRef = database.ref('blog/')
  const render = () => {
    const props = instance.props
    const posts = cleanPosts(props.blogPosts)
    return (
      <div>
        {posts &&
          posts.map(post => (
            <BlogPost{...post} />
          ))}
      </div>
    )
  }
  const componentDidMount = () => {
    blogRef.on('value', function (snapshot) {
      instance.props.onBlogPosts(snapshot.val())
    })
  }
  const instance = Object.assign({
    state: {},
    render,
    componentDidMount
  }, React.Component.prototype)
  return instance
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    onBlogPosts: blogPosts => {
      dispatch(setBlogPosts(blogPosts))
    },
    onUser: user => {
      dispatch(setUser(user))
    }
  }
}

function cleanPosts (posts) {
  return _.values(_.mapObject(posts, (val, key) => {
    return Object.assign({}, {id: key}, {...val})
  }))
}

const Blog = connect(
  mapStateToProps,
  mapDispatchToProps
)(blog)

export default Blog
