import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/pagesStyles/Event.css"

function Event() {
  const { eventid } = useParams();
  const [eventDetails, setEventDetails] = useState({});
  useEffect(() => {
    console.log(`${import.meta.env.VITE_API_BASE}/events/details?eventid=${eventid}`)
    fetch(`${import.meta.env.VITE_API_BASE}/events/details?eventid=${eventid}`)
      .then(res => res.json())
      .then(data => setEventDetails(data))
      .catch(err => console.log(err));
  }, [eventid]);
  
  if(eventDetails.title == undefined) return <>Loading</>;
  return (
    <div className="event">
      <Hero 
        heroHeading={eventDetails.title || 'Title'}
        heroSliderImages={eventDetails.images}
      />
      <div className="content">
        <p style={{marginBottom:'10px'}}>{eventDetails.description || 'Description'}</p>
        <p style={{marginBottom:'10px'}}>{eventDetails.description || 'Description'}</p>
        <p style={{marginBottom:'10px'}}>{eventDetails.description || 'Description'}</p>
        <p style={{marginBottom:'10px'}}>{eventDetails.description || 'Description'}</p>
        <p style={{marginBottom:'10px'}}>{eventDetails.description || 'Description'}</p>
      </div>
    </div>
  )
}

export default Event;