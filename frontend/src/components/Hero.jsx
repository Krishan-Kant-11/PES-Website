import React, {useState, useEffect, useRef}  from 'react'

//css 
import "../styles/componentsStyles/Hero.css";

const Hero = ({ heroClassName, heroSliderImages, heroHeading, heroParagraph }) => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const textRef = useRef(null);

  const len = heroSliderImages.length;  


  //slider effect on hero section 
  useEffect(() => {
      const interval = setInterval(() => {
          const offset = window.scrollY; 
        //   if (offset < 600) 
          setCurrentHeroImage((currentHeroImage+1)%len);
      }, 4000);

      return () => clearInterval(interval);
  }, [currentHeroImage]);
  
  //parallax effect on hero section text
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      
      if (textRef.current) {
        textRef.current.style.transform = `translate(-50%, -${50 + offset * 0.6}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section>
        <div className={heroClassName}>
            <img src={heroSliderImages[currentHeroImage]} alt='heroImg'/>
            <div className='hero-txt' ref={textRef}>
                <h1>{heroHeading}</h1> 
                <p>{heroParagraph}</p> 
            </div>
        </div>
      </section>  
    </>
  )
}

export default Hero