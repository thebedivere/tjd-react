import React from 'react'
import Header from './Header'
import Links from './Links'
import Blog from './blog/Blog'
import { connect } from 'react-redux'
import { setInfo, setLinks } from './actions/actionTypes'
import { requestDocument, watchDocument } from './database'

const home = ({ dispatch }) => {
  const componentDidMount = () => {
    // get info
    watchDocument('info', 'site', info => instance.props.onInfo(info))
    // get links
    const requestLinks = requestDocument('info', 'links')
    requestLinks().then(links => instance.props.onLinks(links))
  }
  const render = () => {
    const props = instance.props
    return (
      <div>
        { props.test }
        { props.info &&
          <Header title={props.info.title} tagline={props.info.tagline} />
        }
        { props.links &&
          <Links links={props.links} />
        }

        <Blog database={instance.props.database} />
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

const mapDispatchToProps = (dispatch, ownProps = {}) => {
  return {
    onInfo: info => {
      dispatch(setInfo(info))
    },
    onLinks: links => {
      dispatch(setLinks(links))
    },
    ...ownProps
  }
}

const mapStateToProps = (state, ownProps = {}) => {
  return {
    ...state,
    ...ownProps
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(home)

export default Home
