import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navlinks'>
            <div className='links'>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/myskills">Skills</a>
                <a href="/myeducation">Education</a>
                <a href="/contacts">Contacts</a>
            </div>
    </div>
  )
}

export default Navbar