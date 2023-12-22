import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';

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
      <div className="carousel">
        <Carousel>
          {eventDetails.images.map((image, index) => (
            <img src={image} alt={eventDetails.title} />
          ))}
        </Carousel>
      </div>
      <div className="content">
        <h1>{eventDetails.title || 'Title'}</h1>
        <p>{eventDetails.description || 'Description'}</p>
      </div>
    </div>
  )
}

export default Event;