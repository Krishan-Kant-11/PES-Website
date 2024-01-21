import { useState } from "react"

const EventForm = ()=>{
    
    const [title, setTitle] = useState("")
    const [dated, setDated] = useState("")
    const [description, setDescription] = useState("")
    // const [image, setImage] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        const event = {title, dated, description}
        const response = await fetch("http://localhost:3000/events/", {
            method: "post",
            body: JSON.stringify(event),
            headers: {
                "Content-type": "application/json"
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle("")
            setDated("")
            setDescription("")
            // setImage("")
            setError(null)
            alert("New Event Added!")
            console.log("New Event Added!", json)
        }
    }

    // const handleChange= async(e) =>{
    //     let reader = new FileReader()
    //     reader.readAsDataURL(e.target.files[0])
    //     reader.onload = () => {
    //         console.log(reader.result)
    //         setImage(reader.result)
    //     }
    //     reader.onerror = error => {
    //         console.log("Error: ", error)
    //     }
    // }

    // function initiateUpload(e){
    //     document.getElementById('photo').click();
    //   }
    
    //   function handleUpload(e){
    //     let file = e.target.files[0];
    //     try{
    //       let url = URL.createObjectURL(file);
    //       document.getElementById("photo_img").src = url || "https://placehold.co/600x400?text=Upload+your+photo";
    //     }catch(err){
    //       console.log(err);
    //       document.getElementById("photo_img").src = "https://placehold.co/600x400?text=Upload+your+photo";
    //     }
    //   }


    return (
        <form className="create-event" onSubmit={handleSubmit}>
            <h3>Add a new Event</h3>
            <label>Title: </label>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} required />

            <label>Date: </label>
            <input type="date" onChange={(e)=>{setDated(e.target.value)}} value={dated} required />

            <label>Description: </label>
            <input type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description} required />

            {/* <label>Upload Photo: </label>
            <input type="file" onChange={handleChange(e)} value={image} accept="image/png, image/jpeg, image/jpg" required /> 
             */}

            {/* <div className="image">
                <img src="https://placehold.co/600x400?text=Upload+your+photo" onClick={initiateUpload} id="photo_img" />
                <input type="file" name="photo" id="photo" onChange={handleUpload} style={{display:'none'}} required />
            </div> */}

            <button>Add Event</button>
            {error && <div className="error">{error}</div>}
        </form>

    )

}

export default EventForm