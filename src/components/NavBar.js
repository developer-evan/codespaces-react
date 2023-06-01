import React, { useState } from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import './NavBar.css';
import SideBar from './SideBar';

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <header className='nav'>
        <FaBars onClick={toggleSidebar} className='menu' />
        <h4>OnStore</h4>
        <FaCartPlus />
      </header>
      {isSidebarOpen && <SideBar />}
    </div>
  );
}

export default NavBar;
