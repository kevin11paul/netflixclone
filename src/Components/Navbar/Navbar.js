import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"      alt="Netflix logo" />
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Avatar" />
    </div>
  )
}

export default Navbar