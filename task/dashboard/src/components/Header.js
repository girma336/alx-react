import React from 'react'
import logo from '../header-logo.jpg';
import './Header.css'
const Header = () => {
  return (
    <div>
      <header className='header'>
        <img src={logo} alt="header logo" />
        <h1>School dashboard</h1>
      </header>
    </div>
  )
}

export default Header