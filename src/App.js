import React from 'react'
import Memorize from './Memorize/Memorize'
import Auth from './Auth'
import Home from './Home'
import EditBlog from './blog/EditBlog'
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const App = ({ store }) => {
  const HomePage = () => (
    <Home />
  )
  const AccountPage = () => (
    <div>
      <Auth />
    </div>
  )
  const EditPage = ({ match }) => (
    <EditBlog id={match.params.id} />
  )
  const MemorizePage = () => (
    <Memorize />
  )

  return {
    render () {
      return (
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/account' component={AccountPage} />
              <Route path='/edit/:id' component={EditPage} />
              <Route path='/memorize' component={MemorizePage} />
            </Switch>
          </Router>
        </Provider>

      )
    }
  }
}

export default App
