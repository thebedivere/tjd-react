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
            return (<header>
                {instance.state.info}
            </header>
            )
        }
    }, React.Component.prototype)

    infoRef.on('value', (snapshot) => {
        instance.setState((prevProps, props) => {
            let info = snapshot.val()
            return {
                info:
                (<div>
                    <h1>
                        {info.title}
                    </h1>
                    {info
                        .tagline
                        .map((i) => <p key={i}>{i}</p>)}
                </div>)

            }
        })


    })
    return instance
}

export default Header
