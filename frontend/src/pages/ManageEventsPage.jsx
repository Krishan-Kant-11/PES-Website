import "../styles/pagesStyles/ManageEventsPage.css"
import EventDetails from "../components/EventDetails"
import EventForm from "../components/EventForm"
import { useEffect, useState } from "react"

export default function ManageEventsPage(){

    const [events, setEvents] = useState(null)

    useEffect(()=>{
        const fetchEvents = async () => {
            const response = await fetch("http://localhost:3000/events/")
            const json = await response.json()

            if(response.ok){
                setEvents(json)
            }

        }

        fetchEvents()
    }, [events])


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
                        <EventDetails key={event._id} event={event} />
                    ))}
                </div>
                <EventForm />
            </div>

            
        </div>
    )
} 