import { useState, useEffect } from "react"
import "../styles/pagesStyles/OtherEventsPage.css"
import Hero from '../components/Hero';
import heroImg from '../assets/hero_image1.jpg';
import Events from "../components/Events"

function OtherEventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/events/list?type=other`)
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.log(err));
  }, []);

  if(events.length == 0) return <>Loading</>;
  return (
    <>
      <Hero
        heroSliderImages={[heroImg]}
        heroHeading="Other Events"
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

export default OtherEventsPage