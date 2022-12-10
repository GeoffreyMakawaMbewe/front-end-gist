import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to = '/'>Home</Link>
      <Link to = '/services'>Services</Link>
      <Link to = '/products'>products</Link>
      <Link to = '/about'>About</Link>
      <Link to= '/login'>LogIn</Link>

    </nav>
  )
}

export default NavBar
