import React from 'react'
import Header from './Header'
import Main from './Main'
import Auth from './Auth'
import EditBlog from './blog/EditBlog'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

function App(props) {
  const Home = () => (
    <div>
      <Header />
      <Main />
    </div>
  )
  const Account = () => (
    <div>
      <Auth />
    </div>
  )
  const Edit = () => (
    <EditBlog/>
  )

  return {
    render() {
      return (
          <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/account' component={Account}/>
              <Route path='/edit/:id' component={Edit} />
            </Switch>
          </Router>
      )
    }
  }
}


export default App
