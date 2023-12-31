import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contact'>Contacts</NavLink>
        <NavLink to='/dept'>Departments</NavLink>
        <NavLink to='/desig'>Designations</NavLink>
        <NavLink to='/lang'>Languages</NavLink>
        <NavLink to='/event'>Events</NavLink>
      </div>
    </>
  )
}

export default Navbar