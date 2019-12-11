import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <div className='not-found'>
    <h1>404</h1>
    <h2>This page doesn't exist</h2>
    <img
      src='https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif'
      alt='not-found'
    />
    <Link to='/'>Return home</Link>
  </div>
)

export default NotFoundPage
