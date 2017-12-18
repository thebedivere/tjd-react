import React from 'react'
import _ from 'underscore'

const Links = props => {
    const links = _.values(props.links, val => val)
    return (
      <ul className='links'>
        {
          links.map(link => (
            <li key={link.title}>
              <a href={link.url}><i className={link.icon} /></a>
              <p>{link.title}</p>
            </li>
          ))
        }
      </ul>
    )
}

export default Links

        //   Object.keys(props.links).map((i) => (

        //     <a href={props.links[i].url}>
        //       <i className={props.links[i].icon} />
        //     </a>
        //     <p>{props.links[i].title}</p>
        //   </li>
        // ))}
