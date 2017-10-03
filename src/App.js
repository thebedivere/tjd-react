import React from 'react'
import Async from 'react-code-splitting'
import database from './database'
// import Home from './Home'
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const App = ({ store }) => {
  const HomePage = props => (
    // <Home test='hello world'
    //   database={database} />
    <Async
      load={import(/* webpackChunkName: "Home" */ './Home')}
      componentProps={{...props, database}}
      test='Hello world!' />
  )
  const AccountPage = () => (
    <Async load={import(/* webpackChunkName: "Auth" */ './Auth')} />
  )
  const EditPage = ({ match }) => (
    <Async id={match.params.id} database={database} load={import(/* webpackChunkName: "Memorize" */ './Memorize/Memorize')} />
    // <EditBlog id={match.params.id} database={database} />
  )
  const MemorizePage = () => (
    <Async load={import(/* webpackChunkName: "Memorize" */ './Memorize/Memorize')} />
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
