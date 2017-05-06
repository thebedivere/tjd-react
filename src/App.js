import React from 'react'
import Header from './Header'
import Main from './Main'

function App(props) {

  return {
    render() {
      return (
        <div>
          <Header />
          <Main />
        </div>)
    }
  }
}

export default App
