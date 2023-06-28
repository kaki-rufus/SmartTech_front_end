import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.jpeg'
import { useState } from 'react'

const NavBar = () => {

  const [click, setClick] = useState(false)

const handleClick = () => {
  setClick(!click)
}

  return (
    <div className='nav-bar'>
      <img src={logo} className='logo' alt="" />
      <h1 className={click ? 'smta' : 'smt'}>SmartTech</h1>

  
      <div className={click ? 'nv-bara' : 'nv-bar'}>
        <NavLink to="/" className= "active link">Home</NavLink>
        <NavLink to="/about" className='link'>About</NavLink>
        <NavLink to="/shop" className='link'>Shop</NavLink>
        <NavLink to="/members" className='link'>Team</NavLink>
        <NavLink to="/contact" className='link'>Contact</NavLink>
      </div>
      <div className='fas' onClick={handleClick}>
        <i className={click ?'fa fa-times' : 'fa fa-bars'}></i>
      </div>
    </div>
  )
}

export default NavBar