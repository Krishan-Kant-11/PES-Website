import "../styles/componentsStyles/TeamsCard.css";
import mailIcon from "../assets/mail-icon.png";

function TeamsCard(props) {
  return (
    <div className="Card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <h4>{props.designation}</h4>
      <div className="Card-info">
        <img src={mailIcon} />
        <p>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </p>
      </div>
    </div>
  );
}

export default TeamsCard;
