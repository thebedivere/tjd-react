import React from 'react'
import Header from './Header'
import Main from './Main'

function App(props) {

  return {
    render() {
      return (<span><Header/>
      <Main/></span>)
    }
  }
}

export default App
