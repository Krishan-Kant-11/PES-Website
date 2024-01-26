import { useState, useEffect } from "react"
import "../styles/pagesStyles/OtherEventsPage.css"
import Hero from '../components/Hero';
import heroImg from '../assets/hero_image1.jpg';
import Events from "../components/Events"

import request from "../request.js";

function OtherEventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request.get(`${import.meta.env.VITE_API_BASE}/events/list?type=others`)
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        alert("Other events fetched successfully");
        console.log("Other events fetched successfully");
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false)); 
  }, []);

  // if(events.length == 0) return <>Loading</>;
  return (
    <>
      <Hero
        heroSliderImages={[heroImg]}
        heroHeading="Other Events"
      />
      <Events>
        {events.length ? events.map(event => (
          <Events.Tile
            key={event.id}
            title={event.title}
            date={event.date}
            image={event.images}
            description={event.description}
            id={event._id}
          />
        )) : <><br/><br/><h1>No Other Events available...</h1></>}
      </Events>
      {loading && <><br/><br/><h1>Loading ...</h1></>}
    </>
  )
}

export default OtherEventsPage