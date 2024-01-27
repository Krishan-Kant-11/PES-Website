import "../../styles/pagesStyles/dashboard/ManageEventsPage.css"
import EventDetails from "../../components/EventDetails"
import EventForm from "../../components/EventForm"
import { useEffect, useState } from "react"
import request from "../../request"

export default function ManageEventsPage(){

    const [events, setEvents] = useState(null)
    const [loading, setLoading] = useState(false);

    const fetchEvents = async () => {
      setLoading(true);
      const response = await request.get(`${import.meta.env.VITE_API_BASE}/events/list`)
      const json = await response.json()

      if(response.ok && events != json){
        setEvents(json)
        alert("Events fetched successfully");
      } else {
        alert("Error fetching events, Please try again later.");
      }

      setLoading(false);
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
                {loading && <h1 style={{ color: "orange" }}>Loading Events ...</h1>}
                <h1>Welcome to Manage Events Page</h1>
                <div className="events">
                    {events && events.map((event, index)=>(
                        <>
                        <EventDetails key={event._id} event={event} onDelete={fetchEvents} />
                        <hr key={index} style={{ height: '10px' }}/>
                        </>
                    ))}
                    
                </div>
                <EventForm onUpdate={fetchEvents} />
            </div>

            
        </div>
    )
} 