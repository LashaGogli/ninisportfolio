import React from 'react'
import './HeaderComponent.css';
import logo from "../../pictures/Combined Shape.svg"

export default function HeaderComponent() {
  return (
    <div className='header-container'>
      <img src={logo} alt='logo for header' />
      <div className='right-div-for-header-nav'>
        <nav className='header-nav'>
          <ul>HOME</ul>
          <ul>PORTFOLIO</ul>
          <ul>CONTACT ME</ul>
        </nav>
      </div>
    </div>
  )
}
