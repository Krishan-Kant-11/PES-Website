import React, {useState, useEffect, useRef}  from 'react'

//css 
import "../styles/componentsStyles/Carousel.css";

const Carousel = ({ heroClassName, heroSliderImages, heroHeading, heroParagraph }) => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const textRef = useRef(null);

  const len = heroSliderImages.length;  


  //slider effect on hero section 
  useEffect(() => {
      const interval = setInterval(() => {
          const offset = window.scrollY; 
        //   if (offset < 600) 
          setCurrentHeroImage((currentHeroImage+1)%len);
      }, 3000);

      return () => clearInterval(interval);
  }, [currentHeroImage]);
  

  return (
    <>
      <section>
        <div className={heroClassName}>
            <img src={heroSliderImages[currentHeroImage]} alt='heroImg'/>
        </div>
      </section>  
    </>
  )
}

export default Carousel
