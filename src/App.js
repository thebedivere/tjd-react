import React from 'react'
import { Provider } from 'react-redux'
import Async from 'react-code-splitting'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import IndexPage from './pages/index'
// import PostPage from './pages/post'
// import TagPage from './pages/tag'
// import NotFoundPage from './pages/404'

const App = ({ store }) => {
  const AsyncIndexPage = props =>
    <Async load={import(/* webpackChunkName: "IndexPage" */ './pages/index')} componentProps={{ ...props }} />

  const AsyncPostPage = props =>
    <Async load={import(/* webpackChunkName: "PostPage" */ './pages/post')} componentProps={{ ...props }} />

  const AsyncTagPage = props =>
    <Async load={import(/* webpackChunkName: "TagPage" */ './pages/tag')} componentProps={{ ...props }} />

  const AsyncNotFoundPage = props =>
    <Async load={import(/* webpackChunkName: "NotFoundPage" */ './pages/404.js')} componentProps={{ ...props }} />

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={AsyncIndexPage} />
          <Route path='/post/:id' component={AsyncPostPage} />
          <Route path='/tag/:tag' component={AsyncTagPage} />
          <Route path='*' component={AsyncNotFoundPage} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
