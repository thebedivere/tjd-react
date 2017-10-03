import React from 'react'
import { mapObject, values } from 'underscore'
import BlogPost from './BlogPost'
import { setBlogPosts, setUser } from '../actions/actionTypes'
import { connect } from 'react-redux'

const blog = ({ dispatch }) => {
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
    const blogRef = instance.props.database.ref('blog/')
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

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps
  }
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
  return values(mapObject(posts, (val, key) => {
    return Object.assign({}, {id: key}, {...val})
  }))
}

const Blog = connect(
  mapStateToProps,
  mapDispatchToProps
)(blog)

export default Blog
