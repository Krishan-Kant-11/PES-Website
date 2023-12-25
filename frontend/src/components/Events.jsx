import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/componentsStyles/Events.css";

/**
 * A flexible, responsive grid that displays event tiles.
 * @param {{children: React.Component[]}} {children} The children of the Events component. Should be EventTile components.
 * @returns {React.Component} The Events component. A flexible grid that displays event tiles.
 */
function Events({ children }) {
  return (
    <>
      <div className="Events">
        {children}
      </div>
    </>
  );
}

/**
 * A tile that displays event details. May show limited details due to height constraint. 
 * Clicking the "View Details" button will open the complete details on a new page.
 * @param {{title: string, date: string, description: string, image: string}} {title, date, description, image} The event details. 
 * @returns {React.Component} The EventTile component. A tile that displays event details.
 */
function EventTile({ title, date, description, image }) {
  const navigate = useNavigate();
  return (
    <div className="EventTile">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <hr />
        <h3>{date}</h3>
        {
          description? <p>{description}</p> : <></>
        }
        <button onClick={()=>navigate(`/event/${encodeURIComponent(title.toLowerCase())}`)}>View Details</button>
      </div>
    </div>
  );
}

Events.Tile = EventTile;
export default Events;