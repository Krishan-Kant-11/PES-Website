import React, {useEffect, useState} from 'react';
import "../styles/componentsStyles/Navbar.css"
import { NavLink } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa';

import Logo from '../assets/peslogo.png';

import NavSubLinks from './NavSubLinks';

function Navbar(){
    const [navbarBackground, setNavbarBackground] = useState(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const pos = window.scrollY;
        if (pos > 50) {
          setNavbarBackground(false);
        } else {
          setNavbarBackground(true);
        }
      }     
      
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
    <>
      <div className='nav-div'>
        <nav 
          style={{ 
            "backgroundColor": navbarBackground && !open ? "" : "rgb(255, 102, 0)", 
            "transition": !open && "background-color 0.5s ease-in-out"
          }} 
        >
          <div className='navbar'>
            <div style={{"backgroundColor": open ? "rgb(255, 102, 0)" : ""}} className="navbar-logo">
              <img src={Logo} alt="logo" className="logo" />
              <div className="hamburger-menu" onClick={() => setOpen(!open)}>
                {
                  open ? <FaTimes /> : <FaBars />
                } 
              </div>
            </div>
            
            <ul className="nav-links">
              <li><NavLink to="/home" className="nav-item" activeClassName='active'>Home</NavLink></li>
              <li><NavLink to="/ourteam" className="nav-item" activeClassName='active'>Our Team</NavLink></li>
              <li><NavLink to="/contact" className="nav-item" activeClassName='active'>Contact Us</NavLink></li>
            
              {/* Navsublinks */}
              <NavSubLinks />

              <li><NavLink to="/login" className="nav-item login-button" activeClassName='active'>Login</NavLink></li>
            </ul>

            {/* Mobile Nav */}

            <ul
              style={{left: open ? "0%" : "-100%" }}
              className="mobile-nav-links"
            >
              <li><NavLink to="/home" className="mobile-nav-item" activeClassName='active'>Home</NavLink></li>
              <li><NavLink to="/ourteam" className="mobile-nav-item" activeClassName='active'>Our Team</NavLink></li>
              <li><NavLink to="/contact" className="mobile-nav-item" activeClassName='active'>Contact Us</NavLink></li>
            
              {/* Navsublinks */}
              <NavSubLinks />

              <li><NavLink to="/login" className="mobile-nav-item" activeClassName='active'>Login</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>   
    </>
    )
}

export default Navbar