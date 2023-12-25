import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


// import { links } from "./LinksData";

//css
import "../styles/componentsStyles/Navbar.css"

const links = [
    {
      name: "Projects",
      submenu: true,
      sublinks: [
        {
          Head: "Paathshala",
          Link: "/paathshala"
        },
        {
          Head: "School Outreach",
          Link: "/schooloutreach"
        },
        {
          Head: "KV IIT Ropar",
          Link: "/kviitropar"
        },
      ],
    },
    {
      name: "Events",
      submenu: true,
      sublinks: [
        {
          Head: "Outreach",
          Link: "/outreach"
        },
        {
          Head: "Festival Celebrations",
          Link: "/celebrations"
        },
        {
          Head: "Competitions",
          Link: "/competitions"
        },
  
        {
          Head: "Other Events",
          Link: "/otherevents"
        }
      ],
    },
    {
      name: "Achievements",
      submenu: true,
      sublinks: [
        {
          Head: "KV IIT Ropar",
          Link: "/kviitropar"
        },
      ],
    },
  ];
  


const NavSubLinks = () => {
    
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return (
    <>
        {links.map((link, index) => (
            <div key={index}>
                <div className="nested-link parent-link">
                    <h1
                        className="nested-link-heading"
                        onClick={() => {
                            heading !== link.name ? setHeading(link.name) : setHeading("");
                            setSubHeading("");
                        }}
                    >
                        {link.name}
                        <span className="nested-link-icon-1">
                            {
                                heading === link.name ? <FaChevronUp /> : <FaChevronDown />
                            }
                        </span>
                
                
                        <span className="nested-link-icon-2 parent-link-icon">
                            <FaChevronDown />
                        </span>
                    </h1>
                
                    {/* sublinks */}
                    <div className="sublink-section child-link">
                        {link.sublinks.map((sublink, index) => (
                            <div key={index} className="sublinks dropdown">
                                <div><NavLink to={sublink.Link} className="sublink-heading">{sublink.Head}</NavLink></div>
                            </div>))  
                        }
                    </div>
                </div>
          
                {/* Mobile menus */}
            
                <div
                    className={`
                        ${heading === link.name ? "medium_hidden" : "hidden"}
                    `}
                >
                
                    {/* sublinks */}
                    {link.sublinks.map((slinks, index) => (
                        <div key={index}>
                            <div>
                                <NavLink
                                    onClick={() =>
                                        subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")
                                    }
                                    to={slinks.Link}
                                    className="mobile-sublink-heading"
                                >
                                    {slinks.Head}
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </>
    );
};

export default NavSubLinks;
