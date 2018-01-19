import React from 'react'

const Header = props =>
  <header className='page-header'>
    <h1>{props.title}</h1>
    {props.tagline && props.tagline.map((i) => <p key={i}>{i}</p>)}
  </header>

export default Header
