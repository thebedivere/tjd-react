import React from 'react'
import { Provider } from 'react-redux'
import IndexPage from './pages/index'
import PostPage from './pages/post'
import TagPage from './pages/tag'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

const App = ({ store }) =>
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='/post/:id' component={PostPage} />
        <Route path='/tag/:tag' component={TagPage} />
      </Switch>
    </Router>
  </Provider>

export default App
