import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'> 
        <Link to='/' className='navbar-link'><li > Home</li></Link>
        <Link to='/watchlater' className='navbar-link'><li > Watch Later </li></Link>
    </div>
  )
}

export default Navbar