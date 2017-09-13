import React from 'react'

function AuthButton (props) {
  const instance = Object.assign({
    props,
    render
  }, React.Component.prototype)

  function render () {
    const props = instance.props
    if (!props.user) {
      return (
        <div>
          <button onClick={props.signin}>Sign in</button>
        </div>
      )
    }
    return (
      <div>
        <button onClick={props.signout}>Sign out</button>
      </div>
    )
  }

  return instance
}

export default AuthButton
