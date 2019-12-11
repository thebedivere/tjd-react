import React, { useCallback } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase/app'

const provider = new firebase.auth.GoogleAuthProvider()

const Auth = ({ auth, children }) => {
  const [user] = useAuthState(firebase.auth())

  const onClick = useCallback(() =>
    firebase.auth().signInWithPopup(provider), [])

  return (
    <main>
      <div>
        {user && !user.email &&
          <button className='auth-button' onClick={onClick}>
      Login with Google
          </button>}
        {user && user.email === 'joshua.aarond@gmail.com' && children}
      </div>
    </main>
  )
}

export default Auth
