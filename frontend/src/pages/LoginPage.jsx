import React from "react";
import { useNavigate } from 'react-router-dom';
import PageHeader from "../components/PageHeader";
import headerImg from '../assets/hero_image3.jpg';
import logoImg from '../assets/peslogo.png';
import "../styles/pagesStyles/AuthPage.css";

function LoginPage() {
  const navigate = useNavigate();

  function handleForm(e){
    e.preventDefault();
    e.target.value = "Loading..."
    let form = document.getElementById("login_form");
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
      e.target.value = "Login"
      return;
    }
    // fetch(`http://localhost:5000/auth/login`, {
    fetch(`http://172.30.8.130:5000/auth/login`, {  
      method: 'POST',
      body: formData,
    }).then(res => {
      if(res.status === 200){
        res.json().then(data => {
          alert("Login Successful!")
          localStorage.setItem('token', data.token);
          navigate('/dashboard');
        });
      }else if(res.status === 404){
        alert("No user found with the given email address.");
      }else if(res.status === 401){
        alert("Incorrect password!");
      }else{
        alert("Something went wrong! Please try again later.");
      }
      e.target.value = "Login"
    }).catch(err => {
      console.log(err);
      alert("Something went wrong! Please check your internet connection.");
      e.target.value = "Login"
    });
  }
  return (
    <div>
      <PageHeader
        title="Login to your account"
        image={headerImg}
      />
      <form id="login_form">
        <div className="form_container">
          <div className="image">
            <img src={logoImg} alt="Pehchaan Ek Safar" />
          </div>
          <div className="fields">
            <input type="text" name="email" placeholder="Enter your Email" required />
            <input type="password" name="password" placeholder="Enter your Password" required />
            <input type="submit" value="Login" onClick={handleForm} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;