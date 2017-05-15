import React from 'react'
import firebase from 'firebase'

function AuthButton(props) {
    const instance = Object.assign({
        props,
        state: {
            user: firebase
                .auth()
                .currentUser
        },
        render
    }, React.Component.prototype)
    firebase
        .auth()
        .onAuthStateChanged(function (user) {
            if (user) {
                instance.setState({user: user})
            } else {
                instance.setState({user: false})
            }
        })
    function render() {
        if (!instance.state.user) {
            return (
                <div>
                    <p>You are not signed in.</p>
                    <button onClick={signin}>Sign in</button>
                </div>
            )
        }
        return (
            <div>
                <p>You are logged in.</p>
                <button onClick={signout}>Sign out</button>
            </div>
        )
    }

    function signin() {
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
            })
    }

    function signout() {
        firebase
            .auth()
            .signOut()
    }
    return instance
}

export default AuthButton