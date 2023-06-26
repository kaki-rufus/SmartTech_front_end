import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='nav-bar'>
      <h1>Logo</h1>
      <div className='nv-bar'>
        <NavLink to="/" className= "active link">Home</NavLink>
        <NavLink to="/about" className='link'>About</NavLink>
        <NavLink to="/shop" className='link'>Shop</NavLink>
        <NavLink to="/members" className='link'>Members</NavLink>
        <NavLink to="/contact" className='link'>Contact</NavLink>
      </div>
    </div>
  )
}

export default NavBar