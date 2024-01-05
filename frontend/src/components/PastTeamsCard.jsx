import "../styles/componentsStyles/PastTeamsCard.css"
import mailIcon from "../assets/mail-icon.png"

function PastTeamsCard(props){
    return(
        <div className="PastTeamCard">
            <h4>Governing Body <br></br> {props.year}</h4>
            <a href={props.link}><button className="PastTeamCardButton" type="button">View</button></a>
        </div>
    )
}

export default PastTeamsCard