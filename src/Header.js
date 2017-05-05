import React from 'react'
import Async from 'react-promise'
import database from './database'

const info = database
    .ref('info/')
    .once('value')
    .then(function (snapshot) {
        return snapshot.val()
    })
function Header(props) {
    return {
        render() {
            return (
                <header>
                    <Async
                        promise={info}
                        then={(val) => <div>
                        <h1>
                            {val.title}
                        </h1>
                        {val
                            .tagline
                            .map((i) => <h2 key={i}>{i}</h2>)}
                    </div>}/>
                </header>
            )
        }
    }
}

export default Header
