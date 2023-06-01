import React from 'react'
import './SideBar.css'
import { FaCartPlus, FaHome, FaPersonBooth, FaWordpress } from 'react-icons/fa'

function SideBar() {
  return (
    <div className='sidebar'>
      <h2>OnStore</h2>
      <ul>
        <li><FaHome/> Home</li>
        <li><FaCartPlus/> Cart</li>
        <li><FaPersonBooth/> Profile</li>
        <li> <FaWordpress/> Order History</li>
      </ul>
      <div>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default SideBar
