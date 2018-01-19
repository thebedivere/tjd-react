import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

const Auth = ({ firebase, auth, children }) => <main>
  <div>
    {!auth && <button onClick={() => firebase.login({ provider: 'google', type: 'popup' })}>
      Login with Google
    </button>}
    {auth && children}
  </div>
</main>

export default compose(
  firebaseConnect(),
  connect(({firebase: { auth }}) => ({auth}))
)(Auth)

//   firebase
//     .auth()
//     .onAuthStateChanged(function (user) {
//       if (user) {
//         instance.setState({ user: user })
//       } else {
//         instance.setState({ user: false })
//       }
//     })

//   function signout () {
//     firebase
//       .auth()
//       .signOut()

//     localStorage.clear('user')
//     localStorage.clear('token')
//     instance.props.onUser({}, {})
//   }

//   const componentDidMount = () => {
//     const user = JSON.parse(localStorage.getItem('user'))
//     const token = localStorage.getItem('token')
//     instance.props.onUser(user, token)
//   }

//   const render = () => {
//     const props = instance.props
//     return (

//     )
//   }

//   const instance = Object.assign({
//     state: {},
//     render,
//     componentDidMount
//   }, React.Component.prototype)

//   return instance
// }

// export default Auth
