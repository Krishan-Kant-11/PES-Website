import "../styles/componentsStyles/DonateCompo.css";
import { Link } from "react-router-dom";

export default function DonateCompo() {
  return (
    <div className="container">
      <div className="dContent">
        <h1 className="dHeading">Your Help is valuable</h1>
        <p className="dPara">
          We know you also envision a better world, where all have access to
          safe water and living conditions that allow for empowerment and
          development. By donating to a foundation whose mission{" "}
        </p>
      </div>
      <div className="sButton">
        <Link to="/donate" className="payButton">Donate</Link>
      </div>
    </div>
  );
}
