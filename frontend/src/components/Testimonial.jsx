
import React, { useEffect, useState } from 'react'

import "../styles/componentsStyles/Testimonial.css";

import hero_image1 from "../assets/hero_image1.jpg"; 
import hero_image2 from "../assets/hero_image2.jpg"; 

import { CSSTransition } from 'react-transition-group';

const testimonials = [
    {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": hero_image1,
        "name": "name",
        "designation": "designation",
    },
    {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": hero_image2,
        "name": "name",
        "designation": "designation",
    }
];

const len = testimonials.length;

import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';


const Testimonial = () => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const indexTimeout = setTimeout(() => {
            setIndex((index+1)%len);
        }, 4000);

        return () => clearTimeout(indexTimeout);
    }, [index]);
    
    return (
    <section className='container'>
        <div className='testimonial'>
            
            <button onClick={() => setIndex((index+1)%len)}><FaChevronLeft className='mid-chevron'/></button>
            <CSSTransition
                in={true} // Always true to trigger enter/exit transitions
                timeout={4000} // Duration of the animation in milliseconds
                classNames='slide' // CSS class prefix for the transition
                key={index} // Unique key to force re-render on index change
            >
            <div className='testimonial-content'>
                <div className='slide'>
                    <img src={testimonials[index].image} alt="image" className='image'/> 
                    <p>{testimonials[index].text}</p>
                    <FaQuoteLeft className='quote-icon'/>
                    <div className='details'>
                        <span className='name'>{testimonials[index].name}</span>
                        <span className='job'>{testimonials[index].designation}</span>
                    </div>
                </div> 
            </div>
            </CSSTransition>
            <button onClick={() => setIndex((index-1+len)%len)}><FaChevronRight className='mid-chevron'/></button>
        </div>
    </section>
  )
}

export default Testimonial