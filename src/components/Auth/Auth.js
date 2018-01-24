import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

const Auth = ({ firebase, auth, children }) => <main>
  <div>
    {(isLoaded(auth) && isEmpty(auth)) && <button className='auth-button' onClick={() => firebase.login({ provider: 'google', type: 'popup' })}>
      Login with Google
    </button>}
    {(isLoaded(auth) && !isEmpty(auth) && auth.email === 'joshua.aarond@gmail.com') && children}
  </div>
</main>

export default compose(
  firebaseConnect(),
  connect(({firebase: { auth }}) => ({auth}))
)(Auth)
