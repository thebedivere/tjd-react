import React from 'react'

function MemorizeWordInput (props) {
  const instance = Object.assign({
    props,
    state: {
      isValid: false,
      word: ''
    },
    render
  }, React.Component.prototype)

  function render () {
    const value = instance.props.value
    if (instance.state.isValid !== true) {
      return (<input value={instance.state.word} onChange={handleChange} />)
    }

    instance.props.whenValid()
    return (
      <span>{instance.props.word}&nbsp;</span>
    )
  }

  function handleChange (event) {
    instance.setState({word: event.target.value.toLowerCase(), isValid: event.target.value.toLowerCase() === instance.props.word.toLowerCase()})
  }
  return instance
}

export default MemorizeWordInput
