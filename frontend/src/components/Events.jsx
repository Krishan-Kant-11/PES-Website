import React from "react";
import "../styles/componentsStyles/Events.css";

/**
 * A context to manage opening and closing the event details popup.
 */
const EventPopupContext = React.createContext(null);

/**
 * A context to manage opening and closing the event details popup.
 * @param {{children: React.Component[]}} {children} The children of the context provider.
 * @returns {React.Component} The context provider.
 */
function EventPopupContextProvider({ children }) {
  const [eventPopup, setEventPopup] = React.useState({});
  return (
    <EventPopupContext.Provider value={{ eventPopup, setEventPopup }}>
      {children}
    </EventPopupContext.Provider>
  );
}

/**
 * A popup to show complete event details.
 * @returns {React.Component} The event details popup.
 */
function EventPopup() {
  const { eventPopup, setEventPopup } = React.useContext(EventPopupContext);
  if(eventPopup.title == undefined) return <></>;
  return (
    <div className="EventPopupContainer">
      <div className="EventPopup">
        <img src={eventPopup.image} alt={eventPopup.title} />
        <div>
          <h2>{eventPopup.title}</h2>
          <hr />
          <h3>{eventPopup.date}</h3>
          <p>{eventPopup.description}</p>
        </div>
        <button onClick={() => setEventPopup({})}>X</button>
      </div>
    </div>
  );
}

/**
 * A flexible, responsive grid that displays event tiles.
 * @param {{children: React.Component[]}} {children} The children of the Events component. Should be EventTile components.
 * @returns {React.Component} The Events component. A flexible grid that displays event tiles.
 */
function Events({ children }) {
  return (
    <EventPopupContextProvider>
      <div className="Events">
        {children}
      </div>
      <EventPopup />
    </EventPopupContextProvider>
  );
}

/**
 * A tile that displays event details. May show limited details due to height constraint. 
 * Clicking the "View Details" button will open the EventPopup component.
 * @param {{title: string, date: string, description: string, image: string}} {title, date, description, image} The event details. 
 * @returns {React.Component} The EventTile component. A tile that displays event details.
 */
function EventTile({ title, date, description, image }) {
  const { setEventPopup } = React.useContext(EventPopupContext);
  return (
    <div className="EventTile">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <hr />
        <h3>{date}</h3>
        <p>{description}</p>
        <button onClick={()=>setEventPopup({title, date, description, image})}>View Details</button>
      </div>
    </div>
  );
}

Events.Tile = EventTile;
export default Events;