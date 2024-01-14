import React from "react";
import Hero from "../components/Hero";
import heroImg from '../assets/hero_image3.jpg';
import "../styles/pagesStyles/AuthPage.css";


function initiateUpload(e){
  document.getElementById('photo').click();
}

function handleUpload(e){
  let file = e.target.files[0];
  try{
    let url = URL.createObjectURL(file);
    document.getElementById("photo_img").src = url || "https://placehold.co/600x400?text=Upload+your+photo";
  }catch(err){
    console.log(err);
    document.getElementById("photo_img").src = "https://placehold.co/600x400?text=Upload+your+photo";
  }
}
function handleForm(e){
  e.preventDefault();
  e.target.value = "Loading..."
  let form = document.getElementById("register_form");
  let formData = new FormData(form);
  // check if all required fields are filled
  let allFilled = true;
  for(let i=0; i<form.length; i++){
    if(form[i].required && form[i].value === ""){
      allFilled = false;
      break;
    }
  }
  if(!allFilled){
    alert("Please fill all the required fields!");
    return;
  }
  fetch(`${import.meta.env.VITE_API_BASE}/auth/signup`, {
    method: 'POST',
    body: formData,
  }).then(res => {
    if(res.status === 200){
      alert("Signup Successful! Please wait for admin approval.")
    }else{
      alert("Something went wrong! Please try again later.");
    }
  }).catch(err => {
    console.log(err);
    alert("Something went wrong! Please check your internet connection.");
  });
}

function RegisterPage() {
  return (
    <div>
      <Hero
        heroSliderImages={[heroImg]}
        heroHeading="Register to be a volunteer"
      />
      <form id="register_form">
        <div className="form_container">
          <div className="image">
            <img src="https://placehold.co/600x400?text=Upload+your+photo" onClick={initiateUpload} id="photo_img" />
            <input type="file" name="photo" id="photo" onChange={handleUpload} style={{display:'none'}} required />
          </div>
          <div className="fields">
            <input type="text" name="name" placeholder="Enter your Name" required />
            <input type="text" name="email" placeholder="Enter your Institute Email" required />
            <select name="branch" id="branch" placeholder="Select your Branch" required>
              <option value="" disabled={true} selected={true}>Select Your Branch</option>
              <option value="AI">Artificial Intelligence and Data Engineering</option>
              <option value="CH">Chemical Engineering</option>
              <option value="CE">Civil Engineering</option>
              <option value="CS">Computer Science and Engineering</option>
              <option value="EE">Electrical Engineering</option>
              <option value="EP">Engineering Physics</option>
              <option value="MC">Mathematics and Computing</option>
              <option value="ME">Mechanical Engineering</option>
              <option value="MM">Metallurgical and Materials Engineering</option>
            </select>
            <select name="team" id="team" placeholder="Select your Team" required>
              <option value="" disabled={true} selected={true}>Select Your Team</option>
              <option value="design">Design</option>
              <option value="events">Events</option>
              <option value="finance">Finance</option>
              <option value="media">Media</option>
              <option value="outreach">Outreach</option>
              <option value="social">Social</option>
              <option value="teaching">Teaching</option>
              <option value="technical">Technical</option>
            </select>
            <input type="submit" value="Register" onClick={handleForm} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;