import PropTypes from 'prop-types'
import React, { useMemo } from 'react'

const splitByComma = str => str.split(',')

const Header = ({ title, tagline }) => {
  const taglineArray = useMemo(() => splitByComma(tagline), [ tagline ])

  return (

    <header className='page-header'>
      <h1>{title}</h1>
      {tagline && taglineArray.map((x) => <p key={x}>{x}</p>)}
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.arrayOf(PropTypes.string)
}

export default Header
