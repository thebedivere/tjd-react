import React from 'react'
import Async from 'react-promise'
import database from './database'
import Blog from './blog/Blog'

const linksRef = database.ref('links/')

function Header(props) {
    let instance = Object.create(React.Component.prototype)

    linksRef.on('value', function (snapshot) {
        instance.setState((prevProps, props) => {
            let links = snapshot.exportVal()

            return {
                links: Object
                    .keys(links)
                    .map((i) => {
                        return <li key={i}>
                            <a href={links[i].url}>
                                <i className={links[i].icon}/>
                            </a>
                            <p>{links[i].title}</p>

                        </li>
                    })
            }
        })
    })
    instance.props = props
    instance.state = {
        links: ''
    }

    instance.render = () => {
        return (
            <main>
                <ul>
                    {instance.state.links}
                </ul>
                <Blog/>
            </main>
        )
    }
    return instance

}

export default Header
