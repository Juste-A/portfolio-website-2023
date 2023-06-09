import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation () {
  return (
    <>
      <nav className='float-right flex space-x-8 uppercase hover'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/skills'>Skills</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
    </>
  )
}

export default Navigation
