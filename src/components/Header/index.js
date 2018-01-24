import React from 'react'

const Header = ({title, tagline}) =>
  <header className='page-header'>
    <h1>{title}</h1>
    {tagline && tagline.map((i) => <p key={i}>{i}</p>)}
  </header>

export default Header
