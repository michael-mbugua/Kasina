import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navlinks'>
            <div className='links'>
                <li><a href="/"></a>Home</li>
                <li><a href="/about">About</a></li>
                <li><a href="/myskills">Skills</a></li>
                <li><a href="/myeducation">Education</a></li>
                <li><a href="/contact"></a>Contacts</li>
            </div>
    </div>
  )
}

export default Navbar