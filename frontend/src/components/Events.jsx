import React from "react";
import "../styles/componentsStyles/Events.css";

const EventPopupContext = React.createContext(null);
function EventPopupContextProvider({ children }) {
  const [eventPopup, setEventPopup] = React.useState({});
  return (
    <EventPopupContext.Provider value={{ eventPopup, setEventPopup }}>
      {children}
    </EventPopupContext.Provider>
  );
}

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