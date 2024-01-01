import { useState, useEffect } from "react"
import "../styles/pagesStyles/CompetitionsPage.css"
import Hero from '../components/Hero';
import heroImg from '../assets/hero_image2.jpg';
import Events from "../components/Events"

function CompetitionsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/events/list?type=competitions`)
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.log(err));
  }, []);

  if(events.length == 0) return <>Loading</>;
  return (
    <>
    <Hero
      heroSliderImages={[heroImg]}
      heroHeading="Competitions"
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

export default CompetitionsPage