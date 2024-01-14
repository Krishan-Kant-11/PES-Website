import React, {useState, useEffect, useRef}  from 'react'
import "../styles/componentsStyles/DonateCompo.css";




export default function DonateCompo()
{
    return (
        <div className="container">
       <div className= "dContent">
        <h1 className="dHeading">Your Help is valuable</h1>
        <h3 className="dPara">We know you also envision a better world, where all have access to safe water and living conditions that allow for empowerment and development. By donating to a foundation whose mission </h3>
       </div> 
       <div className="sButton">        <button className="payButton">Donate</button></div>

        </div>
    )
}