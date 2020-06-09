import './data/flamelink'

import React from 'react'
import Async from 'react-code-splitting'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const App = () => {
  const AsyncIndexPage = props => (
    <Async
      load={import(/* webpackChunkName: "IndexPage" */ './pages/index')}
      componentProps={{ ...props }}
    />
  )

  const AsyncPostPage = props => (
    <Async
      load={import(/* webpackChunkName: "PostPage" */ './pages/post')}
      componentProps={{ ...props }}
    />
  )

  const AsyncNotFoundPage = props => (
    <Async
      load={import(/* webpackChunkName: "NotFoundPage" */ './pages/404.js')}
      componentProps={{ ...props }}
    />
  )

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={AsyncIndexPage} />
        <Route path='/post/:id' component={AsyncPostPage} />
        <Route path='/tag/:tag' component={AsyncTagPage} />
        <Route path='*' component={AsyncNotFoundPage} />
      </Switch>
    </Router>
  )
}

export default App
