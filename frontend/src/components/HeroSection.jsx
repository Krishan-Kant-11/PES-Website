import "../styles/componentsStyles/HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection(props) {
  return (
    <>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <div className="hero-section-text">
          <h2>{props.heading}</h2>
          <p className="hero-subheading">{props.subheading}</p>
          <p className="hero-para">{props.description}</p>
          <div className="hero-btns">
            <Link className="hero-donate-btn" to="/donate">Donate Now</Link>
            <Link className="hero-rdm-btn" to="/donate">Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
