import "../styles/componentsStyles/HeroSection.css";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

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
            <RouterLink className="hero-donate-btn" to="/donate">Donate Now</RouterLink>
            <ScrollLink className="hero-rdm-btn" to="about-us" smooth={true} duration={1000} >Read More</ScrollLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
