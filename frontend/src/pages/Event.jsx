import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
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
    <>
      <h1>{eventDetails.title || 'Title'}</h1>
      <p>{eventDetails.description || 'Description'}</p>
    </>
  )
}

export default Event;