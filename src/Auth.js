/* global localStorage */

import React from 'react'
// import firebase from 'firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import AuthButton from './AuthButton'
import { connect } from 'react-redux'
import { setUser } from './actions/actionTypes'

const auth = ({ dispatch }) => {
  firebase
    .auth()
    .onAuthStateChanged(function (user) {
      if (user) {
        instance.setState({ user: user })
      } else {
        instance.setState({ user: false })
      }
    })

  function signin () {
    // Using a popup.
    let provider = new firebase
      .auth
      .GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token.
        let token = result.credential.accessToken
        // The signed-in user info.
        let user = result.user

        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        instance.props.onUser(user, token)
      })
  }

  function signout () {
    firebase
      .auth()
      .signOut()

    localStorage.clear('user')
    localStorage.clear('token')
    instance.props.onUser({}, {})
  }

  const componentDidMount = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')
    instance.props.onUser(user, token)
  }

  const render = () => {
    const props = instance.props
    return (
      <main>
        <section className='col'>
          {props.token &&
            <p>You are logged in as {props.user.email}</p>
          }
          <AuthButton signin={signin} signout={signout} user={props.user} />
        </section>
      </main>
    )
  }

  const instance = Object.assign({
    state: {},
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
    onUser: (info, token) => {
      dispatch(setUser(info, token))
    }

  }
}

const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(auth)

export default Auth
