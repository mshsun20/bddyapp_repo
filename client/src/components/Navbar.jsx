import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contact'>Contacts</NavLink>
            <NavLink to='/event'>Events</NavLink>
        </div>
    </>
  )
}

export default Navbar