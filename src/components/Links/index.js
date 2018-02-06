import React from 'react'
import _ from 'lodash'

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
        </li>))
      }
    </ul>
  )
}

export default Links
