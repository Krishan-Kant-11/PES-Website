import "../styles/pagesStyles/HomePage.css"
import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";
import WeDoCard from "../components/WhatWeDoCard";
import homepage_about_1 from "../assets/home-page-about-1.jpg"
import homepage_about_2 from "../assets/home-page-about-2.jpg"
import homepage_pathshala from "../assets/home-page-our-work-pathshala.jpg"
import homepage_pathshala_2 from "../assets/home-page-our-work-pathshala-2.jpg"
import homepage_outreach from "../assets/home-page-our-work-outreach.jpg"
import homepage_outreach_2 from "../assets/home-page-our-work-outreach-2.jpg"
import homepage_others from "../assets/home-page-our-work-others.jpg"
import homepage_others_2 from "../assets/home-page-our-work-others-2.jpg"

import FooterPES from "../components/Footer";


import Hero from "../components/Hero";

import hero_image1 from "../assets/hero_image1.jpg";
import hero_image2 from "../assets/hero_image2.jpg";
import hero_image3 from "../assets/hero_image3.jpg";
import hero_image4 from "../assets/hero_image4.jpg";
import Navbar from "../components/Navbar";

const heroSliderImages = [
    hero_image1, hero_image2, hero_image3, hero_image4
]; 

import Testimonial from "../components/Testimonial";

function HomePage(){
    return(
        <>
            <Navbar />
            <Hero 
                heroClassName="hero"
                heroSliderImages={heroSliderImages}
                heroHeading="Education for underpriviledged"
                heroParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."    
            />
            <Testimonial />

            <section className="OurWork">
                <h1>WHAT WE DO</h1>
                <div className="OurWork-Content">
                        {/* Make sure the image are in 3:4 ratio */}
                        <WeDoCard 
                            img = {homepage_pathshala_2} 
                            title = "PAATHSHALA"
                            details = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet nemo odio quos accusamus aliquid omnis, quam numquam temporibus, molestiae quasi sed mollitia, voluptas nesciunt sequi obcaecati soluta facere dolorem."
                            link = "/paathshala"
                        />
                        <WeDoCard 
                            img = {homepage_outreach_2} 
                            title = "OUTREACH"
                            details = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet nemo odio quos accusamus aliquid omnis, quam numquam temporibus, molestiae quasi sed mollitia, voluptas nesciunt sequi obcaecati soluta facere dolorem."
                            link = "/outreach"
                        />
                        <WeDoCard 
                            img = {homepage_others_2} 
                            title = "EVENTS"
                            details = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet nemo odio quos accusamus aliquid omnis, quam numquam temporibus, molestiae quasi sed mollitia, voluptas nesciunt sequi obcaecati soluta facere dolorem."
                            link = "/otherevents"
                        />
                </div>
            </section>
            
            <StickyJoinButton />
            <StickyDonateButton />
            <FooterPES />
        </>
    )
}

export default HomePage;