import React, { useState } from 'react';
import './SideMenu.css';

function SideMenu({ onValueChange }) {  // Destructure the prop
  const [isOpen, setIsOpen] = useState(false); // State to track if the sidenav is open

  const toggleNav = () => {
    setIsOpen(!isOpen); // Toggle the state between true and false
  };

  // Handle menu item click
  const menuClick = (value) => {
    onValueChange(value);  // Pass the value back to the parent
  };

  return (
    <>
      <div id="mySidenav" className={`sidenav ${isOpen ? 'sidenav-open' : ''}`}>
        <a href="#" onClick={() => menuClick(1)}>Projects</a>
        <a href="#" onClick={() => menuClick(2)}>About</a>
        <a href="#" onClick={() => menuClick(3)}>Services</a>
        <a href="#" onClick={() => menuClick(4)}>Contact</a>
        <a href="#" onClick={() => menuClick(5)}>CV</a>


      </div>

      <div id="main" className={isOpen ? 'sidenav-open' : ''}>
        <button className="openbtn" onClick={toggleNav}>
          {isOpen ? (
            <span>&times;</span> // Close icon when menu is open
          ) : (
            <span>&#9776;</span> // Hamburger icon when menu is closed
          )}
        </button>
      </div>
    </>
  );
}

export default SideMenu;
