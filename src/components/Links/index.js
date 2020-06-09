import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

const Links = props => {
  const links = _.values(props.links, val => val)
  return (
    <ul className='links'>
      {links.map(link => (
        <li key={link.title}>
          <a href={link.url}>
            <i className={link.icon} />
            <p>{link.title}</p>
          </a>
        </li>))}
    </ul>
  )
}

Links.propTypes = {
  links: PropTypes.array
}

export default Links
