import "../../styles/pagesStyles/dashboard/ManageEventsPage.css"
import EventDetails from "../../components/EventDetails"
import EventForm from "../../components/EventForm"
import { useEffect, useState } from "react"
import request from "../../request"

export default function ManageEventsPage(){

    const [events, setEvents] = useState(null)
    const fetchEvents = async () => {
      const response = await request.get(`${import.meta.env.VITE_API_BASE}/events/list`)
      const json = await response.json()

      if(response.ok && events != json){
        setEvents(json)
      }

    }
    useEffect(()=>{
      fetchEvents()
    }, [])


    return(
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="events-container">
                <h1>Welcome to Manage Events Page</h1>

                <div className="events">
                    {events && events.map((event)=>(
                        <EventDetails key={event._id} event={event} onDelete={fetchEvents} />
                    ))}
                </div>
                <EventForm onUpdate={fetchEvents} />
            </div>

            
        </div>
    )
} 