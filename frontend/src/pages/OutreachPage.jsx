import { useState, useEffect } from "react"
import "../styles/pagesStyles/OutreachPage.css"
import Hero from '../components/Hero';
import heroImg from '../assets/hero_image4.jpg';
import Events from "../components/Events"

function OutreachPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/events/list?type=outreach`)
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.log(err));
  }, []);

  if(events.length == 0) return <>Loading</>;
  return (
    <>
      <Hero
        heroSliderImages={[heroImg]}
        heroHeading="Outreach Events"
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

export default OutreachPage