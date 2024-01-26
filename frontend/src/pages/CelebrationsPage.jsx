import { useState, useEffect } from "react"
import "../styles/pagesStyles/CelebrationsPage.css"
import Hero from '../components/Hero';
import heroImg from '../assets/hero_image3.jpg';
import Events from "../components/Events"

import request from "../request.js";

function CelebrationsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request.get(`${import.meta.env.VITE_API_BASE}/events/list?type=celebrations`)
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        alert("Celebrations events fetched successfully");
        console.log("Celebrations events fetched successfully");
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false)); 
  }, []);

  // if(events.length == 0) return <>Loading</>;
  return (
    <>
    <Hero
      heroSliderImages={[heroImg]}
      heroHeading="Celebrations"
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
        )) : <><br/><br/><h1>No Celebrations Events available...</h1></>}
      </Events>
      {loading && <><br/><br/><h1>Loading ...</h1></>}
    </>
  )
}

export default CelebrationsPage