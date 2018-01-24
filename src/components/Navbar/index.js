import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ title }) => <nav>
  <Link to='/'><i className='fa fa-home' /> Home</Link>
  <p>{title}</p>
</nav>

export default Navbar
