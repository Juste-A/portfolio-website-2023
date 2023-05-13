import React from 'react'
import logo from '../assets/logo.png'
import Navigation from './Navigation'

function Header () {
  return (
    <>
      <div className='bg-transparent fixed w-full'>
        <div className='header-wrapper relative top-6'>
          <div className='flex items-center px-32 py-4'>
            <div className='logo-area w-1/3'>
              <img src={ logo } alt="logo" className='h-16 w-auto'></img>
            </div>
            <div className="w-2/3">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
