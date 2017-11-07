import React from 'react'
import Async from 'react-code-splitting'
import database, { firestore } from './database'
// import Home from './Home'
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const App = ({ store }) => {
  // define page components
  const HomePage = props => (
    <Async
      load={import(/* webpackChunkName: "Home" */ './Home')}
      componentProps={{...props, database, firestore}}
      test='Hello world!' />
  )

  const AccountPage = () => (
    <Async load={import(/* webpackChunkName: "Auth" */ './Auth/Auth')} />
  )

  const EditPage = ({ match }) => (
    <Async componentProps={{ database, firestore, id: match.params.id }}load={import(/* webpackChunkName: "Memorize" */ './blog/EditBlog')} />
  )

  const MemorizePage = () => (
    <Async load={import(/* webpackChunkName: "Memorize" */ './Memorize/Memorize')} />
  )

  // return render
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
