import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/pagesStyles/Event.css";

import request from "../request.js";

function Event() {
  const { eventid } = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    console.log(
      `${import.meta.env.VITE_API_BASE}/events/details?eventid=${eventid}`
      );
      request.get(`${import.meta.env.VITE_API_BASE}/events/details?eventid=${eventid}`)
      .then((res) => res.json())
      .then((data) => {
        setEventDetails(data.event);
        console.log('Events fetched successfully');
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, [eventid]);


  const emptyEvent = (obj) => {
     return JSON.stringify(obj) === '{}';
  };
  // if (eventDetails.title == undefined) return <>Loading</>;
  return (
    <>
    {loading && <><h1 style={{color: "orange"}}>Loading Event...</h1></>}
    {!emptyEvent(eventDetails) && <div className="event">
      <Hero
        heroHeading={eventDetails.title || "Title"}
        heroSliderImages={eventDetails.images}
      />
      <div className="content">
        <h1>{eventDetails.title}</h1>
        <p>{eventDetails.description}</p>
        <p>{eventDetails.type}</p>
        <p>{eventDetails.date}</p>
        {
          eventDetails.images.map((image, index) => {
            <img key={index} src={image} alt="event_iamge" style={{ height : '100px' , width: '100px' }} />
          })
        } 
      </div>
    </div>
    }
    </>
  );
}

export default Event;
