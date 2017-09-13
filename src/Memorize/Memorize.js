import React from 'react'
import MemorizeInput from './MemorizeInput'
import MemorizeGame from './MemorizeGame'

function Memorize (props) {
  const instance = Object.assign({
    props,
    state: {
      value: 'Enter some text'
    },
    render
  }, React.Component.prototype)

  function render () {
    return (
      <main>
        <section>
          <h1>Memorize!</h1>
        </section>
        <section className='game'><MemorizeGame value={instance.state.value} /></section>
        <MemorizeInput value={instance.state.value} onValueChange={onValueChange} />
      </main>
    )
  }
  function onValueChange (value) {
    instance.setState({value})
  }

  return instance
}

export default Memorize
