import React from 'react'
import Async from 'react-promise'
import database from './database'

const infoRef = database
    .ref('info/')
function Header(props) {
    let instance = Object.assign({
        state: {
            info: '',
        },
        props,
        render: () => {
            return (
                <span>{instance.state.info}</span>
            )
        }
    }, React.Component.prototype)


    infoRef.on('value', (snapshot) => {
        instance.setState((prevProps, props) => {
            let info = snapshot.val()
            return {
                info:
                (<header>
                    <h1>
                        {info.title}
                    </h1>
                    {info
                        .tagline
                        .map((i) => <h2 key={i}>{i}</h2>)}
                </header>)

            }
        })


    })
    return instance
}

export default Header
