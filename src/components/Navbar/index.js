import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ title }) =>
  <nav>
    <Link to='/'><i className='fa fa-home' /> Home</Link>
    <p>{title}</p>
  </nav>

Navbar.propTypes = {
  title: PropTypes.sting
}

export default Navbar
