import "../styles/componentsStyles/Events.css"
import request from "../request"

const EventDetails = ({event, onDelete}) => {

    const handleClick = async ()=>{
        const response = await request.get(`${import.meta.env.VITE_API_BASE}/events/delete?id=${event._id}`)
        const json = await response.json()

        if(response.ok){
            alert("Event Deleted!")
            console.log("Event Deleted", json)

            onDelete()
        }

        if(!response.ok){
            console.log(json.error)
        }

    }

    return(
        <div className="event-details">
        <h4>{event.title}</h4>
        <p><strong>Dated: </strong>{event.date}</p>
        <p><strong>Description: </strong>{event.description}</p>
        {/* <img
            src={event.img}
        />  */}
        <p>{event.createdAt}</p>
        <span onClick={handleClick}>Delete</span>
        </div>

        // <div className="EventTile">
        // {/* <img src={image} alt={title} /> */}
        // <div>
        //   <h2>{event.title}</h2>
        //   <hr />
        //   <h3>{event.date}</h3>
        //   {
        //     <p>{event.description}</p>
        //   }
        //   <p>{event.createdAt}</p>
        //   <span onClick={handleClick}>Delete</span>
        //   {/* <button onClick={()=>navigate(`/event/${encodeURIComponent(title.toLowerCase())}`)}>View Details</button> */}
        // </div>
        // </div>

    )
}

export default EventDetails