import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react'
import Async from 'react-code-splitting'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import firebaseConfig from './data/config'

firebase.initializeApp(firebaseConfig)

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

  const AsyncTagPage = props => (
    <Async
      load={import(/* webpackChunkName: "TagPage" */ './pages/tag')}
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
