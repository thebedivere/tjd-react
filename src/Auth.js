import React from 'react'
import AuthButton from './AuthButton'

function Auth(props) {
    const instance = Object.assign({
            props,
            state: {},
            render
        }, React.Component.prototype)

    function render() {
        return (
            <main>
                <section>
                    <AuthButton/>
                </section>
            </main>
        )
    }

    return instance
}

export default Auth