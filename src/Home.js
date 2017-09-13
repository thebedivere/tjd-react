import React from 'react'
import Header from './Header'
import Links from './Links'
import Blog from './blog/Blog'
import { connect } from 'react-redux'
import database from './database'
import { setInfo, setLinks } from './actions/actionTypes'

const home = ({ dispatch }) => {
  const componentDidMount = () => {
    // get info
    const info = database.ref('/info')
    info.on('value', (snapshot) => {
      instance.props.onInfo(snapshot.val())
    })

    // get links
    const links = database.ref('/links')
    links.on('value', (snapshot) => {
      instance.props.onLinks(snapshot.val())
    })
  }
  const render = () => {
    const props = instance.props
    return (
      <div>
        { props.info &&
          // <Header title={props.info.title} tagline={props.info.tagline} />
          <Header />
        }
        { props.links &&
          <Links /* links={props.links} */ />
        }

        <Blog />
      </div>

    )
  }
  const instance = Object.assign({
    // props,
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
    onInfo: info => {
      dispatch(setInfo(info))
    },
    onLinks: links => {
      dispatch(setLinks(links))
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(home)

export default Home
