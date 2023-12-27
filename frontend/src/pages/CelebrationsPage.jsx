import { useState, useEffect } from "react"
import "../styles/pagesStyles/CelebrationsPage.css"
import Hero from '../components/Hero';
import heroImg from '../assets/hero_image3.jpg';
import Events from "../components/Events"

function CelebrationsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/events/list?type=celebrations`)
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.log(err));
  }, []);

  if(events.length == 0) return <>Loading</>;
  return (
    <>
    <Hero
      heroSliderImages={[heroImg]}
      heroHeading="Celebrations"
    />
      <Events>
        {events.map(event => (
          <Events.Tile
            key={event.id}
            title={event.title}
            date={event.date}
            image={event.image}
          />
        ))}
      </Events>
    </>
  )
}

export default CelebrationsPage