import { useState } from "react"
import request from "../request"

const EventForm = ({ onUpdate })=>{
    // const [image, setImage] = useState("")
    const [error, setError] = useState(null)
    const [images, setImages] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        let form = document.getElementById("createEvent");
        let formData = new FormData(form);
        const response = await request.post(`${import.meta.env.VITE_API_BASE}/events/create`, formData)
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }else{
          onUpdate()
        }
    }
    
    function handleImageSelect(e){
      // let file = e.target.files[0];
      let imgs = []
      for(let i=0; i< e.target.files.length; i++){
        console.log(e.target.files[i])
        imgs.push(URL.createObjectURL(e.target.files[i]));
      }
      setImages(imgs)
      // try{
      //   let url = URL.createObjectURL(file);
      //   document.getElementById("photo_img").src = url || "https://placehold.co/600x400?text=Upload+your+photo";
      // }catch(err){
      //   console.log(err);
      //   document.getElementById("photo_img").src = "https://placehold.co/600x400?text=Upload+your+photo";
      // }
    }

    return (
        <form className="create-event" onSubmit={handleSubmit} id="createEvent">
            <h3>Add a new Event</h3>
            <label>Title: </label>
            <input name="title" type="text" required />

            <label>Date: </label>
            <input name="date" type="date" required />

            <label>Description: </label>
            <input name="description" type="text" required />

            <label>Upload Photo: </label>
            <input type="file" name="images" onChange={handleImageSelect} accept="image/jpeg, image/jpg" multiple={true} required />

            {images.map((image, index) => {
              // This is the preview image, we have to set proper css for this
              return <img key={index} src={image} alt="preview" style={{maxWidth:'100px'}} />
            })}

            <button>Add Event</button>
            {error && <div className="error">{error}</div>}
        </form>

    )

}

export default EventForm