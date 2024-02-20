import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"      alt="Netflix logo" />
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Avatar" />
    </div>
  )
}

export default Navbar