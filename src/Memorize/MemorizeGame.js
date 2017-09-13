import React from 'react'
import MemorizeWordInput from './MemorizeWordInput'
import keyIndex from 'react-key-index'

function MemorizeGame (props) {
  const instance = Object.assign({
    props,
    state: {
      difficulty: 8
    },
    render,
    componentDidUpdate: function () {
            // document.getElementsByTagName("INPUT")[0].focus()
    }
  }, React.Component.prototype)
  function eachWord (words) {
    let wordsArray = words.split(/\t|\n|\r|\ /g)
    let arr = keyIndex(wordsArray, 1)
    return arr.map(arr => {
      let n = (Math.random() * Number(instance.state.difficulty))
      if (n < 5) {
        return <MemorizeWordInput word={arr.value} key={arr.id} whenValid={whenValid} />
      }
      return <span key={arr.id}>{arr.value}&nbsp;</span>
    })
  }

  function whenValid () {
    try { document.getElementsByTagName('INPUT')[1].focus() } catch (err) {

    }
  }

  function render () {
    const value = instance.props.value
    return (
      <section>
        {eachWord(instance.props.value)}
      </section>
    )
  }

  function handleChange (event) {
    instance
            .props
            .onValueChange(event.target.value)
  }
  return instance
}

export default MemorizeGame
