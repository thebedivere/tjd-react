import React from 'react'

const Header = (props) => {
  const render = () => {
    const props = instance.props
    return (<header className='page-header'>
      <h1>{props.title}</h1>
      {props.tagline && props.tagline.map((i) => <p key={i}>{i}</p>)}
    </header>
    )
  }
  const instance = Object.assign({
    state: {
      info: ''
    },
    props,
    render
  }, React.Component.prototype)
  return instance
}

export default Header
