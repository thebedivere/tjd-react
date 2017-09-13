import React from 'react'

function MemorizeInput (props) {
  const instance = Object.assign({
    props,
    state: {

    },
    render
  }, React.Component.prototype)

  function render () {
    const value = instance.props.value
    return (
      <section>
        <textarea rows='10' cols='50' value={instance.props.value} onChange={handleChange} />
      </section>
    )
  }

  function handleChange (event) {
    instance.props.onValueChange(event.target.value)
  }
  return instance
}

export default MemorizeInput
