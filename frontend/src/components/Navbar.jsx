import "../styles/componentsStyles/Navbar.css"
import {Link, NavLink} from "react-router-dom"

function Navbar(){
    return (
    <>
        <nav className="nav">
          <ul className="nav-items">
            <li><NavLink to="/home" activeClassName='active'>Home</NavLink></li>
            <li><NavLink to="/paathshala" activeClassName='active'>Paathshala</NavLink></li>
            <li><NavLink to="/schooloutreach" activeClassName='active'>School Outreach</NavLink></li>
            <li><NavLink to="/kviitropar" activeClassName='active'>KV IIT Ropar</NavLink></li>
            <li><NavLink to="/outreach" activeClassName='active'>Outreach</NavLink></li>
            <li><NavLink to="/celebrations" activeClassName='active'>Festival Celebrations</NavLink></li>
            <li><NavLink to="/competitions" activeClassName='active'>Competitions</NavLink></li>
            <li><NavLink to="/otherevents" activeClassName='active'>Other Events</NavLink></li>
            <li><NavLink to="/ourteam" activeClassName='active'>Our Team</NavLink></li>
            <li><NavLink to="/contact" activeClassName='active'>Contact Us</NavLink></li>
            <li><NavLink to="/donate" activeClassName='active'>Donate</NavLink></li>
            <li><NavLink to="/joinus" activeClassName='active'>Join Us</NavLink></li>
            <li><NavLink to="/login" activeClassName='active'>Login</NavLink></li>

          </ul>
        </nav>
    </>
    )
}

export default Navbar