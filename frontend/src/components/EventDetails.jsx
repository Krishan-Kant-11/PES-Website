import "../styles/componentsStyles/Events.css"

const EventDetails = ({event}) => {

    const handleClick = async ()=>{
        const response = await fetch("http://localhost:3000/events/" + event._id, {
            method: 'delete'
        })
        const json = await response.json()

        if(response.ok){
            alert("Event Deleted!")
            console.log("Event Deleted", json)
        }

        if(!response.ok){
            console.log(json.error)
        }

    }

    return(
        <div className="event-details">
        <h4>{event.title}</h4>
        <p><strong>Dated: </strong>{event.dated}</p>
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