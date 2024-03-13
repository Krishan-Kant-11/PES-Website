import "../styles/componentsStyles/WhatWeDoCard.css"
import { Link } from "react-router-dom";

const BASE_URL = "https://www.iitrpr.ac.in/pehchaanes";

function WeDoCard(props){
    return(
        <div className="WeDoCard">
            <img src= {`${BASE_URL}${props.img}`} className="WeDoCard-img"></img> {/* Make sure image is in 3:4 ratio*/}
            <div className="WeDoCard-header">
                <h1>{props.title}</h1>
                <Link to={props.link}><button className="WeDoCard-button" type="button">Know More</button></Link>
            </div>
            <p className="WeDoCard-details">{props.details}</p>
        </div>
    )
}

export default WeDoCard;
